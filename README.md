
# RELATÓRIO DE TESTES DE SOFTWARE

## 1. Identificação do projeto

| Informação | Descrição |
| --- | --- |
| Nome do projeto | Academia Viva |
| Resumo do projeto | Plataforma de cursos online e presenciais, com formulário para cadastro de interessados. |
| Nome do testador | Davi Brandao Miranda Vaz |
| Data dos testes | 05/11/2026 |
| Tecnologias utilizadas | JavaScript, Node.js, Jest, Express e SQLite3 |

## 2. Objetivo dos testes

O objetivo dos testes é verificar se a função `validateLead()` consegue validar corretamente os dados enviados pelos usuários no formulário da Academia Viva.

Os testes procuram identificar possíveis erros no preenchimento do nome, e-mail, telefone e modalidade do curso.

Também verificam se a aplicação aceita cadastros válidos e rejeita informações incorretas, evitando que dados inválidos sejam registrados.

## 3. Ambiente de testes

| Ferramenta/Tecnologia | Versão |
| --- | --- |
| JavaScript | Não identificada |
| Node.js | Verificar com `node -v` |
| Jest | 30.5.2 (versão declarada no projeto) |
| NPM | Verificar com `npm -v` |
| Express | 4.21.2 |
| SQLite3 | 6.0.1 |
| Supertest | 7.0.0 |

**Comando utilizado para preparar o ambiente:**

```bash
npm install
```

**Comando utilizado para executar o sistema (servidor):**

```bash
npm start
```

**Comando utilizado para executar os testes:**

```bash
npm test
```

## 4. Funcionalidades testadas

| Nº | Funcionalidade/Função | Arquivo | Objetivo do teste |
| --- | --- | --- | --- |
| 1 | `validateLead()` | `src/validation.js` | Verificar se os dados do cadastro são válidos. |
| 2 | Validação do nome | `src/validation.js` | Verificar se o nome possui pelo menos 3 caracteres e é um texto. |
| 3 | Validação do e-mail | `src/validation.js` | Verificar se o e-mail possui um formato válido. |
| 4 | Validação do telefone | `src/validation.js` | Verificar se o telefone informado é um texto. |
| 5 | Validação da modalidade | `src/validation.js` | Verificar se a modalidade escolhida está entre as opções permitidas. |

## 5. Registro detalhado dos testes realizados

### Teste 01 — Cadastro completo válido

- **Funcionalidade testada:** Validação de cadastro.
- **Nome do teste no Jest:** `Deve aceitar um cadastro completo`.
- **Objetivo:** Verificar se a aplicação aceita um cadastro com todos os campos preenchidos corretamente.
- **Tipo de cenário:** Positivo.
- **Entrada utilizada:**
  - Nome: Vaz
  - E-mail: vaz@gmail.com
  - Telefone: 27999999999
  - Modalidade: Online
- **Resultado esperado:** Retornar `valid: true` e uma lista de erros vazia.
- **Resultado obtido:** A confirmar pela execução no Jest.
- **Status:** Pendente de confirmação.

**Código do teste:**

```javascript
test("Deve aceitar um cadastro completo", () => {
    const resultado = validateLead({
        name: "Vaz",
        email: "vaz@gmail.com",
        phone: "27999999999",
        interest: "Online"
    });

    expect(resultado.valid).toBe(true);
    expect(resultado.errors).toEqual([]);
});
```

**Justificativa:**

Esse teste verifica se a aplicação aceita um cadastro completo quando todas as informações são preenchidas corretamente.

---

### Teste 02 — Cadastro mínimo válido

- **Funcionalidade testada:** Validação de cadastro.
- **Nome do teste no Jest:** `Deve aceitar um cadastro sem campos opcionais`.
- **Objetivo:** Verificar se o cadastro pode ser realizado sem preencher telefone e modalidade.
- **Tipo de cenário:** Positivo.
- **Entrada utilizada:**
  - Nome: Vaz
  - E-mail: vaz@gmail.com
  - Telefone: Não informado.
  - Modalidade: Não informada.
- **Resultado esperado:** Retornar `valid: true` e uma lista de erros vazia.
- **Resultado obtido:** A confirmar pela execução no Jest.
- **Status:** Pendente de confirmação.

**Código do teste:**

```javascript
test("Deve aceitar um cadastro sem campos opcionais", () => {
    const resultado = validateLead({
        name: "Vaz",
        email: "vaz@gmail.com"
    });

    expect(resultado.valid).toBe(true);
    expect(resultado.errors).toEqual([]);
});
```

**Justificativa:**

Esse teste verifica se os campos opcionais podem ficar vazios sem impedir o cadastro do usuário.

