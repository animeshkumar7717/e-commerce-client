import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'
import AddressCard from '../Address/Address'
import { useDispatch, useSelector } from 'react-redux'
import { createOrder } from '../../../state/Order/action'
import { useNavigate } from 'react-router-dom'

const DeliveryAddress = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { auth } = useSelector(store=>store);

    console.log('auth', auth);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const address = {
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            streetAddress: data.get('address'),
            city: data.get('city'),
            state: data.get('state'),
            zipCode: data.get('zip'),
            mobile: data.get('mobile'),

        }  
        const orderData = {address, navigate}
        dispatch(createOrder(orderData));      
    }

    return (
        <div>
            <Grid container spacing={4}>
                <Grid xs={12} xl={5} className='border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll mt-8'>
                    <div className='p-5 py-7 border-b cursor-pointer'>
                        {auth.user?.address.map(item=> <AddressCard address={item} />)}
                        {/* <AddressCard /> */}
                        <Button
                            sx={{ mt: 2, bgcolor: 'RGB(145 85 253)', color: 'white', '&:hover': {bgcolor: 'RGB(145 85 253)',opacity: 0.9,} }}
                            size='large'
                            varient='contained'
                        >
                            Deliver Here
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={12} lg={7}>
                    <Box className='border rounded-s-md shadow-md p-5'>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id='firstName'
                                        name='firstName'
                                        label="First Name"
                                        fullWidth
                                        autoComplete='given-name'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id='lastName'
                                        name='lastName'
                                        label="Last Name"
                                        fullWidth
                                        autoComplete='given-name'
                                    />
                                </Grid>
                                <Grid item xs={12} >
                                    <TextField
                                        required
                                        id='address'
                                        name='address'
                                        label="Address"
                                        fullWidth
                                        autoComplete='given-name'
                                        multiline
                                        rows={4}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id='city'
                                        name='city'
                                        label="City"
                                        fullWidth
                                        autoComplete='given-name'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id='state'
                                        name='state'
                                        label="State/Province/Region"
                                        fullWidth
                                        autoComplete='given-name'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id='zip'
                                        name='zip'
                                        label="Zip / Postal code"
                                        fullWidth
                                        autoComplete='given-name'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id='mobile'
                                        name='mobile'
                                        label="Mobile Number"
                                        fullWidth
                                        autoComplete='given-name'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                <Button
                                    sx={{ py:1.5, mt: 2, bgcolor: 'RGB(145 85 253)', color: 'white', '&:hover': {bgcolor: 'RGB(145 85 253)',opacity: 0.9,} }}
                                    size='large'
                                    varient='contained'
                                    type='submit'
                                >
                                    Deliver Here
                                </Button>
                                </Grid>
                                
                            </Grid>
                        </form>
                    </Box>

                </Grid>
            </Grid>
        </div>
    )
}

export default DeliveryAddress
