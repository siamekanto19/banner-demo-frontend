export default () => ({
  graphql: {
    enabled: true,
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 20,
      amountLimit: 100,
      apolloServer: {
        introspection: true,
        tracing: true,
      },
    },
  },
});
