FROM python:3.10

# Set the working directory to app/
WORKDIR /app

# Copy the current directory into the container /app directory
ADD . .

# Install the dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Set working directory to flask/
WORKDIR /app/flask

# Run the command to start uWSGI
CMD [ "uwsgi", "uwsgi.ini" ]
