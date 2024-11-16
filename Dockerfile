#Get the base image from docker hub
FROM node:20-alpine

#set the working directory
WORKDIR /app

#copy the package.json file
COPY package*.json ./

# install the dependencies
RUN npm install

# copy the source code  
COPY . .

#EXPOSE the port
EXPOSE 5000

#start the application
CMD [ "npm","start" ]
