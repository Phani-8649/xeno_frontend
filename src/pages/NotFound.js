import React from 'react';
import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <Typography variant="h1" color="error">404</Typography>
        <Typography variant="h5">Page Not Found</Typography>
        <Button variant="contained" color="primary" component={Link} to="/">
            Go Back Home
        </Button>
    </div>
);

export default NotFound;
