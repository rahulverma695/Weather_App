const form =document.querySelector(".form");
const tempdata=document.querySelector(".infodiv");
const temp=document.querySelector(".temp");
form.addEventListener("keypress", function(e){
    if(e.which===13){
        cityname(e);
    }
});
form.addEventListener("submit" , function cityname(event){
    event.preventDefault();
    const city=this.search.value;
    console.log(city);
    weather(city);
})

async function weather (city){
    const url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=43fb8a0d12d87ebb0c0c5b061fd131ae&units=metric`;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();  
    console.log(data);
    const temp=data.main.temp;
    const minTemp=data.main.temp_min;
    const maxTemp=data.main.temp_max;
    const visibility=data.weather[0].description;
    const country=data.sys.country;
    document.querySelector(".cityname").innerHTML=city+" , "+country;
    document.querySelector(".temp1").innerHTML=temp+"°C";
    document.querySelector(".temp2").innerHTML=maxTemp+"°C";
    document.querySelector(".temp3").innerHTML=minTemp+"°C";
    document.querySelector(".temp4").innerHTML=visibility;
    tempdata.classList.remove("hide");
};









//pi.openweathermap.org/data/2.5/weather?q={city name}&appid=43fb8a0d12d87ebb0c0c5b061fd131ae