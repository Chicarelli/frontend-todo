import React, {useState, useEffect} from 'react';

import * as S from './styles';
import {format} from 'date-fns';
import api from "../../services/api";
import {Redirect} from 'react-router-dom';
//componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import typeIcons from '../../utils/type-icons';
import isConnected from '../../utils/isConnected';

import iconCalendar from  '../../assets/calendar.png';
import iconClock from  '../../assets/clock.png';

function Task({match}) {
    const [redirect, setRedirect] = useState(false);
    const [type, setType] = useState();
    const [id, setId] = useState();
    const [done, setDone] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [hour, setHour] = useState('');
    const[macaddress, setMacaddress] = useState('11:11:11:11:11:11');


 async function loadTaskDetails(){
    await api.get(`/task/${match.params.id}`)
    .then(response => {
        setType(response.data.type)
        setTitle(response.data.title)
        setDone(response.data.done)
        setDescription(response.data.description)
        setDate(format(new Date(response.data.when), 'yyyy-MM-dd'))
        setHour(format(new Date(response.data.when), 'HH:mm'))
    })
 }

 async function excluir(){
    if(match.params.id){
        const res = window.confirm('Deseja excluir a tarefa?')
        if(res == true){
            await api.delete(`/task/${match.params.id}`)
            .then(() => {
                setRedirect(true);
            })
        }
    } else {
        setRedirect(true);
    }
 }

 async function save(){
    //Validação
    if(!title)
        return alert("Você precisa informar o título da tarefa");
    else if(!description)
        return alert("Você precisa informar a descrição da tarefa");
    else if (!type)
        return alert("Você precisa informar o tipo da tarefa");
    else if(!date)
        return alert("Você precisa definir a data da tarefa");
    else if (!hour)
        return alert("Você precisa definir a hora da tarefa");

     if(match.params.id){
        await api.put(`/task/${match.params.id}`, {
            macaddress,
            done,
            type,
            title,
            description,
            when: `${date}T${hour}:00.000`
        })
        .then(() => setRedirect(true))
     }else {
        await api.post('/task', {
            macaddress,
            done, 
            type,
            title,
            description,
            when: `${date}T${hour}:00.000`
        })
        .then(() => setRedirect(true))
    }
 }

 useEffect(() => {
     if(!isConnected) 
        setRedirect(true);
  loadTaskDetails();
}, [])

  return (
    <S.Container>
        {redirect && <Redirect to="/" />}
      <Header/>

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

                <button type="button" onClick={excluir}>EXCLUIR</button>

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
