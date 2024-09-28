from flask import Flask, render_template, jsonify
import json
import os

app = Flask(__name__)
DATA_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'data.json')

@app.route("/")
def hello_world():
    return render_template('home2.html')

def load_data():
    if os.path.exists(DATA_FILE):
        with open(DATA_FILE, 'r') as file:
            return json.load(file)
    # with open(DATA_FILE, 'r') as file:
    #     return json.load(file)
    return {"items": [{"tag":"tag"}]}

# Route to get a item by tag
@app.route('/items/<string:tag>', methods=['GET'])
def get_item(tag):
    data = load_data()
    items = data['items']
    print(items)
    item = next((u for u in items if u['tag'] == tag), None)
    if item:
        return jsonify(item)
    return jsonify({'message': 'item not found'}), 404

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)


