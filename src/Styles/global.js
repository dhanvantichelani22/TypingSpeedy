import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  
:root{
  --black: #111;
  --white: #f3f3f3;
  --green : green;
  --red: red;
}

*{
   box-sizing: border-box;
   margin: 0;
   padding: 0;
}

body{
    //  background: #080D71; /*080D71 33FFBB*/
    background: ${({theme})=>theme.background};
     color: ${({theme})=>theme.textColor};
     transition:all 0.25s linear;
   }

   .test{
     font-size: 5rem;
   }

.canvas{
  display:grid;
  min-height:100vh;
  grid-auto-flow:row;
  grid-template-row: auto 1fr auto;
  gap:0.5rem;
  padding:2rem;
  width:100vw;
  align-items:center;
  text-align:center;
}
.hidden-input{
  opacity: 0;
}

//create of blinking cursor
.current{
 border-left: 3px solid;
 animation: blinking 2s infinite;
 animation-timing-function: ease;

  @keyframes blinking{
    0%{
      border-left-color:${({theme})=>theme.textColor};}
    25%{
      border-left-color:${({theme})=>theme.background};
    }
    50%{
      border-left-color:${({theme})=>theme.textColor};
    }
    75%{
      border-left-color:${({theme})=>theme.background};
    }
    100%{
      border-left-color:${({theme})=>theme.textColor};                        
    }
  }
}

.current-right{
  border-right: 3px solid;
  animation: blinkingRight 2s infinite;
  animation-timing-function: ease;
 
   @keyframes blinkingRight{
     0%{
       border-right-color:${({theme})=>theme.textColor};}
     25%{
       border-right-color:${({theme})=>theme.background};
     }
     50%{
       border-right-color:${({theme})=>theme.textColor};
     }
     75%{
       border-right-color:${({theme})=>theme.background};
     }
     100%{
       border-right-color:${({theme})=>theme.textColor};                        
     }
   }
 }

.type-box{
  display:block;
  max-width:1000px;
  height:140px;
  // to put div in center by margin-left and margin-right
  margin-left:auto;
  margin-right:auto;
  overflow:hidden;
}
.words{
  font-size : 32px;
  display: flex;
  flex-wrap: wrap;
  color: ${({theme})=>theme.typeBoxText};
}

.word{
   margin: 5px;
   padding-right: 2px;
}

.upper-menu{
  display:flex;
  width:1000px;
  margin-left:auto;
  margin-right:auto;
  font-size:1.35rem;
  justify-content:space-between;
  padding:0.5rem;
}
.modes{
  display:flex;
  gap:0.5rem
}
.time-mode:hover{
  color:var(--green); //#53ed7c,#46d46c
  cursor:pointer;
}

.correct{
  color:${({theme})=>theme.textColor};//#53ed7c
}
.incorrect{
  color: red;
}

// footer
.footer{
  width:1000px;
  display:flex;
  justify-content:space-between;
  margin-left:auto;
  margin-right:auto;
}

.stats-box{
  display:flex;
  width: 1000px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
}

.left-stats{
  width: 30%;
  padding: 30px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

.right-stats{
  width: 70%;
}
.title{
  font-size: 20px;
  color: ${({theme}) => theme.typeBoxText};
}

.subtitle{
  font-size: 30px;
}

// FIREBASE HEADER PART
.header{
  width: 1000px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  margin-left: auto;
  margin-right: auto;
  border-bottom: 2px solid
}

.logo{
  font-size: 28px;
  color: ${({theme}) => theme.textColor};
  cursor: pointer
}
.logo span{
  background: ${({theme}) => theme.textColor};
  color: ${({theme}) => theme.background};
  padding: 3px 6px;
  margin-left: 3px;
  border-radius: 10px;
  font-weight: bolder;
}
`