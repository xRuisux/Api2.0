const puppeteer = require('puppeteer');
const mongoose = require('mongoose');
const Pup = require('../api/puppeteer/pupModel');
const Promo = require('../api/crawler/crawModel');
// var createDoc = require('../../utils/docs');
mongoose.connect('mongodb://localhost/desafiodb', { useNewUrlParser: true });
const promosArray = [];


const teste = Promo.find({}, 'link title', (err, promos) => {
    if (err) {
        console.log(err);
    } else {
        promos.map(function(res) { 
            promosArray.push(res);          
        }); 
        return promosArray;
    };
});

const pup = async (promos, Pup, page, browser) => {
    let pdfs = [];
    let promo = {};
        (async () => {
            try {
                const browser = await puppeteer.launch();
                const page = await  browser.newPage();
                await page.goto(promos.link, {waitUntil: 'networkidle2'});
                await page.pdf({path: `../../src/${promos.title}.pdf`, format: 'A4'});
                await browser.close();  
                   
            } catch (error) {
                console.log(error);
            }
            
            // pdfs.push(createDoc(Pup, promo));
        })();
};



const run =  async () =>{
    teste.then(async()=>{
        //console.log (promosArray); 

        
        promosArray.forEach (element => {
            pup(element, Pup);
                    
        });
           
        
        
    });
    
};
run();
// module.exports = run;
