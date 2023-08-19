import { Department } from "./DepartmentList";
import { useState, useEffect } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import SubDepartmentItem from "./SubDepartmentItem";

const DepartmentItem: React.FC<{ department: Department }> = ({
  department,
}) => {
  const [subDepartmentSelected, setSubDepartmentSelected] = useState<{
    [key: string]: boolean;
  }>({});

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [selected, setSelected] = useState<boolean>(false);

  useEffect(() => {
    if (
      Object.keys(subDepartmentSelected).length === 0 ||
      (selected === true &&
        department.sub_departments.every(
          (ele) => subDepartmentSelected[ele] === true
        ) === false) ||
      (selected == false &&
        department.sub_departments.every(
          (ele) => subDepartmentSelected[ele] === true
        ) === true)
    ) {
      const a =
        department.sub_departments.every(
          (ele) => subDepartmentSelected[ele] === true
        ) === true;
      let tempSubDepartmentSelected: { [key: string]: boolean } = {};
      department.sub_departments.forEach(
        (val) =>
          (tempSubDepartmentSelected = {
            ...tempSubDepartmentSelected,
            [val]: selected
              ? selected
              : a == true
              ? false
              : subDepartmentSelected?.[val] || false,
          })
      );
      setSubDepartmentSelected(tempSubDepartmentSelected);
    }
  }, [selected]);

  useEffect(() => {
    if (
      department.sub_departments.every(
        (ele) => subDepartmentSelected[ele] === true
      ) &&
      selected === false
    ) {
      setSelected(true);
    }

    if (
      !department.sub_departments.every(
        (ele) => subDepartmentSelected[ele] === true
      ) &&
      selected === true
    ) {
      setSelected(false);
    }
  }, [subDepartmentSelected]);

  return (
    <div>
      <ListItem>
        <ListItemIcon
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
          style={{ cursor: "pointer" }}
        >
          {isOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemIcon>
        <ListItemText primary={department.department} />
        <Checkbox
          checked={selected}
          onClick={() => {
            setSelected((prev) => !prev);
          }}
        />
      </ListItem>

      {isOpen &&
        department.sub_departments.map((ele) => (
          <List component="div" disablePadding key={ele}>
            <SubDepartmentItem
              isDepartmentSelected={subDepartmentSelected?.[ele] || false}
              subDepartment={ele}
              selectSubDept={() => {
                setSubDepartmentSelected((prev) => {
                  return {
                    ...prev,
                    [ele]: !prev[ele],
                  };
                });
              }}
            />
          </List>
        ))}
    </div>
  );
};

export default DepartmentItem;
