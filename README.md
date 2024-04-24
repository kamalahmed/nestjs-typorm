
## Description
This project showcase the practical usage of nestjs with typeorm and PostgresSQL and JWT authentication. It create a user CRUD API with Authentication. It also creates a private route and login and register routes. Instructions are provided below to test it.

## Quick demo walkthrough
UI DEMO: https://youtu.be/lWlyxtdtjJI

Code Demo: https://youtu.be/jxRL1NJH_2s

## Usage Instructions
Make sure you have postgreSQL installed. If you are using mac and homebrew then you can install it by 
```bash 
brew install postgresql
```
- Step 1: Rename the `.env-sample` to `.env` and fill the environment variables.
- Step 2: Install all dependencies
- Step 3: run the app and visit http://localhost:3000 and make sure everything is running.
- Step 4: create some users by send a POST request to http://localhost:3000/auth/register and send body as JSON `{name:string, email:string,password:string}`
- Step 5: Test Login: send POST request to : http://localhost:3000/auth/login with body as JSON {email:string,password:string} and we will receive a jwt token. Copy this token.
- Step 5: Send a GET request to http://localhost:3000/users/profile with an Authorization header like `{Authorization: Bearer YOUR_JWT_TOKEN}` and you should see your profile data.


## Installation

```bash
yarn install
```

## Running the app

```bash
# development
yarn run start

# watch mode
yarn run start:dev

# production mode
yarn run start:prod
```

## Test

```bash
# unit tests
yarn run test

# e2e tests
yarn run test:e2e

# test coverage
yarn run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
