import {
  Grid,
  TextareaAutosize,
  TextField,
  Box,
  Autocomplete,
  Button,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { countries } from "./Cuntry";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../Redux/Action";

const StudentsReg = () => {
  let dispacth = useDispatch();
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [cuntyrv, setCuntyrv] = useState("");
  const [value, setValue] = React.useState();
  const [inputValue, setInputValue] = React.useState('');

  console.log(cuntyrv, "country");
  const [error, seterror] = useState("");

  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    fathername: "",
    email: "",
    number: "",
    cuntry: cuntyrv,
    address: "",
    gender: "",
    dob: date,
  });

  console.log(state);
  const {
    firstname,
    lastname,
    fathername,
    email,
    number,
    cuntry,
    address,
    gender,
    dob,
  } = state;

  const inputHandlechange = (e) => {
    let { name, value } = e.target;
    console.log(name, value, "test");
    setState({ ...state, [name]: value });
  };

  const handleInputChange = (event, value) => {
    setCuntyrv(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      // !firstname ||
      // !lastname ||
      // !fathername | !email ||
      // !address ||
      // !gender ||
      // !cuntry
      false
    ) {
      seterror("some filed input missing");
    } else {
      dispacth(addUser(state));
      navigate("/");
    }
  };

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
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12}>
            <Typography style={{ fontSize: "20px", fontWeight: 600 }}>
              Add User {cuntry}
            </Typography>
          </Grid>
        </Grid>

        <Box style={{ marginTop: "40px" }}>
          <Grid container>
            <Grid item container spacing={2}>
              <Grid item xs={3}>
                <TextField
                  type="text"
                  placeholder="First name"
                  name="firstname"
                  value={firstname}
                  onChange={inputHandlechange}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  type="text"
                  placeholder="Last name"
                  name="lastname"
                  value={lastname}
                  onChange={inputHandlechange}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  type="text"
                  placeholder="Father name"
                  name="fathername"
                  value={fathername}
                  onChange={inputHandlechange}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField type="file" placeholder="First name" />
              </Grid>
              <Grid item xs={12}>
                <Grid item container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      type="email"
                      placeholder="email"
                      fullWidth
                      name="email"
                      value={email}
                      onChange={inputHandlechange}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      type="number"
                      placeholder="number"
                      fullWidth
                      name="number"
                      value={number}
                      onChange={inputHandlechange}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid item container spacing={2}>
                  <Grid item xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="Basic example"
                        value={date}
                        onChange={(newValue) => {
                          setDate(newValue);
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
                      name="address"
                      value={address}
                      onChange={inputHandlechange}
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
                          control={<Radio />}
                          label="Female"
                          checked={gender === "female"}
                          name="gender"
                          value={"female"}
                          onClick={inputHandlechange}
                        />
                        <FormControlLabel
                          control={<Radio />}
                          label="Male"
                          checked={gender === "male"}
                          name="gender"
                          value={"male"}
                          onClick={inputHandlechange}
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <Autocomplete
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                      inputValue={inputValue}
                      onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                      }}
                      id="controllable-states-demo"
                      options={countries}
                      sx={{ width: 300 }}
                      renderInput={(params) => (
                        <TextField {...params} label="Controllable" />
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
                <Button
                  onClick={handleSubmit}
                  variant="outlined"
                  style={{ marginTop: "10px" }}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </form>
    </div>
  );
};

export default StudentsReg;
