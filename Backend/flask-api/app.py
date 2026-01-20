from flask import Flask
from flask_cors import CORS

from routes.dashboard_routes import dashboard_bp
from routes.leads_routes import leads_bp

app = Flask(__name__)
CORS(app)  # allow Angular (localhost:4200) to call Flask

app.register_blueprint(dashboard_bp, url_prefix="/api/dashboard")
app.register_blueprint(leads_bp, url_prefix="/api/leads")

if __name__ == "__main__":
    # Use port 5000 to match your existing Angular service (if it uses 5000)
    app.run(host="0.0.0.0", port=5000, debug=True)
