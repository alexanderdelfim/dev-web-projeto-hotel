import Reserva from '../models/Reserva';

class ReservaController {
    async index(req, res) {
        let reservas = await Reserva.find();
        return res.json(reservas);
    }

    async show(req, res) {
        const id = req.params.id;
        let reserva = await Reserva.findById(id);
        return res.json(reserva);
    }

    async store(req, res) {
        const { responsavel,hotel,dataInicial,dataFinal,qtdHospedes } =  req.body;
        let reserva = await Reserva.create({
            responsavel,
            hotel,
            dataInicial,
            dataFinal,
            qtdHospedes,
        });
        return res.json(reserva);
    }

    async update(req, res) {
        const reserva = await Reserva.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(reserva);
    }

    async destroy(req, res) {
        await Reserva.findByIdAndRemove( req.params.id );
        return res.json({resposta: "Reserva removida"});
    }
}

export default  new ReservaController;