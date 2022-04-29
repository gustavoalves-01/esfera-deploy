import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;

  span {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    margin-left: 8.5px;
  }
`;

export const TimeSkeleton = styled.div`
  width: 100%;
  height: 14px;
  background: linear-gradient(
    90deg,
    #c1c1c1 0%,
    #dddddd 33%,
    #dddddd 66%,
    #c1c1c1 100%
  );
  background-size: 200% 100%;
  background-position: 100% 0;
  animation: load 2s infinite;
  border-radius: 14px;

  @keyframes load {
    100% {
      background-position: -100% 0;
    }
  }
`;
