const { normalizeTitle } = require('../../src/validation');

// Importa a função 'normalizeTitle'
describe('Validação de tarefas', () => {
    test('Remove os espaços do iníco e do fim do título', () =>{
        expect(normalizeTitle('   Teste Unitário   ')).toBe('Teste Unitário')
    });
});

    test('Retorna String Vazia se o título for um número', () => {
        expect(normalizeTitle(15487)).toBe('')
    });

    test('Retorna String Vazia se o título for nulo', () => {
        expect(normalizeTitle(null)).toBe('')
    })
    test('Retorna String Vazia se o título for indefinido', () => {
        expect(normalizeTitle(undefined)).toBe('')
    })