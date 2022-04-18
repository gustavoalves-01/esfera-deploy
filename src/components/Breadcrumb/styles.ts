import styled from 'styled-components';

export const BreadcrumbContainer = styled.div`
  display: flex;
  align-items: baseline;

  text-transform: capitalize;
  font-size: 14px;
  color: #4f5150;

  p{

  }
  span a{
    margin-left: 3px;
  }
  a{
    color: var(--pink-500);
    text-decoration: underline;
    margin-right: 5px;
    flex: none;
  }
`;
export const WrapperImage = styled.div`
    position: relative;
    width: 40px;
    height: 14px;
    margin-right: 8px;
    color: #4f5150;
    top: 4px;
`;
