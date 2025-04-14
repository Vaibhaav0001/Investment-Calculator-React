import { useState } from "react"
import { calculateInvestmentResults } from "../util/investment.js";
import Results from "./Results.jsx";
export default function UserInput({onChange,updedVal}){
   
    

    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" required value={updedVal.initialInvestment} onChange={(event)=>onChange("initialInvestment",event.target.value)} />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" required value={updedVal.annualInvestment} onChange={(event)=>onChange("annualInvestment",event.target.value)}/>
                </p>
                <p>
                    <label>ROI</label>
                    <input type="number" required value={updedVal.ROI} onChange={(event)=>onChange("ROI",event.target.value)}/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required value={updedVal.duration} onChange={(event)=>onChange("duration",event.target.value)}/>
                </p>
            </div>
        </section>

    )
}