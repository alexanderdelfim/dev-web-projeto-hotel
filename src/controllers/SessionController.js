import Usuario from '../models/Usuario';

class SessionController{
    async index(req, res) {
        let usuarios = await Usuario.find();
        return res.json(usuarios);
    }

    async show(req, res) {
        const id = req.params.id;
        let usuario = await Usuario.findById(id);
        return res.json(usuario);
    }

    async store(req, res) {
        const { email } = req.body;
        let usuario = await Usuario.findOne({email});
        if(!usuario) {
            usuario = await Usuario.create({email});
        }
        return res.json(usuario);
    }

    async update(req, res) {
        const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(usuario);
    }

    async destroy(req, res) {
        await Usuario.findByIdAndRemove( req.params.id );
        return res.json({resposta: "Usuario removido"});
    }
}

export default new SessionController;