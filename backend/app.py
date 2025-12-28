from flask import Flask
from flask_cors import CORS
from auth import auth
from config import SECRET_KEY

app = Flask(__name__)
app.secret_key = SECRET_KEY
CORS(app)

app.register_blueprint(auth, url_prefix="/api")

@app.route("/")
def home():
    return "API SIG – Db Services Immobiliers – Authentification OK"

if __name__ == "__main__":
    app.run(debug=True)
