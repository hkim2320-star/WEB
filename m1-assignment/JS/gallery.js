var photos = [];
var fileNames = [];
var imageList = [];
var image = [];
var openList = "<li id='photo'>";
var closeList = "</li>";

var captionTexts = [
    "Milo", "Luna", "Mochi", "Ollie", "Leo", "Cleo", "Po","Bolt", "Nova", "Oreo"
];
var openCaptionTag = '<p class= "caption">';
var closeCaptionTag = '</p>';

var descTexts = [
    "2 years / Boy", "4 years / Girl", "1 years / Girl", "3 years / Girl", "2 years / Boy", "5 years / Girl", "2 years / Girl", "4 years / Boy", "6 years / Girl", "3 years / Boy"
];
var openDescTag = "<p class='description'>";
var closeDescTag = "</p>"

var infoTexts = [
    "Milo loves naps and is super friendly if you are nice to him, haha :)",
    "Luna is playful and curious, and she enjoys chasing toys",
    "Mochi is gentle and calm, and easy to catch :)",
    "Ollie is energetic and loves running around, Never gets tired",
    "Leo is chill and smart, like teacher near you",
    "Cleo is smart and learns routines quickly",
    "Po is goofy and makes everyone laugh :D",
    "Bolt is active and loves outdoor time. You never catch him, haha :DD",
    "Nova is sweet and enjoys being petted",
    "Oreo is affectionate and follows you around, like bodygaurd"
];

for (var i=0; i<10; i++) {
    fileNames.push("pet_"+(i+1));
    photos.push("<img src='images/" + fileNames [i] + ".jpg' >");
    image = openList + photos[i] + openCaptionTag + captionTexts[i] + closeCaptionTag + openDescTag + descTexts[i] + closeDescTag + closeList;
    imageList.push(image);

    }

    document.getElementById("album").innerHTML = imageList.join(" ");

    var infoBox = document.getElementById("infoBox");
    var infoTitle = document.getElementById("infoTitle");
    var infoText = document.getElementById("infoText");
    var infoClose = document.getElementById("infoClose");

    var descriptions = document.querySelectorAll(".description");

    for(let i = 0; i < descriptions.length; i++) {
        descriptions[i].addEventListener("click", function () {
            infoTitle.innerHTML = captionTexts[i];
            infoText.innerHTML = infoTexts[i];
            infoBox.style.visibility = "visible";
        });
    }

    infoClose.addEventListener("click", function (e) {
        e.preventDefault();
        infoBox.style.visibility = "hidden";
    })