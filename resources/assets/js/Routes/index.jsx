import React,{Fragment} from 'react'
import {
 BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import {
	CircularProgress,
	Grid,
	Typography,
	Box,
	makeStyles,
} from '@material-ui/core';
import {loginAccion} from './../ducks/userDuck.js'
import {Provider} from 'react-redux'
import generateStore from './../ducks/store';
const store = generateStore();

import Home from './../components/containers/Home'
import Login from './../components/containers/Login'
import Providers from './../components/containers/Providers'
import Categories from './../components/containers/Categories'
import Products from './../components/containers/Products'
import Invoices from './../components/containers/Invoices'
import NavBar from './../components/NavBar'
import SideBar from './../components/SideBar'
// start useStyles
const useStyles = makeStyles((theme) => ({
  spinning: {
      marginLeft: theme.spacing(4),
  },
  backgroundTest:{
      backgroundImage : "url('./../../images/backgrounds/fondo_test.jpg')",
      backgroundSize:'cover',
      backgroundPosition: 'center',
      minHeight : '700px'
    },
}));
//end useStyles
const Routes= () => {
// start uses
const classes = useStyles();
const [login, setLogin] = React.useState(true)
const [loading, setLoading] = React.useState(true)
// const dispatch = useDispatch()
// start uses
const [toogleSideBar,setToogleSideBar] = React.useState(false)
React.useEffect(() => {
    const fetchUser = async () => {
	      const user = await JSON.parse(localStorage.getItem('user'))
	      if(user){
	      loginAccion(user)(store.dispatch)
	      setLogin(true)
	      setLoading(false)
	      }else{
		  	setLogin(false)
		    setLoading(false)
	      }
    } 
    fetchUser()
  }, [])
// start Components
// start methods
const tool = () => {
  setToogleSideBar(!toogleSideBar)
}
const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setToogleSideBar(open)
  };
// end methods
//start protegemos las rutas
 const RouteProtec = ({component, path, ...rest}) => {
    if(login){
        return (
        <div className={classes.backgroundTest}>
	        <NavBar tool={tool}/>
	        <SideBar tool={tool} toggleDrawer={toggleDrawer} toogleSideBar={toogleSideBar}/>
	       	<Route component={component} path={path} {...rest} />
       	</div>
       );
    }else{
      return <Redirect to="/auth" {...rest} />
    }
  }
//end protegemos las rutas
// start Components
	return (
	<Fragment>
  	{ 
  		loading === true ? (
  		<Grid
		  container
		  direction="row"
		  justify="center"
		  alignItems="center"
			>
		      <CircularProgress className={classes.spinning} />
		      <Box mt={2} ml={2}>
			      <Typography variant="h4" gutterBottom>
			         Cargando...
			      </Typography>
		      </Box>
		</Grid>
		) : (
	<Provider store={store}>
		<Router>
			<Switch>	
		        <RouteProtec path="/" component={Home} exact/>
		        <RouteProtec path="/Providers" component={Providers} exact/>
		        <RouteProtec path="/categories" component={Categories} exact/>
		        <RouteProtec path="/products" component={Products} exact/>
		        <RouteProtec path="/invoices" component={Invoices} exact/>
		        <Route path="/auth" component={Login} />
		    </Switch>
		</Router>
	</Provider>
		)
	}
	</Fragment>
	);
}

export default Routes