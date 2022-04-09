import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 50px ;
`

export const Title = styled.h1`
    font-size: 64px;
    color: ${props => props.TitleColor};
    width: 660px;
`
export const Description = styled.p`
    font-size: 40px;
    color: ${props => props.DescriptionColor};
    font-weight: lighter;
    width: 660px;
`