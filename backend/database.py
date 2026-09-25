import os

from dotenv import load_dotenv
from pymongo import MongoClient

load_dotenv()

MONGODB_URI = os.getenv("MONGODB_URI")
if not MONGODB_URI:
    raise RuntimeError(
        "MONGODB_URI is not set. Create a .env file in the backend folder "
        "with MONGODB_URI=<your connection string>."
    )

client = MongoClient(MONGODB_URI)
db = client.get_database()
users_collection = db["users"]