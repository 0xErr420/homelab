# Use the Nginx image
FROM nginx:stable

# Remove default nginx config file
RUN rm /etc/nginx/conf.d/default.conf

# Replace with our own `nginx.config`
COPY ./config/nginx.conf /etc/nginx/conf.d/