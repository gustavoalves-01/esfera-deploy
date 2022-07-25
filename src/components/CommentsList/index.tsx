import React from 'react'
import { IComments } from '../../pages/[posts]/[slug]';
import { Container } from './styles';

interface CommentsListProps {
  comments: IComments[];
}

function CommentsList({ comments }: CommentsListProps) {
  console.log(comments);

  return (
    <Container>
      {
        comments.map((comment) =>
          <div className="comment" key={comment.id}>
            <h4>{comment.name}</h4>
            <span>{new Date(comment.date).toLocaleDateString('pt-BR')}</span>
            <div className="content" dangerouslySetInnerHTML={{ __html: comment.content }} />
          </div>
        )
      }
    </Container>
  )
}

export default CommentsList;
