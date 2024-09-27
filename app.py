from flask import Flask, render_template
from dotenv import load_dotenv
import os

load_dotenv()  # Load the environment variables from the .env file

api_key = os.getenv('API_KEY')

app = Flask(__name__)

@app.route("/")
def hello_world():
    return render_template('home2.html')

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)



