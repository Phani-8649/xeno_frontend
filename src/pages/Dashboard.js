import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const Dashboard = () => (
    <Grid container spacing={3} style={{ padding: '20px' }}>
        <Grid item xs={12} sm={6} md={4}>
            <Card>
                <CardContent>
                    <Typography variant="h5">Active Campaigns</Typography>
                    <Typography variant="h3" color="primary">   2</Typography>
                </CardContent>
            </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
            <Card>
                <CardContent>
                    <Typography variant="h5">Total Audience</Typography>
                    <Typography variant="h3" color="secondary">560</Typography>
                </CardContent>
            </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
            <Card>
                <CardContent>
                    <Typography variant="h5">Conversions</Typography>
                    <Typography variant="h3" color="primary">245</Typography>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
);

export default Dashboard;
