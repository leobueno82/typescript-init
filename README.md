# Partithura - DataSync Injector

## Development

```sh
yarn install
yarn dev
```

### Sonarqube

Inicie o serviço do Sonar.

```sh
docker-compose -f docker-compose.sonar.yml up sonarqube
```

Após o serviço iniciar, execute os testes e em seguida o scan.

```sh
yarn test --coverage
docker-compose -f docker-compose.sonar.yml up scanner
```

Acesse `http://localhost:9000/dashboard?id=local-partithura-indicators`
