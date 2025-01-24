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

## UI Design

To create a mock-up of my desired web service, I used Figma to design the initial homepage and the response page. This allowed me to create two pages without the need for any code, and gave me the ability to quickly and easily make alterations to previous aspects of the design as I created new ones and re-thought placements and colours for accessibility reasons. By using a user-friendly, non-code based design prototype, I can easily create a user interface design without the time commitments of coding, the issues that may arise from attempting to alter layouts multiple times to find the best look, and considerations such as colour-blindness can be easily taken into account, with the ability to re-work aspects as many times as is necessary before a final design is agreed upon.

<img width="1045" alt="Figma Image 1" src="https://github.com/user-attachments/assets/2129063f-7805-4462-86fc-03ab72d562d4" />
<img width="1111" alt="Figma Image 2" src="https://github.com/user-attachments/assets/c7e17157-ca21-44f9-b65f-7683b663e3d4" />

As I work from a macbook pro, I created the initial designs in a provided Figma macbook frame. This decision was made as combining Google Chrome with the flexible nature of css alignments means that the web page is able to adjust itself to different screen sizes automatically, and therefore creating the designs specific to my screen size would enable a direct comparision between the published web service and the proposed designs at the end of development.

The final webpages look as follows:

<img width="1115" alt="UI Image 3" src="https://github.com/user-attachments/assets/3718d0e8-b02d-4324-b98e-7ab404a65ffb" />
<img width="1115" alt="UI Image 4" src="https://github.com/user-attachments/assets/56590a09-5025-4d29-b6ce-5e54dbfbd3f1" />

These are fairly accurate to the design proposal and have all of the same key aspects and components, therefore conforming to the proposal to a satisfactory level.

## Testing

### Logic Tests

In order to test the logic of the application, I used varying methods at different stages of development. During the initial stages, I used postman to ensure the my API call was correctly configured and responsive, and to determine which output variables I needed to return in the front end. Once development of the UI began, the logic was tested by running the app through local host, with co-ordinates being submitted via the front end in order and console logs being used to verify each stage of the API call was functioning as expected, or to debug any issues if the front end wasn't displaying data by using the console to determine if the fault was with the returned values or the API call itself. Using the UI for testing also allowed for attributes such as buttons to have their functionailty verified as well as the base function of te service to return weather information.

### Performance and Accesibility Tests

In order to test the accessibilty and UI of the web service, Google Chrome's Lighthouse was used. Lighthouse is a free, open-source tool that anaylyses web pages from the developer console and provides a score against 4 key metrics .
  1. Performance - This metric assigns an overall score based upon
      - First Contentful Paint (FCP): The time at which the first text or image becomes visible to users
      - Largest Contentful Paint (LCP): The time a page takes to load its largest element for users
      - Total Blocking Time (TBT): The amount of time that a page is blocked from reacting to user input, like a mouse click
      - Cumulative Layout Shift (CLS): Measures the layout shifts that occur as users access a page
      - Speed Index (SI): How quickly the content of a page is loaded
  2. Accessibility - Tests how accessible the webpage is for those who use assistive technologies
  3. Best Practices - This tests whether a web page is built using modern web development standards, providing an overall score based upon (Google, 2025):
      - General Best Practices
      - Page Speed
      - Page Security
      - User Experience
      - Use of Depricated Technologies
      - Diagnistic Audits
  4. Search Engine Optimisation (SEO) - This analyses the technical aspects of SEO including how search engines can understand the content, HTTP status codes and document plugins, mobile-friendly changes and the validity of structured data (Google, 2025)

The results of the Lighthouse test for both the home and results pages of the Weather App are shown below:
  
<img width="1126" alt="Lighthouse Image 1" src="https://github.com/user-attachments/assets/13f60805-8fd1-4c94-9d2a-1ea062f2cdaa" />
<img width="1126" alt="Lighthouse Image 2" src="https://github.com/user-attachments/assets/d3b7029b-94cd-4827-b7a0-b3e00c0005cd" />

While the other metrics recieved perfect scores, the SEO score of 90% was a result of the meta description for both pages.

<img width="755" alt="Lighthouse Image SEO Score" src="https://github.com/user-attachments/assets/5ba42a29-f92c-4679-8a92-6029cc4b91a3" />

As the Weather App is not published to Google and is only currently accesible from either localhost or Render.com, having a meta description isn't currently a vital component. However, if the web service were to enter production and be published to the web, including a short summary of the web service in the meta description would be important for search engine results and increasing click-through rates.

### Test Driven Development

During the development of the Weather App, a test file was made to ensure the proper function of the API call running on the backend. The code for this test is displayed below.

<img width="795" alt="test" src="https://github.com/user-attachments/assets/694c870a-38e5-4989-bd33-e47934893461" />

Initially, this was written as a failing test as per the ticket on the project tracker board. Once the failing test was set up, work then began on coding the web app such that the test would no longer fail. The results of this test post-development are shown in the following images:

<img width="861" alt="TDD 2" src="https://github.com/user-attachments/assets/0b8bd573-f5cc-4db0-996f-e809017c073b" />
<img width="931" alt="TDD 3" src="https://github.com/user-attachments/assets/dc3e333e-3329-4da2-9dc0-62f10b3c10d3" />

## References

Susnjara, S. and Smalley, I. (2024). What Are CI/CD And The CI/CD Pipeline? | IBM. [online] www.ibm.com. Available at: https://www.ibm.com/think/topics/ci-cd-pipeline (Accessed Jan. 2025).

Google (2025). Lighthouse. [online] Chrome for Developers. Available at: https://developer.chrome.com/docs/lighthouse (Accessed Jan. 2025).
