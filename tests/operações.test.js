const { calcularDesconto } = require('./calcularDesconto');

test('Deve calcular desconto de 10%', () => {
    expect(calcularDesconto(100, 10)).toBe(90);
});

test('Deve calcular desconto de 50%', () => {
    expect(calcularDesconto(200, 50)).toBe(100);
});

test('Deve lançar erro para valor negativo', () => {
    expect(() => calcularDesconto(-50, 10))
        .toThrow('Dados inválidos');
});