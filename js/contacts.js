
// The latitude and longitude of your business / place
var position = [41.9028, 12.4964];
var LeafIcon = L.Icon.extend({
    options: {
        iconSize: [40, 40],
        shadowSize: [50, 64],
        iconAnchor: [0, 0],
        shadowAnchor: [4, 62],
        popupAnchor: [1, 1]
    }
});
var greenIcon = new LeafIcon({
    iconUrl: '../images/cool.png',
})

var map = L.map('map').setView(position, 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker(position, { icon: greenIcon }).addTo(map)
    .bindPopup('Hi there')
    .openPopup();

const mail1 = "nagarjun2695@gmail.com";
const mail2 = "arjunpathy2695@gmail.com";
const token = "1ed88bb5-fed7-4eb6-acb6-f08b4cd914e7";

let sendMail = () => {
    var form = document.getElementById("mail-form");
    function handleForm(event) { event.preventDefault(); }
    form.addEventListener('submit', handleForm);

    let name = document.getElementById('sender-name').value;
    let email = document.getElementById('sender-email').value;
    let subject = document.getElementById('mail-subject').value;
    let message = document.getElementById('mail-body').value;
    message = " FROM : " + name + "<br> EMAIL : " + email + "<br> MESSAGE : " + message;
    var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;

    if (!name || !email || !subject || !message) {
        alert("All fields are mandatory!");
        return;
    }
    if (!testEmail.test(email)) {
        alert("Invalid Email Id!");
        return;
    }
    Email.send({
        SecureToken: token,
        To: mail2,
        From: mail1,
        Subject: subject,
        Body: message,
    }).then((message) => {
        document.getElementById('popup').classList.add("show");
        setTimeout(() => {
            document.getElementById('popup').classList.remove("show");

            document.getElementById('sender-name').value = "";
            document.getElementById('sender-email').value = "";
            document.getElementById('mail-subject').value = "";
            document.getElementById('mail-body').value = "";
        }, 3000);
    }).catch(err => console.log(err));
}


const logo = document.getElementById("logo"),
    images = logo.querySelectorAll("img");

const getActive = () => document.body.dataset.active === "true",
    setActiveTo = active => document.body.dataset.active = active;

const shift = (image, index, rangeX, rangeY) => {
    const active = getActive();

    const translationIntensity = active ? 24 : 4,
        maxTranslation = translationIntensity * (index + 1),
        currentTranslation = `${maxTranslation * rangeX}% ${maxTranslation * rangeY}%`;

    const scale = active ? 1 + (index * 0.4) : 1;

    image.animate({
        translate: currentTranslation,
        scale
    }, { duration: 750, fill: "forwards", easing: "ease" });
}

const shiftAll = (images, rangeX, rangeY) =>
    images.forEach((image, index) => shift(image, index, rangeX, rangeY));

const shiftLogo = (e, images) => {
    const rect = logo.getBoundingClientRect(),
        radius = 1000;

    const centerX = rect.left + (rect.width / 2),
        centerY = rect.top + (rect.height / 2);

    const rangeX = (e.clientX - centerX) / radius,
        rangeY = (e.clientY - centerY) / radius;

    shiftAll(images, rangeX, rangeY);
}

const resetLogo = () => {
    setActiveTo(false);
    shiftAll(images, 0.4, -0.7);
}

window.onmousemove = e => shiftLogo(e, images);

document.body.onmouseleave = () => {
    if (!getActive()) resetLogo();
}

window.onmousedown = e => {
    setActiveTo(true);
    shiftLogo(e, images);
}

window.onmouseup = e => resetLogo();

resetLogo();