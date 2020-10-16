
const map = L.map('mapid').setView([-27.222633, -49.6455874], 15);
/* Create and add titleLayer */
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map);

/* Create Icon */
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize:[58,68],
    iconAnchor: [29,68],
})

let marker;

/* Create and add marker */
map.on('click', function(event){
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    /* remove icon */
    marker && map.removeLayer(marker)


    /* Add icon layer */
    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})

/* adicionar campos de fotos  */
function addPhotoField(){
    /* Pegar o container de fotos #images */
    const container = document.querySelector('#images')
    /* Pegar o container para duplicar .new-image */
    const fieldsContainer = document.querySelectorAll('.new-upload')
    /* Realizar o clone da última imagem adicionada */
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    /* Verificar se o campo está vazio, se sim, não adicionar ao container de images */
    const input = newFieldContainer.children[0]

    if(input.value == "") {
        return
    }
    /* Limpar o campo antes de adicionar ao container de imagens */
    input.value = ""
    /* adicionar o clone ao container de #images */
    container.appendChild(newFieldContainer)
}

/* Exluir link da foto */
function deleteField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1){
        /* Limpar o valor do campo */
        span.parentNode.children[0].value = ""
        return
    }

    /* Deletar o campo */
    span.parentNode.remove();
}


/* Select yes or no */
function toggleSelect(event) {

    /* retirar a class .active (dos 2 botões) */
    document.querySelectorAll('.button-select button')
    .forEach((button) =>{
        button.classList.remove('active')
    })
    /* Colocar a class .active nesse botão clicado */
    const button = event.currentTarget
    button.classList.add('active')

    /* Atualizar o meu input hidden com o valor selecionado */
    const input = document.querySelector('[name="open_on_weekends"]')
    
    input.value = button.dataset.value    
    
}


