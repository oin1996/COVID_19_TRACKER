import axios from 'axios';

const app_url = "https://covid19.mathdro.id/api";

export const fetchData = async(country)=>{
    let changeCountryUrl = app_url;

    if(country){
        changeCountryUrl = `${app_url}/countries/${country}`;
    }
    try{
        const {data: {confirmed,recovered,deaths,lastUpdate}}= await axios.get(changeCountryUrl);
        const modifiedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate,
        }
        return modifiedData;
    } catch(error){
        console.log('error',error)
    }

    // try{
    //     const {data: {confirmed,recovered,deaths,lastUpdate}}= await axios.get(app_url);
    //     const modifiedData = {
    //         confirmed,
    //         recovered,
    //         deaths,
    //         lastUpdate,
    //     }
    //     return modifiedData;
    // } catch(error){
    //     console.log('error',error)

    // }
}

export const fetchDailyData = async()=>{
    try{
        const {data} = await axios.get(`${app_url}/daily`);
        const updatedData = data.map((dailyData)=>({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date:dailyData.reportDate
        }))
        return updatedData;
    }catch(error){
        console.log('error fetch daily',error)
    }

}


export const fetchCountries = async()=>{
    try{
        const {data:{countries}} = await axios.get(`${app_url}/countries`);
        return countries.map((country)=>country.name)
    }catch(error){
        console.log(error)
    }
}