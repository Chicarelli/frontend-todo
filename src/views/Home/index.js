import React, {useState, useEffect} from 'react';

import * as S from './styles';

import api from "../../services/api";
import {Link, Redirect} from 'react-router-dom';
import isConnected from '../../utils/isConnected';

//componentes
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';
function Home() {
  const [filterActived, setFilterActived] = useState('all');
  const [tasks, setTasks] = useState([]);
  const [redirect, setRedirect] = useState(false);

  async function loadTasks(){
    await api.get(`/task/filter/${filterActived}/11:11:11:11:11:11`)
    .then(response => {
        setTasks(response.data);
        console.log(response.data)
    })
  }



 function notification(){
   setFilterActived('late');
 }

 useEffect(() => {
  loadTasks();
  if(!isConnected)
    setRedirect(true);
}, [filterActived])

  return (
    <S.Container>
      { redirect && <Redirect to="/qrcode"/>}
      <Header clickNotification={notification}/>

      <S.FilterArea>
      <button type="button" onClick={() => setFilterActived("all")}>
        <FilterCard title="Todos" actived={filterActived == 'all'} />
      </button>
      <button type="button" onClick={() => setFilterActived("today")}>
        <FilterCard title="Hoje" actived={filterActived == 'today'} />
      </button>
      <button type="button" onClick={() => setFilterActived("week")}>
        <FilterCard title="Semana" actived={filterActived == 'week'} />
      </button>
      <button type="button" onClick={() => setFilterActived("month")}>
        <FilterCard title="Mes" actived={filterActived == 'month'} />
      </button>
      <button type="button" onClick={() => setFilterActived("year")}>
        <FilterCard title="Ano" actived={filterActived == 'year'} />
      </button>
      </S.FilterArea>


      <S.Title>
        <h2>{filterActived=='late' ? 'TAREFAS ATRASADAS' : 'TAREFAS'}</h2>
      </S.Title>

      <S.Content>
      {
        tasks.map(task => (
          <Link to={`/task/${task._id}`}>
            <TaskCard type={task.type} title={task.title} when={task.when} done={task.done}/>
          </Link>
        ))
        
      }
      </S.Content>

       <Footer/>
    </S.Container>
    
  );
}

export default Home;
