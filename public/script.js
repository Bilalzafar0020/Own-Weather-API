// curl ascii.live/forrest 

// //  for the size of search bar 
// let size = document.getElementById('container');
// let input = document.getElementById('userInput');


// let allContent = document.getElementById('search').addEventListener('click',()=>{

//     let inputValue = input.value;  // so that we get the up to date value when the button is clicked not when the page is loaded

// if(inputValue === ''){
//     size.style.height = '7rem';
//     Swal.fire({
//         title: 'Please Enter City Name!',
//         icon: 'info',
//         confirmButtonText: 'OK'
//     });
// }
// else if(inputValue !== '') {
// size.style.height = '37rem';
// }

// });





document.getElementById('search').addEventListener('click', () => {
    const cityName = document.getElementById('userInput').value.toLowerCase();
    axios.get(`/weather/${cityName}`)
        .then(response => {
            const data = response.data;
            if (data) {
                document.getElementById('main-temperature').textContent = data.temperature;
                document.getElementById('max').textContent = data.max;
                document.getElementById('min').textContent = data.min;
                document.getElementById('city').textContent = data.city;
                document.getElementById('country').textContent = data.country;
                document.getElementById('how-many-humdity').textContent = data.humidity;
                document.getElementById('how-many-windspeed').textContent = data.windSpeed;
                document.getElementById('how-many-pressure').textContent = data.pressure;
          document.getElementById('howmanyhumdity').innerText = data.howmanyhumdity;
document.getElementById('wind-label').innerText = data.Windlabel;
document.getElementById('pressure-label').innerText = data.pressurelabel;
                const weatherImage = document.getElementById('weather-images');
                const humidityImage = document.getElementById('humidity-image');
                const windSpeedImage = document.getElementById('wind-speed-image');
                const pressureImage = document.getElementById('pressure-image');

             weatherImage.style.display='block';
             humidityImage.style.display='block';
             windSpeedImage.style.display='block';
             pressureImage.style.display='block';

const size = document.getElementById('container');
size.style.height = '37rem';
            } 
        })

        .catch(error => {
              Swal.fire({
        // title: 'This City or Place Data is not available',
        text : ' This Weather data is not available. Please try again with a valid city name.',
        icon: 'info',
        confirmButtonText: 'OK'
    });
            const size = document.getElementById('container');
            size.style.height = '7rem';
               
          
// Clearing previous data because if the user first time enter the correct data but 2 time wrong so the previous data should be remove 
            document.getElementById('main-temperature').textContent = '';
            document.getElementById('max').textContent = '';
            document.getElementById('min').textContent = '';
            document.getElementById('city').textContent = '';
            document.getElementById('country').textContent = '';
            document.getElementById('how-many-humdity').textContent = '';
            document.getElementById('how-many-windspeed').textContent = '';
            document.getElementById('how-many-pressure').textContent = '';
            document.getElementById('howmanyhumdity').innerText = '';
            document.getElementById('wind-label').innerText = '';
            document.getElementById('pressure-label').innerText = '';

            const weatherImage = document.getElementById('weather-images');
            const humidityImage = document.getElementById('humidity-image');
            const windSpeedImage = document.getElementById('wind-speed-image');
            const pressureImage = document.getElementById('pressure-image');

            weatherImage.style.display = 'none';
            humidityImage.style.display = 'none';
            windSpeedImage.style.display = 'none';
            pressureImage.style.display = 'none';
        })
            
        });



