import express from 'express';
import cors from 'cors';
import path from 'path';

const __dirname = path.resolve();
const app = express();

app.use(cors());

app.get('/weather/:cityName', (req, res) => {
    let weatherData = {
       
        tokyo: {
          city: 'Tokyo',
          country: ',Japan',
          temperature: '30°C',
          max: 'Max 35°C',
          min: 'Min 28°C',
          humidity: '75%',
          windSpeed: '7.8 km/hr',
          pressure: '30%',
          howmanyhumdity: 'Humidity',
          pressurelabel: 'Pressure',
          Windlabel: 'Wind Speed'
        },
        beijing: {
          city: 'Beijing',
          country: ',China',
          temperature: '28°C',
          max: 'Max 32°C',
          min: 'Min 25°C',
          humidity: '40%',
          windSpeed: '4.6 km/hr',
          pressure: '32%',
          howmanyhumdity: 'Humidity',
          pressurelabel: 'Pressure',
          Windlabel: 'Wind Speed'
        },
        delhi: {
          city: 'Delhi',
          country: ',India',
          temperature: '38°C',
          max: 'Max 40°C',
          min: 'Min 35°C',
          humidity: '50%',
          windSpeed: '6.3 km/hr',
          pressure: '33%',
          howmanyhumdity: 'Humidity',
          pressurelabel: 'Pressure',
          Windlabel: 'Wind Speed'
        },
        colombo: {
          city: 'Colombo',
          country: ',Sri Lanka',
          temperature: '29°C',
          max: 'Max 32°C',
          min: 'Min 27°C',
          humidity: '75%',
          windSpeed: '5.1 km/hr',
          pressure: '30%',
          howmanyhumdity: 'Humidity',
          pressurelabel: 'Pressure',
          Windlabel: 'Wind Speed'
        },
        london: {
          city: 'London',
          country: ',United Kingdom',
          temperature: '18°C',
          max: 'Max 22°C',
          min: 'Min 15°C',
          humidity: '70%',
          windSpeed: '8.2 km/hr',
          pressure: '29%',
          howmanyhumdity: 'Humidity',
          pressurelabel: 'Pressure',
          Windlabel: 'Wind Speed'
        },
        paris: {
          city: 'Paris',
          country: ',France',
          temperature: '22°C',
          max: 'Max 25°C',
          min: 'Min 20°C',
          humidity: '60%',
          windSpeed: '6.5 km/hr',
          pressure: '31%',
          howmanyhumdity: 'Humidity',
          pressurelabel: 'Pressure',
          Windlabel: 'Wind Speed'
        },
        berlin: {
          city: 'Berlin',
          country: ',Germany',
          temperature: '24°C',
          max: 'Max 28°C',
          min: 'Min 22°C',
          humidity: '50%',
          windSpeed: '7.8 km/hr',
          pressure: '30%',
          howmanyhumdity: 'Humidity',
          pressurelabel: 'Pressure',
          Windlabel: 'Wind Speed'
        },
        karachi: {
          city: 'Karachi',
          country: ',Pakistan',
          temperature: '32°C',
          max: 'Max 37°C',
          min: 'Min 30°C',
          humidity: '30%',
          windSpeed: '7.72 km/hr',
          pressure: '30%',
          howmanyhumdity: 'Humidity',
          pressurelabel: 'Pressure',
          Windlabel: 'Wind Speed'
        },
        lahore: {
          city: 'Lahore',
          country: ',Pakistan',
          temperature: '35°C',
          max: 'Max 40°C',
          min: 'Min 32°C',
          humidity: '35%',
          windSpeed: '6.8 km/hr',
          pressure: '29%',
          howmanyhumdity: 'Humidity',
          pressurelabel: 'Pressure',
          Windlabel: 'Wind Speed'
        },
        islamabad: {
          city: 'Islamabad',
          country: ',Pakistan',
          temperature: '28°C',
          max: 'Max 33°C',
          min: 'Min 25°C',
          humidity: '40%',
          windSpeed: '5.5 km/hr',
          pressure: '32%',
          howmanyhumdity: 'Humidity',
          pressurelabel: 'Pressure',
          Windlabel: 'Wind Speed'
        },
        rawalpindi: {
          city: 'Rawalpindi',
          country: ',Pakistan',
          temperature: '30°C',
          max: 'Max 35°C',
          min: 'Min 28°C',
          humidity: '45%',
          windSpeed: '4.2 km/hr',
          pressure: '31%',
          howmanyhumdity: 'Humidity',
          pressurelabel: 'Pressure',
          Windlabel: 'Wind Speed'
        },
        faisalabad: {
          city: 'Faisalabad',
          country: ',Pakistan',
          temperature: '34°C',
          max: 'Max 39°C',
          min: 'Min 32°C',
          humidity: '38%',
          windSpeed: '5.1 km/hr',
          pressure: '33%',
          howmanyhumdity: 'Humidity',
          pressurelabel: 'Pressure',
          Windlabel: 'Wind Speed'
        },
        peshawar: {
          city: 'Peshawar',
          country: ',Pakistan',
          temperature: '29°C',
          max: 'Max 34°C',
          min: 'Min 27°C',
          humidity: '42%',
          windSpeed: '5.8 km/hr',
          pressure: '30%',
          howmanyhumdity: 'Humidity',
          pressurelabel: 'Pressure',
          Windlabel: 'Wind Speed'
        },
        multan: {
          city: 'Multan',
          country: ',Pakistan',
          temperature: '37°C',
          max: 'Max 42°C',
          min: 'Min 35°C',
          humidity: '32%',
          windSpeed: '6.2 km/hr',
          pressure: '29%',
          howmanyhumdity: 'Humidity',
          pressurelabel: 'Pressure',
          Windlabel: 'Wind Speed'
        },
        hyderabad: {
          city: 'Hyderabad',
          country: ',Pakistan',
          temperature: '33°C',
          max: 'Max 38°C',
          min: 'Min 31°C',
          humidity: '36%',
          windSpeed: '5.6 km/hr',
          pressure: '31%',
          howmanyhumdity: 'Humidity',
          pressurelabel: 'Pressure',
          Windlabel: 'Wind Speed'
        },
        quetta: {
          city: 'Quetta',
          country: ',Pakistan',
          temperature: '22°C',
          max: 'Max 27°C',
          min: 'Min 20°C',
          humidity: '50%',
          windSpeed: '3.5 km/hr',
          pressure: '28%',
          howmanyhumdity: 'Humidity',
          pressurelabel: 'Pressure',
          Windlabel: 'Wind Speed'
        },
          
            delhi: {
              city: 'Delhi',
              country: ',India',
              temperature: '38°C',
              max: 'Max 40°C',
              min: 'Min 35°C',
              humidity: '50%',
              windSpeed: '6.3 km/hr',
              pressure: '33%',
              howmanyhumdity: 'Humidity',
              pressurelabel: 'Pressure',
              Windlabel: 'Wind Speed'
            },
            mumbai: {
              city: 'Mumbai',
              country: ',India',
              temperature: '32°C',
              max: 'Max 35°C',
              min: 'Min 28°C',
              humidity: '70%',
              windSpeed: '5.5 km/hr',
              pressure: '30%',
              howmanyhumdity: 'Humidity',
              pressurelabel: 'Pressure',
              Windlabel: 'Wind Speed'
            },
            kolkata: {
              city: 'Kolkata',
              country: ',India',
              temperature: '34°C',
              max: 'Max 37°C',
              min: 'Min 30°C',
              humidity: '60%',
              windSpeed: '7.2 km/hr',
              pressure: '32%',
              howmanyhumdity: 'Humidity',
              pressurelabel: 'Pressure',
              Windlabel: 'Wind Speed'
            },
            chennai: {
              city: 'Chennai',
              country: ',India',
              temperature: '30°C',
              max: 'Max 33°C',
              min: 'Min 28°C',
              humidity: '75%',
              windSpeed: '6.8 km/hr',
              pressure: '31%',
              howmanyhumdity: 'Humidity',
              pressurelabel: 'Pressure',
              Windlabel: 'Wind Speed'
            },
            
            dhaka: {
              city: 'Dhaka',
              country: ',Bangladesh',
              temperature: '36°C',
              max: 'Max 39°C',
              min: 'Min 32°C',
              humidity: '65%',
              windSpeed: '5.1 km/hr',
              pressure: '30%',
              howmanyhumdity: 'Humidity',
              pressurelabel: 'Pressure',
              Windlabel: 'Wind Speed'
            },
            chittagong: {
              city: 'Chittagong',
              country: ',Bangladesh',
              temperature: '32°C',
              max: 'Max 35°C',
              min: 'Min 30°C',
              humidity: '70%',
              windSpeed: '4.5 km/hr',
              pressure: '29%',
              howmanyhumdity: 'Humidity',
              pressurelabel: 'Pressure',
              Windlabel: 'Wind Speed'
            },
            sylhet: {
              city: 'Sylhet',
              country: ',Bangladesh',
              temperature: '30°C',
              max: 'Max 33°C',
              min: 'Min 28°C',
              humidity: '75%',
              windSpeed: '6.2 km/hr',
              pressure: '31%',
              howmanyhumdity: 'Humidity',
              pressurelabel: 'Pressure',
              Windlabel: 'Wind Speed'
            },
           
            kathmandu: {
              city: 'Kathmandu',
              country: ',Nepal',
              temperature: '28°C',
              max: 'Max 32°C',
              min: 'Min 25°C',
              humidity: '40%',
              windSpeed: '4.6 km/hr',
              pressure: '32%',
              howmanyhumdity: 'Humidity',
              pressurelabel: 'Pressure',
              Windlabel: 'Wind Speed'
            },
            pokhara: {
              city: 'Pokhara',
              country: ',Nepal',
              temperature: '25°C',
              max: 'Max 28°C',
              min: 'Min 22°C',
              humidity: '45%',
              windSpeed: '4.2 km/hr',
              pressure: '30%',
              howmanyhumdity: 'Humidity',
              pressurelabel: 'Pressure',
              Windlabel: 'Wind Speed'
            },
            
            thimphu: {
              city: 'Thimphu',
              country: ',Bhutan',
              temperature: '22°C',
              max: 'Max 27°C',
              min: 'Min 20°C',
              humidity: '50%',
              windSpeed: '3.5 km/hr',
              pressure: '28%',
              howmanyhumdity: 'Humidity',
              pressurelabel: 'Pressure',
              Windlabel: 'Wind Speed'
            },
            paro: {
              city: 'Paro',
              country: ',Bhutan',
              temperature: '20°C',
              max: 'Max 25°C',
              min: 'Min 18°C',
              humidity: '55%',
              windSpeed: '3.2 km/hr',
              pressure: '29%',
              howmanyhumdity: 'Humidity',
              pressurelabel: 'Pressure',
              Windlabel: 'Wind Speed'
            },
            
            kabul: {
              city: 'Kabul',
              country: ',Afghanistan',
              temperature: '25°C',
              max: 'Max 30°C',
              min: 'Min 22°C',
              humidity: '45%',
              windSpeed: '3.8 km/hr',
              pressure: '27%',
              howmanyhumdity: 'Humidity',
              pressurelabel: 'Pressure',
              Windlabel: 'Wind Speed'
            },
            herat: {
              city: 'Herat',
              country: ',Afghanistan',
              temperature: '28°C',
              max: 'Max 32°C',
              min: 'Min 25°C',
              humidity: '40%',
              windSpeed: '4.5 km/hr',
              pressure: '30%',
              howmanyhumdity: 'Humidity',
              pressurelabel: 'Pressure',
              Windlabel: 'Wind Speed'
            },
            
            tehran: {
              city: 'Tehran',
              country: ',Iran',
              temperature: '35°C',
              max: 'Max 40°C',
              min: 'Min 32°C',
              humidity: '35%',
              windSpeed: '5.2 km/hr',
              pressure: '29%',
              howmanyhumdity: 'Humidity',
              pressurelabel: 'Pressure',
              Windlabel: 'Wind Speed'
            },
            mashhad: {
              city: 'Mashhad',
              country: ',Iran',
              temperature: '32°C',
              max: 'Max 37°C',
              min: 'Min 30°C',
              humidity: '30%',
              windSpeed: '6.8 km/hr',
              pressure: '31%',
              howmanyhumdity: 'Humidity',
              pressurelabel: 'Pressure',
              Windlabel: 'Wind Speed'
            },
            
            istanbul: {
              city: 'Istanbul',
              country: ',Turkey',
              temperature: '30°C',
              max: 'Max 35°C',
              min: 'Min 28°C',
              humidity: '65%',
              windSpeed: '5.5 km/hr',
              pressure: '30%',
              howmanyhumdity: 'Humidity',
              pressurelabel: 'Pressure',
              Windlabel: 'Wind Speed'
            },
            ankara: {
              city: 'Ankara',
              country: ',Turkey',
              temperature: '32°C',
              max: 'Max 37°C',
              min: 'Min 30°C',
              humidity: '60%',
              windSpeed: '7.2 km/hr',
              pressure: '32%',
              howmanyhumdity: 'Humidity',
              pressurelabel: 'Pressure',
              Windlabel: 'Wind Speed'
            }
          
          
      };
            
    const userInputCityName = req.params.cityName.toLowerCase();
    const weatherDataToSend = weatherData[userInputCityName];

    if (weatherDataToSend) {
        res.send(weatherDataToSend);
    } else {
        res.status(404).send(`Weather data is not available for ${req.params.cityName}`);
    }
});

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Example server listening on port ${PORT}`);
});

