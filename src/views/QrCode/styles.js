import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Content = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        margin-top: 50px;
        color: #ee6b26;
    }

    p{
        color: #20295f;
    }
    
`;

export const QrCodeArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    
`;

export const ValidationCode = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;

    span{
        margin-top: 40px;
        text-transform: uppercase;
        font-weight: bold;
    }

    input{
        font-size: 18px;
        padding: 10px;
        margin-top: 5px;
        text-align: center;
    }

    button{
        margin-top: 10px;
        font-weight: bold;
        background: #ee6b26;
        color: #fff;
        font-size: 18px;
        padding: 10px;
        border-radius: 10px;
        border: none;
        cursor: pointer;
        transition: 0.3s;

        &:hover{
            background: #20295f;
        }
    }
`;