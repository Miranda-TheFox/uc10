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
    });
    test('Retorna String Vazia se o título for indefinido', () => {
        expect(normalizeTitle(undefined)).toBe('')
    });
    

    //casos de teste para a função ValidateTaskInput

    // Testa se um título válido é aceito pelo sistema
    test('Aceita um título válido', () => {
        // Envia um título para ser validado
    const resultado = validateTaskInput({
        title: 'Estudar JavaScript'
    });

        // Verifica se a validação foi aprovada
    expect(resultado.valid).toBe(true);
});

    // Testa se o sistema rejeita um título vazio
    test('Rejeita um título vazio', () => {
        // Envia um título sem nenhum texto
    const resultado = validateTaskInput({
        title: ''
    });

        // Verifica se a validação foi reprovada
    expect(resultado.valid).toBe(false);
});

    // Testa se o sistema rejeita a ausência do título
    test('Rejeita quando o título está ausente', () => {
        // Envia um objeto sem a propriedade title
    const resultado = validateTaskInput({});

        // Verifica se a validação foi reprovada
    expect(resultado.valid).toBe(false);
});

    // fim dos casos de teste para a função ValidateTaskInput