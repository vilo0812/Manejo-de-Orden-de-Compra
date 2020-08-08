import React,{Fragment} from 'react'
import {cerrarSessionAction} from './../../../ducks/userDuck.js'
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
const Home = () => {
  //start uses
  //end uses
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
              Home 
             </Typography>
      <Card className={classes.root}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="h2">
            algo
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
    </Fragment>
   );

}

export default Home;