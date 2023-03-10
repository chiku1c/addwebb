import * as React from "react";
import { styled } from "@mui/material/styles";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import Table from "@mui/material/Table";
import { useDispatch, useSelector } from "react-redux";
import { delUser, lodUser } from "../Redux/Action";
import { IconButton } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const StudentsTabel = () => {
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  React.useEffect(() => {
    dispatch(lodUser());
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure ?")) {
      dispatch(delUser(id));
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Image</StyledTableCell>
            <StyledTableCell align="center">First Name</StyledTableCell>
            <StyledTableCell align="center">Last Name</StyledTableCell>
            <StyledTableCell align="center">Father Name</StyledTableCell>
            <StyledTableCell align="center">Gender</StyledTableCell>
            <StyledTableCell align="center">DOB</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Contenct Number</StyledTableCell>
            <StyledTableCell align="center">Cuntery</StyledTableCell>
            <StyledTableCell align="center">Address</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users &&
            users.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row"></StyledTableCell>
                <StyledTableCell align="center">
                  {row.firstname}
                </StyledTableCell>
                <StyledTableCell align="center">{row.lastname}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.fathername}
                </StyledTableCell>
                <StyledTableCell align="center">{row.gender}</StyledTableCell>
                <StyledTableCell align="center">{row.dob}</StyledTableCell>
                <StyledTableCell align="center">{row.email}</StyledTableCell>
                <StyledTableCell align="center">{row.number}</StyledTableCell>
                <StyledTableCell align="center">{row.cuntry}</StyledTableCell>
                <StyledTableCell align="center">{row.address}</StyledTableCell>
                <StyledTableCell align="center">
                  <IconButton onClick={() => handleDelete(row.id)}>
                    <DeleteIcon color="secondary" />
                  </IconButton>
                  <IconButton onClick={() => navigate(`/edituser/${row.id}`)}>
                    <EditIcon color="primary" />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StudentsTabel;
