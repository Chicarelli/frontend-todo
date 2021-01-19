import React, {useState, useEffect} from 'react';

import * as S from './styles';

import api from "../../services/api";
//componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import typeIcons from '../../utils/type-icons';

import iconCalendar from  '../../assets/calendar.png';
import iconClock from  '../../assets/clock.png';

function Task() {
    const [lateCount, setLateCount] = useState()
    const [type, setType] = useState();
    const [id, setId] = useState();
    const [done, setDone] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [hour, setHour] = useState('');
    const[macaddress, setMacaddress] = useState('11:11:11:11:11:11');

 async function lateVerify(){
   await api.get(`/task/filter/late/11:11:11:11:11:11`)
   .then(response => {
     setLateCount(response.data.length);
   })
 }

 async function save(){
     await api.post('/task', {
         macaddress,
         type,
         title,
         description,
         when: `${date}T${hour}:00.000`
     })
     .then(() => alert('Tarefa criada!'))
 }

 useEffect(() => {
  lateVerify();
}, [])

  return (
    <S.Container>
      <Header lateCount={lateCount}/>

        <S.Form>
            <S.TypeIcons>
                {
                typeIcons.map((icon, index) => (
                    index > 0 && 
                    <button type="button" onClick={() => setType(index)}>
                        <img src={icon} alt="Tipo da tarefa" 
                        className={type && type != index && 'inative'}/>
                    </button>
                ))
                }
            </S.TypeIcons>

            <S.Input>
                <span>Titulo</span>
                <input type="text" placeholder="Titulo" onChange={e => setTitle(e.target.value)} value={title}/>
            </S.Input>

            <S.TextArea>
                <span>Descrição</span>
                <textarea name="" id="" cols="30" rows="5" placeholder="Detalhes da tarefa" onChange={e => setDescription(e.target.value)} value={description}></textarea>
            </S.TextArea>

            <S.Input>
                <span>Data</span>
                <input type="date" placeholder="Titulo" onChange={e => setDate(e.target.value)} value={date}/>
                <img src={iconCalendar} alt="Calendário"/>
            </S.Input>

            <S.Input>
                <span>Hora</span>
                <input type="time" placeholder="Titulo" onChange={e => setHour(e.target.value)} value={hour}/>
                <img src={iconClock} alt="Relógio"/>
            </S.Input>

            <S.Options>
                <div>
                    <input type="checkbox" checked={done} onChange={() => setDone(!done)}/>
                    <span>CONCLUÍDO</span>
                </div>

                <button type="button">EXCLUIR</button>

            </S.Options>

            <S.Save>
                    <button type="button" onClick={save}>Salvar</button>
                </S.Save>
        </S.Form>

       <Footer/>
    </S.Container>
    
  );
}

export default Task;
