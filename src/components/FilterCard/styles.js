import styled from 'styled-components';


export const Container = styled.div`
    width: 260px;
    height: 60px;
    background: #20295f;
    display: flex;;
    flex-direction: column;
    justify-content: space-around;
    background: ${props => props.actived ? '#EE6B26': '#20295F' };
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;

    img{
        width: 25px;
        height: 25px;
    }

    span {
        color: #fff;
        font-weight: bold;
        align-self: flex-end;
        font-size: 1.1rem;
    }

    &:hover{
        background: #EE6B26;

    }
    
`;