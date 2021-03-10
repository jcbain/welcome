import { useState, useEffect } from 'react';
import moment from 'moment';

const start = 'https://api.twitter.com/2/tweets/search/all?query='

const defaultTweetFields = [
    'id','text','author_id','context_annotations',
    'geo','conversation_id','withheld','possibly_sensitive',
    'referenced_tweets', 'public_metrics', 'created_at'
];

const tweetPayload = defaultTweetFields.join(',');

const useSampleEndpoint = (params, city, dates) => {
    const [ endpoint, setEndpoint ] = useState()


    
    const paramStrings = params.map(p => {
        const paramOption = p.value !== '' ? `(point_radius:[${city.lng} ${city.lat} 25mi] ${p.selection.formatted}${p.value})` : '';
        return paramOption
    })
    const paramString = paramStrings.length === 1 && paramStrings[0] === '' ? `point_radius:[${city.lng} ${city.lat} 25mi]` : paramStrings.join(' OR ');

    const startDate = dates.length === 2 ? moment(dates[0]).format('YYYY-MM-DD') + 'T00:00:00Z' : '2015-01-01T00:00:00Z'
    const endDate = dates.length === 2 ? moment(dates[1]).format('YYYY-MM-DD') + 'T00:00:00Z' : '2021-01-01T00:00:00Z'
   

    useEffect(() => {
        const fullString = `${start}${paramString}&start_time=${startDate}&end_time=${endDate}&tweet.fields=${tweetPayload}`
        setEndpoint(fullString)

    }, [paramString, city, startDate, endDate])

    return endpoint
}

export default useSampleEndpoint;