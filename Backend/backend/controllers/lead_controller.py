from flask import Blueprint, request, jsonify
from services.lead_service import LeadService

lead_bp = Blueprint('lead_bp', __name__)

@lead_bp.route('/leads', methods=['POST'])
def create_lead():
    """
    Endpoint to create a new lead.
    Expected JSON: { "firstName": str, "lastName": str, "phone": str, "email": str }
    """
    try:
        data = request.get_json()
        if not data:
            return jsonify({"error": "Invalid JSON payload"}), 400

        success, message, lead = LeadService.create_lead(data)

        if success:
            return jsonify({"message": message, "lead": lead}), 201
        
        # Determine error type based on message
        if "already exists" in message:
            return jsonify({"error": message}), 409 # Conflict
        else:
            return jsonify({"error": message}), 400 # Bad Request

    except Exception as e:
        return jsonify({"error": str(e)}), 500
