import React from 'react'
import CartItems from './CartItems'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const navigate=useNavigate();

    const handleCheckout = () => {
        navigate('/checkout?step=2')
    }
  return (
    <div>
        <div className='lg:grid grid-cols-3 lg:px-16 relative'>
            <div className='col-span-2'>
                {[1,1,1,1,1].map((item)=><CartItems />)}
            </div>
            <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 '>
                <div className='border'>
                    <p className='uppercase font-bold opacity-60 p-4'>Price Details</p>
                    <hr />
                    <div className='space-y-3 font-semibold mb-10 p-4'>
                        <div className='flex justify-between pt-3 text-black'>
                            <span>Price</span>
                            <span className='text-green-600'>₹4697</span>
                        </div>
                        <div className='flex justify-between pt-3 text-black'>
                            <span>Discount</span>
                            <span className='text-green-600'>-₹3419</span>
                        </div>
                        <div className='flex justify-between pt-3 text-black'>
                            <span>Delivery Charge</span>
                            <span className='text-green-600'>Free</span>
                        </div>
                        <div className='flex justify-between pt-3 text-black font-bold'>
                            <span>Total Amount</span>
                            <span className='text-green-600'>₹1728</span>
                        </div>
                    </div>
                    <Button onClick={handleCheckout} className='w-full mt-5' variant="contained" sx={{px:"2.5rem", py:"0.7rem", bgcolor: "#9155fd"}} >
                        Checkout
                    </Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart
