import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useTheme } from '../Context/ThemeContext';
import {auth} from '../firebaseConfig';
import { toast } from 'react-toastify';
import errorMapping from '../Utils(Utilities)/errorMapping';


const SignUp = ({handleModalClose}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const {theme} = useTheme();

    const handleSubmit = () =>{
        if(!email || !password || !confirmPassword){
            // alert('Fill All Details');
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
        if(password !== confirmPassword){
            // alert('Password Mismatch');
            toast.warning('Password Mismatch', {
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
        auth.createUserWithEmailAndPassword(email, password).then((res)=>{
            // alert('User Created');
            toast.success('User Created', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
                handleModalClose();
        })
        .catch(err => {
            // alert('Not able to create user,try again');
            // toast.error('Not able to create user,try again', {
                toast.error(errorMapping[err.code] || 'Some error occured',{
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
        gap: "20px",
      }}
    >
      <TextField variant="outlined" type="email" label="Enter Email"
      onChange={(e) => setEmail(e.target.value)}
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
       />

      <TextField variant="outlined" type="password" label="Enter Password"
       onChange={(e) => setPassword(e.target.value)}
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
        />
      <TextField
        variant="outlined"
        type="password"
        label="Enter Confirm Password"
        // InputLabelProps- for textfield label color
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
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Button
        variant="contained"
        size="large"
        style = {{backgroundColor: theme.textColor, color: theme.background}}
        onClick={handleSubmit}>
        SignUp
      </Button>
    </Box>
  );
}

export default SignUp