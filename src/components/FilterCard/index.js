import React from 'react';
import * as S from './styles';

import party from '../../assets/party.png';
function FilterCard({title, actived}) {
    return (
        <S.Container actived={actived}>
            <img src={party} alt="Notificacao"/>
            <span>{title}</span>
        </S.Container>    
    )
}

export default FilterCard;