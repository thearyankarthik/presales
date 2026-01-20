from flask import Blueprint, request, jsonify
from services.dashboard_service import get_dashboard_data

dashboard_bp = Blueprint("dashboard_bp", __name__)

@dashboard_bp.get("")
def get_dashboard():
    # Pulling data from the Angular UI (query parameters)
    emp_id = request.args.get("emp_id", "EMP001")
    
    data = get_dashboard_data(emp_id)
    if data is None:
        return jsonify({"error": "Dashboard data not found"}), 404
        
    return jsonify(data)
