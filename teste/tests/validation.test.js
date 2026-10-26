const test = require('supertest/lib/test');
const {normalizetitle} = require('../../src/validation');

descritbe('validação de tarefas', () => {

    test('Remove espaços do início e do fim do título', () => {

        expect(normalizetitle('   Teste Unitário   ')).toBe('Teste Unitário');
    });

    test('retorna string vazia se o titulo for um numero', () => {

        expect(normalizetitle(15487)).toBe('');
    });

    
});