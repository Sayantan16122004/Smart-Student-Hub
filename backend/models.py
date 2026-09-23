from pydantic import BaseModel, EmailStr


class SignupRequest(BaseModel):
    fullName: str
    email: EmailStr
    password: str
    confirmPassword: str
    role: str


class LoginRequest(BaseModel):
    username: str
    password: str
    role: str


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    role: str
    fullName: str