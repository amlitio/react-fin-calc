import {useState} from 'react';
import FormInput from './FormInput';
import Chart from './Chart';

function Calculator() {

  const [principal, setPrincipal] = useState(0);
  const [interest, setInterest] = useState(0);
  const [years, setYears] = useState(0);

  const [total, setTotal] = useState(0);

  const calculate = () => {
    // Calculate total using utils function

    setTotal(total);
  }

  return (
    <div className="calculator">
      <FormInput 
        label="Principal"
        value={principal}
        onChange={setPrincipal}  
      />

      <FormInput
        label="Interest"
        value={interest}
        onChange={setInterest}
      />

      <FormInput 
        label="Years"
        value={years}
        onChange={setYears}
      />

      <button onClick={calculate}>Calculate</button>

      <div>Total: {total}</div>

      <Chart 
        principal={principal}
        interest={interest}
        years={years}
      />
    </div>
  )
}

export default Calculator;
