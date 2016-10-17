'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();
var jsonfile = require('jsonfile')

//load countries json file
var file = "./data/countries.json";

//log all request in the apache conbined format to stdout
app.use(morgan('combined'));

//use body-parser middleware to get post data
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({type:'*/*'}));

//set the server listener port 12000
var port = process.env.PORT|12000;

app.all('*', function(req, res, next) {
    console.log("cors");
    res.header('Access-Control-Allow-Origin', 'URLs to trust of allow');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    if ('OPTIONS' == req.method) {
    res.sendStatus(200);
    } else {
      next();
    }
  });

//GET '/' API get welcome information
app.get('/',function(req,res){
    res.json({message:'welcome to use bookmyowntravel rest API'});
});

//Get the continents List
app.get('/continents',function(req,res){
    var countryObj = jsonfile.readFileSync(file);
    var continentsList=[];
    var continents = countryObj.continents;
    for (var prop in continents){
        continentsList.push(continents[prop])
    }
    res.json(continentsList);
});

//Get the countries List by continent
app.get('/continents/:name',function(req,res){
    var abbrName;
    var name = req.params.name;
    switch (name){
        case "Africa":
            abbrName="AF";
            break;
        case "Antarctica":
            abbrName="AN";
            break;
        case "Asia":
            abbrName="AS";
            break;
        case "Europe":
            abbrName="EU";
            break;
        case "North America":
            abbrName="NA";
            break;
        case "Oceania":
            abbrName="OC";
            break;
        case "South America":
            abbrName="SA";
            break;
        default:
            break;
    }
    var countryObj = jsonfile.readFileSync("./data/countries.json");
    var countries = countryObj.countries;
    var countriesList = []
    for (var prop in countries){
        var country = countries[prop];
        if (country.continent==abbrName){
            countriesList.push(country.name)
        }
    }
    res.json(countriesList); 
})

//Get all input contries information
app.get('/countries',function(req,res){
     var countryObj = jsonfile.readFileSync("./data/rawData.json");
    res.json(countryObj.countries);
})

//Get the country information by country name
app.get('/countries/:name',function(req,res){
        var name = req.params.name;
        var country = {};
        var countryObj = jsonfile.readFileSync("./data/rawData.json");
        var countryArray = countryObj.countries;
        for (var i=0;i<countryArray.length;i++ ){
            if (countryArray[i].name==name)
                country = countryArray[i];
        }
        res.json(country);
})


//Post a new country information
app.post("/countries",function(req,res){
    var newCountry = req.body.country;
    var countryObj = jsonfile.readFileSync("./data/rawData.json");
    var countryArray = countryObj.countries;
    var index = -1;
    for (var i=0;i<countryArray.length;i++){
        var country = countryArray[i];
        if (country.name==newCountry.name){
            index = i;
        }
    }
    if (index==-1){
        countryArray.push(newCountry);
    }else{
        countryArray[index] = newCountry;
    }
    countryObj.countries = countryArray;
    jsonfile.writeFileSync("./data/rawData.json",countryObj);
    res.json({"message":"add or update information successfully"});
})

//Delete the country information by country name
app.delete('/countries/:name',function(req,res){
    var name = req.params.name;
    //console.log("find country: "+name);
    var countryObj = jsonfile.readFileSync("./data/rawData.json");
    var countryArray = countryObj.countries;
    var index = -1;
    var removeCountry = {};
    for (var i=0;i<countryArray.length;i++){
        var country = countryArray[i];
        //console.log(country.name);
        if (country.name==name){
            index = i;
            removeCountry = country;
        }
    }
    //console.log("index:"+index);
    if (index==-1){
        res.json({"message":"can not found the country by "+name});
    }else {
        var removedCountry = countryArray.splice(index,1);
        countryObj.countries = countryArray;
        jsonfile.writeFileSync("./data/rawData.json",countryObj);
        res.json(removedCountry);
    }
})





app.listen(12000,function(){
    console.log("server is running on 12000");
})