const apiKey = "07f36172b5da46fa957185849240611";
const calcular = document.getElementById('calcular');

function getClima(){
    const latitud = document.getElementById('latitud').value;
    const longitud = document.getElementById('longitud').value;
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitud},${longitud}&aqi=no`
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        const climaContainer = document.getElementById('clima')
        console.log(data)
        climaContainer.innerHTML=`
        <h3>El Clima en ${data.location.name}, ${data.location.region}, ${data.location.country}</h3>
        <h4>Hora: ${data.location.localtime}</h4>
        <h4>Temperatura: ${data.current.temp_c}</h4>
        <h4>Condición: ${data.current.condition.text}</h4>
        <img src="${data.current.condition.icon}">
        `
    })
    .catch(error =>{
        console.error(error);
    })
}
calcular.addEventListener('click', getClima)