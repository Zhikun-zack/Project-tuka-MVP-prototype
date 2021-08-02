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

## Deploy on (or update the existing program) AWS EC2 Linux
1. Open AWS EC2 using Putty with security key
2. If no file folder in root path: run `git clone <URL>`
3. If already have the tuka folder:
    1. run `rm -rf <folder name>` remove existing folder
    2. run `git clone <URL>` clone the folder back to AWS
4. Because this program is developed in Windows environment, so in order to deploy on Linux we need to change the code in 'package.json' by:
    1. open 'package.json' file
    2. find  `postbuild:`
    3. change the `move build ./Backend` to `mv build ./Backend` since `move` is the windows code which can not be executed by Linux
5. Do step 2 - 8 in 'For Production Environment'
6. Check if there exist 'build' folder in /Backend path, remove that by running `rm -rf build`
7. run `pm2 start server`
8. open public IP address and you will see the page.