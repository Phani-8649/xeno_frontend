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

  const landingPageStyle = {
    ...backgroundStyle,
    display: 'flex', // Use flexbox to center the content
    justifyContent: 'center', // Horizontally center the text
    alignItems: 'center', // Vertically center the text
    textAlign: 'center', // Center align the text inside the div
    color: 'white', // Make the text white to stand out on the background
    fontSize: '2rem', // Make the text larger
    fontWeight: 'bold', // Make the text bold
    zIndex: 1, // Ensure text is on top of the background
  };

  return (
    <div style={backgroundStyle}>
      <Router>
        <NavBar />
        <Routes>
          {/* Landing Page Route */}
          <Route 
            path="/" 
            element={
              <div style={landingPageStyle}>
                <h1>Welcome to the CRM Komal(21BRS1280) XENO ASSIGNMENT's Page</h1>
              </div>
            }
          />
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
