# UC10 - Testar aplicações 
## Davi Vaz

## descrição e funcionalidades
- aplicação de controle de tarefas
- cadastra tarefas: INSERT -> CREATE
- consulta/lista tarefas: SELECT -> READ
- atualiza tarefas: UPDATE -> UPDATE

# Tecnologias

| Tecnologias | Função | Versão | Comando |
| ----------- | ------ | ------ | ------- |
| HTML | Estrutura/esqueleto da página web | V | C |
| CSS | Estilização/design da página | V | C |
| JavaScript | Interatividade/comportamento | V | C |
| Node.js | Ambiente de execução que permite executar o JS no servidor | V | C |
| Jest | Framework de testes automatizados | V | C |
| SQLite | Banco de dados relacional | V | C |
| Express | Frmework back-end que recebe requisições do front-end | V | C |
| Supertest | Ferramenta que simula requisições HTTP para testar a sua API | V | C | 

# Testes

## Testes Unitários

| Caso de teste |  Entrada  | Saída esperada |
| ------------- |  -------  | -------------- |
| 1 |  { title: "Estudar JavaScript" } | Título normalizado e aceito. |
| 2 | { title: "" } | 	Título rejeitado por estar vazio. |
| 3 | {} | Título rejeitado por estar ausente. |