import React from 'react';
import Comment from './Comment';
import CommentsList from './CommentsList';

const commentsData = [
    {
        name: "manveer",
        text: "namaste react",
        replies: [
            {
                name: "guri",
                text: "namaste javascript",
                replies: []
            },
            {
                name: "simran",
                text: "namaste",
                replies: []
            }
            
        ]    
    },
    {
        name:"Mehak",
        text:"hello",
        replies:[],
    },
    {
        name:"Akay",
        text:"what's up?",
        replies:[],
    },
    {
        name:"Komal",
        text:"Heyyy!",
        replies:[],
    }

]
const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='font-bold'>Comments:</h1>
        <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer