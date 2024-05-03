import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCart = () => {
    const navigate=useNavigate()
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-md shadow-black hover:shadow-2xl border'>
      <Grid container spacing={2} sx={{justifyContent:'space-between'}}>
        <Grid item xs={5}>
            <div className='flex cursor-pointer'>
                <img 
                    className='w-[5rem] h-[5rem] object-cover object-bottom'
                    src='https://5.imimg.com/data5/SELLER/Default/2022/3/KE/DE/JW/92432749/men-s-jens.jpg'
                    alt='' 
                />
                <div className='ml-5 space-y-2'>
                    <p className=''>Men Slim Mid Rise Blue Jens</p>
                    <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                    <p className='opacity-50 text-xs font-semibold'>Color: Black</p>
                </div>
            </div>
        </Grid>
        <Grid item sx={2}>
            <p>₹1099</p>
        </Grid>
        <Grid item sx={3}>
            {true && 
            <div className='pr-9'>
                <p>
                    <AdjustIcon className='text-green-600 mr-2 text-sm' sx={{width:'15px', height: '15px'}} />
                    <span>
                        Delivered On March 18
                    </span>
                </p>
                <p className='text-xs ml-6'>Your item has been Delivered</p>
            </div>
            }
           {false && <p>
                <span>
                    Expected Delivere On April 20
                </span>
            </p>}
        </Grid>
      </Grid>
    </div>
  )
}

export default OrderCart
