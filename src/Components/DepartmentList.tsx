import React from "react";
import { Container, List } from "@mui/material";

import DepartmentItem from "./DepartmentItem";

export interface Department {
  department: string;
  sub_departments: string[];
}

const departmentsData: Department[] = [
  {
    department: "customer_service",
    sub_departments: ["support", "customer_success"],
  },
  {
    department: "design",
    sub_departments: ["graphic_design", "product_design", "web_design"],
  },
];

const DepartmentList: React.FC = () => {
  return (
    <Container>
      <List>
        {departmentsData.map((ele) => (
          <DepartmentItem department={ele} key={ele.department} />
        ))}
      </List>
    </Container>
  );
};

export default DepartmentList;
