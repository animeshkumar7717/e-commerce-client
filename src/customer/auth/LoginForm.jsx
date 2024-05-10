import { Button, Grid, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getUser, login } from '../../state/Auth/action'

const LoginForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector(store=>store)

  console.log('authauth', auth);
  useEffect(()=>{
    if(jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt, auth.jwt, dispatch])

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const userData = {
      email: data.get("email"),
      password: data.get("password")
    }
    dispatch(login(userData))
    console.log({userData});
  }


  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete='email' 
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
            required
            id="password"
            name="password"
            label="Password"
            fullWidth
            autoComplete='password' 
            />
          </Grid>
          {auth.error? <Grid className='text-[#ff0000] pl-6 pt-2'>
            {auth.error}
            </Grid> : ''
          }
          <Grid item xs={12}>
            <Button
              className='bg-[#9155fd] w-full'
              type='submit'
              variant='contained'
              size='large'
              sx={{padding:".8rem 0", bgcolor: "#9155fd"}}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className='flex justify-center flex-col items-center'>
        <div className='py-3 flex items-center'>
          <p>If you have don't have accound?</p>
          <Button onClick={()=>navigate("/register")} className='ml-5' size='small'>Register</Button>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
