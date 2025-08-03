import React from 'react';
import AjouterUneTache from './components/AjouterUneTache';
import ListeDesTaches from './components/ListeDesTaches';

export default function App() {
  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20 }}>
      <h1>Liste des tâches</h1>
      <AjouterUneTache />
      <ListeDesTaches />
    </div>
  );
}

