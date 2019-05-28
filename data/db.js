let id = 1;
function proximoId() {
  return id++;
};

const usuarios = [
  {
    id: proximoId(),
    nome: 'tiago lima',
    email: 'tiago.jlima@yahoo.com.br',
    idade: 24,
    salario_real: 1150.00,
    vip: true,
    perfil_id: 1,
    status: 'ATIVO'
  },
];

const perfis = [
  {
    id: 1,
    nome: 'comum',
  },
  {
    id: 2,
    nome: 'administrador',
  },
];

module.exports = {
  usuarios,
  perfis,
  proximoId,
};