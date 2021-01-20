import styled from 'styled-components';

export const Container = styled.div`
    width: 100%; 
    `

export const FilterArea = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 30px;

    button {
        background: none;
        border: none;
    }
`

export const Content = styled.div `
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    justify-content: space-between;
    margin-bottom: 150px;

    a{
        text-decoration: none;
        color: #000;
    }
    
`;

export const Title = styled.div `
    width: 100%;
    border-bottom: 1px solid #20295f;
    display: flex;
    justify-content: center;
    margin-bottom: 25px;

    h2{
        color: #20295F;
        position: relative;
        top: 33px;
        background: #FFF;
        padding: 0 20px;
    }
`;