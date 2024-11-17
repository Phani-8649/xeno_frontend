import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const AudienceFilter = () => {
    const [field, setField] = useState('');
    const [operator, setOperator] = useState('');
    const [value, setValue] = useState('');

    const handleSubmit = () => {
        // Handle filter logic
        console.log({ field, operator, value });
    };

    return (
        <form style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
            <FormControl>
                <InputLabel>Field</InputLabel>
                <Select value={field} onChange={(e) => setField(e.target.value)}>
                    <MenuItem value="spending">Spending</MenuItem>
                    <MenuItem value="visits">Visits</MenuItem>
                    <MenuItem value="lastVisit">Last Visit</MenuItem>
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel>Operator</InputLabel>
                <Select value={operator} onChange={(e) => setOperator(e.target.value)}>
                    <MenuItem value=">">{">"}</MenuItem>
                    <MenuItem value="<">{"<"}</MenuItem>
                    <MenuItem value="=">{"="}</MenuItem>
                </Select>
            </FormControl>
            <TextField
                label="Value"
                type="number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Apply Filter
            </Button>
        </form>
    );
};

export default AudienceFilter;
