import styled from 'styled-components';


export const Container = styled.div`
    width: 250px;
    height: 200px;
    box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.73);
    border-radius: 10px;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TopCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const BottomCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;

    strong{
        color: #EE6B26;
        font-weight: bold;
    }

    span{
        color: #707070;
    }

`;