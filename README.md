# ReactJS Web App
This is a web application developed in ReactJS, Bootstrap,JQuery and Google Places where we can list all the users from spring boot api and perform some functionalitios like edit, update, pagination etc.

### Requirements
For development, you only need Node.js installed on your environement. 
Node.js is an environment for developing server-side applications.
React development happens on top of node.js.<br /><br />

#### How to install Node.js :<br />
###### Windows: 
1. Download the windows installer from following link:
https://nodejs.org/en/download/ <br />
The .msi file will be downloaded in your download directory. 
2. Run the installer and follow the command prompt. Accept the default installation setting.
3. Restart your computer because you won't able to run without this step.
4. Test: To make sure you have node and npm type the simple command<br />
node -v: it will show your installed node version.<br />
npm -v: it will show your installed npm version.

### Instruction to start the project:
1. Clone the project through git (url: https://github.com/shuvikash/BSReactApp.git) and navigate to that directory<br />
2. Run Command: npm install <br />
It will only install normal dependency of package.json file.<br />
3. Run Command: npm install --only=dev<br />
It will install all the dev-dependency of package.json file.<br />
4. Now all things are set up <br />
Command to run the server: npm start <br />
       or <br />
Command: npm run start <br /> 
It will start the server on the configured  port(In my case, it is 8080).<br />
5. Assuming, you have started the spring boot server. If not, go to the BSSpringBoot repository and read the README.md file to run the Spring Boot project.<br/>
6. Now, Go to the browser and type: http://localhost:8080/ <br/>
It will show feteched users from API (http://localhost:8086/users).<br />
<br />
**Thank you :+1: for reading this document. I hope this document will help you to understand more about the project.**
