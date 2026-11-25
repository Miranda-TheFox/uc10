
const {
    calcularDesconto,
    verificarAprovacao,
    validarCadastro,
    calcularFrete,
    converterCelsiusParaFahrenheit,
    calcularTotal,
    validarSenha,
    verificarEstoque,
    calcularMedia
} = require('../src/operacoes');

// QUESTÃO 1 - CALCULAR DESCONTO
describe('Testes para calcularDesconto', () => {

    test('Deve calcular desconto de 10%', () => {
        expect(calcularDesconto(100, 10)).toBe(90);
    });

    test('Deve retornar zero com desconto de 100%', () => {
        expect(calcularDesconto(200, 100)).toBe(0);
    });

    test('Deve lançar erro quando o valor for negativo', () => {
        expect(() => calcularDesconto(-50, 10)).toThrow('Dados inválidos');
    });

});

// QUESTÃO 2 - VERIFICAR APROVAÇÃO
describe('Testes para verificarAprovacao', () => {

    test('Deve aprovar nota 8', () => {
        expect(verificarAprovacao(8)).toBe('Aprovado');
    });

    test('Deve aprovar nota 7', () => {
        expect(verificarAprovacao(7)).toBe('Aprovado');
    });

    test('Deve reprovar nota 5', () => {
        expect(verificarAprovacao(5)).toBe('Reprovado');
    });

    test('Deve lançar erro para nota inválida', () => {
        expect(() => verificarAprovacao(11)).toThrow('Nota inválida');
    });

});

// QUESTÃO 3 - VALIDAR CADASTRO
describe('Testes para validarCadastro', () => {

    test('Deve aceitar todos os dados válidos', () => {
        expect(validarCadastro('João', 25, 'joao@email.com')).toBe(true);
    });

    test('Deve rejeitar todos os dados inválidos', () => {
        expect(validarCadastro('', 17, 'joaoemail.com')).toBe(false);
    });

    test('Deve rejeitar nome vazio', () => {
        expect(validarCadastro('', 25, 'joao@email.com')).toBe(false);
    });

    test('Deve rejeitar nome com apenas espaços', () => {
        expect(validarCadastro('   ', 25, 'joao@email.com')).toBe(false);
    });

    test('Deve rejeitar idade vazia', () => {
        expect(validarCadastro('João', 0, 'joao@email.com')).toBe(false);
    });

    test('Deve rejeitar idade abaixo de 18', () => {
        expect(validarCadastro('João', 17, 'joao@email.com')).toBe(false);
    });

    test('Deve rejeitar idade acima de 100', () => {
        expect(validarCadastro('João', 101, 'joao@email.com')).toBe(false);
    });

    test('Deve rejeitar email vazio', () => {
        expect(validarCadastro('João', 25, '')).toBe(false);
    });

    test('Deve rejeitar email sem @', () => {
        expect(validarCadastro('João', 25, 'joaoemail.com')).toBe(false);
    });

});

// QUESTÃO 4 - CALCULAR FRETE
describe('Testes para calcularFrete', () => {

    test('Deve retornar zero para compra de 250', () => {
        expect(calcularFrete(250, 10)).toBe(0);
    });

    test('Deve calcular frete de 20 reais', () => {
        expect(calcularFrete(100, 10)).toBe(20);
    });

    test('Deve retornar zero para compra de 200', () => {
        expect(calcularFrete(200, 5)).toBe(0);
    });

    test('Deve calcular frete quando a compra for zero', () => {
        expect(calcularFrete(0, 10)).toBe(20);
    });

    test('Deve lançar erro para compra negativa', () => {
        expect(() => calcularFrete(-50, 10)).toThrow('Valores inválidos');
    });

    test('Deve lançar erro para distância negativa', () => {
        expect(() => calcularFrete(100, -5)).toThrow('Valores inválidos');
    });

});

