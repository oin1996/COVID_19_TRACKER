import React,{useState,useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryList.module.css';
import {fetchCountries} from '../../api/index';


const CountryList = ({handleCountryChange})=>{
    const [fetchedCountries,setFetchedCountries] = useState([])

    useEffect(()=>{
        const fetchAPI = async()=>{
            setFetchedCountries(await fetchCountries())
        }
        fetchAPI()
        // console.log('countries',fetchedCountries)
    });
    

    return(
        <FormControl className={styles.container}>
            <NativeSelect defaultValue="" style={{color:'#00264d',fontWeight:'bold'}} onChange={(event)=>{handleCountryChange(event.target.value)}}>
                <option value="">Country List</option>
                {fetchedCountries.map((country,i)=>
                <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>

    )
}

export default CountryList ;