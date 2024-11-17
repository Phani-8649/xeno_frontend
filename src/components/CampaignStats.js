import React from 'react';

const CampaignStats = () => {
  const stats = {
    totalCampaigns: 2,
    totalMessagesSent: 350,
    totalMessagesFailed: 50,
  };

  return (
    <div>
      <h2>Campaign Statistics</h2>
      <ul>
        <li>Total Campaigns: {stats.totalCampaigns}</li>
        <li>Total Messages Sent: {stats.totalMessagesSent}</li>
        <li>Total Messages Failed: {stats.totalMessagesFailed}</li>
      </ul>
    </div>
  );
};

export default CampaignStats;
