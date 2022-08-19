// var requirejs = require('requirejs');
var Api2Pdf = require("api2pdf");   
var a2pClient = new Api2Pdf("2612c74f-f4ab-4558-a379-4e7b9a70031d");

a2pClient.chromeUrlToPdf('github.com/gabeab34')
    .then(function(result) {
        console.log(result); //successful api call
    }, function(rejected) {
        console.log(rejected); //an error occurred
    }
);

// const printpdf = () => {


//     a2pClient.wkUrlToPdf('https://project2database.herokuapp.com/profile', { inline: false, filename: 'profile.pdf' }).then(function(result) {
//     console.log(result);
// });
// }

document.querySelector('#print').addEventListener('click', printpdf);