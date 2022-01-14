let input = document.getElementById('searchbar');
let button = document.getElementById('button')

let response;
let data;

function add(e) {
    fetch("http://api.weatherapi.com/v1/current.json?key=70b84e8d2ac44d7da1d144115221301&q="+ e)
  
       .then(response => response.json())
       .then(data => {
           console.log(data.current.condition.text)
           document.getElementById('location').innerHTML = data.location.name
           document.getElementById('temp').innerHTML = data.current.temp_c + "C°"
           document.getElementById('wind').innerHTML = data.current.wind_kph + "Km/h"
           document.getElementById('humid').innerHTML = data.current.humidity + "%"
           document.querySelector('.img').children[0].src = data.current.condition.icon.replace('//', 'https://');
           document.getElementById('cond').innerHTML = data.current.condition.text
        })

       

       
}
       

add('Tangier');