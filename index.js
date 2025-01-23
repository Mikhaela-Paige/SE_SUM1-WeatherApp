// Import requirements
import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

// Set variable for the app
const app = express();
const port = 3000;
const API_URL = "https://api.openweathermap.org/data/3.0/onecall/overview";
const apiKey = "158a2d9dc512191ebf801252a6157a53";

// Set-up the app
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

// Render the home page at the endpoint "/"
app.get("/", (req, res) => {
  res.render("index.ejs");
});

// Render weather information for manual co-ordinates at the endpoint "/local-weather"
app.get("/local-weather", async (req, res) => {
  // Send the submitted co-ordinates to the API
  try {
    const result = await axios.get(API_URL, {
      // Provide the input as parameters and include the API key
      params: {
        lat: req.query.latitude,
        lon: req.query.longitude,
        appid: apiKey,
      },
    });
    // Retrieve the data required from the API response and provide these to the front end
    res.render("index.ejs", {
      lat: JSON.stringify(result.data.lat),
      lon: JSON.stringify(result.data.lon),
      date: JSON.stringify(result.data.date),
      overview: JSON.stringify(result.data.weather_overview),
    });
    // If an issue occurs, return the error
  } catch (error) {
    res.render("index.ejs", { weather: JSON.stringify(error.response) });
  }
});

// Render weather information for pre-set co-ordinates at the endpoint "/select-city"
app.get("/select-city", async (req, res) => {
  // Send the submitted co-ordinates to the API
  const { latitude, longitude } = req.query;
  try {
    const result = await axios.get(API_URL, {
      // Provide the input as parameters and include the API key
      params: {
        lat: latitude,
        lon: longitude,
        appid: apiKey,
      },
    });
    // Retrieve the data required from the API response and provide these to the front end
    res.render("index.ejs", {
      lat: JSON.stringify(result.data.lat),
      lon: JSON.stringify(result.data.lon),
      date: JSON.stringify(result.data.date),
      overview: JSON.stringify(result.data.weather_overview),
    });
    // If an issue occurs, return the error
  } catch (error) {
    res.render("index.ejs", { weather: JSON.stringify(error.response) });
  }
});

// Listen for activity on the specified port
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
