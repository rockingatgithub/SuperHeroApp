//for creting a request and a connection..

function fetchApi(){
    var xhrRequest = new XMLHttpRequest();

    xhrRequest.onload = function(){
        var responseJSON = JSON.parse(xhrRequest.response);

        var imgurl = responseJSON.message;
        document.getElementById('res-image').setAttribute('src', imgurl);
    }

    xhrRequest.onerror = function(){
        console.log('error occured');
    } 
    
    xhrRequest.open('get', 'https://dog.ceo/api/breeds/image/random');
    xhrRequest.send();
}

//listen to button click....
var button1 = document.getElementById('fetch-button');
button1.addEventListener('click', fetchApi);


