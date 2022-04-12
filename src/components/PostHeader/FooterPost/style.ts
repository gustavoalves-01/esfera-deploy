import styled from "styled-components";

export const Style = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3.4375rem;

    @media (max-width: 990px) {
        flex-direction: column;
        align-items: normal;
        margin: 1.5rem 1rem 0 1rem;
    }
`;