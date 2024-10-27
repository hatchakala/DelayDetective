from flask import Flask, request
from flask_cors import CORS, cross_origin
from model import DelayPredictionModel
import matplotlib as plt

app = Flask(__name__)
cors = CORS(app)
# app.config['CORS_HEADERS'] = 'Content-Type'

csv_file_path = 'data/rail_performance_data.csv'  # Path to your CSV file
model = DelayPredictionModel(csv_file_path)

df = model.load_data()

if df is not None:
        X_train, X_test, y_train, y_test = model.preprocess_data(df)
        model.train_model(X_train, y_train)
        model.evaluate_model(X_test, y_test)
        model.save_model('delay_prediction_model.pkl')

        # Get user input for line name (optional)
        line_name = input("Enter the line name (e.g., 'Montclair Boonton Line') or press Enter to skip: ")

        # Get user input for month number (optional)
        month_input = input("Enter the month number (1-12) or press Enter to skip: ")

        # Determine month number; if empty input, set it to None
        month_number = None
        if month_input.strip():
            try:
                month_number = int(month_input)
                if month_number < 1 or month_number > 12:
                    print("Invalid month number. Please enter a number between 1 and 12.")
                    month_number = None  # Set to None if invalid
            except ValueError:
                print("Invalid input. Please enter a number between 1 and 12.")
                month_number = None  # Set to None if conversion fails

        # Predict the delay percentage
        predicted_delay, confidence_interval = model.predict(line=line_name.strip() if line_name.strip() else None, month=month_number)

        # Calculate average trains
        average_trains = model.average_trains(df, model.line_mapping.get(line_name.strip(), None), month_number)

        # Calculate the actual number of delayed trains
        predicted_delayed_trains = (predicted_delay / 100) * average_trains

        if line_name.strip():
            print(f'Predicted Delay % of Trains on Line {line_name}: {round(predicted_delay, 2)}%')
            print(f'Predicted Number of Delayed Trains: {round(predicted_delayed_trains, 0)}')
        else:
            print(f'Predicted Delay % for all lines: {round(predicted_delay, 2)}%')
            print(f'Predicted Number of Delayed Trains across all lines: {round(predicted_delayed_trains, 0)}')
        print(f"Confidence Interval {confidence_interval}")

month_map = { 
    'JANUARY': 1, 'FEBRUARY': 2, 'MARCH': 3, 'APRIL': 4,
    'MAY': 5, 'JUNE': 6, 'JULY': 7, 'AUGUST': 8,
    'SEPTEMBER': 9, 'OCTOBER': 10, 'NOVEMBER': 11, 'DECEMBER': 12
}

@app.route('/api/route')
def get_current_time():

    line_name = request.args.get('line')
    month_number = request.args.get('month')
    month_number = month_number.upper()
    month_number = month_map[month_number]

    print(line_name)
    print(month_number)
    # line_name = request.args.get('line')
    # month_number = request.args.get('month')
    # month_number = month_number.upper()

    predicted_delay, confidence_interval = model.predict(line=line_name.strip() if line_name.strip() else None, month=month_number)

    # Calculate average trains
    average_trains = model.average_trains(df, model.line_mapping.get(line_name.strip(), None), month_number)

    # Calculate the actual number of delayed trains
    predicted_delayed_trains = (predicted_delay / 100) * average_trains

    # resp = Flask.Response("number")
    # resp.headers['Access-Control-Allow-Origin'] = '*'
    # return resp
    return {
            "predicted_delay_all": predicted_delay,
            "predicted_number_all": predicted_delayed_trains,
            "confidenceLow": confidence_interval[0],
            "confidenceHigh":confidence_interval[1]
            }

# @app.route('/api/route')
# def get_values(val):
#     return {"number" : 2}

