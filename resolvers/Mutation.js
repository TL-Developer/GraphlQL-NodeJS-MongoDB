const {
  usuarios,
  proximoId,
} = require('../data/db');

module.exports = {
  novoUsuario(_, args) {
    const emailExistente = usuarios.some(usuario => usuario.email === args.email);

    if (emailExistente) {
      throw new Error('E-mail já cadastrado');
    }

    const novo = {
      id: proximoId,
      ...args,
      perfil_id: 1,
      status: 'ATIVO',
    }

    usuarios.push(novo);
    return novo;
  },
  excluirUsuario(_, { id }) {
    const usuarioId = usuarios.findIndex(usuario => usuario.id === id);

    if (usuarioId < 0) return null
    const excluidos = usuarios.splice(usuarioId, 1);
    
    return excluidos ? excluidos[0] : null;
  },
  alterarUsuario(_, args) {
    const userIndex = usuarios.findIndex(user => user.id === args.id);
    if (userIndex < 0) return null;

    const usuario = {
      ...usuarios[userIndex],
      ...args,
    };

    usuarios.splice(userIndex, 1, usuario);
  },
};