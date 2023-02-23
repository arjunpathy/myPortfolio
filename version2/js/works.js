let title = ['Codingmart Technologies, India', 'BetterPlace Safety Solutions, India', 'Self-Taught'];
let experience = ['Full Stack Engineer Jan 2017 - Feb 2019 (2 years 2 months)', 'Full Stack Engineer Feb 2019 - Aug 2021 (2 years 7 months)', 'Sep 2021 - Present'];
let detailedExp = [
    [
        "Helped to create Dashboard & APIs for BEAM AX ™ - Mitsubishi Electric Product", "Developed Backend & APIs for several E-commerce & Travel companies", "Helped to create a Chatbot", "Frontend development using AngularJs and Angular 6"
    ], ["Worked in the transformation of legacy system to new micro-service architecture", 'Wrote AWS lambdas for autonomous data migrations', "Built a stand alone Oauth2 authorization system", "Frontend developement using ReactJs"
    ], [
        'Built DApps in Ethereum Blockchain', 'ASL Translator using TensorFlow (Proof Of Concept)', "FIFA Wage Prediction - Data science", "Brain MRI segmentation using UNet variants", "Face Recognition using Siamese Network"
    ]
];
let links = ["https://codingmart.com/", "https://www.betterplace.co.in/", "https://github.com/arjunpathy/"];

let skillset = [{ name: 'Frontend', score: 75, color: "#EF476F" }, { name: 'Backend', score: 85, color: "#554994" }, { name: 'Nodejs', score: 85, color: "#06d6a0" }, { name: 'React & Angular', score: 70, color: "#ff5400" }, { name: 'DevOps', score: 60, color: "#294c60" }];

let skillSetImages = ["../images/javascript.png","../images/nodejs.png","../images/react.png","../images/angularjs.png","../images/mongodb.png","../images/aws.png","../images/sql.png","../images/solidity.png","../images/python.png","../images/rubyonrails.png","../images/spring.png"];
let delay = 10000;
let i = 0;

let change = (dir) => {
    console.log(dir, i)
    if (dir == 'l') i = (i) % title.length - 1;
    if (i < 0) i = title.length - 1;
    $('#title').fadeOut(() => { $('#title').html(title[(i) % title.length]).fadeIn(); });
    $('#dur-exp').fadeOut(() => { $('#dur-exp').html(experience[(i) % experience.length]).fadeIn(); });
    $('#contribution').fadeOut(() => {
        document.querySelector('#contribution').innerHTML = "";
        for (let ind = 0; ind < detailedExp[(i) % title.length].length; ind++) {
            let list = document.createElement('li');
            list.innerText = detailedExp[(i) % title.length][ind];
            document.querySelector('#contribution').appendChild(list);
        }
        $('#contribution').fadeIn();
    });
    if (dir !== 'l') i++;
    var a = document.getElementById('site-link');
    a.href = links[(i) % links.length];
    $('#page-no').fadeOut(() => { $('#page-no').html((i % title.length) + 1).fadeIn(); });
    delay = 30000;
}
let animateText = (val) => {
    let t = val ? val : delay;
    setInterval(() => {
        change(null);
    }, t)
}
animateText();

let drawProgressBar = () => {
    let t = "";
    skillset.forEach(skill => {
        let text = "";
        text += `<div class="container pointer" title=${skill.score/10}>`
        text += `<span>${skill.name}</span>`;
        text += `<div class="progress2 progress-moved">`
        text += `<div class="progress-bar2" style="background-color:${skill.color};width:${skill.score}%"></div>`
        text += `</div></div>`
        t += text;
    });
    document.getElementById('skill-container').innerHTML = t;
    t = '';
    skillSetImages.forEach(img => {
        let text = "";
        text += `<div class="gallery-item">`
        text += `<div class="content"><img src="${img}" alt=""></div>`
        text += `</div>`
        t += text;
    });
    document.getElementById('gallery').innerHTML = t;
}

drawProgressBar();