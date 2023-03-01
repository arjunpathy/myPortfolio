
// The latitude and longitude of your business / place
var position = [41.9028, 12.4964];
var LeafIcon = L.Icon.extend({
    options: {
       iconSize:     [40,40],
       shadowSize:   [50, 64],
       iconAnchor:   [0, 0],
       shadowAnchor: [4, 62],
       popupAnchor:  [1, 1]
    }
});
var greenIcon = new LeafIcon({
    iconUrl: '../images/cool.png',
})

var map = L.map('map').setView(position, 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker(position,{icon: greenIcon}).addTo(map)
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