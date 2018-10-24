var createDoc = function(model, doc) {
    return new Promise(function(resolve, reject) {
      new model(doc).save(function(err, saved) {
        // console.log(saved)
        if (err) {
          console.log(err);
          reject(err) 
        }
        resolve(saved);
      });
    });
  };

  module.exports = createDoc;