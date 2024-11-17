import React, { useState } from 'react';
import { Button, TextField, Grid, Card, CardContent, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const Orders = () => {
    const [orders, setOrders] = useState([
        {
            id: 1,
            customerName: 'John Doe',
            customerEmail: 'johndoe@example.com',
            customerContact: '123-456-7890',
            quantity: 2,
            total: '$100',
            date: new Date().toLocaleDateString()
        },
        {
            id: 2,
            customerName: 'Jane Smith',
            customerEmail: 'janesmith@example.com',
            customerContact: '987-654-3210',
            quantity: 1,
            total: '$50',
            date: new Date().toLocaleDateString()
        }
    ]);

    const [openDialog, setOpenDialog] = useState(false);
    const [newOrder, setNewOrder] = useState({
        customerName: '',
        customerEmail: '',
        customerContact: '',
        quantity: '',
        total: ''
    });

    // Open the dialog to add an order
    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    // Close the dialog
    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    // Handle the input changes for new order
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewOrder((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    // Add a new order with user input
    const handleAddOrder = () => {
        const { customerName, customerEmail, customerContact, quantity, total } = newOrder;
        if (customerName && customerEmail && customerContact && quantity && total) {
            const newOrderData = {
                id: orders.length + 1,
                customerName,
                customerEmail,
                customerContact,
                quantity: parseInt(quantity),
                total,
                date: new Date().toLocaleDateString()
            };
            setOrders([...orders, newOrderData]);
            setOpenDialog(false); // Close the dialog after adding the order
            setNewOrder({
                customerName: '',
                customerEmail: '',
                customerContact: '',
                quantity: '',
                total: ''
            });
        } else {
            alert("Please fill in all fields.");
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <Button variant="contained" color="primary" onClick={handleOpenDialog}>
                Create Order
            </Button>

            {/* Orders Grid */}
            <Grid container spacing={3} style={{ marginTop: '20px' }}>
                {orders.map((order) => (
                    <Grid item xs={12} sm={6} md={4} key={order.id}>
                        <Card>
                            <CardContent>
                                <h3>{order.customerName}</h3>
                                <p>Email: {order.customerEmail}</p>
                                <p>Contact: {order.customerContact}</p>
                                <p>Quantity: {order.quantity}</p>
                                <p>Total: {order.total}</p>
                                <p>Date Created: {order.date}</p>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Dialog to Add Order */}
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>Create New Order</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Customer id"
                        fullWidth
                        margin="normal"
                        name="customerName"
                        value={newOrder.customerName}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="AmountSpend"
                        fullWidth
                        margin="normal"
                        name="AmountSpend"
                        type="number"
                        value={newOrder.quantity}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Total"
                        fullWidth
                        margin="normal"
                        name="total"
                        value={newOrder.total}
                        onChange={handleInputChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleAddOrder} color="primary">
                        Create Order
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Orders;
