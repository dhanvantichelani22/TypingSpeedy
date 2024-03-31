import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import { useTheme } from '../Context/ThemeContext';
import {auth} from '../firebaseConfig';
import { toast } from 'react-toastify';
import errorMapping from '../Utils(Utilities)/errorMapping';


const LoginForm = ({handleModalClose}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {theme} = useTheme();

    // https://fkhadra.github.io/react-toastify/introduction/
    // above link of react toastify playground
    const handleSubmit = () =>{
        if(!email || !password){
          //  alert('Fill All Details');
          toast.warning('Fill all details', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
           return;
        }
        auth.signInWithEmailAndPassword(email, password).then((res)=>{
          // alert('Logged in')
          toast.success('Logged in', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
            handleModalClose(); // modal that was open for login to user after login in modal close automatically
        })
        .catch(err => {
          // alert('Invalid Credential');
          // toast.error('Invalid Credential', {   error mapping  has error code in util folder

             toast.error(errorMapping[err.code] || 'Some error occured', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        })
    }

  return (
    <Box
      p={3}
      style={{
        display: "flex",
        // background: "white",
        flexDirection: "column",
        gap: '20px'
      }}>
      <TextField variant='outlined'
                type='email'
                label='Enter Email'
                InputLabelProps={{
                    style: {
                        color: theme.textColor
                    }
                }}
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                    style: {
                        color: theme.textColor
                    }
                }}
                />
      <TextField variant='outlined'
                type='password'
                label='Enter Password'
                InputLabelProps={{
                    style: {
                        color: theme.textColor
                    }
                }}
                InputProps={{
                    style: {
                        color: theme.textColor
                    }
                }}
                onChange={(e) => setPassword(e.target.value)}
                />
      <Button 
        variant='contained'
        size='large' style = {{backgroundColor: theme.textColor, color: theme.background}} 
        onClick={handleSubmit}>LOGIN</Button>
    </Box>
  );
}

export default LoginForm