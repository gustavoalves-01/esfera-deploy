import styled from "styled-components";

export const PostSkeletonContainer = styled.div`
  display: grid;
  flex-direction: column;
  margin: 40px 0 60px;
  gap: 2rem;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 990px) {
    grid-template-columns: 1fr;
  }
`

export const PostHighlightSkeleton = styled.div`
  grid-column: 1/3;
  height: 242px;
  display: grid;
  grid-template-columns: 48.6% auto;
  background-color: var(--gray-200);

  .image {
    grid-column: 1/2;
    grid-row: 1/3;
    background-color: #e2e2e2;
    width: 100%;
    height: 100%;
  }
  .content {
    grid-column: 2/3;
    grid-row: 1/3;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 21px 24px 28px;

    .title {
      height: 46.38px;
      background-color: #e2e2e2;
      border-radius: 16px;
    }
    
    .text {
      border-radius: 16px;
      flex: 1;
      background-color: #e2e2e2;
    }
  }
`
export const PostPreviewSkeleton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--gray-200);
  padding: 24px 0 0;

  .image {
    background-color: #e2e2e2;
    width: 100%;
    height: 224px;
  }
  .content {
    display: flex;
    flex-direction: column;
    height: 210px;
    gap: 2rem;
    padding: 32px 16px 16px;

    .title {
      height: 46.38px;
      background-color: #e2e2e2;
      border-radius: 16px;
    }
    
    .text {
      border-radius: 16px;
      flex: 1;
      background-color: #e2e2e2;
    }
  }
  


`