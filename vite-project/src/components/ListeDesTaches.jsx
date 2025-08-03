import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Tache from './Tache';
import { changerFiltre } from '../taskSlice';

export default function ListeDesTaches() {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks);
  const filter = useSelector(state => state.tasks.filter);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'done') return task.isDone;
    if (filter === 'undone') return !task.isDone;
    return true;
  });

  return (
    <div>
      <div>
        <button onClick={() => dispatch(changerFiltre('all'))}>Toutes</button>
        <button onClick={() => dispatch(changerFiltre('done'))}>Effectuées</button>
        <button onClick={() => dispatch(changerFiltre('undone'))}>Non effectuées</button>
      </div>

      {filteredTasks.length === 0 ? (
        <p>Aucune tâche à afficher.</p>
      ) : (
        filteredTasks.map(task => <Tache key={task.id} task={task} />)
      )}
    </div>
  );
}
