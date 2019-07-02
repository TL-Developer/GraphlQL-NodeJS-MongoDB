const {
  perfis,
  proximoId,
} = require('../../data/db');

function indiceUsuario(filtro) {
  if(!filtro) return -1;
  const {
    id,
    email,
  } = filtro;

  if(id) {
    return usuarios.findIndex(usuario => usuario.id === id);
  } else if(email) {
    return usuarios.findIndex(usuario => usuario.email === email);
  }

  return -1;
};

module.exports = {
  novoPerfil(_, { dados }) {
    perfis.push({
      id: proximoId(),
      ...dados,
    });
  },
  excluirPerfil(_, { filtro }) {
    const { id } = filtro;
    const perfilIndex = perfis.findIndex(perfil => perfil.id === id);
    if (perfilIndex < 0) return null
    const excluidos = perfis.splice(perfilIndex, 1);
    return excluidos ? excluidos[0] : null;
  },
  alterarPerfil(_, { dados, filtro }) {
    const { id } = filtro;
    const perfilIndex = perfis.findIndex(perfil => perfil.id === id);
    const perfil = {
      ...perfis[perfilIndex],
      ...dados,
    };
    perfis.splice(perfilIndex, 1, perfil);
  },
};