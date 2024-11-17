import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Firebase authentication logic
        console.log(`Logging in with ${email}`);
    };

    return (
        <Container
            style={{
                marginTop: '50px',
                backgroundColor: '#2c3e50', // Dark background for contrast
                borderRadius: '8px',
                padding: '20px',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Shadow for depth
                maxWidth: '400px', // Limiting the container width for a better look
                textAlign: 'center'
            }}
        >
            <Typography
                variant="h4"
                gutterBottom
                style={{
                    color: '#fff', // White text for the header
                    fontFamily: 'Arial, sans-serif', // Clean and modern font
                    fontWeight: 'bold'
                }}
            >
                Login
            </Typography>
            <TextField
                label="Email"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputLabelProps={{
                    style: { color: '#fff' }, // White label text
                }}
                InputProps={{
                    style: { color: '#fff', backgroundColor: '#34495e' }, // White text and dark input background
                }}
            />
            <TextField
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputLabelProps={{
                    style: { color: '#fff' }, // White label text
                }}
                InputProps={{
                    style: { color: '#fff', backgroundColor: '#34495e' }, // White text and dark input background
                }}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleLogin}
                fullWidth
                style={{
                    marginTop: '20px',
                    backgroundColor: '#1abc9c', // Greenish color for the button
                    color: '#fff', // White text
                    fontWeight: 'bold',
                    padding: '10px',
                    borderRadius: '5px',
                }}
            >
                Login
            </Button>
        </Container>
    );
};

export default LoginPage;
