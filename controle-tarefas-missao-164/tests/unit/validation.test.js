
const { validateLead } = require("../src/validation");

describe("Aplicação de testes unitários na função validateLead()", () => {

    // 1: Cadastro completo válido
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

    // 2: Cadastro mínimo válido
    test("Deve aceitar um cadastro sem campos opcionais", () => {
        const resultado = validateLead({
            name: "Vaz",
            email: "vaz@gmail.com"
        });

        expect(resultado.valid).toBe(true);
        expect(resultado.errors).toEqual([]);
    });

    // 3: Nome muito curto
    test("Deve rejeitar um nome muito curto", () => {
        const resultado = validateLead({
            name: "Vz",
            email: "Vaz@gmail.com"
        });

        expect(resultado.valid).toBe(false);
        expect(resultado.errors.length).toBeGreaterThan(0);
    });

    // 4: Nome contendo apenas espaços
    test("Deve rejeitar um nome com espaços vazios", () => {
        const resultado = validateLead({
            name: "   ",
            email: "vaz@gmail.com"
        });

        expect(resultado.valid).toBe(false);
        expect(resultado.errors.length).toBeGreaterThan(0);
    });

    // 5: Nome com tipo incorreto
    test("Deve rejeitar um nome que não seja texto", () => {
        const resultado = validateLead({
            name: 123,
            email: "vaz@gmail.com"
        });

        expect(resultado.valid).toBe(false);
        expect(resultado.errors.length).toBeGreaterThan(0);
    });

    // 6: E-mail sem @
    test("Deve rejeitar um e-mail sem arroba", () => {
        const resultado = validateLead({
            name: "Ana Silva",
            email: "anaemail.com"
        });

        expect(resultado.valid).toBe(false);
        expect(resultado.errors.length).toBeGreaterThan(0);
    });

    // 7: E-mail incompleto
    test("Deve rejeitar um e-mail sem domínio completo", () => {
        const resultado = validateLead({
            name: "Ana Silva",
            email: "email@email"
        });

        expect(resultado.valid).toBe(false);
        expect(resultado.errors.length).toBeGreaterThan(0);
    });

    // 8: E-mail com tipo incorreto
    test("Deve rejeitar um e-mail que não seja texto", () => {
        const resultado = validateLead({
            name: "Ana Silva",
            email: 12345
        });

        expect(resultado.valid).toBe(false);
        expect(resultado.errors.length).toBeGreaterThan(0);
    });

    // 9: Telefone com tipo incorreto
    test("Deve rejeitar um telefone numérico", () => {
        const resultado = validateLead({
            name: "Ana Silva",
            email: "ana@gmail.com",
            phone: 123456789
        });

        expect(resultado.valid).toBe(false);
        expect(resultado.errors.length).toBeGreaterThan(0);
    });

    // 10: Modalidade inválida
    test("Deve rejeitar uma modalidade inexistente", () => {
        const resultado = validateLead({
            name: "Ana Silva",
            email: "ana@gmail.com",
            interest: "Híbrido"
        });

        expect(resultado.valid).toBe(false);
        expect(resultado.errors.length).toBeGreaterThan(0);
    });

    // 11: Modalidade com letras minúsculas
    test("Deve rejeitar modalidade escrita com letras diferentes", () => {
        const resultado = validateLead({
            name: "Ana Silva",
            email: "ana@gmail.com",
            interest: "online"
        });

        expect(resultado.valid).toBe(false);
        expect(resultado.errors.length).toBeGreaterThan(0);
    });

});
