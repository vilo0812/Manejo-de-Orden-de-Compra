import React,{useState,Fragment} from 'react'
import AddIcon from '@material-ui/icons/Add';
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
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
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
    margin: {
    margin: theme.spacing(1),
  },
  }))
//end useStyles
const Product = () =>{
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
const selection = [
  {
    id:1,
    description:1,
    quantity:1,
    price_unit:1
  }
];
  const classes = useStyles()
  const [inputs, setInputs] = useState({//inputs
    product:''
  });
  const [productError, setProductError] = useState({
      error:false,
      message:''
  });
//start uses
  return(
    <Fragment>
          <Box my={3}>
              <TextField
              fullWidth
                id="product"
                select
                label="Seleccionar Producto"
                SelectProps={{
                  native: true,
                }}
                variant="outlined"
                error={productError.error} 
                helperText={productError.message}
              >
                {currencies.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
          </Box>
          <Box my={3}>
              <TextField
              fullWidth
                id="product"
                select
                label="Seleccionar Producto"
                SelectProps={{
                  native: true,
                }}
                variant="outlined"
                error={productError.error} 
                helperText={productError.message}
              >
                {currencies.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
          </Box>
          <Box my={3}>
            <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              value={300}
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
              labelWidth={60}
            />
          </FormControl>
          </Box>
          <Divider></Divider>
       </Fragment>
      );
}
export default Product;