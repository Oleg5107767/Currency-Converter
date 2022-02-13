import {useState, useEffect} from "react";

import Header from "../header/Header";
import Convector from "../convector/Convector"

const LayOut = () => {
  const [currency, setCurrency] = useState([]);


  useEffect(() => {
    const axios = require('axios');
    const apiUrl = ' https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'
    axios.get(apiUrl).then((resp) => {
      let allItems = resp.data;
      allItems.push({
        "ccy": "UAH",
        "base_ccy": "UAH",
        "buy": 1,
        "sale": 1,
      })
      allItems = allItems.filter(el => el.base_ccy === "UAH")
      allItems.map((el) => {
          el.buy = Math.round(el.buy * 100) / 100
        el.sale = Math.round(el.sale * 100) / 100
      })
      setCurrency( [...allItems])
    });
  }, [])

  return (
    <div>
      <Header currency={currency}/>
      <Convector currency={currency}/>
    </div>
  )
}
export default LayOut;