const {
  usuarios,
  perfis,
} = require('../data/db');

module.exports = {
  ola() {
    return `olá`;
  },
  horaAtual() {
    return new Date;
  },
  usuarioLogado() {
    return {
      id: 1,
      nome: 'Tiago',
      email: 'tiago.jlima.developer@gmail.com',
      idade: 29,
      salario_real: 100.50,
      vip: true,
    };
  },
  produto() {
    return {
      nome: 'oakley',
      preco: 500.00,
      desconto: 0.50,
    }
  },
  numerosMegaSena() {
    const crescente = (a, b) => a - b;
    return Array(6).fill(0).map(() => parseInt(Math.random() * 60 + 1)).sort(crescente);
  },
  usuarios() {
    return usuarios;
  },
  usuario(_, { id }) {
    const selecionados = usuarios.filter(usuario => usuario.id === id);
    return selecionados ? selecionados[0] : null;
  },
  perfis() {
    return perfis;
  },
  perfil(_, { id }) {
    const filtroPerfis = perfis.filter(perfil => perfil.id === id );
    return filtroPerfis ? filtroPerfis[0] : null; 
  }
};