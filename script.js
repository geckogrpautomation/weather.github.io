

//Set query URL to open weather api with geckogrp API key. {0c0d2cb0d3b99d690441c15292b8efd9}
let weatherURL = "https://api.openweathermap.org/data/2.5/forecast?";
let weatherApiKey = "9ea4b0a185c06c70d30677b3508b5611";



//Get required objects
let addPlaceBtnObj = document.getElementById("searchCity");
let deleteBtnObj = document.getElementById("deleteChck");
let cityInputObj = document.getElementById("cityInput");
let countryInputObj = document.getElementById("countryInput");
let placesListObj = document.getElementById("list-group");
let placesObj = document.getElementsByClassName("places");


//Add event listeners
addPlaceBtnObj.addEventListener("click" , addToList);


function addToList(){

    let listChCount = document.getElementById("list-group").childElementCount;

    //Create div with class of flex box 
    var divObj = document.createElement("div");
    divObj.setAttribute("class","flex-4Row");
    divObj.setAttribute("id","flex-4-" + (listChCount+1) );    
    document.getElementById("list-group").appendChild(divObj);
   
    //Create checkbox to enable deletion
    let delLi = document.createElement("input");
    delLi.setAttribute("class", "btn btn-outline-secondary");
    delLi.setAttribute("type", "button");
    delLi.setAttribute("value","Clear");
    delLi.setAttribute("id" , "del-" + listChCount+1)
    delLi.addEventListener("click" , remFromList)
    document.getElementById(divObj.id).appendChild(delLi);
    

    //Create list item
    let li = document.createElement("li");listChCount
    li.setAttribute("id", "li-" + (listChCount+1));

    if ( listChCount % 2 == 0) {
        li.setAttribute("class", "list-group-item list-group-item-light");
    }else{
        li.setAttribute("class", "list-group-item list-group-item-dark");
    }

    li.appendChild(document.createTextNode(cityInputObj.value));
    document.getElementById(divObj.id).appendChild(li); 
    divObj.addEventListener("click" , getAPI);
   
    //get ISO3611 abbrev for user input country
    var country =  getISO3611(countryInputObj.value);
     //var curWeatherAPI = getAPI(weatherURL  + "q=" + cityInputObj.value + "&appid=" + weatherApiKey);
    var url = weatherURL  + "q=" + cityInputObj.value + "," + country + "&units=metric" + "&lang=en" + "&appid=" + weatherApiKey;
    
    weatherStruct = JSON.parse (getAPI(url));
    renderWeather(weatherStruct);

function remFromList(e){

    //Get clear button ID
    var targetID = e.target.id;
    let item = document.getElementById(targetID);
    
    //Get parent ID
    let delItemContID = item.parentElement.id;    
    let listID = document.getElementById(delItemContID);

    //Remove required list item
    listID.remove();    
}

//Get weather data from API
function getAPI(url){

    fetch(url)
    .then(response => response.json())
    .then(data => renderWeather(data));

}

}

//Render weather data on page
function renderWeather(data){

    console.log(data);


let curCityObj = document.getElementById("curCity"); 
let curDateObj = document.getElementById("curDate");
let curTempObj = document.getElementById("curTemp"); 
let curHumidObj = document.getElementById("curHumid"); 
let curWinSpdObj = document.getElementById("curWinSpd"); 
let curUVIndexObj = document.getElementById("curUVIndex"); 

curCityObj.textContent = data.city.name + "   ";
curDateObj.textContent =  data.list[0].dt_txt;
curTempObj.textContent = "Temperature - " +  data.list[0].main.temp + "°C";
curHumidObj.textContent = "Humidity - " + data.list[0].main.humidity + "%";
curWinSpdObj.textContent = "Wind Speed - " + data.list[0].wind.speed + "km/hr";



for (let i = 0; i < 4; i++) {

    x = i.toString();

    let dayBox1DateObj = document.getElementById("dayBox1Date");    
    let dayBox1PiceObj = document.getElementById("dayBox1Pic"); 
    let dayBox1TempObj = document.getElementById("dayBox1Temp"); 
    let dayBox1HumidObj = document.getElementById("dayBox1Humid"); 

    let dayBox2DateObj = document.getElementById("dayBox2Date");    
    let dayBox2PiceObj = document.getElementById("dayBox2Pic"); 
    let dayBox2TempObj = document.getElementById("dayBox2Temp"); 
    let dayBox2HumidObj = document.getElementById("dayBox2Humid");

    let dayBox3DateObj = document.getElementById("dayBox3Date");    
    let dayBox3PiceObj = document.getElementById("dayBox3Pic"); 
    let dayBox3TempObj = document.getElementById("dayBox3Temp"); 
    let dayBox3HumidObj = document.getElementById("dayBox3Humid"); 

    let dayBox4DateObj = document.getElementById("dayBox4Date");    
    let dayBox4PiceObj = document.getElementById("dayBox4Pic"); 
    let dayBox4TempObj = document.getElementById("dayBox4Temp"); 
    let dayBox4HumidObj = document.getElementById("dayBox4Humid"); 


}

}






                        
            
           
              


