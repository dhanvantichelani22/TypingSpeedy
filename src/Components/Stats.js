import React, { useEffect }  from 'react'
import Graph from './Graph';
import { auth, db } from "../firebaseConfig";
import { toast } from "react-toastify";
//Stat is that which hold only 2D values
const Stats = (
  //made props & de-structuring of object
  {wpm,
  accuracy,
  correctChars,
  incorrectChars,
  missedChars,
  extraChars,
  graphData
}
) => {

  let timeSet = new Set();
    const newGraph = graphData.filter(i => {
        if (!timeSet.has(i[0])) {
            timeSet.add(i[0]);
            return i;
        }
    });

    const pushDataToDB =()=>{
      //if accuracy is not a number so data will not push in database
      if (isNaN(accuracy)) {
        toast.error('Invalid test', {
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
    //reference to DB from firebaseconfig
      const resultRef = db.collection('Results');
       // unique user ID
      const { uid } = auth.currentUser;
      resultRef.add({
        wpm: wpm,
        accuracy: accuracy,
        timeStamp: new Date(),
        characters: `${correctChars}/${incorrectChars}/${missedChars}/${extraChars}`,
       
        //put in user database
        userId: uid
      }).then((res) => {
        toast.success('Data saved successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }).catch((err) => {
        toast.error('Not able to save result', {
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

// to check whether user is login in or not
useEffect(() => {
  // if valid user exist
  if (auth.currentUser) {
      pushDataToDB();
  } else {
      toast.warning('Login to save result', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
      });
  }
}, [])


  return(
  <div className='stats-box'>
    <div className='left-stats'>
     {/* result will display here */}
     <div class="title">WPM</div>
    <div class="subtitle">{wpm}</div>
    <div class="title">Accuracy</div>
    <div class="subtitle">{accuracy}</div>
    <div class="title">Characters</div>
    <div class="subtitle">{correctChars}/{incorrectChars}/{missedChars}/{extraChars}</div>
    </div>
    <div className='right-stats'>
        {/* graph will go here */}
        <Graph graphData={newGraph}/>
    </div>
  </div>
  );
};

export default Stats