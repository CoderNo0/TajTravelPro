#!/usr/bin/env python3
"""
Simple HTTP server to serve the static travel booking website
"""

import http.server
import socketserver
import os
import sys
from pathlib import Path

# Configuration
PORT = 5000
DIRECTORY = "public"

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)
    
    def end_headers(self):
        # Add CORS headers for development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

def main():
    # Check if public directory exists
    if not os.path.exists(DIRECTORY):
        print(f"Error: Directory '{DIRECTORY}' not found!")
        print("Please make sure you're running this from the project root directory.")
        sys.exit(1)
    
    # Start server
    with socketserver.TCPServer(("", PORT), CustomHTTPRequestHandler) as httpd:
        print(f"✅ Taj India Tours website is running!")
        print(f"🌐 Open your browser and visit: http://localhost:{PORT}")
        print(f"📁 Serving files from: {os.path.abspath(DIRECTORY)}")
        print(f"🔄 Press Ctrl+C to stop the server")
        print()
        print("📧 Don't forget to configure EmailJS for booking forms!")
        print("   Edit public/js/emailjs-config.js with your EmailJS credentials")
        print()
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n👋 Server stopped. Thank you for using Taj India Tours!")

if __name__ == "__main__":
    main()