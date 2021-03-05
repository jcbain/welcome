# Welcome
 
A research project in migrant sentiment

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
```