import React from 'react'
import { PostHighlightSkeleton, PostPreviewSkeleton, PostSkeletonContainer } from './styles'

interface PostSkeletonProps {
  isWide?: boolean;
  amount: number;
}

export const PostSkeleton = ({ isWide, amount }: PostSkeletonProps) => {
  const relatedPosts = Array.from(Array(amount).keys());

  if (isWide) {
    return (
      <PostSkeletonContainer>
        <PostHighlightSkeleton>
          <div className="image"></div>
          <div className="content">
            <div className="title"></div>
            <div className="text"></div>
          </div>
        </PostHighlightSkeleton>
      </PostSkeletonContainer>
    )
  } else {
    return (
      <PostSkeletonContainer>
        {relatedPosts.map((items, i) =>
          <PostPreviewSkeleton key={i}>
            <div className="image"></div>
            <div className="content">
              <div className="title"></div>
              <div className="text"></div>
            </div>
          </PostPreviewSkeleton>
        )}
      </PostSkeletonContainer>
    )
  }
}
