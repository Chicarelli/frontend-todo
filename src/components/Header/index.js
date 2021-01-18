import React from 'react';
import * as S from './styles';
import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';

function Header() {
    return (
        <S.Container>
            <S.LeftSide>
                <img src={logo} alt="logo"/>
            </S.LeftSide>

            <S.RightSide>
                <a href="#">Início</a>
                <span className="divider"/>
                <a href="#">Tarefas</a>
                <span className="divider"/>
                <a href="#">Sincronizar Celular</a>
                <span className="divider"/>
                <a href="#" id="notification">
                    <img src={bell} alt="Notificacao"/>  
                    <span>5</span>
                </a>
            </S.RightSide>
        </S.Container>    
    )
}

export default Header;