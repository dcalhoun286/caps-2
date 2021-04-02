# CAPS -- Implementing Socket.io

- **CAPS Phase 2**: For this lab assignment, I built a system that uses [Socket.io](https://socket.io/) as a server that communicates with two client apps. [Check out Phase 1 by clicking on this link.](https://github.com/dcalhoun286/caps)

## Author: Dar-Ci Calhoun

## Links

- [Pull Request](https://github.com/dcalhoun286/caps-2/pull/1)

## Setup and Installation

1. Create a new repository at GitHub, called `caps-2`
1. Select the "add a README" option
1. Select the "Add a .gitignore" option, and choose Node.js
1. Opt for the MIT license
1. Clone this repository to your local machine: `git clone https://github.com/<YOUR_GITHUB_USERNAME>/caps-2.git`
1. Create a "dev" branch to do your work in: `git checkout -b dev`

## The Code

1. Initialize your app: `npm init`
1. Run `npm install`
1. Create the files and folders required for the application
1. Create the correct content in the files
1. Open three terminal windows either in your code editor to run your application.
  1. In the 1st window, navigate to the `src` directory and run `node hub.js`
  1. In the 2nd window, navigate to the `driver` directory and run `node driver.js`
  1. In the 3rd window, navigate to the `vendor` directory and run `node vendor.js`
  1. At this point, you should now be able to see the server (`hub.js`) interacting with your client apps (`driver.js` and `vendor.js`)
1. Test your application: `npm test`. Once 100% of your tests are passing, you will now be ready to complete a Pull Request.

## Resources and Collaborators

- [Socket.io Docs](https://socket.io/)
