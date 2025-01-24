# SE_SUM1-WeatherApp
Software Engineering summative 1 weather application

## About

Author: Mikhaela-Paige Early

GitHub Username: Mikhaela-Paige

Web Service: [https://weather-app-86b5.onrender.com/](https://weather-app-86b5.onrender.com/)

The Weather App is an application that allows users to select a main city within the UK or enter coordinates (of up to 4 decimal places) for their own location in order to return an overview of the current weather at the specified location.

### Purpose

The reason for creating this app is so that users can be provided with real-time weather information, including usable figures such as the “feel” of the temperature and not just the exact measurable temperature, which is not provided by simply looking up the weather forecast. This allows for:
- An accurate real-time weather reading
- A summary of the conditions in the user’s current area/destination
- Up to date information not retrieved from estimates as with most weather forecast apps
- More accurate information from which to dress/pack, as 15∘ that feels like 18∘ will require different attire than 15∘ that feels like 10∘.


## User Documentation

Software Requirements:
- Google Chrome

To access the Weather App, navigate to [https://weather-app-86b5.onrender.com/](https://weather-app-86b5.onrender.com/) on a Google Chrome browser.

From the home page, either select a main city from those provided on the dropdown list, or enter your own location by providing your latitude and longitude (up to 4 decimal places). The weather information for this area will then display at the bottom of the page.

From this point, you can either return to the home page by clicking the button displayed in the header, or repeat the previous step to display the weather information for another location.

https://github.com/user-attachments/assets/5e7f6804-a6f4-425a-a8f7-4b7942f10386

## Technical Documentation

### Technical Stack

- HTML
- Javascript
- CSS

### Files used to run the app

- index.js

### User End Links

- Repo Name: SE_SUM1-WeatherApp
- Repo Link: https://github.com/Mikhaela-Paige/SE_SUM1-WeatherApp
- OpenWeather: https://openweathermap.org

### Running the Web Service Locally

#### Node and npm

Ensure that both node and npm are installed by running the following commands in your system terminal/command prompt

```bash
node -v
npm -v
```

If you do not have them installed, follow the instructions on the [docs](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)


#### Working with the repository
Clone the repository locally

```bash
git clone https://github.com/Mikhaela-Paige/SE_SUM1-WeatherApp.git
```

Navigate to the created folder and run the following commands in terminal in order to install the requirements and run the web service

```bash
npm i
nodemon index.js
```
#### Access the API

Navigate to [localhost:3000](https://localhost:3000)

Either select a main city from those provided on the dropdown list, or enter your own location by providing your latitude and longitude (up to 4 decimal places)

### Deployment

The web app is currently depoyed using [Render.com](https://render.com) which is able to host web services in a variety of languages. As this app was created using Node and is hosted in a GitHub repository, there was a fairly simple process of linking the repository, providing the command to install the requirements and then setting the Render project to run the startup command upon initiation.

<img width="1725" alt="Deployment" src="https://github.com/user-attachments/assets/e603d10f-0a03-44ae-948a-050fd204fb90" />

Render.com also provides a CI/CD pipeline for web services hosted on it's platform, allowing for custom configuration deployments and automatically updating web services by running a redeployment when changes are made to the source code. As described by IBM (2024):

> "The continuous integration/continuous delivery (CI/CD) pipeline is an automated DevOps workflow that streamlines the software delivery process.
> 
> A vital characteristic of the CI/CD pipeline is the use of automation to help ensure code quality. As the software changes progress through the pipeline, automated tests identify dependencies and other issues earlier, push code changes to different environments and deliver applications to production environments.
> 
> Here, the role of automation is to perform quality control, assessing everything from performance to application programming interface (API) usage and security. This process helps ensure the changes made by all team members are integrated comprehensively and performed as intended."

The use of continuous integration and delivery for this application enables development efficiency, product quality, and deployment speed, automating processes that would otherwise have been time-consuming and manual. CI/CD also provides a standard structure and seamless updates that would help to enable collaboration if a wider team were to br brought on to develop the project.

![CI:CD Pipeline](https://github.com/user-attachments/assets/0b6b3aa5-9e1d-4615-9551-df2821d24b2b)

The image above shows an example of the Render.com console for the Weather App deployment when a change is detected within the linked GitHub repository.

### Code Implementation

In order to produce the weather app, the following steps were taken:
- I signed up for a free OpenWeather account in order to gain access to their OneCall3.0 API service and linked my API key to the repository
- In index.js, I setup the backend overview API call and ensured that this worked through both postman and console logging
- In views/partials I created a universal header and footer before coding the main webpage within views/index.ejs
- Within index.ejs, I included a dropdown menu with pre-provided coordinates for some of the main cities within the UK (acquired from Google Major Cities summary) as well as input boxes through which users can look up their own coordinates
- Within index.ejs, I used an if else statement to return “No area currently entered if the user has either only just opened the web service or has navigated to the home page, or output the given latitude, longitude, date and overview for the given location if an API call has been made
- The user can then override the current displayed data by entering new coordinates or selecting a new city, or return to the home page by clicking the button in the header

### Coding Practice
In order to adhere to best coding practices, I have maintained human readability within my code by using the camel case (eg. variableName) naming conventions within my JavaScript files and using correct indentations throughout my code blocks. I have also ensured that my files are well structured within the directory, and universal elements are applied correctly, by utilising partials within a views folder that are included within each webpage and including the main.css file within public/styles.

In addition, the code is well commented so that new users and developers can easily correlate the existing code with it's function and understand the processes being undertaken by the app.

<img width="1397" alt="Coding Practice" src="https://github.com/user-attachments/assets/390e3c3e-fa8f-4593-805c-38f0c61ba89e" />

## Project Management

### Task Tracking

To manage my project, I used GitHub's Project Tracker. This allowed me to create a Kanban board for all of my tasks, with one assigned issue per feature. Within each issue, a list of requirements for success (acceptance criteria) were given so that relevant pull requests could be linked and once all aspects were accomplished the ticket could be marked as complete.

<img width="1446" alt="PM Image 1" src="https://github.com/user-attachments/assets/72a0eb5f-92b4-41fd-8d1b-7b03979a18aa" />
<img width="1721" alt="PM Image 2" src="https://github.com/user-attachments/assets/84529b93-212c-4a07-b421-646ceff7aae5" />

Tickets were assigned to either to "documentation", "initial development", "enhancement" or “bug” label according to their purpose, and branches were used to create pull requests named according to their changes and contributor. For example, an initial development ticket completed on the "create-frontend" branch as for the initial setup of the front end, and then tickets addressing enhancements or bugs were completed on the “update-frontend” branch and merged with pull requests titled according to their specific focus. Upon merging, these pull requests were then linked to the tickets under the development section and the ticket closed.

![PM linked request](https://github.com/user-attachments/assets/5b283b8c-df52-41c0-8002-aab931aff86d)

Initially, the project board contained columns for the backlog, ready, in progress and completed tickets, however during development an issue arose with one of the enhancements that meant that it had to be put on hold.

<img width="1439" alt="PM Image 3" src="https://github.com/user-attachments/assets/f31906c4-52ce-409a-98fb-483ead7dc8f9" />
<img width="1536" alt="PM Image 4" src="https://github.com/user-attachments/assets/f4819b39-c2e5-4aca-b6b0-e3bb251b8575" />

As such, an additional column was added in between the in progress and completed sections to house such development tickets that were awaiting another action.

### Agile Development

In order to complete this project, I utilised the agile methodoolgy framework. This involved creating an initial plan and setting up prelimanary tasks that covered set-up, documentation, initial development and some potential extra enhancements. UI designs were also created in Figma prior to any development. Once both of these stages were complete, I began creating the code to the application following the iterative process of developing code, testing and reviewing the code created, adding any additional tasks or required bug fixes to the project tracker, and then returning to once again to development. Once the fundamentals had been completed and the app was operational, the web service was deployed, before returning the the review and develop process once there was a CI/CD pipeline in place to automate change redeployment.

## References

Susnjara, S. and Smalley, I. (2024). What Are CI/CD And The CI/CD Pipeline? | IBM. [online] www.ibm.com. Available at: https://www.ibm.com/think/topics/ci-cd-pipeline (Accessed Jan. 2025).
