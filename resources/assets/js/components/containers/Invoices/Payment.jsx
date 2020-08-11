import React,{useState} from 'react'
import {
    makeStyles,
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
    Grid,
    FormControl,
    OutlinedInput,
    Box,
    InputLabel,
    TextField
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
  margin:'10px',
  minWidth: 500,
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
    color :'#ffff'
  },
  pos: {
    marginBottom: 12,
  },
  separate:{
    width : '200'
  }
  }))
//end useStyles
const Payment = ({submit,price_unit,IVA,sub_total,total,tax_IVA}) =>{
//start uses
  const classes = useStyles()
//start uses
  return(
    <Card className={classes.root}>
        <CardContent>
          <Box my={3}>
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
              >
              <Grid item sm={6}>
                <Typography variant="h6" gutterBottom>
                  Precio Unitario
              </Typography>
              </Grid>
              <Grid item sm={6}>
              <TextField id="price_unit" label="Precio Unitario" variant="filled" value={price_unit}/>
              </Grid>
            </Grid>
          </Box>
          <Box my={3}>
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
              >
              <Grid item sm={6}>
                <Typography variant="h6" gutterBottom>
                  taza de IVA
              </Typography>
              </Grid>
              <Grid item sm={6}>
              <TextField id="rate_type_IVA" label="taza de IVA" variant="filled" value={IVA}/>
              </Grid>
            </Grid>
          </Box>
          <Box my={3}>
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
              >
              <Grid item sm={6}>
                <Typography variant="h6" gutterBottom>
                  sub total
              </Typography>
              </Grid>
              <Grid item sm={6}>
              <TextField id="sub-total" label="sub total" variant="filled" value={sub_total}/>
              </Grid>
            </Grid>
          </Box>
          <Box my={3}>
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
              >
              <Grid item sm={6}>
                <Typography variant="h6" gutterBottom>
                  impuesto de IVA
              </Typography>
              </Grid>
              <Grid item sm={6}>
              <TextField id="tax_IVA" label="impuesto de IVA" variant="filled" value={tax_IVA}/>
              </Grid>
            </Grid>
          </Box>
          <Box my={3}>
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
              >
              <Grid item sm={4}>
                <Typography variant="h6" gutterBottom>
                  Total
              </Typography>
              </Grid>
              <Grid item sm={8}>
              <TextField fullWidth id="total" label="Total" variant="filled" value={total}/>
              </Grid>
            </Grid>
          </Box>
          
        </CardContent>
        
        <CardActions>
          <Button onClick={() => submit()} fullWidth variant="contained" color="primary">Ordenar Factura</Button>
        </CardActions>
      </Card>
      );
}
export default Payment;