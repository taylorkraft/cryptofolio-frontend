This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## CRYPTOFOLIO

An app designed to organize your cryptocurrency portfolio balance

### Launching App

In your terminal:

git clone git@github.com:taylorkraft/cryptofolio-backend.git

- this will download the Ruby on Rails repo that serves the backend of this application

cd into cryptofolio-backend

Run:

rails db:migrate

rails db:seed

rails s

- this will migrate the database, seed the application with some data, and run the rails server

In a seperate terminal:

git clone git@github.com:taylorkraft/cryptofolio-frontend.git

- this will download the React.js frontend that is this repo

cd into cryptofolio-frontend

Run:

npm install

npm start

(or yarn install, yarn start)

- this will install node package manager, and start the frontend server

### Navigation

From the homepage:

- follow the link to "My Portfolios"

From here:

- we can navigate back to the home page
- create a new portfolio
- view our existing portfolios and create trades