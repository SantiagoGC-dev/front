import React, { useState } from 'react';

const Careers = () => {
  // Datos simulados - reemplázalos con tu conexión al backend
  const [careers, setCareers] = useState([
    { id: 1, name: 'Computer Science', duration: '4 years' },
    { id: 2, name: 'Business Administration', duration: '3 years' }
  ]);
  
  const [showForm, setShowForm] = useState(false);
  const [newCareer, setNewCareer] = useState({
    name: '',
    duration: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCareer({
      ...newCareer,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la llamada al backend para agregar la nueva carrera
    const newId = careers.length > 0 ? Math.max(...careers.map(c => c.id)) + 1 : 1;
    
    setCareers([
      ...careers,
      {
        id: newId,
        name: newCareer.name,
        duration: newCareer.duration
      }
    ]);
    
    setNewCareer({ name: '', duration: '' });
    setShowForm(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Careers</h2>
      
      <button 
        onClick={() => setShowForm(!showForm)}
        style={{
          marginBottom: '20px',
          padding: '10px',
          backgroundColor: '#2196F3',
          color: 'white',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        {showForm ? 'Cancel' : 'Add New Career'}
      </button>
      
      {showForm && (
        <form onSubmit={handleSubmit} style={{
          marginBottom: '30px',
          padding: '20px',
          border: '1px solid #ddd',
          borderRadius: '5px'
        }}>
          <h3>Add New Career</h3>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Career Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={newCareer.name}
              onChange={handleInputChange}
              required
              style={{ width: '100%', padding: '8px' }}
            />
          </div>
          
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="duration" style={{ display: 'block', marginBottom: '5px' }}>Duration:</label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={newCareer.duration}
              onChange={handleInputChange}
              required
              style={{ width: '100%', padding: '8px' }}
            />
          </div>
          
          <button type="submit" style={{
            padding: '10px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            cursor: 'pointer'
          }}>
            Save Career
          </button>
        </form>
      )}
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        {careers.map(career => (
          <div key={career.id} style={{
            padding: '15px',
            border: '1px solid #ddd',
            borderRadius: '5px'
          }}>
            <h3>{career.name}</h3>
            <p>Duration: {career.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;