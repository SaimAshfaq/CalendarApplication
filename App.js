import  React,{useState,useEffect} from "react";
import Holidays from './components/Holidays';
import { CountryDropdown } from 'react-country-region-selector';
import { getCode } from 'country-list'


const App =()=>{

  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [year, setyear] = useState(2021)

  const [country, setcountry] = useState('Pakistan');
  useEffect(() => {
    console.log(country)
    if (getCode(country)) {
      try {
        fetch(`https://calendarific.com/api/v2/holidays?&api_key=84a6aca91a8ceffcb74f71c64b58bf46e3b02136&country=${getCode(country)}&year=${year}`)
      .then((res)=>{
        return res.json()
      })
      .then((data)=>{
        setData(data);
      })
      } catch (error) {
        setError(error.message)
      }
    }
  },[country])
 
 
  return (
    <div >
      <div style={{display:'flex', flexDirection:'row'},{marginRight:'3%'}}>
      <p>Select country: </p>
       <CountryDropdown
        value={country}
        onChange={(val) => setcountry(val)}
        />
        </div>
      <h1>Calendar</h1>      
      {data !== null ? <Holidays data={data} /> : null}
      {error !== null ? <p style={{backgroundColor: 'red'}}>{error}</p>: null}
    </div>

  );
}

export default App;