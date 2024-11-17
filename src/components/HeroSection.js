import React from 'react';
import { Button, Typography } from '@mui/material';

const HeroSection = () => {
    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: '80vh',
            background: 'linear-gradient(to right, #4facfe, #00f2fe)',
            color: '#fff',
        },
        button: {
            marginTop: '20px',
        },
    };

    return (
        <div style={styles.container}>
            <Typography variant="h3" gutterBottom>
                Welcome to CRM Campaign Manager
            </Typography>
            <Typography variant="h6" gutterBottom>
                Streamline your campaigns and reach your audience effectively.
            </Typography>
            <Button variant="contained" color="secondary" style={styles.button}>
                Get Started
            </Button>
        </div>
    );
};

export default HeroSection;
