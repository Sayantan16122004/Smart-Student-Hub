import os
from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv

from models import init_db
from auth import auth_bp

# Load environment variables from .env
load_dotenv()

app = Flask(__name__)
CORS(app)  # allow requests from your React frontend (localhost:5173 etc.)

# Connect to MongoDB (sets up app.db used by models.py / auth.py)
init_db(app)

# Register auth routes: /api/auth/signup, /api/auth/login
app.register_blueprint(auth_bp, url_prefix="/api/auth")


@app.route("/")
def health_check():
    return {"status": "ok", "message": "Smart Student Hub API running"}


if __name__ == "__main__":
    port = int(os.getenv("PORT", 5000))
    app.run(debug=True, port=port)