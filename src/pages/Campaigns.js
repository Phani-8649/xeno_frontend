import React, { useState } from 'react';
import { Button, TextField, Grid, Card, CardContent, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const Campaigns = () => {
    const [campaigns, setCampaigns] = useState([
        { id: 1, name: 'Black Friday Sale', status: 'Active', date: new Date().toLocaleDateString() },
        { id: 2, name: 'Holiday Special', status: 'Completed', date: new Date().toLocaleDateString() },
    ]);

    const [openDialog, setOpenDialog] = useState(false);
    const [newCampaignName, setNewCampaignName] = useState('');
    const [newCampaignStatus, setNewCampaignStatus] = useState('');
    
    // Open the dialog to add a campaign
    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    // Close the dialog
    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    // Handle the input changes
    const handleNameChange = (e) => {
        setNewCampaignName(e.target.value);
    };

    const handleStatusChange = (e) => {
        setNewCampaignStatus(e.target.value);
    };

    // Add a new campaign with user input
    const handleAddCampaign = () => {
        if (newCampaignName && newCampaignStatus) {
            const newCampaign = {
                id: campaigns.length + 1,
                name: newCampaignName,
                status: newCampaignStatus,
                date: new Date().toLocaleDateString(), // Adding the current date
            };
            setCampaigns([...campaigns, newCampaign]);
            setOpenDialog(false); // Close the dialog after adding the campaign
            setNewCampaignName('');
            setNewCampaignStatus('');
        } else {
            alert("Please fill in both the campaign name and status.");
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <Button variant="contained" color="primary" onClick={handleOpenDialog}>
                Add Campaign
            </Button>

            {/* Campaigns Grid */}
            <Grid container spacing={3} style={{ marginTop: '20px' }}>
                {campaigns.map((campaign) => (
                    <Grid item xs={12} sm={6} md={4} key={campaign.id}>
                        <Card>
                            <CardContent>
                                <h3>{campaign.name}</h3>
                                <p>Status: {campaign.status}</p>
                                <p>Date Created: {campaign.date}</p>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Dialog to Add Campaign */}
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>Add New Campaign</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Campaign Name"
                        fullWidth
                        margin="normal"
                        value={newCampaignName}
                        onChange={handleNameChange}
                    />
                    <TextField
                        label="Campaign Status"
                        fullWidth
                        margin="normal"
                        value={newCampaignStatus}
                        onChange={handleStatusChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleAddCampaign} color="primary">
                        Add Campaign
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Campaigns;
