import React from 'react'
import Comment from './Comment'

const CommentsList = ({comments}) => {
  return (
    <div>
        {/* don't use indexes as keys */}
        {comments.map((comment, index)=>
        <div key={index}>
            <Comment data={comment}/>
            <div className='pl-5 border border-l-black ml-5'>
               {/* recursion, n level nesting */}
                <CommentsList comments={comment.replies}/>
            </div>
        </div>
        )}
    </div>
  )
}

export default CommentsList