import React, {useState, useEffect} from 'react';
import classes from './QuoteSection.module.css'

const QuoteSection = () => {
const [motivation,setMotivation]=useState({slip:{}})

  //fetching data
useEffect(()=>{
// const fetchData=()=>{
//   fetch('https://api.adviceslip.com/advice').then((res)=>res.json()).then((data)=>console.log(data))
// }
const fetchData = async () => {
 const res = await fetch('https://api.adviceslip.com/advice')
 const data = await res.json()
 setMotivation(data);
}

 fetchData()

},[])

console.log(motivation);

  return (
    <div className={classes.container} >

      <h5 className={classes.heading}> ADVICE #{motivation.slip.id}</h5>

      <div className={classes.quote}>
      <p>"{motivation.slip.advice}"</p>
      </div>

      <div className={classes.pattern}>

      </div>

      <div className={classes.btn}>
      <img src='icon-dice.svg' alt='button'/>
      </div>
      
    </div>
  )
}

export default QuoteSection