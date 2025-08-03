import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { modifierTache } from '../taskSlice';

export default function Tache({ task }) {
  const dispatch = useDispatch();
  const [desc, setDesc] = useState(task.description);
  const [isEditing, setIsEditing] = useState(false);
  const [isDone, setIsDone] = useState(task.isDone);

  const toggleDone = () => {
    setIsDone(!isDone);
    dispatch(
      modifierTache({
        id: task.id,
        description: desc,
        isDone: !isDone,
      })
    );
  };

  const handleDescChange = e => {
    setDesc(e.target.value);
  };

  const saveChanges = () => {
    dispatch(
      modifierTache({
        id: task.id,
        description: desc,
        isDone,
      })
    );
    setIsEditing(false);
  };

  return (
    <div style={{ marginBottom: '10px' }}>
      <input type="checkbox" checked={isDone} onChange={toggleDone} />
      {isEditing ? (
        <>
          <input type="text" value={desc} onChange={handleDescChange} />
          <button onClick={saveChanges}>Sauvegarder</button>
          <button onClick={() => setIsEditing(false)}>Annuler</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: isDone ? 'line-through' : 'none', marginLeft: 8 }}>
            {desc}
          </span>
          <button onClick={() => setIsEditing(true)} style={{ marginLeft: 8 }}>
            Modifier
          </button>
        </>
      )}
    </div>
  );
}
