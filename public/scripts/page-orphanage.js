const options = {
	dragging: false,
	touchZoom: false,
	doubleClickZoom: false,
	scrollWheelZoom: false,
	zoomControl: false,
};
/* get values from html */
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

const map = L.map('mapid', options).setView([lat, lng], 15);
/* Create and add titleLayer */
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

/* Create Icon */
const icon = L.icon({
	iconUrl: '/images/map-marker.svg',
	iconSize: [58, 68],
	iconAnchor: [29, 68],
	popupAnchor: [170, 2],
});

/* Create and add maker */

L.marker([lat, lng], { icon }).addTo(map);

function selectImage(event) {
    const button = event.currentTarget

    // remove all .active classes 
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove('active');
    }
    // select a image clicked
    const image = button.children[0];
    const imageContainer = document.querySelector('.orphanage-details > img')

    // att image container
    imageContainer.src = image.src
    
    // add .active class for this button 
    button.classList.add('active');


}