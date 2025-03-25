from flask import Flask, request, jsonify
import os
from flask_cors import CORS
from datetime import datetime,timedelta
app = Flask(__name__)
CORS(app) 
UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route("/upload", methods=["POST"])
def upload_file():
    if "file" not in request.files:
        return jsonify({"error": "No file provided"}), 400

    file = request.files["file"]
    if file.filename == "":
        return jsonify({"error": "No selected file"}), 400

    file.save(os.path.join(UPLOAD_FOLDER, file.filename))
    return jsonify({"message": "File uploaded successfully!", "filename": file.filename}), 200

@app.route("/ai_financial_insights",methods=["POST"])
def ai_financial_insights():
    return jsonify(["message"=>"Hello world"]), 200

if __name__ == "__main__":
    app.run(debug=True)
