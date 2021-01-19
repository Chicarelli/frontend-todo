import styled from 'styled-components';

export const Container = styled.div`
    width: 100%; 
    `;


export const Form = styled.div`
    width: 50%;
    margin: auto;
`;

export const TypeIcons = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;

    .inative{
        opacity: .5;
    }

    button{
        border: none;
        background: none;
    }
    
    img{
        width: 45px;
        height: 45px;
        margin: 10px;
        cursor: pointer;
        transition: .3s;

        &:hover{
            opacity: 0.8;
        }
    }
`;

export const Input = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0;

    span{
        color: #707070;
        font-size: 20px;
        margin-bottom: 5px;
    }


    input{
        width: 50%;
        font-size: 16px;
        padding: 15px;
        border: none;
        border-bottom: 1px solid #ee6b26;
    }

    img{
        width: 20px;
        height: 20px;
        position: relative;
        left: 48%;
        bottom: 30px;
    }

`;

export const TextArea = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;

    span{
        color: #707070;
        font-size: 20px;
        margin: 5px 0;
    }

    textarea{
        font-size: 16px;
        border: 1px solid #ee6b26;
    }
`;


export const Options = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;


    button{
        font-weight: bold;
        color: #20295f;
        border: none;
        background: none;
        font-size: 18px;
        cursor: pointer;

        &:hover{
            opacity: 0.7;
        }
    }

    div{
        display: flex;
        align-items: center;
        font-weight: bold;
        color: #ee6b26;
        font-size: 18px;

    }


`;

export const Save = styled.div`
    width: 100%;
    margin-top: 20px;
    
    button{
        width: 100%;
        margin: auto;
        background: #ee6b26;
        border: none;
        font-size: 20px;
        font-weight: bold;
        color: #fff;
        padding: 20px;
        text-transform: uppercase;
        border-radius: 20px;
        cursor: pointer;

        &:hover{
            opacity: 0.7;
        }
    }
`;