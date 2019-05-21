const {
  ApolloServer,
  gql,
} = require('apollo-server');

const typeDefs = gql`
  scalar Date

  type Usuario {
    id: ID,
    nome: String!,
    email: String!,
    idade: Int,
    salario: Float,
    vip: Boolean,
  }

  type Query {
    ola: String!,
    horaAtual: Date!,
    usuarioLogado: Usuario,
  }
`;

const resolvers = {
  Usuario: {
    salario(usuario) {
      return usuario.salario_real;
    },
  },
  Query: {
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
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Executando em ${url}`);
});