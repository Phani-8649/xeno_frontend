import React, { useState } from 'react';

const CreateAudience = () => {
  const [audience, setAudience] = useState([]);
  const [filter, setFilter] = useState('');
  
  const handleFilterChange = (e) => setFilter(e.target.value);

  const addAudience = () => {
    // Dummy audience data generation based on the filter
    setAudience([...audience, { id: audience.length + 1, name: 'Customer ' + (audience.length + 1), filter }]);
  };

  return (
    <div>
      <h2>Create Audience</h2>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Enter filter conditions"
      />
      <button onClick={addAudience}>Add Audience</button>
      <ul>
        {audience.map(a => (
          <li key={a.id}>{a.name} - {a.filter}</li>
        ))}
      </ul>
    </div>
  );
};

export default CreateAudience;
