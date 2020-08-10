import React,{Fragment} from 'react'
import {useDispatch} from 'react-redux'
import Order from './Order.jsx'
import Payment from './Payment.jsx'
import {
    makeStyles,
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
    Grid
} from '@material-ui/core'
import {
  deepOrange,
} from '@material-ui/core/colors';
//start useStyles
  const useStyles = makeStyles(theme => ({
  	fondo:{
  		background : deepOrange[500]
  	},
    root: {
  minWidth: 950,
  background : '#ffee58',
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
  }))
//end useStyles
const Invoices = () => {
  //start uses
  const dispatch = useDispatch();
  //end uses
//start nodes

//end nodes
//start uses
	const classes = useStyles()
//start uses
   return(
    <Fragment>
    <Grid
    container
    direction="column"
    justify="center"
    alignItems="center"
    >
       <Typography className={classes.title} variant="h5" component="h5">
        Órden de Facturación  
       </Typography>
      <Card className={classes.root}>
       <CardContent>
       <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
        <Order/>
        <Payment/>
        </Grid>
       </CardContent>
      </Card>
    </Grid>
    </Fragment>
   );

}

export default Invoices;
     