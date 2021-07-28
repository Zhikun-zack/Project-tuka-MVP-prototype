# Quick start

## For Development Environment
1. Open the Command Prompt (in windows).
2. Move to the appropriate directory: `cd <YOUR_LOCAL_FILEPATH>`.
3. Run: `npm i`.
4. Move to the Backend directory: `cd Backend`.
5. Run: `npm i`.
6. Back to the root directory: `cd ..`
7. Create a file called dev.js in ./Backend/config
    ```
    module.exports = {
        mongoURI: YOUR_MONGODB_URL
        jwtSecret: YOUR SECRETTOKEN FOR USER LOGIN
    };
8. Run: `npm run dev`
9. Open the browser and input: localhost:3000.
10. Explore the page.

## For Production Environment
1. Open the Command Prompt
2. Move to the appropriate directory: `cd <YOUR_LOCAL_FILEPATH>`.
3. Run: `npm i`.
4. Move to the Backend directory: `cd Backend`.
5. Run: `npm i`.
6. Back to the root directory: `cd ..`
7. Create a file called dev.js in ./Backend/config
    ```
    module.exports = {
        mongoURI: YOUR_MONGODB_URL
        jwtSecret: YOUR SECRETTOKEN FOR USER LOGIN
    };
8. Run `npm run build`, it will automatically create static files for production environment in /Backend/build folder
9. Run `npm run server`.
10. Open the browser and input: localhost: 8080
11. Explore the page