import React, { useState } from 'react';
import Profile from './Profile';

const App = () => {
  const [state, setState] = useState({
    name: 'Öje',
    email: 'oYeah@gmail.com',
  });

  const handleChange = () => {
    setState({
      name: 'Opz',
      email: 'opz@gmail.com',
    });
  };

  return (
    <div className="App">
      <Profile {...state} />
      <button onClick={handleChange}>Change Profile</button>
    </div>
  );
};

export default App;
