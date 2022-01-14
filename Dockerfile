FROM node:14.17.5
ENV NODE_ENV=production
ENV  PORT=3000

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app/
RUN npm install --silent

# Copying source files
COPY . /usr/src/app

# Building app
RUN npm cache clean --force 
RUN npm run build
EXPOSE 3000

# Running the app
CMD "npm" "run" "start"