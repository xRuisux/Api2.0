const puppeteer = require('puppeteer');
const mongoose = require('mongoose');
const Pup = require('../api/puppeteer/pupModel');
const Promo = require('../api/crawler/crawModel');
// var createDoc = require('../../utils/docs');
mongoose.connect('mongodb://localhost/desafiodb', { useNewUrlParser: true });
const promosArray = [];


const linksFind = Promo.find({}, 'link title', (err, promos) => {
    if (err) {
        console.log(err);
    } else {
        promos.map(function(res) { 
            promosArray.push(res);          
        }); 
        return promosArray;
    };
});
const pup = async (promos, Pup, browser) => {
    
    (async () => {
        try {
            const page = await  browser.newPage();
            await page.goto(promos.link, {waitUntil: 'networkidle2'});
            await page.pdf({path: `../../src/${promos.title}.pdf`, format: 'A4'});                           
        } catch (error) {
            console.log(error);
        }            
        // pdfs.push(createDoc(Pup, promo));
    })();
};

const run =  async () =>{
linksFind.then(async()=>{
    //console.log (promosArray); 
    const browser = await puppeteer.launch();
    promosArray.forEach (element => {
        pup(element, Pup, browser);                  
    });      
});
await browser.close(); 
};
// run();
module.exports = run;
