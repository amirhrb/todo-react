import React, { useContext, useEffect } from "react";

//components
import Todo from "./Todo";

//context
import { TodoData } from "../context/TodoContextProvider";

//MUI
import { Container, Grid } from "@mui/material";

const Todos = () => {
  const { data, dispatch } = useContext(TodoData);
  useEffect(() => {
    const oldData = JSON.parse(localStorage.getItem("data"));
    if (oldData) {
      dispatch({ type: "LOAD_DATA", payload: oldData });
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [dispatch, data]);

  return (
    <Container
      maxWidth="md"
      sx={{
        mt: 4,
        direction: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        {data.map((item) => (
          <Todo data={item} key={item.ID} dispatch={dispatch} />
        ))}
      </Grid>
    </Container>
  );
};

export default Todos;
