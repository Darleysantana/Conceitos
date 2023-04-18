from flask import Flask, request, jsonify
app = Flask(__name__)

@app.route("/enviar-email-autenticacao", methods=["POST"])
def enviar_email_autenticacao():
    email = request.json["email"]
   
