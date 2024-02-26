module.exports = {
    swcMinify: true,
    output: 'export',
    async redirects() {
        return [
          {
            source: '/blog',
            destination: '/',
            permanent: true,
          },
        ]
      },
};
