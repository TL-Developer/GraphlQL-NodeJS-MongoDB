const {
  usuarios,
  perfis,
} = require('../data/db');

module.exports = {
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