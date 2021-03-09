import { useState, useEffect } from 'react';

const start = 'https://api.twitter.com/2/tweets/search/all?query='

const defaultTweetFields = [
    'id','text','author_id','context_annotations',
    'geo','conversation_id','withheld','possibly_sensitive',
    'referenced_tweets', 'public_metrics', 'created_at'
];

const tweetPayload = defaultTweetFields.join(',');

const useSampleEndpoint = (params, city) => {
    const [ endpoint, setEndpoint ] = useState()

    
    const paramStrings = params.map(p => {
        const paramOption = p.value !== '' ? `(point_radius:[${city.lng} ${city.lat} 25mi] ${p.selection.formatted}${p.value})` : '';
        return paramOption
    })
    const paramString = paramStrings.length === 1 && paramStrings[0] === '' ? `point_radius:[${city.lng} ${city.lat} 25mi]` : paramStrings.join(' OR ');

    useEffect(() => {
        const fullString = `${start}${paramString}&tweet.fields=${tweetPayload}`
        setEndpoint(fullString)

    }, [paramString, city])

    return endpoint
}

export default useSampleEndpoint;