const puppeteer = require('puppeteer');
const mongoose = require('mongoose');
const Pup = require('../api/puppeteer/pupModel');
const Promo = require('../api/crawler/crawModel');
// var createDoc = require('../../utils/docs');
mongoose.connect('mongodb://localhost/desafiodb', { useNewUrlParser: true });
const promosArray = [];


const teste = Promo.find({_id: '5bcf7966eb6a864a2b7840a2'}, 'link title', (err, promos) => {
    if (err) {
        console.log(err);
    } else {
        promos.map(function(res) { 
            promosArray.push(res);          
        }); 
        return promosArray;
    };
});

const pup = async (promos, Pup, page) => {
    let pdfs = [];
    let promo = {};
    console.log(promos);
        (async () => {
            try {
                await page.goto(promos.link, {waitUntil: 'networkidle2'});
                await page.pdf({path: `src/${promos.title}.pdf`, format: 'A4'});
            } catch (error) {
                console.log(error);
            }
            
            // pdfs.push(createDoc(Pup, promo));
        })();
};



const run =  async () =>{
    teste.then(async()=>{
        //console.log (promosArray); 
        const browser = await puppeteer.launch();
        const page = await  browser.newPage();
        promosArray.forEach(element => {
            pup(element, Pup, page);
        });
        
        
    });
    await browser.close();
};
run();
// module.exports = run;
