from flask import Blueprint, request, jsonify
from services.registration_service import save_project_data

registration_bp = Blueprint("registration_bp", __name__)

@registration_bp.post("")
def register_project():
    data = request.get_json()
    if not data:
        return jsonify({"error": "No data provided"}), 400
        
    # Validation: project_id and project_name are required
    if not data.get("project_id") or not data.get("project_name"):
        return jsonify({"error": "Project ID and Project Name are required"}), 400
        
    success = save_project_data(data)
    if success:
        return jsonify({"message": "Project registered successfully"}), 201
    else:
        return jsonify({"error": "Failed to save project data"}), 500
