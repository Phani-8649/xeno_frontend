import React from 'react';

const CampaignHistory = () => {
  const campaigns = [
    { id: 1, name: 'Campaign 1', status: 'Sent', audienceSize: 150 },
    { id: 2, name: 'Campaign 2', status: 'Failed', audienceSize: 200 },
  ];

  return (
    <div>
      <h2>Campaign History</h2>
      <ul>
        {campaigns.map(campaign => (
          <li key={campaign.id}>
            {campaign.name} - Status: {campaign.status} - Audience Size: {campaign.audienceSize}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CampaignHistory;