// QUESTÃO 5 - CONVERTER TEMPERATURA
describe('Testes para converterCelsiusParaFahrenheit', () => {

    test('Deve converter 0 graus para 32 Fahrenheit', () => {
        expect(converterCelsiusParaFahrenheit(0)).toBe(32);
    });

    test('Deve converter 100 graus para 212 Fahrenheit', () => {
        expect(converterCelsiusParaFahrenheit(100)).toBe(212);
    });

    test('Deve converter -40 graus para -40 Fahrenheit', () => {
        expect(converterCelsiusParaFahrenheit(-40)).toBe(-40);
    });

    test('Deve converter 25 graus para 77 Fahrenheit', () => {
        expect(converterCelsiusParaFahrenheit(25)).toBe(77);
    });

    test('Deve lançar erro quando receber uma string numérica', () => {
        expect(() => converterCelsiusParaFahrenheit('25'))
            .toThrow('A temperatura deve ser numérica');
    });

    test('Deve lançar erro quando receber texto', () => {
        expect(() => converterCelsiusParaFahrenheit('abc'))
            .toThrow('A temperatura deve ser numérica');
    });

});

// QUESTÃO 6 - CALCULAR TOTAL
describe('Testes para calcularTotal', () => {

    test('Deve calcular o total corretamente', () => {
        expect(calcularTotal(3, 10)).toBe(30);
    });

    test('Deve retornar zero quando a quantidade for zero', () => {
        expect(calcularTotal(0, 10)).toBe(0);
    });

    test('Deve lançar erro quando a quantidade for negativa', () => {
        expect(() => calcularTotal(-2, 10)).toThrow('Valores inválidos');
    });

    test('Deve lançar erro quando o preço for negativo', () => {
        expect(() => calcularTotal(2, -5)).toThrow('Valores inválidos');
    });

});

// QUESTÃO 7 - VALIDAR SENHA
describe('Testes para validarSenha', () => {

    test('Deve aceitar senha com 8 caracteres', () => {
        expect(validarSenha('abc12345')).toBe(true);
    });

    test('Deve rejeitar senha com menos de 8 caracteres', () => {
        expect(validarSenha('abc123')).toBe(false);
    });

    test('Deve aceitar senha com 10 caracteres', () => {
        expect(validarSenha('abc1234567')).toBe(true);
    });

    test('Deve aceitar senha com 12 caracteres', () => {
        expect(validarSenha('abc123456789')).toBe(true);
    });

});

// QUESTÃO 8 - VERIFICAR ESTOQUE
describe('Testes para verificarEstoque', () => {

    test('Deve aprovar pedido com estoque suficiente', () => {
        expect(verificarEstoque(20, 5)).toBe('Pedido aprovado');
    });

    test('Deve informar estoque insuficiente', () => {
        expect(verificarEstoque(5, 10)).toBe('Estoque insuficiente');
    });

    test('Deve aprovar pedido com quantidade igual ao estoque', () => {
        expect(verificarEstoque(10, 10)).toBe('Pedido aprovado');
    });

    test('Deve lançar erro quando a quantidade for zero', () => {
        expect(() => verificarEstoque(10, 0)).toThrow('Quantidade inválida');
    });

    test('Deve lançar erro quando a quantidade for negativa', () => {
        expect(() => verificarEstoque(10, -2)).toThrow('Quantidade inválida');
    });

});

// QUESTÃO 9 - CALCULAR MÉDIA
describe('Testes para calcularMedia', () => {

    test('Deve calcular a média de 8 e 6', () => {
        expect(calcularMedia(8, 6)).toBe(7);
    });

    test('Deve calcular a média de duas notas 10', () => {
        expect(calcularMedia(10, 10)).toBe(10);
    });

    test('Deve calcular a média de 0 e 8', () => {
        expect(calcularMedia(0, 8)).toBe(4);
    });

    test('Deve lançar erro quando uma nota for negativa', () => {
        expect(() => calcularMedia(-1, 8)).toThrow('Notas inválidas');
    });

    test('Deve lançar erro quando uma nota for maior que 10', () => {
        expect(() => calcularMedia(5, 15)).toThrow('Notas inválidas');
    });

    test('Deve calcular a média de duas notas zero', () => {
        expect(calcularMedia(0, 0)).toBe(0);
    });

    test('Deve calcular a média de 10 e 0', () => {
        expect(calcularMedia(10, 0)).toBe(5);
    });

    test('Deve lançar erro quando a segunda nota for negativa', () => {
        expect(() => calcularMedia(8, -2)).toThrow('Notas inválidas');
    });

});
