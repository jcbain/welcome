# Welcome
 
A research project in sentiment about migrants, immigrants and refugees.

**NOTE** `welcome` is currently (Mar 2021) under active development, so many of the capabilities listed will be changing. For the most part, much of the application will be built as microservices and therefore not all of the services will be needed in order to perform each operation.


# Running the application
- Front-end application `./welcome/frontend`
- Server & database`./welcome/backend`

The front-end relies on the server and the server relies on the database. From the top level folder `./welcome/` run the `docker-compose.yml` to get the application up and running.

```sh
$ docker-compose up -d # runs the application and mounts data
```

If this is the first time running the application, the database will need to be set up and the migrations (table creations) run, along with the seed data.

```sh
$ docker-compose exec server yarn db:migrate
$ docker-compose exec server ./node_modules/.bin/knex seed:run
```

Now that database is set up, the front-end application can be run locally. Port 3001 should be where the application is mapped so open a browser and go to http://localhost:3001

The application should appear and you are ready to start making requests to Twitter! **NOTE: YOU MUST HAVE AN ACADEMIC DEVELOPER ACCOUNT FOR THIS TO WORK**.




## Resources

**SemEval**
- [2019](https://alt.qcri.org/semeval2019/index.php?id=tasks)

**Abusive Language Online** 
- [ALW 2018](https://sites.google.com/view/alw2018/resources?authuser=0)

**model training**
- SemEval 2018 Task 1: [Affect In Tweets](https://competitions.codalab.org/competitions/17751#learn_the_details-datasets)


**word embeddings**
- French 
    - [Word2Vec](https://nlp.stanford.edu/projects/glove/) 
- English
    - [GloVe](https://nlp.stanford.edu/projects/glove/)

## Running the App
```sh
$ docker-compose build
$ docker-compose up
$ docker-compose exec server yarn db:migrate
$ docker-compose exec server ./node_modules/.bin/knex seed:run
```