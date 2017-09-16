FROM node:latest

# Create directory
RUN mkdir -p /var/app
WORKDIR /var/app

RUN apt-get install gcc
RUN npm install nodemon -g
RUN npm install node-gyp -g

# Install app dependencies
COPY package.json /var/app

# Bundle source code
COPY . /var/app