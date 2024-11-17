import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const CampaignCard = ({ campaign }) => (
    <Card style={{ margin: '20px', padding: '10px' }}>
        <CardContent>
            <Typography variant="h5">{campaign.name}</Typography>
            <Typography variant="body2" color="textSecondary">
                {campaign.description}
            </Typography>
            <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
                View Details
            </Button>
        </CardContent>
    </Card>
);

export default CampaignCard;
