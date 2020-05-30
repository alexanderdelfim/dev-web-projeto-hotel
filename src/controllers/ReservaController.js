import * as Yup from 'yup';
import Reserva from '../models/Reserva';
import Usuario from '../models/Usuario';
import Hotel from '../models/Hotel';

class ReservaController {

    async index(req, res) {
        const { responsavel } = req.body;
        let reservas = await Reserva.find({ responsavel });
        return res.json(reservas);
    }

    //Não está funcionando 
    /* async show(req, res) {

        const { usuario_id } = req.params;
        const reservas = await Reserva.find({ responsavel: usuario_id });   
        return res.json(reservas);

    }
 */
    async store(req, res) {

        const { usuario_id } = req.headers;
        const { dataInicial, dataFinal, qtdHospedes } = req.body;
        const { hotel_id } = req.params;

        const schema = Yup.object().shape({
            dataFinal: Yup.string().required(),
            dataInicial: Yup.string().required(),
            qtdHospedes: Yup.number().required()
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({
                mensagem: "Dados inválidos!"
            })
        }

        Usuario.findById(usuario_id).catch((err) => {
            return res.status(401).json({
                mensagem: "Usuario não autrizado!"
            });
        })

        Hotel.findById(hotel_id).catch((err) => {
            return res.status(400).json({
                mensagem: "Hotel inválido!"
            });
        })

        let reserva = await Reserva.create({
            responsavel: usuario_id,
            hotel: hotel_id,
            dataInicial,
            dataFinal,
            qtdHospedes,
        });
        await reserva.populate('responsavel').populate('hotel').execPopulate();

        return res.json(reserva);
    }

    //Não está funcionando 
    /* 
    async update(req, res) {
        const reserva = await Reserva.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(reserva);
    }

    async destroy(req, res) {
        await Reserva.findByIdAndRemove( req.params.id );
        return res.json({resposta: "Reserva removida"});
    }
    */

    async destroy(req, res) {

        const { reserva_id } = req.params;

        await Reserva.findByIdAndRemove( reserva_id ).catch((err) => {
            return res.status(401).json({
                mensagem: "Erro ao remover reserva!"
            });
        });
        
        return res.json({ mensagem: 'Reserva removido com sucesso!' });
    }

}

export default new ReservaController;
