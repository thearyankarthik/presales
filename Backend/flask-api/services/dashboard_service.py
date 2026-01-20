import json
import os

DATA_PATH = os.path.join(os.path.dirname(__file__), "..", "data", "dashboard.json")

def get_dashboard_data(emp_id):
    if not os.path.exists(DATA_PATH):
        return None
    
    with open(DATA_PATH, "r", encoding="utf-8") as f:
        data = json.load(f)
    
    # Logic to filter or augment based on emp_id
    data["emp_id"] = emp_id
    return data
