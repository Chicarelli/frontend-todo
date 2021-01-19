import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    height: 70px;
    background: #999;
    border-bottom: 5px solid #ee6b26;
    display: flex;
`;


export const LeftSide = styled.div`
    width: 50%;
    height: 70px;
    background: #20295f;
    display: flex;
    align-items: center;
    padding-left: 10px;

    img{
        width: 100;
        height: 40px;
    }
`;


export const RightSide = styled.div`

    width: 50%;
    height: 70px;
    background: #20295f;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    a{
        color: #fff;
        font-weight: bold;
        text-decoration: none;
        margin: 0 10px;

        &:hover{
            color: #ee6b26
        }
    }

    #notification{
        background: none;
        border: none;
        cursor: pointer;
        
        img{
            width: 23px;
            height: 30px;
        }

        span{
            background: #fff;
            color: #ee2b26;
            padding: 3px 7px;
            border-radius: 50px;
            position: relative;
            top: -17px;
            right: 10px;
        }

        &:hover{
            opacity: .5;
        }
    }

    .divider::after{
        content: "|";
        margin: 0 3px;
        color: #fff;
    }
`;