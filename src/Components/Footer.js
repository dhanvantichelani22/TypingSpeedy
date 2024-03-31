import { useState } from 'react';
import Select from 'react-select';
import { themeOptions } from '../Utils(Utilities)/themeOptions';
import { useTheme } from '../Context/ThemeContext';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import { useNavigate } from 'react-router-dom';

const Footer = () => {

  // const [value,setValue] = useState();
  const {setTheme,theme} = useTheme();

  const iconStyle = {
    cursor: 'pointer',
    fontSize: '2rem'
  }

  const handleChange = (e)=>{
    // console.log(e);
    // setValue(e.value); //object
    setTheme(e.value); //object
    localStorage.setItem("theme",JSON.stringify(e.value)); //help to store theme as data in storage
  }

  const handleGithub = (e) =>{
    window.open("https://github.com/dhanvantichelani22", '_blank');
  }

  const handleLinkedin = () =>{
    window.open("https://www.linkedin.com/in/dhanvanti-chelani/", '_blank');
  }
  
  const handleDocs = () =>{
    window.open("https://docs.google.com/document/d/1Zxq1I_W42qrW92ZRfS8dNcIh9EMv3dcRFDB8Ce5vrHs/edit?usp=sharing", '_blank');
  }

  return (
    <div className='footer'>
         <div className='links'>
         <GitHubIcon style={iconStyle} onClick={handleGithub}/>
        <LinkedInIcon style={iconStyle} onClick={handleLinkedin} />
        <DocumentScannerIcon style={iconStyle} onClick={handleDocs} />
      </div>
      <div className="copyright">
        Copyright &#169; by Dhanvanti Chelani
      </div>

    <div className='themeButton'>
    <Select
        // value={value}
        onChange={handleChange}
        options={themeOptions}
        menuPlacement='top'
        defaultValue={{label: theme.label, value: theme}}
      styles={{
         control: styles => ({...styles,backgroundColor:theme.background,color:theme.textColor}),
         menu: styles => ({...styles,backgroundColor:theme.background}),
         option: (styles, {isFocused}) => {
          return {
            ...styles,
            backgroundColor: (!isFocused ? theme.background : theme.textColor),
            color: (!isFocused ? theme.textColor : theme.background),
            cursor: 'pointer'
          }
        }
      }}
      
      />
      </div>
    </div>
  )
}

export default Footer