import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "userId",
    headerName: "User Id",
    width: 90,
    editable: true,
  },
  {
    field: "title",
    headerName: "Title",
    width: 300,
    editable: true,
  },
  {
    field: "body",
    headerName: "Body",
    sortable: false,
    width: 300,
  },
];

interface dataFormat {
  userId: string;
  id: string;
  title: string;
  body: string;
}
const tempData: dataFormat[] = [
  {
    userId: "",
    id: "",
    title: "",
    body: "",
  },
];

const FetchDatafromApi = () => {
  const [fetchedData, setFetchedData] = useState<dataFormat[]>(tempData);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setFetchedData(data);
    };
    fetchData();
  }, []);

  console.log(fetchedData);
  return (
    <Container style={{ paddingTop: "30px" }}>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={fetchedData}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
        />
      </Box>
    </Container>
  );
};
export default FetchDatafromApi;
