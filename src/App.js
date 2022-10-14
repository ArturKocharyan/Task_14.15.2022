import './App.css';
import { useEffect, useState } from 'react';
import DivStyle from './components/DivStyle'
import {useSelector} from "react-redux"
import axios from "axios";

function App() {

  // const [test, setTest] = useState()

  // const testIp = async () => {
  //   try {
  //       const { data: response } = await axios.get('https://pixabay.com/images/search/armenia/?manual_search=1')
  //       setTest(response.data.products);
  //   } catch (error) {
  //       if (error.response) {
  //           console.log('error')
  //       }
  //   }
  // }

  const list = useSelector(function(state){
    return state.list
  })


 function getRandomCountries(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
  
    return  shuffled.slice(0, num);
  }

  useEffect(()=>{
    getRandomCountries(list,10)
  },[])
  
  return (
    <div className="App">
    {
      getRandomCountries(list,10).map((item)=>{
        return<DivStyle 
        key={Math.random()} 
        top={item.latlng[0]}
        left={item.latlng[1]}
        name={item.name}
        ></DivStyle>
      })
    }
    </div>
  );
}

export default App;
