import React from 'react';
import styled, { keyframes } from 'styled-components';

const LoaderContainer = styled.div`
    height: 100px;
    margin: 100px auto;
    max-width: 20%;
`
const rotate = keyframes`
  from {
        transform: rotate(0deg)
    }
  to {
        transform: rotate(360deg)
    }
`;

const LoaderImg = styled.button`
    width: 100px;
    background-color: purple;
    margin: 0 auto;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    height: 50px;
    border: none;
    animation: 1s linear infinite ${rotate};
    transform-origin: 50% 100%;
    position: relative;
`

export const Loader = () => {

    return (
        <LoaderContainer>
            <LoaderImg />
        </LoaderContainer>
    );
}
