# "Anemo.gg" Genshin Impact Planner

Anemo.gg is a Genshin Impact planner that streamlines the process of calculating currency and resource requirements for leveling up Genshin characters.

Anemo.gg delivers a fully functional API database of Genshin information including character abilities, descriptions, and leveling data. Users and 3rd party developers can utilize this API themselves for their own Genshin related apps.

The application is coded in TypeScript, utilizing React and Material UI for the frontend. It interacts with a homemade API built on GraphQL. In the backend, AWS DynamoDB and an S3 bucket handle data storage, while deployment is managed through AWS Amplify."

This project was created with [Create React App](https://github.com/facebook/create-react-app).

## Project Goals

-   Build a polished, production-ready application for limited commerical use.

-   Foster collaboration by providing an open source API for third-party developers.

-   Strengthen skill in TypeScript and React through hands-on development and problem-solving.

-   Dive into the AWS infrastructure and GraphQL, learning these technologies from the ground up to enhance project scalability and efficiency.

-   Have fun on the journey of learning and discovery while enjoying the process of building something meaningful and impactful.

## Available Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

If API calls are unauthorized, modify APIExpirationEpoch, amplify push, modify graphQL queries.
