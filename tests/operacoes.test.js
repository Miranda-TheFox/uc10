// operacoes.test.js
// Testes da Missão 171, na ordem dos exercícios (1 a 9).

const {
    calcularDesconto,
    verificarAprovacao,
    validarCadastro,
    calcularFrete,
    converterCelsiusParaFahrenheit,
    calcularTotal,
    validarSenha,
    verificarEstoque,
    calcularMedia,
} = require("../src/operacoes");



// ---------------------------------------------------------
// EXERCÍCIO 1 - calcularDesconto
// ---------------------------------------------------------
describe("Exercício 1 - calcularDesconto", () => {
    test("deve aplicar 10% de desconto em 100 e retornar 90", () => {
        expect(calcularDesconto(100, 10)).toBe(90);
    });

    test("deve aplicar 50% de desconto em 200 e retornar 100", () => {
        expect(calcularDesconto(200, 50)).toBe(100);
    });

    test("deve lançar erro quando o valor for zero", () => {
        expect(() => calcularDesconto(0, 10)).toThrow("Dados inválidos");
    });
});

// ---------------------------------------------------------
// EXERCÍCIO 2 - verificarAprovacao
// ---------------------------------------------------------
describe("Exercício 2 - verificarAprovacao", () => {
    test("deve retornar Aprovado para nota 8", () => {
        expect(verificarAprovacao(8)).toBe("Aprovado");
    });

    test("deve retornar Aprovado para nota 7 (limite)", () => {
        expect(verificarAprovacao(7)).toBe("Aprovado");
    });

    test("deve retornar Reprovado para nota 5", () => {
        expect(verificarAprovacao(5)).toBe("Reprovado");
    });

    test("deve lançar erro para nota maior que 10", () => {
        expect(() => verificarAprovacao(11)).toThrow("Nota inválida");
    });

    test("deve lançar erro para nota negativa", () => {
        expect(() => verificarAprovacao(-1)).toThrow("Nota inválida");
    });
});

// ---------------------------------------------------------
// EXERCÍCIO 3 - validarCadastro
// ---------------------------------------------------------
describe("Exercício 3 - validarCadastro", () => {
    test("todos os dados válidos deve retornar true", () => {
        expect(validarCadastro("Ana", 25, "ana@email.com")).toBe(true);
    });

    test("todos os dados inválidos deve retornar false", () => {
        expect(validarCadastro("", 10, "anaemail.com")).toBe(false);
    });

    test("nome vazio deve retornar false", () => {
        expect(validarCadastro("", 25, "ana@email.com")).toBe(false);
    });

    test("nome só com espaços deve retornar false", () => {
        expect(validarCadastro("   ", 25, "ana@email.com")).toBe(false);
    });

    test("idade vazia deve retornar false", () => {
        expect(validarCadastro("Ana", "", "ana@email.com")).toBe(false);
    });

    test("idade abaixo do limite (17) deve retornar false", () => {
        expect(validarCadastro("Ana", 17, "ana@email.com")).toBe(false);
    });

    test("idade acima do limite (101) deve retornar false", () => {
        expect(validarCadastro("Ana", 101, "ana@email.com")).toBe(false);
    });

    test("e-mail vazio deve retornar false", () => {
        expect(validarCadastro("Ana", 25, "")).toBe(false);
    });

    test("e-mail sem @ deve retornar false", () => {
        expect(validarCadastro("Ana", 25, "anaemail.com")).toBe(false);
    });
});

// ---------------------------------------------------------
// EXERCÍCIO 4 - calcularFrete
// ---------------------------------------------------------
describe("Exercício 4 - calcularFrete", () => {
    test("caso 1: compra 250 e distância 10 deve retornar 0", () => {
        expect(calcularFrete(250, 10)).toBe(0);
    });

    test("caso 2: compra 100 e distância 10 deve retornar 20", () => {
        expect(calcularFrete(100, 10)).toBe(20);
    });

    test("caso 3: compra 200 e distância 5 deve retornar 0", () => {
        expect(calcularFrete(200, 5)).toBe(0);
    });

    test("caso 4: compra 0 e distância 10 deve retornar 20", () => {
        expect(calcularFrete(0, 10)).toBe(20);
    });

    test("caso 5: compra negativa deve lançar erro", () => {
        expect(() => calcularFrete(-50, 10)).toThrow();
    });

    test("caso 6: distância negativa deve lançar erro", () => {
        expect(() => calcularFrete(100, -5)).toThrow();
    });
});

// ---------------------------------------------------------
// EXERCÍCIO 5 - converterCelsiusParaFahrenheit
// ---------------------------------------------------------
describe("Exercício 5 - converterCelsiusParaFahrenheit", () => {
    test("caso 1: 0 °C deve retornar 32", () => {
        expect(converterCelsiusParaFahrenheit(0)).toBe(32);
    });

    test("caso 2: 100 °C deve retornar 212", () => {
        expect(converterCelsiusParaFahrenheit(100)).toBe(212);
    });

    test("caso 3: -40 °C deve retornar -40", () => {
        expect(converterCelsiusParaFahrenheit(-40)).toBe(-40);
    });

    test("caso 4: 25 °C deve retornar 77", () => {
        expect(converterCelsiusParaFahrenheit(25)).toBe(77);
    });

    test("caso 5: texto \"25\" deve lançar erro", () => {
        expect(() => converterCelsiusParaFahrenheit("25")).toThrow();
    });

    test("caso 6: texto \"abc\" deve lançar erro", () => {
        expect(() => converterCelsiusParaFahrenheit("abc")).toThrow();
    });
});

