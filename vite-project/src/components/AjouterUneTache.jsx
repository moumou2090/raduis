import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ajouterTache } from '../taskSlice';

export default function AjouterUneTache() {
  const [desc, setDesc] = useState('');
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks);

  const handleSubmit = e => {
    e.preventDefault();
    if (!desc.trim()) return;

    const newTask = {
      id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      description: desc,
      isDone: false,
    };

    dispatch(ajouterTache(newTask));
    setDesc('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ajouter une tâche..."
        value={desc}
        onChange={e => setDesc(e.target.value)}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}
