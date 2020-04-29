import Hotel from '../models/Hotel';

class HotelController {
    async index(req, res) {
        let hoteis = await Hotel.find();
        return res.json(hoteis);
    }

    async show(req, res) {
        const id = req.params.id;
        let hotel = await Hotel.findById(id);
        return res.json(hotel);
    }

    async store(req, res) {
        const { nome, uf, municipio, endereco, qtdApts, valorDiaria } =  req.body;
        let hotel = await Hotel.create({
            nome,
            uf,
            municipio,
            endereco,
            qtdApts,
            valorDiaria,
        });
        return res.json(hotel);
    }

    async update(req, res) {
        const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(hotel);
    }

    async destroy(req, res) {
        await Hotel.findByIdAndRemove( req.params.id );
        return res.json({resposta: "Hotel removido"});
    }
}

export default new HotelController;