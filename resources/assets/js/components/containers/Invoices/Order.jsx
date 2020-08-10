import React,{useState} from 'react'
import AddIcon from '@material-ui/icons/Add';
import Product from './Product.jsx'
import {
    makeStyles,
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
    Grid,
    TextField,
    Box,
    Divider
} from '@material-ui/core'
import {
  deepOrange,
} from '@material-ui/core/colors';
//start useStyles
  const useStyles = makeStyles(theme => ({
    fondo:{
      background :'#ffff'
    },
    root: {
  minWidth: 300,
  background : '#ffff',
  [theme.breakpoints.down('sm')]: {
      minWidth: 550,
    },
  [theme.breakpoints.down('xs')]: {
      minWidth: 300,
    }
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    textAlign : 'center'
  },
  pos: {
    marginBottom: 12,
  },
  line:{
    background : 'black'
  }
  }))
//end useStyles
const Order = () =>{
//start uses
  const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];
  const classes = useStyles()
  const [inputs, setInputs] = useState({//inputs
    product:''
  });
  const [productError, setProductError] = useState({
      error:false,
      message:''
  });
  const [count, setCount] = useState([1]);
//start uses
  return(
    <Card className={classes.root}>
          <Typography className={classes.title} variant="h6" gutterBottom>
              Elija su Producto 
          </Typography>
          <Typography className={classes.title} variant="h6" gutterBottom>
              y la cantidad que desea 
          </Typography>
        <CardContent>
        {
          count.map((option, index) => (
              <Product key={index}/>
          ))
        }
        </CardContent>
        <CardActions>
          <Button onClick={() => setCount([...count, 1])} size="small" color="primary">
          <AddIcon></AddIcon>
          Añadir Producto
          </Button>
        </CardActions>
      </Card>
      );
}
export default Order;