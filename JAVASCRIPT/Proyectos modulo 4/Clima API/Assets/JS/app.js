const apiKey = "07f36172b5da46fa957185849240611";
const update = document.getElementById('update')

function getClima(latitud, longitud){
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitud},${longitud}&aqi=no`
    fetch(url)
        .then(response => response.json())
        .then (data => {
            const climaContainer = document.getElementById('clima');
            console.log(data);
            climaContainer.innerHTML = `
            <h2>El clima en ${data.location.name}, ${data.location.region}, ${data.location.country}</h2>
            <p>Temperatura:  ${data.current.temp_c}</p>
            <p>Condicion: ${data.current.condition.text}</p>
            <img src="${data.current.condition.icon}">
            `
        })
        .catch(error =>{
            console.error(error)
        })
}

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            const latitud = position.coords.latitude;
            const longitud = position.coords.longitude;
            //console.log(latitud, longitud);
            getClima(latitud, longitud);
        }, error =>{
            console.error('Error al obtener la ubicacion', error);
            alert('No hemos podido obtener su ubicacion')
            new Notification('No hemos podido obtener su ubicacion')
        });
    }
}
window.onload = getLocation;
update.addEventListener('click', getLocation)