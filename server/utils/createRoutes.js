module.exports = function(controller, router) {
    router.param('id', controller.params);

    router.route('/')
        //chamada do serviço do crawler
        .get(controller.get)
        //criação de 1 doc do crawler
        .post(controller.post)
    
    router.route('/:id')
        //chamada de só 1 doc
        .get(controller.getOne)
        //atualização de doc
        .put(controller.put)
        //deletar o doc
        .delete(controller.delete)
}


