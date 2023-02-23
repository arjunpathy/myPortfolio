const phrases = ["a Happy", "a Peaceful ", "a Wonderful ", "an Inspirational", "a Bright", "an Exciting ", "a Joyful ", "a Blissful", "a Delightful ", "a Cheerful ", "a Thrilled ", "a Sunny", "a Jolly ", "a Calm ", "an Energetic ", "a Festive", "an Electrifying ", "a Lovely ", "a Perfect ", "a Rejuvenating", "an Euphoric ", "a Glorious ", "a Jubilant ", "an Apreciative", "a Thankful ", "a Reliving ", "a Relaxing ", "a Fascinating", "a Beautiful ", "an Awesome ", "an Enchanting ", "a Bewitching", "a Mesmerizing ", "a Charming ", "an Enthralling ", "a Charming", "a Nice ", "a Fine ", "an Excellent ", "a Splendid", "a Pleasant ", "a Terrific ", "a Grand ", "an Amazing", "a Best ", "a Marvelous ", "a Fabulous ", "a Lucky", "a Super ", "a Momentous ", "a Magnificent ", "an Incredible "];
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date();
let day = weekday[d.getDay()];
$('#day').text(day);

const el = document.querySelector('.text');
const fx = new TextScramble(el);
let counter = 0;

const next = () => {
    fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 5000);
    });
    counter = (counter + 1) % phrases.length;
};

next();
let showResume=() =>{
    window.open('https://my-portfolio-arjunpathy.vercel.app/assets/files/Resume-Nagarjun-L.pdf', "_blank");
}
