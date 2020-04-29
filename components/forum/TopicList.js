import React, {useEffect} from 'react'
import { useQuery, useSubscription } from '@apollo/react-hooks';

import { GET_FORUM_TOPICS } from '../../gql/queries.js';
import { SUBSCRIBE_FORUM_THREADS } from '../../gql/subscriptions.js';
import TopicCard from './TopicCard.js';

const TopicList = () => {
    
    const { loading, data, error, subscribeToMore, refetch } = useQuery(GET_FORUM_TOPICS)

    useEffect(() => {
        subscribeToMore({
            document: SUBSCRIBE_FORUM_THREADS,
            updateQuery: (prev, { subscriptionData }) => {
                console.log(prev)
                if (!subscriptionData.data) return prev;
                // if (subscriptionData.data.mutation === "DELETED" || subscriptionData.data.mutation === "UPDATED") {
                //     refetch()
                // }
                refetch()

            //     const newThread = subscriptionData.data.post;
            //     console.log(newThread)
            //     return Object.assign({}, prev, {
            //         entry: {
            //             posts: [newThread, ...prev.entry.post]
            //         }
            //     });
            }
        })
        
    }, [data])

    if (loading) {
        return "loading"
    }

    if (error) {
        return `Error ${error}`
    }
    
    console.log(data)
    return (
        <div className="flex-row">
            {data.posts ? data.posts.map((post) => {
                return <TopicCard key={post.id} data={post} user={data.me} />
            }) : null}
        </div>
    )
}

export default TopicList;