import os
from datetime import datetime, timedelta

from fastapi import APIRouter, HTTPException
from jose import jwt
from passlib.context import CryptContext

from database import users_collection
from models import SignupRequest, LoginRequest, TokenResponse

router = APIRouter()

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

JWT_SECRET = os.getenv("JWT_SECRET")
JWT_ALGORITHM = "HS256"
JWT_EXPIRE_MINUTES = 60 * 24


def create_token(data: dict) -> str:
    payload = data.copy()
    payload["exp"] = datetime.utcnow() + timedelta(minutes=JWT_EXPIRE_MINUTES)
    return jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALGORITHM)


@router.post("/signup")
def signup(data: SignupRequest):
    if data.password != data.confirmPassword:
        raise HTTPException(status_code=400, detail="Passwords do not match")

    if users_collection.find_one({"email": data.email}):
        raise HTTPException(status_code=400, detail="Email already registered")

    hashed_password = pwd_context.hash(data.password)

    users_collection.insert_one({
        "fullName": data.fullName,
        "email": data.email,
        "password": hashed_password,
        "role": data.role,
    })

    return {"message": "Signup successful"}


@router.post("/login", response_model=TokenResponse)
def login(data: LoginRequest):
    user = users_collection.find_one({
        "$or": [{"email": data.username}, {"fullName": data.username}]
    })

    if not user or not pwd_context.verify(data.password, user["password"]):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    if user["role"] != data.role:
        raise HTTPException(status_code=403, detail="Role mismatch")

    token = create_token({"sub": str(user["_id"]), "role": user["role"]})

    return TokenResponse(
        access_token=token,
        role=user["role"],
        fullName=user["fullName"],
    )