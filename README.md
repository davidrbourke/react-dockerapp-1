# Docker commands

docker build . -t react-dockerapp-1

docker run -p 8080:80 react-dockerapp-1

docker image ls

docker container ls

docker stop container-name

Using Docker toolbox on Windows 10 Home, URL will be http://192.168.99.100:8080/

# Run the json-server
json-server --watch db.json --port 3001

# Run the frontend
npm start