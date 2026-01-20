import json
import os

DATA_PATH = os.path.join(os.path.dirname(__file__), "..", "data", "leads.json")

def get_leads_data():
    if not os.path.exists(DATA_PATH):
        return []
        
    with open(DATA_PATH, "r", encoding="utf-8") as f:
        data = json.load(f)
    return data
