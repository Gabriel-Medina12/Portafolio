document.addEventListener('DOMContentLoaded', function(){

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    const api_key = 'live_92IMSMeVD0tmphtzUcCbwrRDUQI8FZfxVt8SG3LS5REZSfPR1H2crw7P4bL56cJ7'
    let image = new Image();

    document.getElementById('generar').addEventListener('click', getDogImage);
    document.getElementById('actualizar').addEventListener('click', addText);
    async function getDogImage() {
        try{
            const response = await fetch(`https://api.thedogapi.com/v1/images/search?api_key=${api_key}`)
            .then(response => response.json())
            .then(datos => {
                image.src = datos[0].url;
                addImage();
            })
        } catch(error){
            console.log(error)
        }
    }
    function addImage(){
        image.addEventListener('load', ()=>{
            const relacion_de_aspecto = image.width / image.height;
            const maxWidth = window.innerWidth * 0.8;
            const maxHeigth = window.innerHeight * 0.8;

            let canvasWidth, canvasHeigth;

            if(maxWidth / maxHeigth < relacion_de_aspecto){
                canvasWidth = maxWidth;
                canvasHeigth = maxWidth / relacion_de_aspecto;
            }else{
                canvasWidth = maxHeigth * relacion_de_aspecto;
                canvasHeigth = maxHeigth;
            }
            canvas.width = canvasWidth;
            canvas.height = canvasHeigth;
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
            addText();
        })
    }
    function addText(){
        const text = document.getElementById('texto').value;
        const size = document.getElementById('size').value;
        const color = document.getElementById('color').value;

        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

        ctx.fillStyle = color;
        ctx.font = `${size}px 'DynaPuff'`;
        ctx.textAlign = 'center';
        ctx.fillText(text, canvas.width /2, canvas.height * 0.75)
        
    }
});