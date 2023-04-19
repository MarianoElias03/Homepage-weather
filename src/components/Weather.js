const puppeteer = require('puppeteer');

async function getWeatherData() {
  try {
    // Launch a new browser instance
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate to the weather.com page
    await page.goto('https://weather.com/en-AU/weather/today/l/Mount+Coot+tha+Queensland');

    // Wait for the page to load and the dynamic content to be generated
    await page.waitForSelector('.some-temperature-class');

    // Extract the weather data
    const temperature = await page.$eval('.some-temperature-class', el => el.textContent);
    const condition = await page.$eval('.some-condition-class', el => el.textContent);

    // Close the browser
    await browser.close();

    // Return the data
    return { temperature, condition };
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

// Generate HTML with the weather data
export default async function Weather(){
  //const weatherData = await getWeatherData();
  return(
    <div>
      <h1>Weather Information</h1>
      
  </div>
  );
}