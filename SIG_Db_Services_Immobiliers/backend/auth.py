from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
import psycopg2
from config import *

auth = Blueprint("auth", __name__)

def get_db():
    return psycopg2.connect(
        dbname=DB_NAME,
        user=DB_USER,
        password=DB_PASSWORD,
        host=DB_HOST,
        port=DB_PORT
    )

@auth.route("/inscription", methods=["POST"])
def inscription():
    data = request.json
    nom = data["nom"]
    email = data["email"]
    password = generate_password_hash(data["password"])
    role = data.get("role", "agent")

    conn = get_db()
    cur = conn.cursor()
    cur.execute(
        "INSERT INTO utilisateurs (nom, email, password, role) VALUES (%s,%s,%s,%s)",
        (nom, email, password, role)
    )
    conn.commit()
    cur.close()
    conn.close()

    return jsonify({"message": "Inscription réussie"}), 201

@auth.route("/connexion", methods=["POST"])
def connexion():
    data = request.json
    email = data["email"]
    password = data["password"]

    conn = get_db()
    cur = conn.cursor()
    cur.execute(
        "SELECT id, nom, password, role FROM utilisateurs WHERE email=%s",
        (email,)
    )
    user = cur.fetchone()
    cur.close()
    conn.close()

    if user and check_password_hash(user[2], password):
        return jsonify({
            "message": "Connexion réussie",
            "utilisateur": {
                "id": user[0],
                "nom": user[1],
                "role": user[3]
            }
        })

    return jsonify({"erreur": "Email ou mot de passe incorrect"}), 401
