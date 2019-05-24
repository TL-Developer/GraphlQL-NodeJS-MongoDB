const { perfis } = require('../data/db');

module.exports = {
  salario(usuario) {
    return usuario.salario_real;
  },
  perfil(user) {
    const filtroPerfis = perfis.filter(perfil => perfil.id === user.perfil_id);
    return filtroPerfis ? filtroPerfis[0] : null; 
  },
}