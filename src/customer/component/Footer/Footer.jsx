import { Button, Grid, Link, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <Grid 
        className='bg-black text-white text-center mt-10'
        container
        sx={{bgcolor:'black', color:'white', py:3, justifyContent: 'center'}}
      >
        <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant='h6' gutterBottom> Company </Typography>
            <div>
              <Button className='pb-5' variant='h6'> About </Button>
            </div>
            <div>
              <Button className='pb-5' variant='h6'> Blog </Button>
            </div>
            <div>
              <Button className='pb-5' variant='h6'> Press </Button>
            </div>
            <div>
              <Button className='pb-5' variant='h6'> Jobs </Button>
            </div>
            <div>
              <Button className='pb-5' variant='h6'> Partners </Button>
            </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant='h6' gutterBottom> Solutions </Typography>
            <div>
              <Button className='pb-5' variant='h6'> Marketing </Button>
            </div>
            <div>
              <Button className='pb-5' variant='h6'> Analytics </Button>
            </div>
            <div>
              <Button className='pb-5' variant='h6'> Commerce </Button>
            </div>
            <div>
              <Button className='pb-5' variant='h6'> Insight </Button>
            </div>
            <div>
              <Button className='pb-5' variant='h6'> Support </Button>
            </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant='h6' gutterBottom> Documentation </Typography>
            <div>
              <Button className='pb-5' variant='h6'> Guides </Button>
            </div>
            <div>
              <Button className='pb-5' variant='h6'> API Status </Button>
            </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant='h6' gutterBottom> Legal </Typography>
            <div>
              <Button className='pb-5' variant='h6'> Claim </Button>
            </div>
            <div>
              <Button className='pb-5' variant='h6'> Privacy </Button>
            </div>
            <div>
              <Button className='pb-5' variant='h6'> Terms </Button>
            </div>
        </Grid>
        <Grid className='pt-20' item xs={12}>
          <Typography variant='body2' component="p" align="center"  >
            &copy; 2024 My Company. All right reserved.
          </Typography>
          <Typography variant='body2' component="p" align="center" >
            Made with love by Animesh!
          </Typography>
          <Typography variant='body2' component="p" align="center" >
            Icons Made by {' '}
            <Link href="https://www.freepik.com" color="inherit" underline="always" >
            freepik
            </Link>{' '}
            from {' '}
            <Link href="https://www.flaticon.com" color="inherit" underline="always" >
              flaticon
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer
