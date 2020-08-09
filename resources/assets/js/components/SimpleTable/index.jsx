import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {
  orange,
} from '@material-ui/core/colors';
 const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 650,
  },
  warning:{
    background : orange[500],
  },
  root: {
  [theme.breakpoints.down('sm')]: {
      width: 550,
    },
  [theme.breakpoints.down('xs')]: {
      width: 300,
    }
  },
  }))

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function SimpleTable({columns,data,editing,removing}) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
      <TableHead>
          <TableRow>
            {columns.map((item) => (
                  <TableCell key={item}>{item}</TableCell>
            ))}
              <TableCell>
              editar
              </TableCell>
              <TableCell>
              eliminar
              </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
          data == undefined ?
          'no hay registros'
          :
          data.map((row,index) => (
            <TableRow key={index}>
                {row.rows.map((item,index) => (
                <TableCell key={index} component="th" scope="row">{item}</TableCell>
                  ))}
                <TableCell component="th" scope="row">
                  <Button variant="contained" className={classes.warning} onClick={()=>editing(row.id,row.rows)}>
                    editar
                  </Button>
                  </TableCell>
                <TableCell component="th" scope="row">
                  <Button variant="contained" color="secondary" onClick={()=>removing(row.id)}>
                    eliminar
                  </Button>
                </TableCell>
            </TableRow>
           ))
        }
        </TableBody>
      </Table>
    </TableContainer>
  );
}
