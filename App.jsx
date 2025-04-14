import Header from "./Components/Header.jsx"
import UserInput from "./Components/UserInput.jsx"
import Results from "./Components/Results.jsx"
import { calculateInvestmentResults } from "./util/investment.js"
import { useState } from "react"
function App() {
   const [updedVal,updingval]=useState({
          initialInvestment:10000,
          annualInvestment:300,
          ROI:5,
          duration:10,
      })
      function handleChange(identifier,newValue){
          updingval(prevInput=>{
              return {...prevInput,[identifier]:+newValue};
          });
         // calculateInvestmentResults(initialInvestment,annualInvestment,ROI,duration);
      }
  return (
    <>
    
    <Header />
    <UserInput onChange={handleChange} updedVal={updedVal}/>
    <Results input={updedVal}/>
    </>

  )
}

export default App
