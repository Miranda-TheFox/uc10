const {validateLead} = require("../src/validation")

describe("aplicação de testes unitários na função validatelead()", () => {

// 1. Cadastro completo válido (todos os campos preenchidos corretamente)
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

    // 2. Cadastro mínimo válido (apenas os campos obrigatórios preenchidos)
    test("Deve aceitar um cadastro sem campos opcionais", () => {
        const resultado = validateLead({
            name: "Vaz",
            email: "vaz@gmail.com"
        });

        expect(resultado.valid).toBe(true);
        expect(resultado.errors).toEqual([]);
    });

    // 3. Nome muito curto (menos de 3 caracteres)
    test("Deve rejeitar um nome muito curto", () => {
        const resultado = validateLead({
            name: "Vz",
            email: "Vaz@gmail.com"
        });

        expect(resultado.valid).toBe(false);
        expect(resultado.errors.length).toBeGreaterThan(0);
    });

    // 4. Nome com espaços vazios (contendo apenas espaços em branco)
    test("Deve rejeitar um nome com espaços vazios", () => {
        const resultado = validateLead({
            name: "   ",
            email: "vaz@gmail.com"
        });

        expect(resultado.valid).toBe(false);
        expect(resultado.errors.length).toBeGreaterThan(0);
    });


});

