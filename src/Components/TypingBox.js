//formula
// WPM = (Corrected Char / 5)/ Time (in mins)
// Accuracy = (Correct Words Typed / Total Words Typed)*100
// Correct Chars/ Incorrect Chars/ Missed Chars/Extra
// https://indiatyping.com/index.php/typing-tips/typing-speed-calculation-formula

import React, { useState,useRef, createRef, useEffect,useMemo } from 'react'
import { generate as randomWords } from 'random-words';
import UpperMenu from "./UpperMenu";
import {useTestMode} from '../Context/TestModeContext';
import Stats from './Stats';
// import { create } from '@mui/material/styles/createTransitions';
// var randomWords = require('random-words');
// import randomWords from 'random-words';
// console.log(randomWords());


const TypingBox = () => {

  // useRef - for referencing is object
  const inputRef = useRef(null);
  const {testTime} = useTestMode();
  const [countDown,setCountDown] = useState(15);
  const [intervalID,setIntervalID]=useState(null); //for storing interval id
  const [testStart,setTestStart] = useState(false);  //false-> test has not started
  const [testEnd, setTestEnd] = useState(false);
  const [correctChars,setCorrectChars] = useState(0);
  const [incorrectChars,setInCorrectChars] = useState(0);
  const [missedChars,setMissedChars] = useState(0);
  const [extraChars,setExtraChars] = useState(0); 
  const [correctWords,setCorrectWords] = useState(0);
   const [wordsArray,setWordsArray] = useState(()=>
   {
    return randomWords(50);
   });
  
   const [currwordIndex, setCurrwordIndex] = useState(0);
   const [currCharIndex, setCurrCharIndex] = useState(0);
   const [graphData, setGraphData] = useState([]);

   const wordsSpanRef = useMemo(()=>{
       return Array(wordsArray.length).fill(0).map(i=>createRef(null));
   }, [wordsArray]);

  //  console.log(inputRef);

  // everthing in useEffect runs twice
  const startTimer = ()=>{

    const intervalID = setInterval(timer, 1000);
    setIntervalID(intervalID); //setting reset interval

    function timer(){
      setCountDown((latestCountDown) =>{

        // graph test
        setCorrectChars((correctChars)=>{
          setGraphData((graphData)=>{
            return [...graphData,[
              // to start both from same time
              testTime-latestCountDown+1,
              (correctChars / 5) / (testTime - latestCountDown + 1) / 60,
            ]]
          })
          return correctChars;
        })
        if(latestCountDown === 1){
          // after test timer comes to 1 it should go to 0 and stop there
          setTestEnd(true);
          clearInterval(intervalID);
          return 0;
        }
        // latestCountDown -> new state
        return latestCountDown-1;
      });
    }
  }


  // if timer change then paragraph should get reset
  const resetTest = ()=>{
    clearInterval(intervalID);
    setCountDown(testTime);
    setCurrwordIndex(0);
    setCurrCharIndex(0);
    setTestStart(false);
    setTestEnd(false);
    resetWordSpanRefClassname();
    setWordsArray(randomWords(50));
    focusInput();
}

const resetWordSpanRefClassname=()=>{
  wordsSpanRef.map(i=>{
    Array.from(i.current.childNodes).map(j=>{
      j.className = '';
    })
  });
  // placing cursor at start while click of other timer
  wordsSpanRef[0].current.childNodes[0].className = 'current';
}
// whenever user press the keys
   const handleUserInput = (e)=>{

    //start timer function 
    if(!testStart){
      startTimer();
      setTestStart(true);
    }


    //  console.log(e);
    const allCurrChars = wordsSpanRef[currwordIndex].current.childNodes;
    // console.log(allCurrChars[0].innerText); // initiate word of para
    

    //for moving your cursor to space(logic for space)
    if(e.keyCode === 32){

      let correctCharsInWord = wordsSpanRef[currwordIndex].current.querySelectorAll('.correct');
      
      // will tell that whole word that is typed is correct
      if(correctCharsInWord.length === allCurrChars.length){
        setCorrectWords(correctWords+1);
      }

      if(allCurrChars.length<=currCharIndex){
        // remove cursor from last place in a word 
        // current-right condition
        allCurrChars[currCharIndex-1].classList.remove('current-right');
      }
      else{
        //setMissedChars - will tell us how many chars are missed and will substract from currchar typed
        setMissedChars(missedChars+(allCurrChars.length - currCharIndex));
         // remove cursor from in between of the word(missed chars)
        allCurrChars[currCharIndex].classList.remove('current');
      }
      // to see cursor right blinking and when space key is pressed
      wordsSpanRef[currwordIndex+1].current.childNodes[0].className = 'current';
      setCurrwordIndex(currwordIndex+1);
      setCurrCharIndex(0);
      return;
    }

    if(e.keyCode === 8){
      // logic for backspace

      if(currCharIndex !==0 ){
        if(allCurrChars.length === currCharIndex){
          if(allCurrChars[currCharIndex-1].className.includes('extra')){
            allCurrChars[currCharIndex-1].remove();
            allCurrChars[currCharIndex-2].className+=' current-right';
          }else{
            //end of word right side to backspace 
              allCurrChars[currCharIndex-1].className = 'current';
            }
        setCurrCharIndex(currCharIndex-1);
          return;
        }
        allCurrChars[currCharIndex].className = '';
        allCurrChars[currCharIndex-1].className = 'current';
        setCurrCharIndex(currCharIndex-1);
      }
      return;
    }
    
    //for extra chars
    if(currCharIndex === allCurrChars.length){
       let newSpan = document.createElement('span');
       newSpan.innerText = e.key;
       newSpan.className = 'incorrect extra current-right';
       //incorrect extra current word add and right cursor is remove
       allCurrChars[currCharIndex-1].classList.remove('current-right');
       wordsSpanRef[currwordIndex].current.append(newSpan);
       setCurrCharIndex(currCharIndex+1);
       setExtraChars(extraChars+1);
       return;
    }

    if(e.key === allCurrChars[currCharIndex].innerText){
        // console.log("correct input");
        allCurrChars[currCharIndex].className = 'correct';
        //it will show us correct chars with increase by 1
        setCorrectChars(correctChars+1);
   }
   else{
    //  console.log("incorrect");
    allCurrChars[currCharIndex].className = 'incorrect';
    //it will show us incorrect chars with increase by 1
    setInCorrectChars(incorrectChars+1);
   }

   //for blinking right cursor
   // every classname and div in element it split based on space
   if(currCharIndex+1 === allCurrChars.length){
    allCurrChars[currCharIndex].className+= ' current-right';
   }else{
    //for left cursor
    allCurrChars[currCharIndex+1].className = 'current';
   }

   //for cursor to move at every letter of 1st word(for left cursor blinking)
  //  allCurrChars[currCharIndex+1].className = 'current';
   //first word we can type for correct and incorrect 
   setCurrCharIndex(currCharIndex+1);
  }

  const calculateWPM = ()=>{
    return Math.round((correctChars/5)/(testTime/60));
  }
  
  const calculateAccuracy = ()=>{
    return Math.round((correctWords/currwordIndex)*100);
  }

   const focusInput = ()=>{
    // inputRef.current -> just give reference to input text to bring in focus
    inputRef.current.focus();
   }
  
   useEffect(()=>{
    resetTest();
    // setCountDown(testTime);
   },[testTime])
   
   useEffect(()=>{
    focusInput();
    // startTimer(); - will decrease by twice in useeffect
    // childNode - give list of child node
    wordsSpanRef[0].current.childNodes[0].className = 'current';
   },[]);
  
  return (
    <div>
      <UpperMenu countDown={countDown} />
      {/* ternary operator for display test over */}
      {testEnd ? (
        <Stats
          wpm={calculateWPM()}
          accuracy={calculateAccuracy()}
          correctChars={correctChars}
          incorrectChars={incorrectChars}
          missedChars={missedChars}
          extraChars={extraChars}
          graphData={graphData}
        />
      ) : (
        <div className="type-box" onClick={focusInput}>
          <div className="words">
            {wordsArray.map((word, index) => (
              <span className="word" ref={wordsSpanRef[index]}>
                {/* split words with spaces */}
                {word.split("").map((char) => (
                  // create of blinking cursor
                  // <span className='current'>{char}</span>
                  <span>{char}</span>
                ))}
              </span>
            ))}
          </div>
        </div>
      )}
      <input
        type="text"
        className="hidden-input"
        ref={inputRef}
        onKeyDown={handleUserInput}
      />
    </div>
  );
}


export default TypingBox


// wpm to y-axis and time on x-axis on chartjs