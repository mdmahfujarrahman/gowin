// eslint-disable-next-line @typescript-eslint/no-var-requires
const scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl: 'http://localhost:9000',
    login: 'admin',
    password: 'admin3',
    options: {
      'sonar.login': 'admin',
      'sonar.password': 'admin3',
      'sonar.sources': './src',
    },
  },
  () => process.exit(),
);
