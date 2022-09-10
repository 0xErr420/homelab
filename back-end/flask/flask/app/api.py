from app import app

@app.route("/")
@app.route("/api")
def hello_world():
    return "<h1>Hello from Flask!</h1>"