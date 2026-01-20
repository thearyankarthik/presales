from flask import Blueprint, jsonify
from services.leads_service import get_leads_data

leads_bp = Blueprint("leads_bp", __name__)

@leads_bp.get("")
def get_leads():
    data = get_leads_data()
    return jsonify(data)
