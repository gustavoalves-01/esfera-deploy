import React from 'react'
import { PostHighlightSkeleton, PostPreviewSkeleton, PostSkeletonContainer } from './styles'

interface PostSkeletonProps {
  isWide?: boolean;
}

export const PostSkeleton = ({ isWide }: PostSkeletonProps) => {
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
        <PostPreviewSkeleton>
          <div className="image"></div>
          <div className="content">
            <div className="title"></div>
            <div className="text"></div>
          </div>
        </PostPreviewSkeleton>
        <PostPreviewSkeleton>
          <div className="image"></div>
          <div className="content">
            <div className="title"></div>
            <div className="text"></div>
          </div>
        </PostPreviewSkeleton>
      </PostSkeletonContainer>
    )
  }
}
