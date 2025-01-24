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

Please Note: If the Weather App isn't displaying, refresh the browser until it loads as the Render.com instance may have gone to sleep due to inactivity and need restarting.

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

## Evaluation

If I were to complete this project again, or continue further with development, there are a few changes that I would make:

### Test Driven Development

While a failing test for the backend API was written, and then successfully run post-development, this did not follow true test driven development processes. If I were to restart this project, I would likely include a function such as a temperature converter that can calculate from degrees celsius to fahrenheit, or vice versa, and then use jest to test this. In this manner, I would create a failing test and follow Red, Green, Refactor processes in order to create the test, pass the test, improve the code, and then continue to the next test.

An example of a test that I would create for this temperature converter would be
```
describe('Temperature Converter - Degrees Celsius to Fahrenheit', () => {
  test('Should convert a temperature from degrees celsius to fahrenheit', () => {
    //  arrange
    const x = 17;
    // act
    const result = converter(x, 'C-F');
    // assert
    expect(result).toEqual(62.6);
  });
});
```

Further tests could then be created to test fahrenheit to celsius, differing numbers of decimal places, and invalid inputs. For example,
```
describe('Edge Cases - String', () => {
  test('Should return an error when a string is entered ', () => {
    //  arrange
    const x = 'string';
    // act + assert
    expect(() => converter(x)).toThrow(TypeError('Invalid Argument Type'));
  });
});
```

### Relating Weather Icons

One of the enhancements that I had thought of during the development process was that the icon in the top right corner of the header could be related to the weather conditions in the location that the user enters. The initial enhancement would have been to change the icon to a corresponding one based upon the main weather type, such as replacing the default with
```
<svg xmlns="http://www.w3.org/2000/svg" height="32" fill="currentColor" class="bi bi-sun-fill me-2" viewBox="0 0 16 16">
  <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
</svg> -->
```
for a clear day. The next enhancement would potentially then have been to compare the time zone in the entered location to sunset/sunrise times and potentially take this further to use
```
<svg xmlns="http://www.w3.org/2000/svg" height="32" fill="currentColor" class="bi bi-moon-stars me-2" viewBox="0 0 16 16">
  <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/>
  <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
</svg> -->
```
for a clear night. The same pattern would be used for clouds, snow, drizzle, rain and thunderstorms with the day time icons being filled white and the night time icons being outlines only. Unfortunately, this enhancement had to be put on hold.

<img width="1075" alt="Eval Image 1" src="https://github.com/user-attachments/assets/aca5269b-58eb-47ad-a8e1-e8f07160174e" />

The API URL that returns a weather overview is appended by data/3.0/onecall/overview, while the API URL that returns a main weather type is appended only by data/3.0/onecall/ (OpenWeather, 2024). I was unable to find a way to make a singular API call that returned both the human-readable overview that was desired as well as a main weather type. I contact OpenWeather to see if there was a way in which to return both these values,

<img width="1444" alt="Eval Image 2" src="https://github.com/user-attachments/assets/ee6fb28b-6474-4a7f-b656-d1b05dc2df99" />

but unfortunately that is not currently within the API's capabilities. If I were to proceed with developing the Weather App, I would integrate an automatic second API call into the back end functions that calls the main API URL in order to provide the header with the main weather data, so that each time coordinates are submitted the input is sent to both endpoints in order to recieve all of the desired data responses.

### Code Engine

While the web service is currently deployed using Render.com, I initially hoped to utilise IBM Code Engine. This would have allowed me to spin up a container image using Docker and the deploy a Code Engine instance to deploy the app with a fully integrated and customisable CI/CD pipeline, as well as allowing me to keep my GitHub repository private so that the code for the app is not available publically on the internet. The first struggle with this was that Code Engine is a chargable software and I didn't have access to any free resources through work as my job role primarily uses TechZone to provision temporary free envoronments for such software licenses. Without a related client opportunity, the longest that I could provision Code Engine for was 6 days which would not have been sufficient for this project.

Thankfully, I was able to speak to someone who works directly with IBM Cloud and has resources assigned to them and gained permission to create a project within their environment for the month needed for deployment, submission and marking. However, while I was able to run the build and connect Code Engine to my GitHub repo by running a script on the IBM Cloud CLI after setting up the project, when I attempted to deploy the app in order to be able to access the web service and generate a sharable link, this step would hang while "waiting for revisions". This was not an error that I, or the members of the cloud team, has come across before and we were unable to diagnose whether this was an issue with the deployment itself or a problem related to the limited compute resources provided for free instances. As a result, after trying a range of approaches from using the Code Engine UI to running multiple variations of the build and deployment script through the CLI, I ended up having touse Render.com.

With a longer time frame, and the support of the IBM Cloud team, I believe it would be possible to resolve this issue and be able to host the Weather App on IBM Code Engine as initially planned.

### Summary

Overall, while there may have been aspects of the project that I would change or struggles that I would have spent longer trying to resolve, I believe that the project was successful. Aside from one feature which was put on hold, the acceptance criteria were met for every ticket on the project management board and the final web service both functioned as expected and adhered to the initial UI designs.

## References

Susnjara, S. and Smalley, I. (2024). What Are CI/CD And The CI/CD Pipeline? | IBM. [online] ibm.com. Available at: https://www.ibm.com/think/topics/ci-cd-pipeline (Accessed Jan. 2025).

Google (2025). Lighthouse. [online] Chrome for Developers. Available at: https://developer.chrome.com/docs/lighthouse (Accessed Jan. 2025).

OpenWeather (2024). One Call API 3.0 - OpenWeatherMap. [online] openweathermap.org. Available at: https://openweathermap.org/api/one-call-3 (Accessed Dec. 2024).
