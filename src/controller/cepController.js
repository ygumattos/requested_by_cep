const Correios = require('node-correios');
const correios = new Correios();

module.exports = {
   async findCep(req, res){
       const cep = req.body.cep; 
        await correios.consultaCEP({ cep })
            .then(result => {
                return res.json(result);
            })
            .catch(error => {
                return res.send(error);
            })
        
    },











    

    // async calcFrete(req, res){ 
    //     let args = JSON.parse({
    //         nCdServico: '04014',
    //         sCepOrigem: '06413010',
    //         sCepDestino: '06622180',
    //         nvlPeso: '5',
    //         nCdFormato: 1,
    //         nVlComprimento: 20.0,
    //         nVlAltura: 20.0,
    //         nVlLargura: 20.0,
    //         nVlDiametro: 10.0
    //     });
    //    await correios.calcPrecoPrazo({
    //     nCdServico: '04014',
    //     sCepOrigem: '06413010',
    //     sCepDestino: '06622180'
    //    })
    //     .then(result => {
    //         res.send(result);
    //     })
    //     .catch(error => {
    //         res.send(error);
    //     })
    // }
}