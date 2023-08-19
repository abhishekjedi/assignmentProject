import React from "react";
import { ListItem, ListItemText, Checkbox } from "@mui/material";
const SubDepartmentItem: React.FC<{
  isDepartmentSelected: boolean;
  subDepartment: string;
  selectSubDept: () => void;
}> = ({ isDepartmentSelected, subDepartment, selectSubDept }) => {
  return (
    <ListItem>
      <ListItemText primary={subDepartment} />
      <Checkbox
        checked={isDepartmentSelected}
        onClick={() => {
          selectSubDept();
        }}
      />
    </ListItem>
  );
};

export default SubDepartmentItem;
