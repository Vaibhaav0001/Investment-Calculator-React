import { calculateInvestmentResults,formatter } from "../util/investment.js";
import UserInput from "./UserInput.jsx";
export default function Results({input}){
    
    //console.log(input);
    const res=calculateInvestmentResults(input);
    console.log(res)
    const initialInvest=res[0].valueEndOfYear-res[0].interest-res[0].annualInvestment;
    
    
    return(
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest(Year)</th>
                    <th>Total Interest</th>
                    <th>Interest Capital</th>


                </tr>
            </thead>
            <tbody>
                {res.map((yr)=>{
                    const totalInterest=yr.valueEndOfYear-(yr.annualInvestment*yr.year)-initialInvest;
                    const totalAmount=yr.valueEndOfYear-totalInterest;
                    return (
                        <tr key={yr.year}>
                            <td>{yr.year}</td>
                            <td>{formatter.format(yr.valueEndOfYear)}</td>
                            <td>{formatter.format(yr.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmount)}</td>




                        </tr>

                    )
                })}
                
            </tbody>
        </table>
    )
};