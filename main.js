import express from 'express';
import cors from 'cors';
import path from 'path';

const __dirname = path.resolve();
const app = express();

app.use(cors());

app.get('/weather/:cityName', (req, res) => {
    let weatherData = {
        karachi: {
            city: 'Karachi',
            country: ',PK',
            temperature: '32°C',
            max: 'Max 37°C',
            min: 'Min 30°C',
            humidity: '30%',
            windSpeed: '7.72 km/hr',
            pressure: '30%',
            humditylabel: 'Humdidty',
            pressurelabel: 'Pressure',
            Windlabel : 'Wind Speed'
        },
        islamabad: {
            city: 'Islamabad',
            country: ',PK',
            temperature: '28°C',
            max: 'Max 33°C',
            min: 'Min 25°C',
            humidity: '40%',
            windSpeed: '5.5 km/hr',
            pressure: '32%',
            humditylabel: 'Humdidty',
            pressurelabel: 'Pressure',
            Windlabel : 'Wind Speed'
        },
        lahore: {
            city: 'Lahore',
            country: ',PK',
            temperature: '35°C',
            max: 'Max 40°C',
            min: 'Min 32°C',
            humidity: '35%',
            windSpeed: '6.8 km/hr',
            pressure: '29%',
            humditylabel: 'Humdidty',
            pressurelabel: 'Pressure',
            Windlabel : 'Wind Speed'
        },
        rawalpindi: {
            city: 'Rawalpindi',
            country: ',PK',
            temperature: '30°C',
            max: 'Max 35°C',
            min: 'Min 28°C',
            humidity: '45%',
            windSpeed: '4.2 km/hr',
            pressure: '31%',
            humditylabel: 'Humdidty',
            pressurelabel: 'Pressure',
            Windlabel : 'Wind Speed'
        },
        quetta: {
            city: 'Quetta',
            country: ',PK',
            temperature: '22°C',
            max: 'Max 27°C',
            min: 'Min 20°C',
            humidity: '50%',
            windSpeed: '3.5 km/hr',
            pressure: '28%',
            humditylabel: 'Humdidty',
            pressurelabel: 'Pressure',
            Windlabel : 'Wind Speed'
        },
        faisalabad: {
            city: 'Faisalabad',
            country: ',PK',
            temperature: '34°C',
            max: 'Max 39°C',
            min: 'Min 32°C',
            humidity: '38%',
            windSpeed: '5.1 km/hr',
            pressure: '33%',
            humiditylabel: 'Humdidty',
            pressurelabel: 'Pressure',
            Windlabel : 'Wind Speed'
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

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Example server listening on port ${PORT}`);
});

