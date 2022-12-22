import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import {CardActions,CardContent,Grid,Button,Typography} from '@mui/material';

import axios from 'axios';
import './cards.css'
// import { toast } from 'react-toastify';

import { addRecord,getAllRecords } from '../../store/records';
import cookie from "react-cookies";

export default function Cards() {
  
  // const { allRecords, isLoading } = useSelector((state) => state.servicesSlice);
  const dispatch = useDispatch();

 

    const [data, setData] = useState([]);
    // const [userInfo, setUserInfo] = useState(
    //   JSON.parse(sessionStorage.getItem("userInfo")) || []
    // );

    const fetchRecords = () => {
        axios
          .get('https://api.covid19api.com/summary')
          .then((res) => {
            console.log(res.data.Countries);
            setData(res.data.Countries);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      
      useEffect(() => {
        fetchRecords();
      }, []);
//////////////////////////AddToRecord //////////////////
      // const navigate=useNavigate();
      const handleAddToRecord = async (record) => {
     console.log(record);
 
        axios
        .post("https://covid-19server-production.up.railway.app/v1/records", {
        country: record.Country,
        totalConfirmed: record.TotalConfirmed,
        totalDeaths: record.TotalDeaths,
        totalRecovered: record.TotalRecovered,
        date: record.Date,
        userId: cookie.load("userID"),
       
        })
        .then((data) => {
          console.log(data.data);

        });  
      };
     
   
  return (
    <div>
      <h1>COVID19 Statistics for all countries</h1>
     
        {data?.map((record, index) => (
             <Grid  key={index}  item xs={2} sm={4} md={4}>
            < Card key={index} sx={{ maxWidth: 345 }}style={{color: "#f50057"}} className="card">
            <CardContent>
            <Typography gutterBottom variant="h6" component="div">
            Country:{record.Country}
            </Typography>
            <Typography variant="h6" color="text.secondary">
            TotalConfirmed:{record.TotalConfirmed}
            </Typography>
              <Typography variant="h6" color="text.secondary">
              TotalDeaths:{record.TotalDeaths}
              </Typography>
              <Typography variant="h6" color="text.secondary">
              TotalRecovered:{record.TotalRecovered}
              </Typography>
              <Typography variant="h6" color="text.secondary">
              Date:{record.Date}
              </Typography>
          </CardContent>
          
     
          <CardActions style={{justifyContent:'center'}}>
                   
                    <Button  variant="contained" onClick={()=>handleAddToRecord(record)} >ADD TO My Records</Button>
                   
                </CardActions>
            </Card>
            </Grid>
        ))}
      
    </div>
    
  )
}




