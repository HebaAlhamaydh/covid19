import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import { CardActions, CardContent, Grid, Button, Typography } from '@mui/material';
import cookie from "react-cookies";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function Records() {

  let userId = cookie.load("userID");
  const [records, setRecords] = useState([]);

  ///////////////get user records////
  const getData = () => {
    axios.get(`https://covid-19server-production.up.railway.app/v1/records`)
      .then((res) => {
       const fil= res.data.filter((ele) => ele.userId === parseInt(userId))
        console.log(fil);
        setRecords(fil);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  ////////////////////delete record/////
  const handleDeleteRecord = async (record) => {
    console.log(record.id);
       axios
       .delete(`https://covid-19server-production.up.railway.app/v1/records/${record.id}`)
       .then((res) => {
         console.log(res.data);
         console.log("Deleted successfully");
           getData();
       });  
     };
   
  return userId ? (
    <div>
      <h1>My Records</h1>

      {records.length > 0 ?
        <div>
          {records?.map((record, index) => (
              <>
                  < Card key={index} sx={{ maxWidth: 345 }} style={{ color: "#f50057" }} className="card">
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        Country:{record.country}
                      </Typography>
                      <Typography variant="h6" color="text.secondary">
                        Date:{record.date}
                      </Typography>
                    </CardContent>
                    <CardActions style={{ justifyContent: 'center' }}>
                      <Button variant="contained" onClick={()=>handleDeleteRecord(record)} >DELETE</Button>
                    </CardActions>
                  </Card>
                
              </>
            ))
          }
        </div>:
        <div>
          <h3> No Available Records !!!!</h3>
        </div>
        
      }
    </div>
  ) : (
    <div >
      <h1>
        Signin Please!!! <Link to="/signin">click here</Link>
      </h1>
    </div>

  )
}

