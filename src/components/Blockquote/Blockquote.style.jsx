import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 50px 50px 25px 50px;
`

export const Title = styled.h1`
    font-size: 64px;
    color: ${props => props.TitleColor};
    max-width: 660px;

    @media(max-width: 1024px){
        font-size: 32px;
        text-align: center;
    }
`
export const Description = styled.p`
    font-size: 40px;
    color: ${props => props.DescriptionColor};
    font-weight: lighter;
    max-width: 660px;

    @media(max-width: 1024px){
        font-size: 24px;
        text-align: center;
    }
`
