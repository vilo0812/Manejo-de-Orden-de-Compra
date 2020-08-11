import React,{useState} from 'react'
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
const Order = ({getPayment,handleInputs, product, productError,quantity_product_soldError}) =>{
//start uses
  const classes = useStyles()
//start uses
//start methods
//end methodss
  return(
    <Card className={classes.root}>
          <Typography className={classes.title} variant="h6" gutterBottom>
              Elija su Producto 
          </Typography>
          <Typography className={classes.title} variant="h6" gutterBottom>
              y la cantidad que desea 
          </Typography>
        <CardContent>
          <Box my={3}>
              <TextField
              fullWidth
                id="product_id"
                name="product_id"
                select
                label="Seleccionar Producto"
                SelectProps={{
                  native: true,
                }}
                onChange={(e) => handleInputs(e)}
                variant="outlined"
                error={productError.error} 
                helperText={productError.message}
                defaultValue={product[0]}
                onBlur={()=> getPayment()}
              >
                {product.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
          </Box>
          <Box my={3}>
                <TextField type="number" onBlur={()=> getPayment()} onFocus={(e) => getPayment()} onChange={(e) => handleInputs(e)} fullWidth id="quantity_product_sold" key="quantity_product_sold" label="Cantidad de Productos" variant="outlined" name="quantity_product_sold" error={quantity_product_soldError.error} helperText={quantity_product_soldError.message}/>
          </Box>
        </CardContent>
      </Card>
      );
}
export default Order;