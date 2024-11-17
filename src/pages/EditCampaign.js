import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditCampaign.css';  // Import the CSS file here

function EditCampaign() {
  const { id } = useParams(); // Get the campaign ID from the URL
  const navigate = useNavigate();
  const [campaign, setCampaign] = useState({
    name: '',
    description: '',
    startDate: '',
    endDate: ''
  });

  // Fetch campaign details (mocked for now, replace with real API call)
  useEffect(() => {
    const fetchCampaign = async () => {
      const data = {
        id,
        name: 'Sample Campaign',
        description: 'A description of the campaign',
        startDate: '2024-01-01',
        endDate: '2024-12-31'
      };
      setCampaign(data);
    };
    fetchCampaign();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCampaign({ ...campaign, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Update the campaign in the backend (mocked for now)
    console.log('Updated Campaign:', campaign);
    // After updating, navigate back to campaigns page
    navigate('/campaigns');
  };

  return (
    <div className="edit-campaign-container">
      <h1>Edit Campaign</h1>
      <form onSubmit={handleSubmit} className="edit-campaign-form">
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={campaign.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={campaign.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Start Date:</label>
          <input
            type="date"
            name="startDate"
            value={campaign.startDate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>End Date:</label>
          <input
            type="date"
            name="endDate"
            value={campaign.endDate}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditCampaign;
