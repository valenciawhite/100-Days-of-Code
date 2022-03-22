// Setting up Base
let canvas = document.querySelector("#canvas");
let context = canvas.getContext('2d');
context.fillStyle = "#B6174B";
// context.fillRect(100, 100, 400, 400);

// context.beginPath();
// context.rect(100, 100, 400, 400);
// context.lineWidth = 4;
// context.stroke();

// context.beginPath();
// context.arc(300, 300, 100, 0, Math.PI*2);
context.lineWidth = 2.5;
// context.stroke();




// Project Side Task
//Create a function that iterates over a list of your favorite artist or band. 
const favArtist = ["Blue Man Group", "Rebecca Black", "William Hung", "Vanilla Ice"];

function listArtist(arrayList){
  arrayList.forEach((arrayList) => {
      console.log(arrayList);
  })
};
listArtist(favArtist);