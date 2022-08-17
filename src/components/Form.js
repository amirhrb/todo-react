import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

const Form = () => {
  const [values, setValues] = useState({ text: "", type: "" });
  const inputHandler = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
    console.log(values);
  };
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={9} sx={{ display: "flex" }}>
          <TextField
            id="outlined-basic"
            label="متن خود را اینجا بنویسید"
            name="text"
            autoComplete="off"
            value={values.text}
            onChange={inputHandler}
            variant="outlined"
            sx={{ flex: 1 }}
          />
        </Grid>
        <Grid item xs={4} sm={3} sx={{ display: "flex" }}>
          <FormControl variant="standard" sx={{ minWidth: 50, flex: 1 }}>
            <InputLabel id="demo-simple-select-standard-label">
              دسته‌بندی
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={values.type}
              onChange={inputHandler}
              label="دسته‌بندی"
              name="type"
            >
              <MenuItem value={10}>کار</MenuItem>
              <MenuItem value={20}>تفریح</MenuItem>
              <MenuItem value={30}>درس</MenuItem>
              <MenuItem value={0}>
                <em>دیگر</em>
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={8} sm={6} sx={{ display: "flex", minHeight: "65px" }}>
          <Button variant="contained" sx={{ flex: 1 }}>
            اضافه کردن
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Form;
