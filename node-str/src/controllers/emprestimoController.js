import Emprestimo from "../models/emprestimo.js";

export const getEmprestimo = async (req, res) => {

  try {
    const { id } = req.params; 
    const emprestimo = await Emprestimo.findByPk(id); 

    if (!emprestimo) {
      return res.status(404).json({ error: 'Emprestimo não encontrado' });
    }

    res.status(200).json(emprestimo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar Emprestimo' });
  }
};

export const createEmprestimo = async (req, res) => {
  try {
    const novoEmprestimo = await Emprestimo.create(req.body);
    res.status(201).json(novoEmprestimo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const putEmprestimo = async (req, res) => {

  try {
    const { id } = req.params;
    const { data_emprestimo, data_devolucao } = req.body; 

    const emprestimoAtualizado = await Emprestimo.update(
      {
        data_emprestimo,
        data_devolucao,
      },
      { where: { id } }
    );

    if (emprestimoAtualizado[0] === 0) {
      return res.status(404).json({ error: 'Emprestimo não encontrado' });
    }

    res.status(200).json({ message: 'Emprestimo atualizado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar Emprestimo' });
  }
};

export const deleteEmprestimo = async (req, res) => {

  try {
    const { id } = req.params;

    const emprestimoDeletado = await Emprestimo.destroy({ where: { id } });

    if (emprestimoDeletado === 0) {
      return res.status(404).json({ error: 'Emprestimo não encontrado' });
    }

    res.status(200).json({ message: 'Emprestimo deletado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao deletar Emprestimo' });
  }
};
