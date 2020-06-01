var inputbox = document.getElementById('search-bar');
inputbox.addEventListener("keyup", fetchHero);
var list = document.getElementById('hero-list');




async function fetchHero(){
        // let xrequest = new XMLHttpRequest();
        let hname = document.getElementById('search-bar').value;
        let squery = `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/1628132770683309/search/${hname}`;
        let response = await fetch(squery);
        let resJson = await response.json();
        console.log(resJson);
        let arr = resJson.results;
        
        //clear previous list if any...
        if(list.childElementCount !=0)
        {
            let childs = list.childElementCount;
            for(let j=0; j<childs ; j++)
            {
                list.children[0].remove();
            }
        }


        //add another list....
        for(let i=0; i < arr.length; i++)
        {
            let name= arr[i].name;
            let img = arr[i].image.url;

            let hid = `${arr[i].id}`

            let li = document.createElement('li');
            //crete child and attributes for li....
            let lianchor = document.createElement('button');
            lianchor.setAttribute('id',hid);
            lianchor.setAttribute('class', 'hero-link');
            lianchor.setAttribute('onclick','fetchTheHero(this.id)');

            let liimg = document.createElement('img');
            liimg.setAttribute('src', img);
            liimg.setAttribute('height','200px');
            liimg.setAttribute('width', '200px');
            liimg.setAttribute('class', 'liimg');
            // liimg.setAttribute('margin-left', '10px');
            lianchor.appendChild(liimg);


            let liname = document.createElement('div');
            liname.innerHTML = name;
            // liname.setAttribute('display', 'inline-block');
            liname.setAttribute('class', 'liname');
            // liname.setAttribute('margin-left', '10px');
            lianchor.appendChild(liname);


            let listats = document.createElement('div');
            listats.innerHTML = `Strength:${arr[i].powerstats.strength}`;
            // listats.setAttribute('display', 'inline-block');
            listats.setAttribute('class', 'listats');
            // listats.setAttribute('margin-left', '10px');
            lianchor.appendChild(listats);


            let like = document.createElement('button');
            like.setAttribute('class', 'like');
            like.setAttribute('id', hid);
            like.setAttribute('onclick','setfav(this.id)');

            let like_btn = document.createElement('i');
            like_btn.innerHTML="Like";
            like.appendChild(like_btn);
            li.appendChild(lianchor);
            li.appendChild(like);
            // li.innerHTML = name;
            list.appendChild(li);
        }
    }
    

    //setfav function below....
    //store hero id in local storage.....
    var favarr = [];
    function setfav(clicked){
        let h_id= `${clicked}`
        localStorage.setItem(h_id, h_id);
        favarr.push(clicked);
    }

    // var favPage = document.getElementById('fav-link');
    // favPage.addEventListener('click', getfav());
    async function getfav(){
        var favList = document.getElementById('fav_hero_list');
        for(let i=0; i< localStorage.length; i++){
            // console.log(localStorage.getItem(key));
            let key = localStorage.key(i);
        if(key != null)
        {
            let squery = `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/1628132770683309/${key}`;
            let response = await fetch(squery);
            let resJson = await response.json();
            // console.log(resJson);
            let name =resJson.name;
            let img = resJson.image.url;
            let hid = `${resJson.id}`

            let li = document.createElement('li');
            //crete child and attributes for li....
            let lianchor = document.createElement('a');
            lianchor.setAttribute('id',hid);
            lianchor.setAttribute('onclick','fetchTheHero(this.id)');

            let liimg = document.createElement('img');
            liimg.setAttribute('src', img);
            liimg.setAttribute('height','200px');
            liimg.setAttribute('width', '200px');
            liimg.setAttribute('class', 'liimg');
            // liimg.setAttribute('margin-left', '10px');
            lianchor.appendChild(liimg);


            let liname = document.createElement('div');
            liname.innerHTML = name;
            // liname.setAttribute('display', 'inline-block');
            liname.setAttribute('class', 'liname');
            // liname.setAttribute('margin-left', '10px');
            lianchor.appendChild(liname);


            let listats = document.createElement('div');
            listats.innerHTML = `Strength: ${resJson.powerstats.strength}`;
            // listats.setAttribute('display', 'inline-block');
            listats.setAttribute('class', 'listats');
            // listats.setAttribute('margin-left', '10px');
            lianchor.appendChild(listats);


            let like = document.createElement('button');
            like.setAttribute('class', 'like');
            like.setAttribute('id', hid);
            like.setAttribute('onclick','removefav(this.id)');

            let like_btn = document.createElement('i');
            like_btn.innerHTML="Unlike";
            like.appendChild(like_btn);

            li.appendChild(lianchor);
            li.appendChild(like);
            // li.innerHTML = name;
            favList.appendChild(li);
        }
        }

    }


    //now remove the hero from favrouite list....
    function removefav(hid){
        localStorage.removeItem(`${hid}`);
        location.reload();
    }

    function fetchTheHero(hid){
        window.location.href = `superhero.html#${hid}`;
    }
