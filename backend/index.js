const express = require('express')
const cors = require('cors')
const { CronJob } = require('cron');

const app = express()
const port = 8000

const knex = require('knex');
const knexConfig = require('./knexfile');
const db = knex(knexConfig.development);
const { getAllJobs, getAllQueries } = require('./queries/pullQueries');
const { createEndpoint, fetchTweets } = require('./endpoint_calls/twitter_search_v2')
const { insertIntoTweetsTable, insertIntoReferencedTweetsTable, insertIntoTweetsMetricsTable, insertIntoQueriesTable } = require('./queries/insertQueries');


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let runningStatus = false;

app.get('/jobs', async (req, res) => {
    let data = await getAllJobs(db)
    res.json({data, runningStatus})
})

app.post('/query', async (req, res) => {
  runningStatus = true;
  const { selectedCity, paramData, dates } = req.body;
  let nextToken;
  const parentQuery = createEndpoint(paramData, selectedCity, nextToken, dates[0], dates[1])
  const start = Date.now();
  const end = start + (1000 * 60 * 2);
  const interval = "* * * * *";
  let queryId;
  await db('queries').where('query', parentQuery).then(async rows => {
    if(rows.length === 0) {
      await insertIntoQueriesTable(parentQuery, db)
        .then(response => {
          queryId = response[0].id
        })

    } else {
      queryId = rows[0].id
    }
  })
  .catch(err => console.log(err))

  // res.send('success')
  res.json({runningStatus})
  const job = new CronJob(
    interval, 
    function() {
        const query = createEndpoint(paramData, selectedCity, nextToken, dates[0], dates[1])
        fetchTweets(query)
          .then(async resp => {
            if(resp.data.data) {
              await insertIntoTweetsTable(resp.data.data, queryId, selectedCity.id, db)
                .catch(err => console.log(err))

              await insertIntoReferencedTweetsTable(resp.data.data, db)
                .catch(err => {
                    console.log(err)
                })

              await insertIntoTweetsMetricsTable(resp.data.data, db)
                .catch(err => {
                  console.log(err)
                })

              if(resp.data.meta.next_token){
                nextToken = resp.data.meta.next_token
              } else {
                console.log('killing the job, no more data')
                runningStatus = false;
                this.stop();
              }

            }
          })
          .catch(err => console.log(err))

        if(Date.now() > end){
          console.log('killing the job, ran out of gas')
          runningStatus = false;
          this.stop();
        }
    },
    null,
    true,
    'America/Edmonton'
)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
