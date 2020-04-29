import { Schema, model } from 'mongoose';

const ReservaSchema = new Schema({
    responsavel: String,
    hotel: String,
    dataInicial: String,
    dataFinal: String,
    qtdHospedes: Number,
});

export default model('Reserva', ReservaSchema);