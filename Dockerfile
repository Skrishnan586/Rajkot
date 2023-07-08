# Use a lightweight web server as the base image
FROM nginx:alpine

# Copy the index.html file into the web server's document root
COPY index.html /usr/share/nginx/html
