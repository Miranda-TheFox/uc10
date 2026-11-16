// Importação de módulos
const {validateLead, normalizeCourseFilter} = require("../src/validation");

// Agrupamento de testes da função validateLead()
describe("Aplicação de testes unitários na função validateLead()", () => {

    // Teste 01 – cenário positivo
    test("Verifica nome válido", () => {
        // Passamos um nome válido
        const result = validateLead({name: "João", email: "email@email.com"});
        expect(result.errors.length).toBe(0);
        expect(result.valid).toBe(true);
    });

    // Teste 02 – cenário negativo
    test("Verifica nome inválido", () => {
        // Passamos um nome inválido com apenas 1 caractere e guardamos o resultado na constante "result"
        const result = validateLead({name: "J", email: "email@email.com"});
        expect(result.errors).toContain("Informe seu nome (mínimo de 3 caracteres).");
    });

    // Teste 03 – cenário limite: nome com exatamente 3 caracteres
    test("Aceita nome com exatamente 3 caracteres", () => {
        const result = validateLead({name: "Ana", email: "ana@email.com"});
        expect(result.valid).toBe(true);
        expect(result.errors).toEqual([]);
    });

    // Teste 04 – cenário negativo: e-mail sem "@"
    test("Rejeita e-mail com formato inválido", () => {
        const result = validateLead({name: "Maria", email: "maria.email.com"});
        expect(result.valid).toBe(false);
        expect(result.errors).toContain("Informe um e-mail válido.");
    });

    // Teste 05 – cenário excepcional: e-mail não informado
    test("Rejeita e-mail não informado", () => {
        const result = validateLead({name: "Maria"});
        expect(result.valid).toBe(false);
        expect(result.errors).toContain("Informe um e-mail válido.");
    });

    // Teste 06 – cenário negativo: telefone que não é string
    test("Rejeita telefone que não seja texto", () => {
        const result = validateLead({name: "Carlos", email: "carlos@email.com", phone: 11999999999});
        expect(result.valid).toBe(false);
        expect(result.errors).toContain("Preencha o telefone corretamente.");
    });

    // Teste 07 – cenário negativo: modalidade fora da lista permitida
    test("Rejeita modalidade de interesse inválida", () => {
        const result = validateLead({name: "Carlos", email: "carlos@email.com", interest: "Híbrido"});
        expect(result.valid).toBe(false);
        expect(result.errors).toContain("Selecione uma modalidade válida.");
    });

    // Teste 08 – cenário positivo: campos opcionais ausentes e modalidade válida
    test("Aceita lead sem telefone e com modalidade válida", () => {
        const result = validateLead({name: "Beatriz", email: "bia@email.com", interest: "Presencial"});
        expect(result.valid).toBe(true);
        expect(result.errors).toHaveLength(0);
    });

    // Teste 09 – cenário excepcional: vários erros ao mesmo tempo
    test("Acumula todos os erros quando vários campos são inválidos", () => {
        const result = validateLead({name: "J", email: "x", phone: 123, interest: "Outro"});
        expect(result.valid).toBe(false);
        expect(result.errors).toHaveLength(4);
    });
});

// Agrupamento de testes da função normalizeCourseFilter()
describe("Aplicação de testes unitários na função normalizeCourseFilter()", () => {

    // Teste 10 – cenário positivo
    test("Retorna a modalidade quando ela é permitida", () => {
        expect(normalizeCourseFilter("Online")).toBe("Online");
        expect(normalizeCourseFilter("Presencial")).toBe("Presencial");
    });

    // Teste 11 – cenários negativos: "Todos", vazio ou valor desconhecido
    test("Retorna null para 'Todos', valor vazio ou modalidade desconhecida", () => {
        expect(normalizeCourseFilter("Todos")).toBeNull();
        expect(normalizeCourseFilter(undefined)).toBeNull();
        expect(normalizeCourseFilter("Híbrido")).toBeNull();
    });
});