---

### Teste 03 — Nome muito curto

- **Funcionalidade testada:** Validação do nome.
- **Nome do teste no Jest:** `Deve rejeitar um nome muito curto`.
- **Objetivo:** Verificar se a aplicação rejeita nomes com menos de 3 caracteres.
- **Tipo de cenário:** Negativo.
- **Entrada utilizada:**
  - Nome: Vz
  - E-mail: Vaz@gmail.com
- **Resultado esperado:** Retornar `valid: false` e apresentar pelo menos um erro.
- **Resultado obtido:** A confirmar pela execução no Jest.
- **Status:** Pendente de confirmação.

**Código do teste:**

```javascript
test("Deve rejeitar um nome muito curto", () => {
    const resultado = validateLead({
        name: "Vz",
        email: "Vaz@gmail.com"
    });

    expect(resultado.valid).toBe(false);
    expect(resultado.errors.length).toBeGreaterThan(0);
});
```

**Justificativa:**

Esse teste verifica se a aplicação identifica nomes que possuem menos de 3 caracteres e impede que sejam aceitos no cadastro.

---

### Teste 04 — Nome contendo apenas espaços

- **Funcionalidade testada:** Validação do nome.
- **Nome do teste no Jest:** `Deve rejeitar um nome com espaços vazios`.
- **Objetivo:** Verificar se a aplicação rejeita nomes preenchidos somente com espaços em branco.
- **Tipo de cenário:** Negativo.
- **Entrada utilizada:**
  - Nome: "   "
  - E-mail: vaz@gmail.com
- **Resultado esperado:** Retornar `valid: false` e apresentar pelo menos um erro.
- **Resultado obtido:** A confirmar pela execução no Jest.
- **Status:** Pendente de confirmação.

**Código do teste:**

```javascript
test("Deve rejeitar um nome com espaços vazios", () => {
    const resultado = validateLead({
        name: "   ",
        email: "vaz@gmail.com"
    });

    expect(resultado.valid).toBe(false);
    expect(resultado.errors.length).toBeGreaterThan(0);
});
```

**Justificativa:**

Esse teste verifica se a aplicação consegue identificar quando o usuário tenta preencher o nome utilizando apenas espaços, evitando cadastros sem um nome válido.

---

### Teste 05 — Nome com tipo incorreto

- **Funcionalidade testada:** Validação do nome.
- **Nome do teste no Jest:** `Deve rejeitar um nome que não seja texto`.
- **Objetivo:** Verificar se a aplicação rejeita nomes que não sejam do tipo texto.
- **Tipo de cenário:** Negativo.
- **Entrada utilizada:**
  - Nome: 123
  - E-mail: vaz@gmail.com
- **Resultado esperado:** Retornar `valid: false` e apresentar pelo menos um erro.
- **Resultado obtido:** A confirmar pela execução no Jest.
- **Status:** Pendente de confirmação.

**Código do teste:**

```javascript
test("Deve rejeitar um nome que não seja texto", () => {
    const resultado = validateLead({
        name: 123,
        email: "vaz@gmail.com"
    });

    expect(resultado.valid).toBe(false);
    expect(resultado.errors.length).toBeGreaterThan(0);
});
```

**Justificativa:**

Esse teste verifica se a aplicação identifica valores numéricos no campo de nome, garantindo que o usuário informe um texto.

---

### Teste 06 — E-mail sem arroba

- **Funcionalidade testada:** Validação do e-mail.
- **Nome do teste no Jest:** `Deve rejeitar um e-mail sem arroba`.
- **Objetivo:** Verificar se a aplicação rejeita e-mails que não possuem o símbolo @.
- **Tipo de cenário:** Negativo.
- **Entrada utilizada:**
  - Nome: Ana Silva
  - E-mail: anaemail.com
- **Resultado esperado:** Retornar `valid: false` e apresentar pelo menos um erro.
- **Resultado obtido:** A confirmar pela execução no Jest.
- **Status:** Pendente de confirmação.

**Código do teste:**

```javascript
test("Deve rejeitar um e-mail sem arroba", () => {
    const resultado = validateLead({
        name: "Ana Silva",
        email: "anaemail.com"
    });

    expect(resultado.valid).toBe(false);
    expect(resultado.errors.length).toBeGreaterThan(0);
});
```

**Justificativa:**

Esse teste verifica se a aplicação identifica e-mails sem o símbolo @, impedindo o preenchimento de endereços eletrônicos inválidos.

---

### Teste 07 — E-mail sem domínio completo

