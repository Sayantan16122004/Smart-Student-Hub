from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from auth import router as auth_router

app = FastAPI(title="Smart Student Hub API")

# NOTE: allow_origins=["*"] together with allow_credentials=True is rejected
# by browsers, so we list explicit dev origins instead (Vite default is 5173,
# CRA default is 3000). Add your deployed frontend URL here too when you host it.
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router, prefix="/api/auth", tags=["auth"])


@app.get("/")
def root():
    return {"status": "ok", "message": "Smart Student Hub API running"}


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=5000,
        reload=True,
        reload_excludes=["venv/*", "**/venv/*"],
    )