const characterList = document.getElementById("product");
const searchBar = document.getElementById("searchBar");
const nextBtn = document.getElementById("next");
const prevbtn = document.getElementById("prev");
const showNumber = document.getElementById("showNumber");

let mainData = [];

let API = "https://rickandmortyapi.com/api/character"; //API
let pageNumber = 1;
let pagePrev = 1;

//Adding eventListner for Next Page
nextBtn.addEventListener("click", (e) => {
    pageNumber++; //for incrementing page number
    pagePrev = pageNumber;
    const URLlink = API + "?page=" + pageNumber;

    if (pageNumber > 42) {
        console.log("We haven't more than this page..");
        showNumber.innerHTML = "We haven't more than this page..";
    } else {
        loadAPIData(URLlink);
        showNumber.innerHTML = `${pageNumber}`;
    }
});

//Adding eventListner for Previous Page
prevbtn.addEventListener("click", (e) => {
    pagePrev--; //for decrementing pageNumber
    pageNumber = pagePrev;
    let URLlink = API + "?page=" + pagePrev;

    if (pagePrev < 1) {
        console.log("We haven't less than this page...");
        showNumber.innerHTML = "We haven't less than this page...";
    } else if (pagePrev === 1) {
        URLlink = API;
        loadAPIData(URLlink);
        showNumber.innerHTML = `${pagePrev}`;
    } else if (pagePrev > 1) {
        loadAPIData(URLlink);
        showNumber.innerHTML = `${pagePrev}`;
    }
});

//loading Api data
const loadAPIData = async(URLlink) => {
    try {
        const res = await fetch(URLlink);
        mainData = await res.json();
        conditionData(mainData);
        console.log(mainData);
    } catch (err) {
        console.log(err);
    }
};

//Appling filtering for the people still they are Alive
const conditionData = (data) => {
    const newItems = data.results.filter((item) => item.status === "Alive");
    displayFirst(newItems);
    mainData = newItems;
};

//display the data first time
const displayFirst = (newItems) => {
    display(newItems);
};

//display the data after searchin
const displaySearch = (characters) => {
    display(characters);
};

