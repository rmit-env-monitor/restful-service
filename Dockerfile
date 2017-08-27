FROM node:boron

# Create directory
RUN mkdir -p /var/app
WORKDIR /var/app

RUN apt-get install gcc

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install
RUN npm install nodemon -g
RUN npm install node-gyp -g

# Bundle source code
COPY . /var/app