- **Funcionalidade testada:** Validação do e-mail.
- **Nome do teste no Jest:** `Deve rejeitar um e-mail sem domínio completo`.
- **Objetivo:** Verificar se a aplicação rejeita e-mails que não possuem um domínio completo.
- **Tipo de cenário:** Negativo.
- **Entrada utilizada:**
  - Nome: Ana Silva
  - E-mail: email@email
- **Resultado esperado:** Retornar `valid: false` e apresentar pelo menos um erro.
- **Resultado obtido:** A confirmar pela execução no Jest.
- **Status:** Pendente de confirmação.

**Código do teste:**

```javascript
test("Deve rejeitar um e-mail sem domínio completo", () => {
    const resultado = validateLead({
        name: "Ana Silva",
        email: "email@email"
    });

    expect(resultado.valid).toBe(false);
    expect(resultado.errors.length).toBeGreaterThan(0);
});
```

**Justificativa:**

Esse teste verifica se a aplicação consegue identificar e-mails incompletos, evitando que endereços sem domínio válido sejam aceitos.

---

### Teste 08 — E-mail com tipo incorreto

- **Funcionalidade testada:** Validação do e-mail.
- **Nome do teste no Jest:** `Deve rejeitar um e-mail que não seja texto`.
- **Objetivo:** Verificar se a aplicação rejeita e-mails que não sejam do tipo texto.
- **Tipo de cenário:** Negativo.
- **Entrada utilizada:**
  - Nome: Ana Silva
  - E-mail: 12345
- **Resultado esperado:** Retornar `valid: false` e apresentar pelo menos um erro.
- **Resultado obtido:** A confirmar pela execução no Jest.
- **Status:** Pendente de confirmação.

**Código do teste:**

```javascript
test("Deve rejeitar um e-mail que não seja texto", () => {
    const resultado = validateLead({
        name: "Ana Silva",
        email: 12345
    });

    expect(resultado.valid).toBe(false);
    expect(resultado.errors.length).toBeGreaterThan(0);
});
```

**Justificativa:**

Esse teste verifica se a aplicação rejeita valores numéricos no campo de e-mail, garantindo que seja informado um endereço eletrônico em formato de texto.

---

### Teste 09 — Telefone com tipo incorreto

- **Funcionalidade testada:** Validação do telefone.
- **Nome do teste no Jest:** `Deve rejeitar um telefone numérico`.
- **Objetivo:** Verificar se a aplicação rejeita telefones informados como números em vez de texto.
- **Tipo de cenário:** Negativo.
- **Entrada utilizada:**
  - Nome: Ana Silva
  - E-mail: ana@gmail.com
  - Telefone: 123456789 (número)
- **Resultado esperado:** Retornar `valid: false` e apresentar pelo menos um erro.
- **Resultado obtido:** A confirmar pela execução no Jest.
- **Status:** Pendente de confirmação.

**Código do teste:**

```javascript
test("Deve rejeitar um telefone numérico", () => {
    const resultado = validateLead({
        name: "Ana Silva",
        email: "ana@gmail.com",
        phone: 123456789
    });

    expect(resultado.valid).toBe(false);
    expect(resultado.errors.length).toBeGreaterThan(0);
});
```

**Justificativa:**

Esse teste verifica se a aplicação identifica quando o telefone é informado como número, garantindo que o campo seja preenchido como texto.

---

### Teste 10 — Modalidade inexistente

- **Funcionalidade testada:** Validação da modalidade.
- **Nome do teste no Jest:** `Deve rejeitar uma modalidade inexistente`.
- **Objetivo:** Verificar se a aplicação rejeita modalidades que não estão disponíveis.
- **Tipo de cenário:** Negativo.
- **Entrada utilizada:**
  - Nome: Ana Silva
  - E-mail: ana@gmail.com
  - Modalidade: Híbrido
- **Resultado esperado:** Retornar `valid: false` e apresentar pelo menos um erro.
- **Resultado obtido:** A confirmar pela execução no Jest.
- **Status:** Pendente de confirmação.

**Código do teste:**

```javascript
test("Deve rejeitar uma modalidade inexistente", () => {
    const resultado = validateLead({
        name: "Ana Silva",
        email: "ana@gmail.com",
        interest: "Híbrido"
    });

    expect(resultado.valid).toBe(false);
    expect(resultado.errors.length).toBeGreaterThan(0);
});
```

**Justificativa:**

Esse teste verifica se a aplicação impede que o usuário selecione uma modalidade que não está disponível entre as opções de cursos.

---

### Teste 11 — Modalidade escrita com letras diferentes

