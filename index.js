const {
  ApolloServer,
  gql,
} = require('apollo-server');

const typeDefs = gql`
  scalar Date

  type Produto {
    nome: String!,
    preco: Float!,
    desconto: Float,
    precoComDesconto: Float!,
  }

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
    produto: Produto,
  }
`;

const resolvers = {
  Usuario: {
    salario(usuario) {
      return usuario.salario_real;
    },
  },
  Produto: {
    precoComDesconto(produto) {
      if (!produto.desconto) {
        return produto.preco;
      }
      return produto.preco - produto.desconto;
    }
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
    },
    produto() {
      return {
        nome: 'oakley',
        preco: 450.50,
        desconto: 50.50,
      }
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