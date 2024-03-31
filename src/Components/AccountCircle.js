import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { AppBar, Modal, Tabs, Tab, Box } from "@mui/material";
import LoginForm from "./LoginForm";
import SignUp from "./SignUp";
import { useTheme } from '../Context/ThemeContext';
import GoogleButton from 'react-google-button';
import errorMapping from '../Utils(Utilities)/errorMapping';
import { toast } from 'react-toastify';
import { auth } from '../firebaseConfig';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'; //GoogleAuthProvider - class provided by firebase
// npm i react-google-button 

const AccountCircle = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const { theme } = useTheme();
  const navigate = useNavigate();
  // const user = auth.currentUser;
  // [user]- destructing of user from hook
  const [user] = useAuthState(auth); // this object will return array of user info

  const handleModalOpen = () => {
    if (user) {
      //navigate to the userpage - when user login then if again user click on user logo it should go to userpage and not again to sign in user
      navigate('/user');
  }
  else {
      setOpen(true);
  }
}

  const handleModalClose = () => {
    setOpen(false);
  };

  // we can toggle login and signup
  const handleValueChange = (e, v) => {
    setValue(v);
  };

  const logout = () => {
        auth.signOut().then(res => {
            toast.success('Logged out', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            
        }).catch(err => {
            toast.error('Not able to log out', {
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
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider).then((res) => {
            toast.success('Google login successful', {
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
        }).catch(err => {
            toast.error(errorMapping[err.code] || 'Not able to use google authentication', {
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
    <div>
      <AccountCircleIcon onClick={handleModalOpen} />
        {user && <LogoutIcon onClick={logout} />}
      {/* <Modal open={true}> */}
      <Modal
        open={open}
        onClose={handleModalClose}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ width: "400px", textAlign:'center' }}> {/* modal width */}

          {/* position:static -> tab got placed in center */}
          <AppBar position="static" style={{ background: "transparent" }}>
            {/* fullWidth - tab has equal space in between*/}
            <Tabs
              value={value}
              onChange={handleValueChange}
              variant="fullWidth"
            >
              <Tab label="login" style={{ color: theme.textColor }} ></Tab>
              <Tab label="SignUp" style={{ color: theme.textColor }} ></Tab>
            </Tabs>
          </AppBar>
          {value === 0 && <LoginForm handleModalClose={handleModalClose}/>}
          {value === 1 && <SignUp handleModalClose={handleModalClose}/>}
          <Box>
                        <span>OR</span>
                        <GoogleButton
                            style={{
                                width: '100%',
                                marginTop: '10px'
                            }}
                            onClick={handleGoogleSignIn}
                        />
                    </Box>
        </div>
      </Modal>
    </div>
  );
};

export default AccountCircle;
