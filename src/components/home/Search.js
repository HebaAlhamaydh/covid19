
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Card from '@mui/material/Card';
import {CardContent,Grid,Button,Typography} from '@mui/material';


export default function Search() {
   
    const [value1, setValue1] = React.useState(null);
    const [value2, setValue2] = React.useState(null);

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://api.covid19api.com/country/south-africa/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z"
      );
      setPosts(response.data);
      setLoading(false);
    };

    loadPosts();
  }, []);
    const submitHandler = (e) => {
        console.log('submit called');
        e.preventDefault();
      }
  return (
    <div>
      <h1>Get A statistics For a specific Country</h1> 
      <Box
      component="form"
      onSubmit={submitHandler}
      sx={{ '& > :not(style)': { m: 1, width: '25ch' },}}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Enter Country" variant="outlined" />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Enter The Date"
        value={value1}
        onChange={(newValue) => {
          setValue1(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
       <DatePicker
        label="Enter The Date"
        value={value2}
        onChange={(newValue) => {
          setValue2(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
      <Button variant="contained" style={{height: '55px'}}>Search</Button>
    </Box>
    {loading ? (
        <h4>Loading ...</h4>
      ) : (
        posts
          .filter((value) => {
            if (searchTitle === "") {
              return value;
            } else if (
              value.Country.toLowerCase().includes(searchTitle.toLowerCase())
            ) {
              return value;
            }
          })
          .map((item,index) =>

<Grid  key={index}  item xs={2} sm={4} md={4}>
             
            < Card key={index} sx={{ maxWidth: 345 }}style={{color: "#f50057"}} className="card">
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Country:{item.Country}
            </Typography>
            <Typography variant="h6" color="text.secondary">
            Number Of Confirmed Cases: {item.Date}
            </Typography>
          </CardContent>


</Card>
            </Grid>
          ))}
    </div>
  )
}
