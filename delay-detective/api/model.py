import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error
import joblib
import os
import warnings
warnings.filterwarnings("ignore", message="X does not have valid feature names")


class DelayPredictionModel:
    def __init__(self, csv_file_path):
        self.csv_file_path = csv_file_path
        self.model = RandomForestRegressor(n_estimators=300, random_state=None)
        self.line_mapping = {}

    def load_data(self):
        if os.path.exists(self.csv_file_path):
            df = pd.read_csv(self.csv_file_path)
            df.columns = df.columns.str.strip()
            df = df[pd.to_numeric(df['YEAR'], errors='coerce').notna()]
            df['YEAR'] = df['YEAR'].astype(int)
            df['MONTH'] = df['MONTH'].str.strip()
            df['COUNT'] = pd.to_numeric(df['COUNT'], errors='coerce')
            df['TOTAL'] = pd.to_numeric(df['TOTAL'], errors='coerce')
            df['PERCENTAGE'] = pd.to_numeric(df['PERCENTAGE'], errors='coerce')
            df = df.dropna()
            return df
        else:
            print(f"File not found: {self.csv_file_path}")
            return None

    def preprocess_data(self, df):
        df['LINE'] = df['LINE'].fillna('UNKNOWN')
        month_map = { 
            'JANUARY': 1, 'FEBRUARY': 2, 'MARCH': 3, 'APRIL': 4,
            'MAY': 5, 'JUNE': 6, 'JULY': 7, 'AUGUST': 8,
            'SEPTEMBER': 9, 'OCTOBER': 10, 'NOVEMBER': 11, 'DECEMBER': 12
        }
        
        df['MONTH'] = df['MONTH'].str.strip().map(month_map)
        self.line_mapping = {line.strip(): idx for idx, line in enumerate(df['LINE'].unique())}
        df['LINE'] = df['LINE'].str.strip().map(self.line_mapping)
        

        features = df[['YEAR', 'MONTH', 'TOTAL', 'PERCENTAGE', 'LINE']]
        target = 100 - df['PERCENTAGE']
        return train_test_split(features, target, test_size=0.2, random_state=42)

    def train_model(self, X_train, y_train):
        self.model.fit(X_train, y_train)

    def evaluate_model(self, X_test, y_test):
        y_pred = self.model.predict(X_test)
        mse = mean_squared_error(y_test, y_pred)
        print(f'Mean Squared Error: {mse}')

    def save_model(self, model_path):
        joblib.dump(self.model, model_path)

    def load_model(self, model_path):
        self.model = joblib.load(model_path)

    def predict(self, line=None, month=None, num_samples=100):
        df = self.load_data()  # Load the data to ensure we have the most recent data

        if df is None:
            return None  # If the data could not be loaded

        # Prepare the features for prediction
        df['PERCENTAGE'] = pd.to_numeric(df['PERCENTAGE'], errors='coerce')
        df = df.dropna(subset=['PERCENTAGE'])  # Drop rows with NaN in 'PERCENTAGE'
        
        # If no arguments are given
        # Prepare input for prediction using average values across the entire dataset
        average_total = df['TOTAL'].mean()
        average_percentage = df['PERCENTAGE'].mean()

        if month is None:
            month = 1
        if line is None:
            line_index = 0
        else:
            line_index = self.line_mapping.get(line.strip(), None)


        
        # Generate predictions
        predictions = []
        for _ in range(num_samples):
            # Slightly vary the input values to get a range of predictions
            predicted_delay = self.model.predict([[2024, month, average_total * (1 + np.random.normal(0, 0.1)), average_percentage * (1 + np.random.normal(0, 0.1)), line_index]])
            # predicted_delay = self.model.predict([[2024, 1, average_total * (1 + np.random.normal(0, 0.1)), average_percentage * (1 + np.random.normal(0, 0.1)), 0]])
            predictions.append(predicted_delay[0])  # Add the first element of the array
            
        # Calculate mean and standard deviation for confidence interval
        mean_delay = np.mean(predictions)
        std_dev = np.std(predictions)
        confidence_interval = (mean_delay - 1.96 * std_dev, mean_delay + 1.96 * std_dev)  # 95% confidence interval
        return mean_delay, confidence_interval  # Return the predicted mean delay
    
    def average_trains(self, df, line=None, month=None):
            # Start with the full DataFrame
            filtered_data = df.copy()

            # Filter by line if provided
            if line is not None:
                filtered_data = filtered_data[filtered_data['LINE'] == line]

            # Filter by month if provided
            if month is not None:
                filtered_data = filtered_data[filtered_data['MONTH'] == month]

            # Calculate average count
            average_count = filtered_data['TOTAL'].mean()

            # Return the average count, or 0 if there's no data
            return average_count if not pd.isna(average_count) else 0  # Return 0 if no data is available
