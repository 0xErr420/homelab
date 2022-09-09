# Use yhe Nginx image
FROM nginx

# Remove default nginx config file
RUN rm /etc/nginx/conf.d/default.conf

# Replace with our own `nginx.config`
COPY nginx.conf /etc/nginx/conf.d/