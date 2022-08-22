import React, { useContext, useState } from "react";

//MUI
import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";

//contxt
import { TodoData } from "../context/TodoContextProvider";

const Form = () => {
  //context of reducer Fn
  const { dispatch } = useContext(TodoData);

  //input handler and state
  const [values, setValues] = useState({ text: "", type: "" });
  const inputHandler = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  //hook for getting theme
  const {
    palette: { mode },
  } = useTheme();
  const clickHandler = () => {
    if (values.text) {
      dispatch({ type: "ADD_ITEM", payload: { ...values } });
      setValues({ text: "", type: "" });
    }
  };
  return (
    <Container
      maxWidth="sm"
      sx={{
        mt: 4,
        padding: 4,
        display: "flex",
        flexDirection: "column",
        boxShadow:
          mode === "light"
            ? "rgba(0,0,0,0.1) 0px 4px 12px"
            : "rgba(255,255,255,0.1) 0px 4px 12px",
        borderRadius: 4,
      }}
    >
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
              <MenuItem value={"کاری"}>
                <Typography variant="p" color="primary">
                  کاری
                </Typography>
              </MenuItem>
              <MenuItem value={"تفریحی"}>
                <Typography variant="p" color="secondary">
                  تفریحی
                </Typography>
              </MenuItem>
              <MenuItem value={"درسی"}>
                <Typography variant="p" color="error">
                  درسی
                </Typography>
              </MenuItem>
              <MenuItem value={"دیگر"}>
                <em>دیگر</em>
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={8} sm={6} sx={{ display: "flex", minHeight: "60px" }}>
          <Button variant="contained" sx={{ flex: 1 }} onClick={clickHandler}>
            اضافه کردن
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Form;
