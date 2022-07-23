let kekeImg = new Array();
kekeImg.push("./images/keke/img1.jpg");
kekeImg.push("./images/keke/img2.jpg");
kekeImg.push("./images/keke/img3.jpg");
kekeImg.push("./images/keke/img4.jpg");
kekeImg.push("./images/keke/img5.jpg");
kekeImg.push("./images/keke/img6.jpg");
kekeImg.push("./images/keke/img7.jpg");
kekeImg.push("./images/keke/img8.jpg");
kekeImg.push("./images/keke/img9.jpg");
kekeImg.push("./images/keke/img10.jpg");
kekeImg.push("./images/keke/img11.jpg");
kekeImg.push("./images/keke/img12.jpg");
kekeImg.push("./images/keke/img13.jpg");
kekeImg.push("./images/keke/img14.jpg");
kekeImg.push("./images/keke/img15.jpg");


let kobeImg = new Array();
kobeImg.push("./images/kobe/img1.jpg");
kobeImg.push("./images/kobe/img2.jpg");
kobeImg.push("./images/kobe/img3.jpg");
kobeImg.push("./images/kobe/img4.jpg");
kobeImg.push("./images/kobe/img5.jpg");
kobeImg.push("./images/kobe/img6.jpg");
kobeImg.push("./images/kobe/img7.jpg");
kobeImg.push("./images/kobe/img8.jpg");
kobeImg.push("./images/kobe/img9.jpg");
kobeImg.push("./images/kobe/img10.jpg");
kobeImg.push("./images/kobe/img11.jpg");
kobeImg.push("./images/kobe/img12.jpg");
kobeImg.push("./images/kobe/img13.jpg");
kobeImg.push("./images/kobe/img14.jpg");
kobeImg.push("./images/kobe/img15.jpg");

let togetherImg = new Array();
togetherImg.push("./images/together/img1.jpg");
togetherImg.push("./images/together/img2.jpg");
togetherImg.push("./images/together/img3.jpg");
togetherImg.push("./images/together/img4.jpg");
togetherImg.push("./images/together/img5.jpg");
togetherImg.push("./images/together/img6.jpg");


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickKeke() {
  document.randimg.src = kekeImg[getRandomInt(0, kekeImg.length - 1)];
}

function pickKobe() {
  document.randimg.src = kobeImg[getRandomInt(0, kobeImg.length - 1)];
}

function pickTogether() {
  document.randimg.src = togetherImg[getRandomInt(0, togetherImg.length - 1)];
}




function playclip() {
  if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7") != -1) || (navigator.appVersion.indexOf("MSIE 8") != -1)) {
      if (document.all) {
          document.all.sound.src = "./audio/keke.mp3";
      }
  }

  else {
      {
          let audio = document.getElementsByTagName("audio")[0];
          audio.play();
      }
  }
}

function playclip2() {
  if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7") != -1) || (navigator.appVersion.indexOf("MSIE 8") != -1)) {
      if (document.all) {
          document.all.sound.src = "./audio/together.mp3";
      }
  }

  else {
      {
          let audio = document.getElementsByTagName("audio")[1];
          audio.play();
      }
  }
}

function playclip3() {
  if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7") != -1) || (navigator.appVersion.indexOf("MSIE 8") != -1)) {
      if (document.all) {
          document.all.sound.src = "./audio/kobe.mp3";
      }
  }

  else {
      {
          let audio = document.getElementsByTagName("audio")[2];
          audio.play();
      }
  }
}