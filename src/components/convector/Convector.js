import React, {useState, useEffect} from "react";

import "./Convector.css";


const Convector = (props) => {


  const [output, setOutput] = useState(null);
  const [currencyInput, setCurrencyInput] = useState(null);
  const [firstCurrency, setFirstCurrency] = useState({});
  const [secondCurrency, setSecondCurrency] = useState({});

  useEffect(() => updateOutput(), [currencyInput, secondCurrency, firstCurrency]);


  const updateInputValue = (e) => setCurrencyInput(+e.target.value)
  const changeFirstCurrency = (e) => setFirstCurrency(props.currency.filter(el => el.ccy === e.target.value)[0])
  const changeSecondCurrency = (e) => setSecondCurrency(props.currency.filter(el => el.ccy === e.target.value)[0])
  const updateOutput = () => {
    if (Object.keys(firstCurrency).length !== 0 && Object.keys(secondCurrency).length !== 0 && currencyInput) {
      setOutput((Math.round(((firstCurrency.buy / secondCurrency.buy) * currencyInput) * 100) / 100))
    }
  }

  return (
    <div className="container-fluid convector">
      <div className="row">
        <div className="col-5 ">
            <select className="convector__select " id="cur1" 
                    onChange={changeFirstCurrency}>
           <option style={{display: 'none'}} selected></option>
              {props.currency.map(el => {
                return (
                  <option >
                    {el.ccy}
                  </option>
                )
              })}
            </select>
        </div>
        <div className="col-2">
            <svg className="convector__image" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"></path>
            </svg>
        </div>
        <div className="col-5">
            <select className="convector__select " id="cur2"
                    onChange={changeSecondCurrency}>
              <option style={{display: 'none'}} selected></option>
              {props.currency.map(el => {
                return (
                  <option >
                    {el.ccy}
                  </option>
                )
              })}
            </select>
        </div>
      </div>
      <div className="row">
        <div className="col-6 p-0">
            <input className="convector__input " 
                  type="number" 
                  id="valuta1" 
                  onChange={updateInputValue}>
            </input>
        </div>
        <div  className="col-6 p-0">
            <input className="convector__input" 
                  type="number" 
                  id="valuta2" 
                  value={output}>
            </input>
        </div>
      </div>
    </div>

  )
}
export default Convector;