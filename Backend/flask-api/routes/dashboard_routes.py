import json
import os
from flask import Blueprint, request, jsonify

dashboard_bp = Blueprint("dashboard_bp", __name__)

DATA_PATH = os.path.join(os.path.dirname(__file__), "..", "data", "dashboard.json")

@dashboard_bp.get("")
def get_dashboard():
    emp_id = request.args.get("emp_id", "EMP001")

    with open(DATA_PATH, "r", encoding="utf-8") as f:
        data = json.load(f)

    # simple mock behavior: return same object but set emp_id from query
    data["emp_id"] = emp_id
    return jsonify(data)
