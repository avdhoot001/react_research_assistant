# server/app.py
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token, jwt_required

app = Flask(__name__, static_folder='../build', static_url_path='/')
CORS(app)
bcrypt = Bcrypt(app)
app.config['JWT_SECRET_KEY'] = 'your_jwt_secret_key'
jwt = JWTManager(app)

users = {}  # Temporary storage, replace with a database

@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/api/search')
def search_papers():
    query = request.args.get('query')
    results = [{"title": "Sample Paper 1"}, {"title": "Sample Paper 2"}]
    return jsonify(results)

@app.route('/api/summarize', methods=['POST'])
def summarize_paper():
    data = request.json
    text = data['text']
    summary = "This is a summary of the paper."
    return jsonify(summary)

@app.route('/api/ask', methods=['POST'])
def ask_question():
    data = request.json
    question = data['question']
    answer = "This is the answer to the question."
    return jsonify(answer)

@app.route('/api/latex', methods=['POST'])
def generate_latex():
    data = request.json
    text = data['text']
    latex_code = "\\documentclass{article}\n\\begin{document}\n" + text + "\n\\end{document}"
    return jsonify(latex_code)

@app.route('/api/register', methods=['POST'])
def register():
    data = request.json
    email = data['email']
    password = data['password']
    if email in users:
        return jsonify({"success": False, "message": "User already exists"}), 400
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    users[email] = hashed_password
    return jsonify({"success": True, "message": "User registered successfully"})

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    email = data['email']
    password = data['password']
    if email not in users or not bcrypt.check_password_hash(users[email], password):
        return jsonify({"success": False, "message": "Invalid credentials"}), 401
    access_token = create_access_token(identity=email)
    return jsonify({"success": True, "access_token": access_token})

if __name__ == '__main__':
    app.run(debug=True)
