// curl ascii.live/forrest 

//  for the size of search bar 
let size = document.getElementById('container');
let input = document.getElementById('userInput');


let allContent = document.getElementById('search').addEventListener('click',()=>{

    let inputValue = input.value;  // so that we get the up to date value when the button is clicked not when the page is loaded

if(inputValue === ''){
    size.style.height = '7rem';
    Swal.fire({
        title: 'Please Enter City Name!',
        icon: 'info',
        confirmButtonText: 'OK'
    });
}
else if(inputValue !== '') {
size.style.height = '37rem';
}

});





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

document.getElementById('max-label').style.display='block'
document.getElementById('min-label').style.display='block'

            } else {
                Swal.fire('Error', `Weather data is not available for ${cityName}`, 'error');
            }
        })
        // .catch(error => {
        //     Swal.fire('Error', `This city or place data is not available: ${cityName}`, 'error');
        // });
});













// document.getElementById('search').addEventListener('click', () => {
//     const userInput = document.getElementById('userInput').value.toLowerCase();
//     fetch(`/weather/${userInput}`)
//         .then(response => response.json())
//         .then(data => {
//             if (data) {
//                 document.getElementById('temperature').textContent = data.temperature;
//                 document.getElementById('max').textContent = data.max;
//                 document.getElementById('min').textContent = data.min;
//                 document.getElementById('city').textContent = data.city;
//                 document.getElementById('humidity').textContent = data.humidity;
//                 document.getElementById('windSpeed').textContent = data.windSpeed;
//                 document.getElementById('pressure').textContent = data.pressure;
//             } else {
//                 Swal.fire('Error', `Weather data is not available for ${userInput}`, 'error');
//             }
//         })
//         .catch(error => {
//             Swal.fire('Error', 'Failed to fetch weather data', 'error');
//         });
// });
