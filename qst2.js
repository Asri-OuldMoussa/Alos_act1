var unirest = require("unirest");

url = "http://localhost:3000/livre";

m(url);


function m(url) {
var req = unirest("GET", url);
req.headers({
    "cash-control": "no-cache",
})

req.end(function (res) {
    if (res.error) throw new Error(res.error);
    for (i = 0; i < res.body.length ; i++)
    {
        k = res.body[i].titre;
        if(k.charAt(0) == 'M'  /*|| k.charAt(0) == 'm'  //Veuillez Enlever les commentaire pour traiter le cas où m est en miniscule*/ )
            console.log(res.body[i]);
    }
})
 
}