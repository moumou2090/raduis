import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [
    // مثال مهمة جاهزة
    { id: 1, description: 'Tâche exemple', isDone: false },
  ],
  filter: 'all', // all, done, undone
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    ajouterTache: (state, action) => {
      state.tasks.push(action.payload);
    },
    modifierTache: (state, action) => {
      const { id, description, isDone } = action.payload;
      const task = state.tasks.find(t => t.id === id);
      if (task) {
        task.description = description;
        task.isDone = isDone;
      }
    },
    changerFiltre: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { ajouterTache, modifierTache, changerFiltre } = taskSlice.actions;
export default taskSlice.reducer;
