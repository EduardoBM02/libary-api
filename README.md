# Libary_API
## Descrição
Projeto de API para uma biblioteca que busca, cria, atualiza e deleta livros, usuários e emprestimos de um banco de dados SQL,
a API foi feita com Node.js e o banco de dados com MySQL.

## Instrução de instalação
No projeto foi usado a versão 22.11.0 do Node.
### Pre requisitos
Apenas necessário instalar o npm com o seguinte comando
```bash
npm install
```
## Instruções de uso
1- Ative seu banco de dados MySQL na porta localhost:3306 e caso necessário modificar o username e password no arquivo ./src/database/database.js
2- Crie as tabelas livro, usuario e emprestimos
- Livros:
```sql
  CREATE TABLE livros (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    autor VARCHAR(255) NOT NULL,
    genero VARCHAR(100),
    ano_de_publicacao INT
);
```
- Usuários:
```sql
  CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    endereco TEXT,
    email VARCHAR(255) UNIQUE NOT NULL,
    telefone VARCHAR(15)
);

```
- Emprestimos:
```sql
  CREATE TABLE emprestimos (
    id SERIAL PRIMARY KEY,
    usuario_id INT REFERENCES usuarios(id),
    livro_id INT REFERENCES livros(id),
    data_emprestimo DATE NOT NULL,
    data_devolucao DATE
);

```
3- No terminal do projeto rode o código para inicar o servidor com:
```bash
node src/server.js
```
ou com o atalho:
```bash
npm start
```
## Instrução de uso
Usando uma plataforma de desenvolvimento de API como o Postman você 
consegue criar(post), alterar(put), excluir(delete) e buscar(get) um registro enviando pelo body nas URLs "localhost:3000/livros", 
"localhost:3000/usuario" e "localhost:3000/emprestimo"
