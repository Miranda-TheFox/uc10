// esta função extrai os campos do formulario
function validateLead({ name, email, phone, interest }) {
  //cria um vetor que ira acumular problemas encontraados ao longo da validação.
  const errors = [];

  // validaçao do nome: verifica se o nome não é uma string ou se tem menos que 3 caracteres
  if (typeof name !== "string" || name.trim().length < 3) {
    errors.push("Informe seu nome (mínimo de 2 caracteres).");
  }

  // validação de e-mail: verifica se  o e-mail nao é uma string ou se ele nao passa no teste de validacao
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  if (typeof email !== "string" || !emailPattern.test(email.trim())) {
    errors.push("Informe um e-mail válido.");
  }

  // validação de telefone: verifica se o telefone foi preenchido no formularioe se o tipo da variavel "phone" é diferente da string
  if (phone && typeof phone !== "string") {
    errors.push("O telefone deve ser um texto.");
  }

  const allowedInterests = ["Online", "Presencial", "Ainda não sei"];
  if (interest && !allowedInterests.includes(interest)) {
    errors.push("Selecione uma modalidade válida.");
  }

  return { valid: errors.length === 0, errors };
}

function normalizeCourseFilter(modality) {
  if (!modality || modality === "Todos") return null;
  const allowed = ["Online", "Presencial"];
  return allowed.includes(modality) ? modality : null;
}

module.exports = { validateLead, normalizeCourseFilter };
