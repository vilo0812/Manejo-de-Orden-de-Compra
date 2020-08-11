import React,{Fragment} from 'react'
import {cerrarSessionAction} from './../../../ducks/userDuck.js'
import {
     makeStyles,
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
    Grid,
    CardMedia
} from '@material-ui/core'
import {Link} from 'react-router-dom'
import {
  deepOrange,
} from '@material-ui/core/colors';
//start useStyles
  const useStyles = makeStyles(theme => ({
  	fondo:{
  		background : deepOrange[500]
  	},
    item:{
      background : '#ffff',
      margin:'5px',
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
  media1:{
    backgroundImage : "url('./../../images/backgrounds/imagen7.png')",
      backgroundSize:'cover',
      backgroundPosition: 'center',
      height : '100px'
  },
  media2:{
    backgroundImage : "url('./../../images/backgrounds/imagen8.png')",
      backgroundSize:'cover',
      backgroundPosition: 'center',
      height : '100px'
  },
  media3:{
    backgroundImage : "url('./../../images/backgrounds/imagen9.png')",
      backgroundSize:'cover',
      backgroundPosition: 'center',
      height : '100px'
  },
  media4:{
    backgroundImage : "url('./../../images/backgrounds/imagen10.png')",
      backgroundSize:'cover',
      backgroundPosition: 'center',
      height : '100px'
  },
  boton:{
    width : '100%'
  }
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
            <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          > 
          <Grid item sm={6} xs={12}>
            <Card className={classes.item}>
            <CardContent>
                <CardMedia
                    className={classes.media1}
                    title="Administración de elementos básicos"
                  />
                    <h1>
                      Administración de elementos básicos
                    </h1>
                    <h2>- Proovedores</h2>
                <CardActions>
                <Link to="/providers" className={classes.boton}>
                  <Button  fullWidth variant="contained" color="primary">Proveedores</Button>
                </Link>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Card className={classes.item}>
              <CardContent>
                <CardMedia
                    className={classes.media2}
                    title="Administración de elementos básicos"
                  />
                    <h1>
                      Administración de elementos básicos
                    </h1>
                    <h2>- Categorias</h2>
                <CardActions >
                <Link to="/categories" className={classes.boton}>
                  <Button fullWidth variant="contained" color="primary">
                  Categorias
                  </Button>
                </Link>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Card className={classes.item}>
              <CardContent>
                <CardMedia
                    className={classes.media3}
                    title="Administración de elementos básicos"
                  />
                    <h1>
                      Administración de Productos
                    </h1>
                    <h2>- productos</h2>
                <CardActions>
                <Link to="/products" className={classes.boton}>
                  <Button  fullWidth variant="contained" color="primary">Productos</Button>
                </Link>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Card className={classes.item}>
              <CardContent>
                <CardMedia
                    className={classes.media4}
                    title="Administración de elementos básicos"
                  />
                    <h1>
                      Orden de Facturación
                    </h1>
                    <h2>- Facturación</h2>
                <CardActions>
                <Link to="/invoices" className={classes.boton}>
                  <Button  fullWidth variant="contained" color="primary">Facturación</Button>
                </Link>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
    </Fragment>
   );

}

export default Home;