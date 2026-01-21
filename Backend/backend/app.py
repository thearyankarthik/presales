from flask import Flask
from flask_cors import CORS
from controllers.lead_controller import lead_bp

app = Flask(__name__)
CORS(app)

# Register Blueprints
app.register_blueprint(lead_bp, url_prefix='/api')

@app.route('/')
def home():
    return "Lead Creation Backend is Running!"

if __name__ == '__main__':
    app.run(port=5000, debug=True)