// ---------------------------------------------------------
// EXERCÍCIO 6 - calcularTotal
// (o Teste D original FALHA; aqui está a versão corrigida)
// ---------------------------------------------------------
describe("Exercício 6 - calcularTotal", () => {
    test("Teste A: deve calcular o total corretamente", () => {
        expect(calcularTotal(3, 10)).toBe(30);
    });

    test("Teste B: deve retornar zero quando a quantidade for zero", () => {
        expect(calcularTotal(0, 10)).toBe(0);
    });

    test("Teste C: deve lançar erro quando a quantidade for negativa", () => {
        expect(() => calcularTotal(-2, 10)).toThrow("Valores inválidos");
    });

    // Original: expect(calcularTotal(2, -5)).toBe(-10);  -> FALHA
    test("Teste D (corrigido): deve lançar erro quando o preço for negativo", () => {
        expect(() => calcularTotal(2, -5)).toThrow("Valores inválidos");
    });
});

// ---------------------------------------------------------
// EXERCÍCIO 7 - validarSenha
// (o Teste C original FALHA; aqui está a versão corrigida)
// ---------------------------------------------------------
describe("Exercício 7 - validarSenha", () => {
    test("Teste A: deve aceitar senha com 8 caracteres", () => {
        expect(validarSenha("abc12345")).toBe(true);
    });

    test("Teste B: deve rejeitar senha com menos de 8 caracteres", () => {
        expect(validarSenha("abc123")).toBe(false);
    });

    // Original: expect(validarSenha("abc1234567")).toBe(false);  -> FALHA
    test("Teste C (corrigido): deve aceitar senha com 10 caracteres", () => {
        expect(validarSenha("abc1234567")).toBe(true);
    });

    test("Teste D: deve aceitar senha com 12 caracteres", () => {
        expect(validarSenha("abc123456789")).toBe(true);
    });
});

// ---------------------------------------------------------
// EXERCÍCIO 8 - verificarEstoque
// (o Teste D original FALHA; aqui está a versão corrigida)
// ---------------------------------------------------------
describe("Exercício 8 - verificarEstoque", () => {
    test("Teste A: deve aprovar pedido quando há estoque suficiente", () => {
        expect(verificarEstoque(20, 5)).toBe("Pedido aprovado");
    });

    test("Teste B: deve informar estoque insuficiente", () => {
        expect(verificarEstoque(5, 10)).toBe("Estoque insuficiente");
    });

    test("Teste C: deve aprovar pedido com quantidade igual ao estoque", () => {
        expect(verificarEstoque(10, 10)).toBe("Pedido aprovado");
    });

    // Original: expect(verificarEstoque(10, 0)).toBe("Estoque insuficiente");  -> FALHA
    test("Teste D (corrigido): deve lançar erro para quantidade zero", () => {
        expect(() => verificarEstoque(10, 0)).toThrow("Quantidade inválida");
    });

    test("Teste E: deve lançar erro para quantidade negativa", () => {
        expect(() => verificarEstoque(10, -2)).toThrow("Quantidade inválida");
    });
});

// ---------------------------------------------------------
// EXERCÍCIO 9 - calcularMedia
// (os Testes 4 e 5 originais FALHAM; aqui estão as versões corrigidas)
// ---------------------------------------------------------
describe("Exercício 9 - calcularMedia", () => {
    test("Teste 1: média de 8 e 6 deve ser 7", () => {
        expect(calcularMedia(8, 6)).toBe(7);
    });

    test("Teste 2: média de 10 e 10 deve ser 10", () => {
        expect(calcularMedia(10, 10)).toBe(10);
    });

    test("Teste 3: média de 0 e 8 deve ser 4", () => {
        expect(calcularMedia(0, 8)).toBe(4);
    });

    // Original: expect(calcularMedia(-1, 8)).toBe(3.5);  -> FALHA
    test("Teste 4 (corrigido): nota negativa deve lançar erro", () => {
        expect(() => calcularMedia(-1, 8)).toThrow("Notas inválidas");
    });

    // Original: expect(calcularMedia(5, 15)).toBe(10);  -> FALHA
    test("Teste 5 (corrigido): nota maior que 10 deve lançar erro", () => {
        expect(() => calcularMedia(5, 15)).toThrow("Notas inválidas");
    });

    // 9b) Três testes novos
    test("Teste 6 (novo): média de 0 e 0 deve ser 0", () => {
        expect(calcularMedia(0, 0)).toBe(0);
    });

    test("Teste 7 (novo): média de 7 e 8 deve ser 7.5", () => {
        expect(calcularMedia(7, 8)).toBe(7.5);
    });

    test("Teste 8 (novo): segunda nota maior que 10 deve lançar erro", () => {
        expect(() => calcularMedia(8, 11)).toThrow("Notas inválidas");
    });
});