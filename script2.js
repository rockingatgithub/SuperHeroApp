 //now for particular hero ....

 function pageload(){
    var hash = window.location.hash.substring(1);
    fetchTheHero(hash);
 }

 async function fetchTheHero(hid){
    console.log(hid);
    let squery = `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/1628132770683309/${hid}`;
    let response = await fetch(squery);
    let resJson = await response.json();
    console.log(resJson);
    var mainBox = document.getElementById('main-hero');

    //create childs...
    let himg = document.createElement('img');
    himg.setAttribute('src', resJson.image.url);
    himg.setAttribute('height', '200px');
    himg.setAttribute('width', '200px');
    himg.setAttribute('class','heroimg');
    mainBox.appendChild(himg);
    let ndiv = document.createElement('div')
    ndiv.innerHTML = `Name: ${resJson.name}`;
    ndiv.setAttribute('class', 'heroname');
    mainBox.appendChild(ndiv);
    let gdiv = document.createElement('div');
    gdiv.innerHTML = `Gender: ${resJson.appearance.gender}`;
    gdiv.setAttribute('class', 'herogender');
    mainBox.appendChild(gdiv);
    let pdiv = document.createElement('div');
    pdiv.innerHTML = `strength: ${resJson.powerstats.strength}`;
    mainBox.appendChild(pdiv);
    let idiv = document.createElement('div');
    pdiv.innerHTML = `Intelligence: ${resJson.powerstats.intelligence}`;
    mainBox.appendChild(idiv);

}