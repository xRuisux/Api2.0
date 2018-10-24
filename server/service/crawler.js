var rp = require('request');
var cheerio = require('cheerio');

var crawler = new Promise((resolve, reject) =>  {           
  rp(`https://www.promobit.com.br/`, function(err,response,body) {
    var $ = cheerio.load(body); 
    var promos = [];
    
    $('#offers').children((i , element) => {
      if (i != 48) {
        var objeto = {}
        objeto.link = 'https://www.promobit.com.br'+ $(element).find('a').attr('href');
        objeto.title = $(element).find('.bottom_title').text();
        objeto.price = $(element).find('span').attr('itemprop','lowPrice').text();
        objeto.site = $(element).find('.where').text();
        objeto.announcer = $(element).find('.name').text();
        objeto.timeStamp = $(element).find('.timeago').attr('data-time');
        objeto.id = i;
        promos.push (objeto)
        i++;
        resolve(promos);
        reject('Falhou');
      }      
    })
  });
});



module.exports = crawler;