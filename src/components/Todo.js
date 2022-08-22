import React, { useState } from "react";

//MUI
import {
  Box,
  Checkbox,
  Chip,
  Grid,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
//icon
import DeleteIcon from "@mui/icons-material/Delete";

const Todo = ({ data: { text, category, isChecked, ID }, dispatch }) => {
  // const [check, setCheck] = useState(false);
  const {
    palette: { mode },
  } = useTheme();
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Box
        p={2}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow:
            mode === "light"
              ? "rgba(0,0,0,0.1) 0px 4px 12px"
              : "rgba(255,255,255,0.1) 0px 4px 12px",
          borderRadius: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Chip
            sx={{ minWidth: "50px" }}
            label={category}
            color={
              category === "کاری"
                ? "primary"
                : category === "تفریحی"
                ? "secondary"
                : category === "درسی"
                ? "error"
                : "default"
            }
            variant="outlined"
            clickable
          />
          <Checkbox
            checked={isChecked}
            onChange={() =>
              dispatch({ type: "CHECK_ITEM", payload: { ID: ID } })
            }
          />
        </Box>
        <Typography
          variant="p"
          sx={{ textDecoration: isChecked ? "line-through" : "none" }}
        >
          {text}
        </Typography>
        <IconButton
          aria-label="delete"
          color="error"
          onClick={() => dispatch({ type: "REMOVE_ITEM", payload: { ID: ID } })}
        >
          <DeleteIcon />
        </IconButton>
      </Box>
    </Grid>
  );
};

export default Todo;
