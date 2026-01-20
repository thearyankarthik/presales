import json
import os
from flask import Blueprint, jsonify

leads_bp = Blueprint("leads_bp", __name__)

DATA_PATH = os.path.join(os.path.dirname(__file__), "..", "data", "leads.json")

@leads_bp.get("")
def get_leads():
    with open(DATA_PATH, "r", encoding="utf-8") as f:
        data = json.load(f)
    return jsonify(data)
