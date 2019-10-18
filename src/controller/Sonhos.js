const SonhosModel = require("../model/Sonhos");

class Sonhos {
    async buscarTodos(req, res) {
        await SonhosModel.find({}, function(err, response) {
            if (err){ 
                console.log(err);
            }
            return res.send({
                sucesso: true,
                data: response
            });
        });
    }
    async cadastrar(req, res) {
        const response = await SonhosModel.create(req.body);
        return res.send({
            sucesso: true,
            data: response
        });
    }
    async buscarUm(req, res) {
        await SonhosModel.findById(req.params.id, function (err, response) {
            if(err){
                console.log(err);
            }
            if(response){
                return res.send({
                    sucesso: true,
                    data: response
                });
            } else {
                return res.send({
                    sucesso: false,
                    mensagem: 'Não foi possível encontrar o sonho!'
                });
            }
        });
    }
    async editar(req, res) {
        const where = { _id: req.params.id }
        const dados = req.body

        await SonhosModel.findOneAndUpdate(where, dados);

        return res.send({
            sucesso: true
        });
    }
    async deletar(req, res) {
        await SonhosModel.findByIdAndRemove(req.params.id,req.body, function(err,data){
            if(err){
                console.log(err);
            }
            return res.send({
                sucesso: true,
                mensagem: 'Deletado com sucesso!'
            });
        });
    }
}
module.exports = new Sonhos();