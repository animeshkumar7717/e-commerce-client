import React from 'react'
import { Button, IconButton } from '@mui/material';
import RemoveCircleOutlineTwoToneIcon from '@mui/icons-material/RemoveCircleOutlineTwoTone';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';

const CartItems = () => {
  return (
    <div className='p-5 shadow-lg border rounded-md'>
      <div className='flex items-center'>
        <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
          <img
            className='w-full h-full object-cover object-bottom'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEiLCbkuuubhXbz_BCXUsb40LS1ZRPOViX4A&s'
            alt='' 
          />
        </div>
        <div className='ml-5 space-y-1'>
          <p className='font-semibold'>Mens Slim Mid Rise Black Jeans</p>
          <p className='opacity-70'>size: L, white</p>
          <p className='opacity-70 mt-2'>seller: Crishtaliyo 2 fashion</p>
          <div className='flex space-x-5 items-center text-gray-900 pt-6'>
            <p className='font-semibold'>₹199</p>
            <p className='opacity-50 line-through'>₹211</p>
            <p className='text-green-600 font-semibold'>25% Off</p>
          </div>
        </div>
      </div>
        <div className='lg:flex items-center lg:space-x-10 pt-4'>
          <div className='flex items-center lg:space-x-10 pt-4'>
            <div className='flex items-center space-x-2'>
              <IconButton>
                <RemoveCircleOutlineTwoToneIcon />
              </IconButton>
              <span className='py-1 px-7 border rounded-sm'>3</span>
              <IconButton sx={{color:'rgb(143, 28, 188)'}}>
                <AddCircleOutlineTwoToneIcon />
              </IconButton>
            </div>
            <div>
              <Button sx={{color:'rgb(143, 28, 188)'}}>Remove</Button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CartItems
