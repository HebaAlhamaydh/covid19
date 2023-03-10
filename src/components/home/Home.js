import React, { useState, useEffect } from 'react';

import {Grid} from '@mui/material';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Search from './Search';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
export default function Home() {
    const [total, setTotal] = useState([]);
   

    useEffect(() => {
        fetchRecords();
      }, []);

    const fetchRecords = () => {
        axios
          .get('https://api.covid19api.com/world/total')
          .then((res) => {
            console.log(res.data);
            setTotal(res.data);
          
          })
          .catch((err) => {
            console.log(err);
          });
      };
  return (
    <div>
      <h1>World Total Statistics</h1>

      <Grid container spacing={3}  justifyContent="center">
  <Grid item  xs={3} >
    <Item style={{backgroundColor: '#e91e63',color:'white', fontSize:30}}> TotalConfirmed:<small>{total.TotalConfirmed}</small></Item>
  </Grid>
  <Grid item  xs={3}  >
    <Item style={{backgroundColor: '#e91e63',color:'white',fontSize:30}}>TotalDeaths:<small>{total.TotalDeaths}</small></Item>
  </Grid>
  <Grid item  xs={3}>
    <Item style={{backgroundColor: '#e91e63',color:'white',fontSize:30}}>TotalRecovered:<small>{total.TotalRecovered}</small></Item>
  </Grid>
</Grid>  
 <Search/>

    </div>
   
  )
}
