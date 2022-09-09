FROM python:3.10

# Set the working directory to app/
WORKDIR /app

# Copy the current directory contents into the container at /app 
ADD . .

# Install the dependencies
RUN pip install --no-cache-dir -r requirements.txt

# run the command to start uWSGI
CMD [ "uwsgi", "flask/wsgi.ini" ]