# Professional README Generator Starter Code

[How to create a Professional README](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)



By the end of this week, you'll complete your weekly Challenge assignment by creating a generator that dynamically produces a high-quality README file directly from the command line.

In order to succeed in this Challenge, you’ll apply the following skills:

Modularize your code into multiple files

Write your code using ES6+ concepts, such as let, const, and arrow functions

Use npm (Node Package Manager) to initialize a project and install and import Node.js modules

Build an interactive command-line application that processes user input using a third-party Node.js module

Use string literals to dynamically generate markdown from the command line


Getting Started
Here are some guidelines to help you get started:

Create a .gitignore file and include node_modules/ and .DS_Store/ so that your node_modules directory isn't tracked or uploaded to GitHub. Be sure to create your .gitignore file before installing any npm dependencies.

Make sure that your repo includes a package.json with the required dependencies. You can create one by running npm init when you first set up the project, before installing any dependencies.

Include a video of the typical user flow through your application. This includes views of the prompts and the responses after their selection.

Include any other screenshots you deem necessary to help someone who has never been introduced to your application understand the purpose and function of it. This is how you will communicate to potential employers or other developers in the future what you built and why, and to show how it works.




https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide

https://www.npmjs.com/package/inquirer

The application will be invoked by using the following command:

node index.js



AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project

GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README