//display data on the card
const display = (newItems) => {
    let htmlCode = ``;
    newItems.map((item) => {
        //Adding condition
        item.episode.length < 25 ?
            (item.character = "side") :
            (item.character = "main");
        //end condition

        //showing data
        htmlCode =
            htmlCode +
            `       
      <div class="card">
      <img src=${item.image} alt=${item.name} style="width: 100%" />
            <div class="container">
                <h2>${item.name}</h2>
               
            <div class="icon1">
               <svg viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M 452.152 669.355 c -61.0987 0 -122.083 -23.2107 -168.619 -69.7458 c -92.9565 -92.9565 -92.9565 -244.167 0 -337.123 c 92.9565 -92.9565 244.167 -92.9565 337.123 0 c 92.9565 92.9565 92.9565 244.167 0 337.123 c -46.3075 46.5351 -107.406 69.7458 -168.505 69.7458 Z m 0 -409.373 c -43.8045 0 -87.7227 16.7253 -121.059 50.0622 c -66.7875 66.7875 -66.7875 175.331 0 242.119 c 66.7875 66.7875 175.331 66.7875 242.119 0 c 66.7875 -66.7875 66.7875 -175.331 0 -242.119 c -33.3369 -33.4507 -77.1413 -50.0622 -121.059 -50.0622 Z M 270.563 818.517 L 64.739 612.693 c -14.2222 -14.2222 -14.2222 -37.4329 0 -51.6551 s 37.4329 -14.2222 51.6551 0 L 322.219 766.862 c 14.2222 14.2222 14.2222 37.4329 0 51.6551 c -14.1085 14.2222 -37.4329 14.2222 -51.6551 0 Z" fill="#5aa7f9"></path><path d="M 13.653 869.603 c -14.1085 -14.1085 -14.1085 -37.3191 0 -51.5413 l 257.365 -257.365 c 14.1085 -14.1085 37.3191 -14.1085 51.5413 0 c 14.1085 14.1085 14.1085 37.3191 0 51.5413 L 65.195 869.603 c -14.1085 14.1085 -37.3191 14.1085 -51.5413 0 Z" fill="#5aa7f9"></path><path d="M 1009.21 869.035 c -14.1085 14.1085 -37.3191 14.1085 -51.5413 0 L 700.416 611.669 c -14.1085 -14.1085 -14.1085 -37.3191 0 -51.5413 c 14.1085 -14.1085 37.3191 -14.1085 51.5413 0 L 1009.21 817.493 c 14.1085 14.2222 14.1085 37.3191 0 51.5413 Z" fill="#ff9dc6"></path><path d="M 1019.79 623.957 v 219.477 c 0 20.0249 -16.384 36.4089 -36.4089 36.4089 s -36.4089 -16.384 -36.4089 -36.4089 V 623.957 c 0 -20.0249 16.384 -36.4089 36.4089 -36.4089 s 36.4089 16.384 36.4089 36.4089 Z" fill="#ff9dc6"></path><path d="M 764.131 879.616 h 219.477 c 20.0249 0 36.4089 -16.384 36.4089 -36.4089 s -16.384 -36.4089 -36.4089 -36.4089 H 764.131 c -20.0249 0 -36.4089 16.384 -36.4089 36.4089 s 16.384 36.4089 36.4089 36.4089 Z" fill="#ff9dc6"></path><path d="M 740.238 262.941 c -45.056 -45.056 -104.903 -69.8595 -168.619 -69.8595 c -63.7155 0 -123.563 24.8035 -168.619 69.8595 c -90.5671 90.5671 -92.8427 236.43 -6.94045 329.842 c 37.3191 12.8569 78.1653 12.5155 115.257 -1.13778 c -22.1867 -8.30578 -42.8942 -21.3902 -60.7573 -39.1395 c -66.7875 -66.7875 -66.7875 -175.331 0 -242.119 c 32.3129 -32.3129 75.3209 -50.176 121.059 -50.176 s 88.7467 17.8631 121.059 50.176 c 32.3129 32.3129 50.176 75.3209 50.176 121.059 s -17.8631 88.7467 -50.176 121.059 c -19.2285 19.2285 -41.984 32.8818 -66.1049 41.0738 c -1.93422 2.048 -3.86845 4.096 -5.80267 6.03022 c -31.4027 31.4027 -69.4045 52.224 -109.682 62.3502 c 19.7973 5.12 40.1635 7.73689 60.5298 7.73689 c 61.0987 0 122.083 -23.2107 168.619 -69.7458 c 45.056 -45.056 69.8595 -104.903 69.8595 -168.619 s -24.8035 -123.335 -69.8595 -168.391 Z M 590.848 601.544 h -0.227555 h 0.227555 Z M 550.344 601.315 h 0.341333 h -0.341333 Z M 594.489 601.088 h -0.341333 h 0.341333 Z M 598.13 600.519 h -0.227555 h 0.227555 Z" fill="#ff9dc6"></path></g></svg>
                ${item.gender}
               </div>   
              
              <div class="icon1">
              <svg fill="#ffffff" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M238 407V303q0-6-5-11t-11-5h-55q-6 0-11 5t-5 11v104q0 5-3 8t-8 3H37q-7 0-12 4.5T20 434v54q0 7 5 12t12 5h103q5 0 8 3t3 8v103q0 7 5 12t12 5h54q6 0 11-5t5-12V516q0-5 3-8t8-3h104q6 0 11-5t5-12v-54q0-7-5-11.5t-11-4.5H249q-5 0-8-3t-3-8zm270 224q-96 21-156 60-70 45-70 105v14q0 18 13 31t31 13h610q18 0 31-13t13-31v-14q0-60-72-106-61-38-158-59-25-5-40.5-24.5T694 562v-6q0-10 4.5-19t12.5-15q43-29 69-85 25-54 25-107 0-47-23.5-86.5T718 181t-87-23-87 23-63.5 62.5T456 330q0 52 25 104 25 55 65 85 17 13 17 33v11q0 24-15.5 43.5T508 631z"></path></g></svg>             
                ${item.character}
               </div>   
                
                <div class="icon1">
                <svg viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M523.9 986.4l-19.1-9.5c-16.6-8.3-407.6-207.7-407.6-550.2C97.2 191.4 288.6 0 523.9 0s426.7 191.4 426.7 426.7c0 342.4-390.9 541.8-407.6 550.2l-19.1 9.5z m0-901.1c-188.2 0-341.3 153.1-341.3 341.3 0 250.3 266.8 420.6 341.3 463.4 74.6-42.7 341.3-213.1 341.3-463.4 0-188.1-153.1-341.3-341.3-341.3z" fill="#dcdbdb"></path><path d="M523.9 533.3c-70.6 0-128-57.4-128-128s57.4-128 128-128 128 57.4 128 128-57.5 128-128 128z m0-170.6c-23.5 0-42.7 19.1-42.7 42.7s19.1 42.7 42.7 42.7c23.5 0 42.7-19.1 42.7-42.7s-19.2-42.7-42.7-42.7z" fill="#dcdbdb"></path></g></svg>               
                 ${item.location.name}
               </div>   
             
            

               
            </div>
        </div>

       
  
  `;
    });

    characterList.innerHTML = htmlCode;
};

//Adding eventListner for searchBar
searchBar.addEventListener("keyup", (e) => {
    const searchString = e.target.value.toLowerCase();
    const filterCharacter = mainData.filter((character) => {
        return character.name.toLowerCase().includes(searchString);
    });
    displaySearch(filterCharacter);
});



showNumber.innerHTML = `${pageNumber}`; //showing page number
loadAPIData(API); //calling default API