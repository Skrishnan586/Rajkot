# Use the official NGINX image as the base image
FROM nginx

# Copy the index.html file into the web server's document root
COPY index.html /usr/share/nginx/html
