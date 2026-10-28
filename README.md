# UC10 - Testar aplicações 
## Davi Vaz

## descrição e funcionalidades
- aplicação de controle de tarefas
- cadastra tarefas: INSERT -> CREATE
- consulta/lista tarefas: SELECT -> READ
- atualiza tarefas: UPDATE -> UPDATE

# Tecnologias

| Tecnologias | Função |
| ----------- | ------ |
| HTML | Estrutura/esqueleto da página web |
| CSS | Estilização/design da página |
| JavaScript | Interatividade/comportamento |
| Node.js | Ambiente de execução que permite executar o JS no servidor |
| Jest | Framework de testes automatizados |
| SQLite | Banco de dados relacional |
| Express | Frmework back-end que recebe requisições do front-end |
| Supertest | Ferramenta que simula requisições HTTP para testar a sua API |

# Testes

## Testes Unitários

| Caso de teste |  Entrada  | Saída esperada |
| ------------- |  -------  | -------------- |
| 1 |  { title: "Estudar JavaScript" } | Título normalizado e aceito. |
| 2 | { title: "" } | 	Título rejeitado por estar vazio. |
| 3 | {} | Título rejeitado por estar ausente. |