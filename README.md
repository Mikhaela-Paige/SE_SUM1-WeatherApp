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

Render.com also provides a CI/CD pipeline for web services hosted on it's platform, allowing for custom configuration deployments and automatically updating web services by running a redeployment when changes are made to the source code. The use of continuous integration and deployment for this application enables development efficiency, product quality, and deployment speed, automating processes that would otherwise have been time-consuming and manual. CI/CD also provides a standard structure and seamless updates that would help to enable collaboration if a wider team were to br brought on to develop the project.

![CI:CD Pipeline](https://github.com/user-attachments/assets/0b6b3aa5-9e1d-4615-9551-df2821d24b2b)

The image above shows an example of the Render.com console for the Weather App deployment when a change is detected within the linked GitHub repository.
