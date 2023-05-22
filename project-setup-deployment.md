After Cloning this project to your device you will need to set up a database for it, and if you would want to deploy you need to install google cloud CLI, let's begin by settingup MySQL.
Also it is important to note that I am using Ubuntu and so the commanda will be for Linux

## SET UP MySQL DATABASE
- Visit the oddicial MySQL website: https://dev.mysql.com/downloads/ and select the appropriate version of MySQL for your operating system.
- Run the installer and follow the instructions to set up
- During the installation process you may be prompted to choose the set up type , config options and set root password for MySQL.
- Complete the Installaton process.
- Alternativery you can run the following commands.
  ```
  sudo apt update
  sudo apt install mysql-server  
  sudo service mysql start
  
  ```
  
  - After we have installed MySQL we need to install an interactivity tool andwe are going to use MySQL work bench to install it:
  ```
  sudo apt update
  sudo apt install mysql-workbench
  mysql-workbench

  ```
  - This is how your workbench will look like after installation
  - ![SQL WORKBENCH](https://github.com/IvyJeptoo/SCA-FINAL/assets/98116399/fa50f8a3-bef7-4b60-8ad0-39f255d258d6)


## SET UP FIREBASE
- Create an firebase account if you don't have one at https://firebase.google.com
- Once logged in click on the create project button
- Follow the configurations of creating a new project and accept the terms then click on create button
- Continue to the project page by clicking on the continue button.
- Click on Authentication on the left side navbar
- Navigate to the sign-in method and select google in the providers, select your email address for the project support email
- Toggle the enable button to enable it.
![firebase](https://github.com/IvyJeptoo/SCA-FINAL/assets/98116399/cf334a54-bdcf-461c-bb41-a30e66154a6b)
- We need to hook angular with firebase, on the project overview click on the web icon, 
- Give the project a name of your choice
![Screenshot from 2023-05-22 23-45-34](https://github.com/IvyJeptoo/SCA-FINAL/assets/98116399/5a47e592-46ed-4f9c-97ad-9b13cfe21afa)

- Click on create button and you will see a generated code for use

![Screenshot from 2023-05-22 23-45-57](https://github.com/IvyJeptoo/SCA-FINAL/assets/98116399/698cafac-4406-4dfd-b065-32353cab5cd3)
- Paste the details in the environment.ts file in Angular
- Now for backend, Navigate to the settings on the firebase console then click on service account.
- Click on generate new service key button
 ![Screenshot from 2023-05-22 23-53-38](https://github.com/IvyJeptoo/SCA-FINAL/assets/98116399/4b807bc2-39a2-451d-b9e3-48c7e71b8e05)
- Copy the contents and replace it with the one in credentials.json file
- Firebase is good to go!


## SET UP GOOGLE CLOUD PLATFORM PROJECT
- Log in to your google cloud platform account and if you don't have you can create one here:https://cloud.google.com/
- Create a new project that we will use to deploy our project, 
- On the portal, create the drop doen that has my new project then select on new project to create a new one.
![new project](https://github.com/IvyJeptoo/SCA-FINAL/assets/98116399/561abc95-85e4-496c-aa15-5a4b77ef8040)
- Provide a project name of your choice and this will create a new project.
 ![naming](https://github.com/IvyJeptoo/SCA-FINAL/assets/98116399/43db8ba8-3ecc-43af-820c-c3c3d384133f)

### Creating MySQL instance inside the Project
- Now that we have created our new project we need to create our database that we will connect with our project.
- Ensure you have navigated to the project we have just created and on the left side bar, click on SQL
![SQL](https://github.com/IvyJeptoo/SCA-FINAL/assets/98116399/9136aa5f-dc50-4afd-af8d-48e835dcef88)
- This will open a new page that has the Cloud SQL so what you need to do is to click on create instance button
![button](https://github.com/IvyJeptoo/SCA-FINAL/assets/98116399/16d1d242-553c-4ba8-8c46-d064ebcae983)
- Since we are using MySQL in this project be sure to click on MySQL on the 'Choose your database engine'
![create sql](https://github.com/IvyJeptoo/SCA-FINAL/assets/98116399/ca1c42e3-34a7-466b-bf27-ec6ceaafbbd5)
- You will need to **Enable API** to proceed.
- Give your database instance a name and a password that we will need later on, select the database version of your choice
- Select a region near you and you can do the other configurations to your preference, finally click on **Create Instance** button.

![details](https://github.com/IvyJeptoo/SCA-FINAL/assets/98116399/1472c566-a2a7-4629-ab81-125161067ca3)
- If you navigate to the just created Instance you will see a public IP address, we will use it to connect to our MySQL workbench we set up earlier and the connection name we will use it on our project locally to link to the database
![overview](https://github.com/IvyJeptoo/SCA-FINAL/assets/98116399/2519326a-4f01-4add-ad39-725f34ecf6fd)

- On the left sidebar above click on connection, we are going to allow our database to communicate witha our databasee.
- Once on the page, navigate to networking and scroll down to **Authorized Networks** then click on _add a network_
- You will need to need to get your IP address by search on the browser : _What is my IP address?_ , copy the address that will be outputted for you.
- On the Authorized network, provide a name for it and paste the just copied IP address to the network input
 ![network](https://github.com/IvyJeptoo/SCA-FINAL/assets/98116399/e98038bb-73d4-4063-9a4c-665cca9259ff)
- Click on the _Done_ button the at the bottom click on _Save button_
- We have successfully added a database instance to our project.

### CONNECTING MySQL WORKBENCH WITH DATABASE INSTANCE ON CLOUD
- Copy the public IP address that is available on the database instance we created.
![IP](https://github.com/IvyJeptoo/SCA-FINAL/assets/98116399/2b2ba1cf-4ba3-4370-a53a-d2b190811831)
- Open the MySQL work bench and click on the plus(+) icon.
![workbench](https://github.com/IvyJeptoo/SCA-FINAL/assets/98116399/5068f627-4e7b-4291-9ccc-ed466622a794)
- You will need to give our connection a name of your choice, and on the host name, paste the IP address you copied earlier. You can leave the username as root the click on Okay to create.
 ![connect](https://github.com/IvyJeptoo/SCA-FINAL/assets/98116399/ae097032-38c8-48aa-858e-af7ec8cf81dd)
- Now click on the new connection we have just created, you can tell by the name.
- This will prompt you to input a password that you created during set up of MySQL.
![login](https://github.com/IvyJeptoo/SCA-FINAL/assets/98116399/7d590793-bf21-44a4-9d58-3a583b34afda)

**Schema Set Up**
- Click on the schema icon at the top left and the input the schema details the click on the first lighting icon that is yellow to implement it.
- ![Schema](https://github.com/IvyJeptoo/SCA-FINAL/assets/98116399/8ca8d4ea-f350-484c-8a88-7f5f5da919e3)
- Now that we have the Schema, we need to put details into the table,
- Double click on the just created schema and on the query page put in the data the click on the thunder icon,
 This will add the data to our database table called listings
 ![database](https://github.com/IvyJeptoo/SCA-FINAL/assets/98116399/4c979ca7-03ab-4f2b-a532-d2010c6a62aa)

**Create User**
- We then to create a user that will user to access our database and we shall user the details to link to our local server
- On the left sidebar, click on _Users and Priviledges_
- The click on _Add Account_ at the bottom
- Provide a _login name_ and a _password_ then _confirm password_
- Click on Apply Button

![setup](https://github.com/IvyJeptoo/SCA-FINAL/assets/98116399/2e348f29-dbad-43dd-ad9e-87cf1b52c502)

**User Schema Priviledges**
- Select on the User we have just created and click on _Schema Priviledges_ 
- At the far right, click on _Add Entry_
- Under Object rights, click on DELETE, INSERT, SELECT, UPDATE 
- Click on the Apply button at the bottom left to implement the changes.
 ![final](https://github.com/IvyJeptoo/SCA-FINAL/assets/98116399/95c179b5-a618-45dc-9529-ee3f0ac00785)
 
 ## CONNECT DATABASE WITH PROJECT
 - On the project, Navigate to BACK directory,
 - In the app.yaml file this this how the structure is: 
```
import mysql from 'mysql'

let connection;

export const db = {
    connect: () => {
        connection = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
            socketPath: process.env.DB_SOCKET
        });
        connection.connect();
    },
    query: (queryString, escapedValues) =>
        new Promise((resolve, reject) => {
            connection.query(queryString, escapedValues, (error, results, fields) => {
                if (error) reject(error);
                resolve({results, fields});
            })
        }),
    end: () => connection.end(),   

}
```

- We need to create each of the actual values in the app.yaml file
DB_USER: is the name we created on the user and priviledges created on the MySQL work bench
DB_PASS: is the password we created for the user on MySQL workbench
DB_NAME: is the name of the MySQL database instance we created on the cloud
DB_SOCKET:  the connection name for our database instance we created on the cloud and the format is : /cloudsql/CONNECTION-NAME . Replace the connection name with actual connection name.

- Also in the app.yaml file, under the beta_settings the cloud_sql_instance is the connection name of the database instance we created earlier
 
 ## INSTALLING GOOGLE CLOUD CLI
 - We need to install the Google Cloud SDK by running this command `curl -O https://dl.google.com/dl/cloudsdk/channels/rapid/downloads/google-cloud-sdk-356.0.0-linux-x86_64.tar.gz`.
 - You can also download the SDK from https://cloud.google.com/sdk/docs/downloads-interactive#linux
 - Extract the archive `tar -xf google-cloud-sdk-356.0.0-linux-x86_64.tar.gz`
 - Move to the extracted directory `cd google-cloud-sdk`
 - Run the installation to set up the SDK `./install.sh`
 - You can either customize setting or go with default.
 - Initialize the SDK `./google-cloud-sdk/bin/gcloud init`
 - Once initialization is complete you can start using the `gcloud` command to interact with google services.


## DEPLOYING THE PROJECT

- Ensure that everything is set for deployment but installing all the dpendancies in the `package.json` file.
- Install babel cli `npm install @babel/cli --save-dev`
- We need to build our project by running `npm run build` to get the transpiled code 
- Once we have our build folder we need we need to deploy our app by running `gcloud app deploy`
- It will ask you of a region of deployment, select yes to continue with deployment
- The deployment process will compelete and you can see from the terminal
![deployment](https://github.com/IvyJeptoo/SCA-FINAL/assets/98116399/a6104106-b915-43f9-a0e7-8824531065b7)
- Copy the link and we are going to put it on our proxyconfig.json file as the target

- Navigate to the root project folder and build the project `ng build`
- Copy the dist folder generated and paste it to the Nodejs root directory
- Install hapi package in NodeJs by running `npm install @hapi/inert` which will be used to server static files.
- Run build command to pick the changes `npm run build`
- Deploy the project by running `gcloud app deploy`
- Once deployment is done you can run `gcloud app browser` to check the just deployed app in the browser!





 