- **Funcionalidade testada:** Validação da modalidade.
- **Nome do teste no Jest:** `Deve rejeitar modalidade escrita com letras diferentes`.
- **Objetivo:** Verificar se a aplicação diferencia letras maiúsculas e minúsculas na modalidade selecionada.
- **Tipo de cenário:** Negativo.
- **Entrada utilizada:**
  - Nome: Ana Silva
  - E-mail: ana@gmail.com
  - Modalidade: online
- **Resultado esperado:** Retornar `valid: false` e apresentar pelo menos um erro.
- **Resultado obtido:** A confirmar pela execução no Jest.
- **Status:** Pendente de confirmação.

**Código do teste:**

```javascript
test("Deve rejeitar modalidade escrita com letras diferentes", () => {
    const resultado = validateLead({
        name: "Ana Silva",
        email: "ana@gmail.com",
        interest: "online"
    });

    expect(resultado.valid).toBe(false);
    expect(resultado.errors.length).toBeGreaterThan(0);
});
```

**Justificativa:**

Esse teste verifica se a aplicação diferencia letras maiúsculas e minúsculas, garantindo que a modalidade seja selecionada exatamente como aparece nas opções disponíveis.

## 6. Resumo dos resultados

| Indicador | Quantidade |
| --- | --- |
| Total de testes implementados | 11 |
| Testes positivos | 2 |
| Testes negativos | 9 |
| Testes aprovados | A confirmar |
| Testes reprovados | A confirmar |

**Percentual de aprovação:**

(Testes aprovados ÷ 11) × 100

O percentual deverá ser calculado após a execução dos testes no Jest.

## 7. Evidências da execução dos testes

Insira capturas de tela que comprovem a execução dos 11 testes no ambiente de desenvolvimento.

Inclua evidências que mostrem:

- Execução dos testes no Jest.
- Quantidade total de testes executados.
- Quantidade de testes aprovados e reprovados.
- Mensagens de erro, caso existam.
- Correções realizadas após a identificação de falhas, se aplicável.

**Evidências:**

<!-- Insira aqui as capturas de tela da execução dos testes. -->

## 8. Problemas identificados e correções realizadas

Durante a análise dos códigos, foi identificada uma diferença entre a quantidade mínima de caracteres mencionada nos comentários e a mensagem de erro apresentada pela função.

| Problema identificado | Causa do problema | Solução implementada | Situação |
| --- | --- | --- | --- |
| Mensagem de erro informa mínimo de 2 caracteres, enquanto a validação exige 3. | A mensagem de erro está diferente da regra utilizada na função. | Alterar a mensagem para informar mínimo de 3 caracteres. | Correção recomendada |

**Resposta:**

Foi identificada uma diferença na mensagem de erro da validação do nome. A função exige pelo menos 3 caracteres, mas a mensagem informa mínimo de 2. Essa diferença pode confundir o usuário e deve ser corrigida para manter as informações consistentes.

## 9. Análise dos resultados

**1. Todos os testes apresentaram os resultados esperados? Justifique.**

Os 11 testes foram desenvolvidos para verificar situações válidas e inválidas do cadastro. Entretanto, é necessário executar o Jest para confirmar se todos foram aprovados.

**2. Quais foram os cenários mais importantes verificados durante os testes?**

Foram verificados o cadastro completo, o cadastro sem campos opcionais, nomes inválidos, e-mails incorretos, telefones numéricos e modalidades inexistentes ou escritas de maneira diferente.

**3. Algum teste identificou uma falha na aplicação? Qual?**

A análise identificou uma diferença na mensagem de erro do nome, que informa mínimo de 2 caracteres, enquanto a validação exige 3.

**4. Quais alterações foram necessárias para corrigir os problemas encontrados?**

É recomendada a alteração da mensagem de erro na função `validateLead()`, para que informe corretamente o mínimo de 3 caracteres.

**5. Existem funcionalidades que ainda precisam ser testadas? Quais?**

Sim. A função `normalizeCourseFilter()`, responsável por normalizar os filtros de modalidade dos cursos, ainda precisa de testes unitários.

Também podem ser realizados testes adicionais para verificar outros comportamentos da validação de cadastro.

## 10. Conclusão

**Conclusão da equipe:**

Os testes unitários são importantes para verificar se as funcionalidades da aplicação estão funcionando corretamente. Neste projeto, foram desenvolvidos 11 testes para analisar a validação dos dados informados pelos usuários.

Os testes verificam diferentes situações, desde cadastros completos e válidos até informações incorretas, como nomes curtos, e-mails inválidos, telefones numéricos e modalidades inexistentes.

Com isso, é possível identificar possíveis falhas, melhorar as validações e garantir mais qualidade e segurança no cadastro de interessados da Academia Viva.

---

**Relatório elaborado por:** Davi Brandao Miranda Vaz

**Data da última atualização:** 16/11/2026
