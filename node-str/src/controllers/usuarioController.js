import Usuario from "../models/usuarios.js";

export const getUsuario = async (req, res) => {

  try {
    const { id } = req.params; 
    const usuario = await Usuario.findByPk(id); 

    if (!usuario) {
      return res.status(404).json({ error: 'Usuario não encontrado' });
    }

    res.status(200).json(usuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar Usuario' });
  }
};

export const createUsuario = async (req, res) => {
  try {
    const novoUsuario = await Usuario.create(req.body);
    res.status(201).json(novoUsuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const putUsuario = async (req, res) => {

  try {
    const { id } = req.params;
    const { nome, endereco, email, telefone } = req.body; 

    const usuarioAtualizado = await Usuario.update(
      {
        nome,
        endereco,
        email,
        telefone,
      },
      { where: { id } }
    );

    if (usuarioAtualizado[0] === 0) {
      return res.status(404).json({ error: 'Usuario não encontrado' });
    }

    res.status(200).json({ message: 'Usuario atualizado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar Usuario' });
  }
};

export const deleteUsuario = async (req, res) => {

  try {
    const { id } = req.params;

    const usuarioDeletado = await Usuario.destroy({ where: { id } });

    if (usuarioDeletado === 0) {
      return res.status(404).json({ error: 'Usuario não encontrado' });
    }

    res.status(200).json({ message: 'Usuario deletado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao deletar Usuario' });
  }
};
