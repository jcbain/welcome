const express = require('express')
const cors = require('cors')
const app = express()
const port = 8000

const knex = require('knex');
const knexConfig = require('./knexfile');
const db = knex(knexConfig.development);
const { getAllJobs } = require('./queries/pullQueries');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/jobs', async (req, res) => {
    let data = await getAllJobs(db)
    res.json(data)
})

app.post('/query', (req, res) => {
  console.log(req.body)
  res.send('success')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


// const yargs = require('yargs');
// const { CronJob } = require('cron');
// const knex = require('knex');
// const knexConfig = require('./knexfile');
// const db = knex(knexConfig.development);

// const { insertIntoTweetsTable, insertIntoReferencedTweetsTable, insertIntoTweetsMetricsTable } = require('./queries/insertQueries');
// const { fetchTwitterGeoData } = require('./endpoint_calls/twitter_search_v2');

// const start = Date.now();
// const intervals = {
//     s: "* * * * * *",
//     m: "* * * * *",
//     h: "* * * *"
// }

// const argv = yargs
//     .option('query', {
//         description: 'query for twitter endpoint',
//         alias: 'q',
//         type: 'string'
//     })
//     .option('interval', {
//         description: 'how often to run the cron',
//         alias: 'i',
//         type: 'string'
//     })
//     .option('duration', {
//         description: 'duration in minutes to run collection for',
//         alias: 'd',
//         type: 'number'
//     })
//     .help()
//     .alias('help', 'h')
//     .argv;

// let nextToken;
// let chosenInterval = intervals.m;
// let end = start + (1000 * 60);


// const { query, interval, duration } = argv;

// if ( query ) {
//     chosenQueries = [query];
// }

// if ( interval ) {
//     switch(interval){
//         case 's':
//             chosenInterval = intervals.s;
//             break;
//         case 'm':
//             chosenInterval = intervals.m;
//             break;
//         case 'h':
//             chosenInterval = intervals.h;
//             break;
//         default:
//             console.log('running cron every minute');
//     }
// }

// if ( duration ) {
//     end = start + (1000 * 60 * duration);
// }

// const job = new CronJob(
//     chosenInterval, 
//     function() {
//         // const query = 'point_radius:[-73.5673 45.5017 25mi] immigration'
//         const query = 'point_radius:[-123.1207 49.2827 25mi] chinese'
//         fetchTwitterGeoData(query, nextToken, true, '2015')
//             .then(async resp => {

//                 if (resp.data.data) {
//                     await insertIntoTweetsTable(resp.data.data, query, db)
//                     .catch(err => {
//                         console.log(err)
//                     })

//                 await insertIntoReferencedTweetsTable(resp.data.data, db)
//                 .catch(err => {
//                     console.log(err)
//                 })

//                 await insertIntoTweetsMetricsTable(resp.data.data, db)
//                     .catch(err => {
//                         console.log(err)
//                     })

//                 }
//                 if(resp.data.meta.next_token){
//                     nextToken = resp.data.meta.next_token
//                 }
//             })

//         if(Date.now() > end){
//             db.destroy();
//             this.stop();
//         }
//     },
//     null,
//     true,
//     'America/Edmonton'
// )
