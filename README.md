# SCA-FINAL - Listing Project
This is a buy and sell application where users can be able to log in using their google account and check all the available items. They can also create their own listing and have the freedom to edit or delete the listing. A user can see the number of times a listing has been viewsd and they can contact the ownder if they are interested.

**Check _project-setup-deployment.md_ file to do your installations and deployment** 


## Application Overview
This application is built using the following technologies and components:

- Frontend: Angular
- Backend: Node.js with Hapi.js framework
- Database: MySQL
- Authentication: Firebase
- Database Management: MySQL Workbench
- Cloud Deployment: Google Cloud Platform

## Features
- Angular frontend for building dynamic and responsive user interfaces.
- Node.js backend using Hapi.js framework for building scalable and efficient server-side applications.
- MySQL database for storing and retrieving data.
- Firebase authentication for secure user authentication and authorization.
- MySQL Workbench for managing the MySQL database with features like schema design and SQL development.
- Google Cloud Platform for cloud deployment, hosting, and management of the application.
- Cloud-based MySQL database instance created on Google Cloud Platform.

## Setting Up NodeJs and Angular


Clone the project to your device by running 

      $  git clone https://github.com/IvyJeptoo/PROJECT_TITLE


## Requirements

For development, you will only need Node.js and a node global package, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###

Now that we have node installed, we need to set up back-end and front-end 



## Back-end
    
    $ cd BACK
    $ npm install

To run the server 

    $ npm run dev

---



## Front-end
Navigate to the Angular project
    $ cd FRONT
    $ cd buy-and-sell
    $ npm install


To run the server 

    $ npm start

## ANGULAR DOCKER
### Docker file explanation
FROM : Initializes the build stage and sets the base image as node:19-alpine3.15 since its a light weight and fast image

WORKDIR /app : changes the current working directory from / to /app

COPY package*.json ./ : Copies the package.json and add them to the file system of the container at that path

RUN npm install, RUN npm run build, RUN npm install -g serve : execute any command in a new layer on top of the current image and commits the results during build execution.

COPY . . : copy the files from the Docker host to the filesystem of the new image

EXPOSE : Indicates to Docker that the container will have a process listening on the given port or ports (api : 5000, client : 3000)

CMD [ "serve", "-s", "build", "-l", "3000" ] : Excecuted when the container is launched from the newly created image.

### Build Docker Image
Create a docker image
    $ docker build –t <image name> .

### Run Angular Docker Container
After you have successfully finished building the docker image, you can run the corresponding docker container using the previously defined image tag. To launch the angular application, simply execute the following command:

    $ docker run –d –p 4200:4200 angular-frontend

docker run command with the specified options -d -p 4200:4200 is used to run a Docker container in the background (-d option) and map a host port to a container port (-p option).

In this case, the options -p 4200:4200 maps the host port 4200 to the container port 4200. This means that the application running in the container, which is specified by the image angular-frontend, will be accessible at http://localhost:4200 on the host.

### Dockerizing with Nginx

```FROM node:16-alpine AS build
WORKDIR /app

COPY . .
RUN npm install
RUN npm run build
# Serve Application using Nginx Server
FROM nginx:alpine
COPY --from=build /app/dist/buy-and-sell/ /usr/share/nginx/html
EXPOSE 80```

## NODEJS DOCKERIZATION
### Docker file explanation
We are basing our container from alpine
FROM alpine:3.4

Update the OS
RUN apk update && apk upgrade

Add nodejs
RUN apk add nodejs

remove apk cache
RUN rm -rf /var/cache/apk/*

We are instructing the docker engine to copy the entire directory to a folder src within the docker containe
COPY . /src

Install the required dependencies. This will install hapijs.
RUN cd /src; npm install

we are running the hapijs server at 8080. In this line we instruct docker to expose 8080 port to the outside world, so that we can access the server from our host machine.
EXPOSE 8080

we instruct docker to run the server with the command node /src/server.js
CMD ["node", "/src/server.js"]


