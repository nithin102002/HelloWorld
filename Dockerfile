# Use the official Nginx image as the base image
FROM httpd
WORKDIR /app
# Copy your HTML files into the Nginx default web root directory
COPY . /app
# Expose port 80 for web traffic
EXPOSE 5500
RUN home.html
# Start Nginx when the container runs
CMD  
