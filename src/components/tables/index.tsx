import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Color from "../../utils/theme/color";
import { styled } from "@mui/material/styles";

interface Column {
  id: "id" | "newMembers" | "activeRegular" | "newlyEnrolled" | "notActive";
  label: string;
  align?: "left";
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: "id", label: "ID", align: "left" },

  { id: "newMembers", label: "New Members", align: "left" },

  { id: "newlyEnrolled", label: "Newly Enrolled", align: "left" },
  {
    id: "activeRegular",
    label: "Active Regular",

    align: "left",
  },
  {
    id: "notActive",
    label: "Not Active since 1 year",

    align: "left",
  },
];

const rows = [
  {
    id: 1,
    newMembers: 1620,
    newlyEnrolled: 68,
    activeRegular: 1500,
    notActive: 401,
  },
  {
    id: 2,
    newMembers: 1328,
    newlyEnrolled: 28,
    activeRegular: 1002,
    notActive: 197,
  },
  {
    id: 3,
    newMembers: 1328,
    newlyEnrolled: 28,
    activeRegular: 1002,
    notActive: 197,
  },
  {
    id: 4,
    newMembers: 1328,
    newlyEnrolled: 28,
    activeRegular: 1002,
    notActive: 197,
  },
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: Color.color20,
    color: Color.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
  },
}));

export default function ReportTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      sx={{
        width: "100%",
        marginTop: 5,
      }}
    >
      <TableContainer
        sx={{
          maxHeight: 440,
          borderRadius: 3,
          borderTopWidth: 5,
          borderTop: 5,
          borderTopColor: "#8533ff",
        }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center"></StyledTableCell>
              <StyledTableCell align="center">A</StyledTableCell>
              <StyledTableCell align="center">B</StyledTableCell>
              <StyledTableCell align="center">C</StyledTableCell>
              <StyledTableCell align="center">D</StyledTableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, fontSize: 15, fontWeight: "700" }}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.newMembers}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
