import React from 'react'
import { Button, IconButton } from '@mui/material';
import RemoveCircleOutlineTwoToneIcon from '@mui/icons-material/RemoveCircleOutlineTwoTone';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import { useDispatch } from 'react-redux';
import { removeItemToCart, upateItemToCart } from '../../../state/Cart/action';

const CartItems = ({item}) => {
  const dispatch = useDispatch();

  const handleUpdateCartItem = (num) => {
    const data = { data: {quantity: item.quantity+num}, cartItemId: item?._id}
    dispatch(upateItemToCart(data))
  };

  const handleRemoveCartItem = () => {
    dispatch(removeItemToCart(item._id))
  }

  return (
    <div className='p-5 shadow-lg border rounded-md'>
      <div className='flex items-center'>
        <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
          <img
            className='w-full h-full object-cover object-bottom'
            src={item.product.imageUrl}
            alt='' 
          />
        </div>
        <div className='ml-5 space-y-1'>
          <p className='font-semibold'>{item.product.title}</p>
          <p className='opacity-70'>size: {item.size}, {item.product.color}</p>
          <p className='opacity-70 mt-2'>seller: {item.product.brand}</p>
          <div className='flex space-x-5 items-center text-gray-900 pt-6'>
            <p className='font-semibold'>₹{item.discountedPrice}</p>
            <p className='opacity-50 line-through'>₹{item.price}</p>
            <p className='text-green-600 font-semibold'>{item.product.discountPersent}% Off</p>
          </div>
        </div>
      </div>
        <div className='lg:flex items-center lg:space-x-10 pt-4'>
          <div className='flex items-center lg:space-x-10 pt-4'>
            <div className='flex items-center space-x-2'>
              <IconButton onClick={()=>handleUpdateCartItem(-1)} disabled={item.quantity<=1}>
                <RemoveCircleOutlineTwoToneIcon />
              </IconButton>
              <span className='py-1 px-7 border rounded-sm'>{item.quantity}</span>
              <IconButton sx={{color:'rgb(143, 28, 188)'}} onClick={()=>handleUpdateCartItem(1)}>
                <AddCircleOutlineTwoToneIcon />
              </IconButton>
            </div>
            <div>
              <Button onClick={handleRemoveCartItem} sx={{color:'rgb(143, 28, 188)'}}>Remove</Button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CartItems
