import React from 'react';

import {Cards,Chart,CountryList,Footer,Header} from './components';
import Styles from './App.module.css';
import {fetchData} from './api';


class App extends React.Component {
  state = {
    data : {},
    country:'',
  }


  handleCountryChange=async(country)=>{
    const fetchedData = await fetchData(country);
    console.log("selected country",fetchedData)
    this.setState({data:fetchedData,country:country})
  }

  async componentDidMount () {
    const getData = await fetchData();
    this.setState({data:getData })
    console.log(JSON.stringify(getData));
  }

  render(){
    const {data,country} = this.state ;
    return(
      <div>
         <Header/>
        <div className = {Styles.container}>
          <Cards data={data}/>
          <CountryList handleCountryChange={this.handleCountryChange}/>
          <Chart data={data} country={country}/>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
      
    )
  }
}




export default App;
