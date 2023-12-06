import React from "react";
import * as m from "@mui/material";
import { grey } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
export default function CountSearchHome({
  icon,
  label,
  count,
  onDecrease = () => {},
  onIncrease = () => {},
}) {
  return (
    <m.Stack
      direction={"row"}
      spacing={1}
      alignItems={"center"}
      sx={{
        height: "56px",
        border: `1px solid ${grey[400]}`,
        padding: 1,
        borderRadius: 1,
      }}
    >
      {icon}
      <m.Typography>
        {label} - {count}
      </m.Typography>
      <div>
        <m.IconButton onClick={onDecrease} size="small">
          <RemoveIcon color="primary" />
        </m.IconButton>
        <m.IconButton onClick={onIncrease} size="small">
          <AddIcon color="primary" />
        </m.IconButton>
      </div>
    </m.Stack>
  );
}
