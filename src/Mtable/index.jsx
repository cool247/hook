import React from "react";
import MaterialTable from "material-table";
import TablePagination from "@mui/material/TablePagination";
import Mpagination from "./Mpagination";

export default function BasicSearch() {
  return (
    <MaterialTable
      title="Basic Search Preview"
      components={{
        pagination: (props) => (
          <TablePagination style={{ backgroundColor: "#e8eaf5" }}>
            <Mpagination {...props} />
          </TablePagination>
        ),
      }}
      columns={[
        { title: "Name", field: "name" },
        { title: "Surname", field: "surname" },
        { title: "Birth Year", field: "birthYear", type: "numeric" },
        {
          title: "Birth Place",
          field: "birthCity",
          lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
        },
      ]}
      data={[
        { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
        {
          name: "Zerya Betül",
          surname: "Baran",
          birthYear: 2017,
          birthCity: 34,
        },
      ]}
      options={{
        search: true,
      }}
    />
  );
}
