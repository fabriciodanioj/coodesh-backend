## Fullstack Challenge 🏅 2021 - Space Flight News

This repo is a challenge by Coodesh. We can view news about space flights that is provided by https://api.spaceflightnewsapi.net/v3/documentation. We can add, edit and delete articles to the database.

## Tech Stack

Node, Express, node-cron, Docker, Mongoose, swagger-ui-express, Axios and Yup.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_URI`

`MONGO_DB`

## Requirements

You need to have NodeJs, Docker and Docker-compose previously installed in the machine.

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd coodesh-frontend
```

Run docker-compose command to up the project

```bash
  docker-compose up -d
```

Listen server logs

```bash
  docker-compose logs -f nodejs
```

For stop server

```bash
  docker-compose down
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## Documentation

The docs can be accessed in the project url in the `/docs` route.

## Authors

- [@fabriciodanioj](https://www.github.com/fabriciodanioj)

> This is a challenge by [Coodesh](https://coodesh.com/)
