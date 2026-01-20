from flask import Flask
from flask_cors import CORS

from controllers.dashboard_controller import dashboard_bp
from controllers.leads_controller import leads_bp

app = Flask(__name__)
CORS(app)

# Registering Blueprints from the controllers folder
app.register_blueprint(dashboard_bp, url_prefix="/api/dashboard")
app.register_blueprint(leads_bp, url_prefix="/api/leads")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
