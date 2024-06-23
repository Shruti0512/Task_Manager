Step 1: Set Up the Backend

   1.1 Initialize the Node.js Project
	First, create a new directory for your project and initialize a 	Node.js project via command
	    "npm init -y"
   
   1.2 Install Required Packages
	Install the necessary packages: express, mongoose, body-parser, and 	cors via command 
	"npm install express mongoose body-parser cors"
   
   1.3 Create the Server and Database
	These are following files in the project directory:

	server.js
	models/Task.js


Step 2: Set Up the Frontend

   2.1 Initialize the React Project
	Use create-react-app to set up the front-end via command:
	"npx create-react-app client"


   2.2 Create the Components and Routing
	This is the following structure inside the src directory:

	components/
	TaskList.js
	TaskDetail.js
	TaskForm.js
	App.js
	api.js



Step 3: Running the Application

   3.1 Start the Backend Server
	Make sure MongoDB is running and start the server:
	"node server.js"

   3.2 Start the Frontend Development Server
	In another terminal window, start the React development server:
	"npm start"


