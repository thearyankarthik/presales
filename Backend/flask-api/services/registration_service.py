import json
import os

DATA_PATH = os.path.join(os.path.dirname(__file__), "..", "data", "registration.json")

def save_project_data(project_data):
    # Ensure directory exists
    os.makedirs(os.path.dirname(DATA_PATH), exist_ok=True)
    
    # Initialize file if it doesn't exist
    if not os.path.exists(DATA_PATH):
        with open(DATA_PATH, "w", encoding="utf-8") as f:
            json.dump([], f)
            
    # Read existing data
    with open(DATA_PATH, "r", encoding="utf-8") as f:
        projects = json.load(f)
        
    # Add new project
    projects.append(project_data)
    
    # Write back
    with open(DATA_PATH, "w", encoding="utf-8") as f:
        json.dump(projects, f, indent=4)
        
    return True
