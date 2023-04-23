import React, { useState } from 'react';

function RegisterForm() {
  const [user, setUser] = useState({ username: '', email: '', password: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Usuari registrat: ${user.username}`);
  };

  const handleCancel = () => {
    console.log('Registre cancelat');
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Nom d'usuari:</label>
      <input type="text" id="username" name="username" value={user.username} onChange={handleInputChange} />

      <label htmlFor="email">Correu electrònic:</label>
      <input type="email" id="email" name="email" value={user.email} onChange={handleInputChange} />

      <label htmlFor="password">Contrasenya:</label>
      <input type="password" id="password" name="password" value={user.password} onChange={handleInputChange} />

      <button type="submit">Registrar</button>
      <button type="button" onClick={handleCancel}>
        Cancel·lar
      </button>
    </form>
  );
}

export default RegisterForm;
