import React,{useState,useEffect,useRef} from 'react'
import Image from './assets/bkg.jpg'
function StopWatch (){
   const[running, setRunning]= useState(false);
   const[elapsed, setElapsed]= useState(0);
   const intervalId= useRef(null);
   const startTime= useRef(0);
   useEffect(()=>{
    if(running){
       intervalId.current= setInterval(()=>{
            setElapsed(Date.now()-startTime.current);
        },10)
    }
    return ()=>{
        clearInterval(intervalId.current);
    }
   },[running])

   function start(){
    setRunning(true)
    startTime.current =Date.now()-elapsed;
   }
   function stop (){
    setRunning(false)
   }
   function reset(){
    setElapsed(0);
    setRunning(false);
   }
    function addZero(number){
        return( number< 10 ? "0": '')+ number;
    }
   
   function formartTime(){
    let hours =Math.floor(elapsed/(1000*60*60))
    let mins =Math.floor(elapsed/(1000*60)%60)
    let secs =Math.floor(elapsed/(1000)%60)
    let mill =Math.floor((elapsed % 1000)/10)
    return `${addZero(mins)}:${addZero(secs)}:${addZero(mill)}`
   }
    return(
        <>
        <h2>START TRACKING YOUR TIME</h2>
         <div className='stop'>
            
            
            <div className='time'>{formartTime()}</div>
            <div className='bts'>
                <button className='startbt' onClick={start}>Start</button>
                <button className='resbt' onClick={reset}>Reset</button>
                <button className='stpbt' onClick={stop}>Stop</button>
            </div>
           
        </div>
        </>
       
        
    )
}
export default StopWatch