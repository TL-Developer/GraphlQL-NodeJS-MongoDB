const {
  ApolloServer,
  gql,
} = require('apollo-server'); 

const usuarios = [
  {
    id: 1,
    nome: 'tiago lima',
    email: 'tiago.jlima@yahoo.com.br',
    idade: 24,
  }
];

const typeDefs = gql`
  scalar Date

  type Produto {
    nome: String!,
    preco: Float!,
    desconto: Float,
    precoComDesconto: Float,
  }

  type Usuario {
    id: Int,
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
    numerosMegaSena: [Int!]!,
    usuarios: [Usuario]!,
    usuario(id: Int): Usuario,
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
      return produto.preco * (1 - produto.desconto);
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
    usuario(_, args) {
      const selecionados = usuarios.filter(usuario => usuario.id === args.id);
      return selecionados ? selecionados[0] : null;
    },
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Executando em ${url}`);
});