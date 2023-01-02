import {
    Grid,
    TextareaAutosize,
    TextField,
    Box,
    Autocomplete,
    Button,
    Typography,
  } from "@mui/material";
  import React, { useState,useEffect } from "react";
  import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
  import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
  import { DatePicker } from "@mui/x-date-pickers/DatePicker";
  import Radio from "@mui/material/Radio";
  import RadioGroup from "@mui/material/RadioGroup";
  import FormControlLabel from "@mui/material/FormControlLabel";
  import FormControl from "@mui/material/FormControl";
  import FormLabel from "@mui/material/FormLabel";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editUser } from "../Redux/Action";
  
  const StudentsEdit = () => {
    const params=useParams()
    const dispacth=useDispatch()
    const [value, setValue] = React.useState(null);
    const [gender, setGender] = useState("Male");
  


useEffect(() => {
  dispacth(editUser(params))
  
}, [params])




    return (
      <div
        style={{
          margin: "auto",
          padding: "10px",
          width: "750px",
          backgroundColor: "yellowgreen",
          boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
        }}
      >
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12}>
           <Typography style={{fontSize:'20px',fontWeight:600}}>Update User</Typography>
          </Grid>
        </Grid>
  
        <Box style={{ marginTop: "40px" }}>
          <Grid container>
            <Grid item container spacing={2}>
              <Grid item xs={3}>
                <TextField type="text" placeholder="First name" />
              </Grid>
              <Grid item xs={3}>
                <TextField type="text" placeholder="Last name" />
              </Grid>
              <Grid item xs={3}>
                <TextField type="text" placeholder="Father name" />
              </Grid>
              <Grid item xs={3}>
                <TextField type="file" placeholder="First name" />
              </Grid>
              <Grid item xs={12}>
                <Grid item container spacing={2}>
                  <Grid item xs={6}>
                    <TextField type="emai" placeholder="email" fullWidth />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField type="number" placeholder="number" fullWidth />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid item container spacing={2}>
                  <Grid item xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="Basic example"
                        value={value}
                        onChange={(newValue) => {
                          setValue(newValue);
                        }}
                        renderInput={(params) => (
                          <TextField {...params} fullWidth />
                        )}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={6}>
                    <TextareaAutosize
                      type="text"
                      placeholder="Address"
                      style={{ width: "360px", height: "47px" }}
                    />
                  </Grid>
                </Grid>
              </Grid>
  
              <Grid item xs={12}>
                <Grid item container spacing={2}>
                  <Grid item xs={6}>
                    <FormControl>
                      <FormLabel id="demo-row-radio-buttons-group-label">
                        Gender
                      </FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                      >
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="Female"
                          checked={gender === "Female"}
                          onClick={() => setGender("Female")}
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="Male"
                          checked={gender === "Male"}
                          onClick={() => setGender("Male")}
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      // options={top100Films}
                      sx={{ width: 300 }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Cuntry"
                          style={{ width: "360px" }}
                        />
                      )}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Grid item xs={12}>
                <Button variant="outlined" style={{marginTop:'10px'}}>Save</Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  };
  
  export default StudentsEdit;
  