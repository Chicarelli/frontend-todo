import React, {useState, useEffect} from 'react';
import * as S from './styles';
import {Link} from 'react-router-dom'

import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';
import api from '../../services/api';

function Header({clickNotification}) {
    const [lateCount, setLateCount] = useState();

    async function lateVerify(){
        await api.get(`/task/filter/late/11:11:11:11:11:11`)
        .then(response => {
          setLateCount(response.data.length);
        })
      }

    useEffect(() => {
        lateVerify();
    })

    return (
        <S.Container>
            <S.LeftSide>
                <img src={logo} alt="logo"/>
            </S.LeftSide>

            <S.RightSide>
                <Link to="/">INÍCIO</Link>
                <span className="divider"/>
                <Link to="/task">NOVA TAREFA</Link>
                <span className="divider"/>
                <Link to="/qrcode">SINCRONIZAR CELULAR</Link>
                { lateCount == 0 ? '' : 
                    lateCount &&
                    <>
                        <span className="divider"/>
                        <button onClick={clickNotification} id="notification">
                            <img src={bell} alt="Notificacao"/>  
                            <span>{lateCount}</span>
                        </button>
                    </>
                }
            </S.RightSide>
        </S.Container>    
    )
}

export default Header;