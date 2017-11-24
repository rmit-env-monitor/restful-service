FROM ubuntu:16.04

RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install -y nodejs
RUN apt-get install -y make
RUN apt-get install -y g++
RUN apt-get install -y gcc

# Create directory
RUN mkdir -p /var/rest
WORKDIR /var/app

# Install packages
RUN npm install node-gyp -g
RUN npm install -g npm-check-updates
RUN npm install -g nodemon

# Install app dependencies
COPY . /var/app