import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Dashboard from './pages/Dashboard';
import EditCampaign from './pages/EditCampaign';
import Login from './pages/LoginPage';
import CampaignTable from './components/CampaignTable';
import kkk from './kkk.jpg';
import Orders from './pages/orders';

function App() {
  const backgroundStyle = {
    backgroundImage: `url(${kkk})`, // Use the imported image URL
    backgroundSize: 'cover', // Ensures the image covers the entire viewport
    backgroundPosition: 'center center', // Centers the image
    backgroundAttachment: 'fixed', // Keeps the image fixed while scrolling
    minHeight: '100vh', // Ensures the background covers the entire height of the viewport
    margin: 0,
  };

  return (
    <div style={backgroundStyle}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/campaigns" element={<CampaignTable />} />
          <Route path="/edit-campaign" element={<EditCampaign />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
