import Livro from "../models/livros.js";

export const getLivros = async (req, res) => {
  try {
    const livros = await Livro.findAll();
    res.status(200).json(livros);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getLivro = async (req, res) => {

  try {
    const { id } = req.params; 
    const livro = await Livro.findByPk(id); 

    if (!livro) {
      return res.status(404).json({ error: 'Livro não encontrado' });
    }

    res.status(200).json(livro);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar livro' });
  }
};

export const createLivro = async (req, res) => {
  try {
    const novoLivro = await Livro.create(req.body);
    res.status(201).json(novoLivro);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const putLivros = async (req, res) => {

  try {
    const { id } = req.params;
    const { titulo, autor, genero, ano_publicacao } = req.body; 

    const livroAtualizado = await Livro.update(
      {
        titulo,
        autor,
        genero,
        ano_publicacao,
      },
      { where: { id } }
    );

    if (livroAtualizado[0] === 0) {
      return res.status(404).json({ error: 'Livro não encontrado' });
    }

    res.status(200).json({ message: 'Livro atualizado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar livro' });
  }
};

export const deleteLivros = async (req, res) => {

  try {
    const { id } = req.params;

    const livroDeletado = await Livro.destroy({ where: { id } });

    if (livroDeletado === 0) {
      return res.status(404).json({ error: 'Livro não encontrado' });
    }

    res.status(200).json({ message: 'Livro deletado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao deletar livro' });
  }
};
