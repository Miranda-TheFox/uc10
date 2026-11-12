# Missão 171 - Davi Vaz

UC10 - Realizar Testes nas Aplicações Desenvolvidas

## Como rodar

1. Abra a pasta do projeto no VS Code.
2. No terminal, instale o Jest (só na primeira vez):

```
npm install
```

3. Rode os testes:

```
npm test
```

## Arquivos

- `operacoes.js` - as 9 funções do desafio.
- `operacoes.test.js` - os testes em Jest, na ordem dos exercícios.
- `package.json` - configuração do projeto e do Jest.

---

## Respostas escritas

### Exercício 1 - calcularDesconto

**a)** A função recebe um valor e um percentual. Primeiro valida os dados: se o valor for menor ou igual a zero, ou se o percentual for menor que 0 ou maior que 100, lança o erro "Dados inválidos". Se estiver tudo certo, calcula o desconto (`valor * percentual / 100`) e retorna o valor menos o desconto.

**b)** Cenários:

| Cenário | Entrada | Resultado esperado |
| --- | --- | --- |
| Desconto comum | (100, 10) | 90 |
| Desconto de 50% | (200, 50) | 100 |
| Valor inválido | (0, 10) | Erro "Dados inválidos" |

### Exercício 2 - verificarAprovacao

**a)** A função recebe uma nota. Se a nota for menor que 0 ou maior que 10, lança o erro "Nota inválida". Se a nota for 7 ou mais, retorna "Aprovado". Nos demais casos (entre 0 e 6.9), retorna "Reprovado".

**b)** Cenários:

| Cenário | Entrada | Resultado esperado |
| --- | --- | --- |
| Nota alta | 8 | "Aprovado" |
| Nota no limite | 7 | "Aprovado" |
| Nota baixa | 5 | "Reprovado" |
| Nota acima de 10 | 11 | Erro "Nota inválida" |
| Nota negativa | -1 | Erro "Nota inválida" |

**d)** Testar só uma nota de aprovação não basta porque a função tem vários caminhos: aprovar, reprovar e lançar erro. Um único teste cobre apenas um deles. Também é preciso testar o limite (nota 7), onde erros de `>=` e `>` costumam aparecer.

### Exercício 3 - validarCadastro

**a)** Para o cadastro ser válido:
- o nome não pode ser vazio nem conter só espaços;
- a idade deve ser informada e estar entre 18 e 100;
- o e-mail deve ser informado e conter o caractere `@`.

**c)** Se apenas um dos três dados for inválido, o resultado esperado é `false`, porque a função só retorna `true` quando os três dados são válidos.

### Exercício 4 - calcularFrete

**b)** O caso 3 retorna 0 porque a condição da função é `valorCompra >= 200`. O valor 200 é exatamente o limite, então já tem frete grátis. Esse caso é importante justamente por testar o valor de fronteira.

### Exercício 5 - converterCelsiusParaFahrenheit

**b)** A entrada `"25"` é um texto (string), não um número. A função usa `typeof celsius !== "number"`, que verifica o tipo e não o conteúdo. Por isso `"25"` provoca erro, mesmo parecendo o número 25.

### Exercício 6 - calcularTotal

**a)** Testes unitários verificam pequenas partes do código (normalmente uma função) de forma isolada. São importantes porque encontram erros cedo, dão segurança para alterar o código e servem como documentação do comportamento esperado.

**b)**

| Teste | Resultado | Justificativa |
| --- | --- | --- |
| A | PASSA | 3 x 10 = 30 |
| B | PASSA | 0 x 10 = 0 |
| C | PASSA | quantidade negativa lança "Valores inválidos" |
| D | FALHA | preço negativo lança erro, e o teste esperava -10 |

**c)** O Teste D tem expectativa incompatível: a função não calcula com preço negativo, ela lança erro. No arquivo de testes ele está corrigido para `toThrow`.

### Exercício 7 - validarSenha

**a)**

| Teste | Resultado | Justificativa |
| --- | --- | --- |
| A | PASSA | 8 caracteres não é menor que 8, retorna true |
| B | PASSA | 6 caracteres é menor que 8, retorna false |
| C | FALHA | 10 caracteres retorna true, mas o teste esperava false |
| D | PASSA | 12 caracteres retorna true |

**b)** O Teste C diz que uma senha com 10 caracteres deve ser rejeitada, mas a regra da função só rejeita senhas com menos de 8. Ou seja, o teste está contra a regra.

**c)** Não. A função só verifica o tamanho (`senha.length < 8`). Ela não confere letras maiúsculas, números nem caracteres especiais.

### Exercício 8 - verificarEstoque

**a)**

| Teste | Resultado | Justificativa |
| --- | --- | --- |
| A | PASSA | 5 não é maior que 20, "Pedido aprovado" |
| B | PASSA | 10 é maior que 5, "Estoque insuficiente" |
| C | PASSA | 10 não é maior que 10, "Pedido aprovado" |
| D | FALHA | quantidade 0 lança erro "Quantidade inválida", não retorna texto |
| E | PASSA | quantidade negativa lança "Quantidade inválida" |

**b)** O teste C passa porque a função só recusa quando a quantidade é **maior** que o estoque (`>`). Pedir exatamente o que existe em estoque é permitido.

**c)** O Teste D espera o retorno "Estoque insuficiente", mas para quantidade 0 a função lança erro ("Quantidade inválida"), pois `quantidadeSolicitada <= 0`. O teste correto usa `toThrow`.

### Exercício 9 - calcularMedia

**a)**

| Teste | Resultado | Justificativa |
| --- | --- | --- |
| 1 | PASSA | (8 + 6) / 2 = 7 |
| 2 | PASSA | (10 + 10) / 2 = 10 |
| 3 | PASSA | (0 + 8) / 2 = 4 |
| 4 | FALHA | nota -1 é inválida e a função lança erro, o teste esperava 3.5 |
| 5 | FALHA | nota 15 é inválida e a função lança erro, o teste esperava 10 |

**b)** Foram criados os testes 6, 7 e 8 no arquivo de testes: média de 0 e 0 (resultado 0), média de 7 e 8 (resultado 7.5) e segunda nota maior que 10 (erro).