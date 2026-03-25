import socket
s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
s.connect(('8.8.8.8', 80))
ip = s.getsockname()[0]
s.close()
print(f"Votre adresse IP locale est: {ip}")
print(f"Accédez au site sur votre téléphone: http://{ip}:8000")