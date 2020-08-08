import React from 'react'
import {useDispatch} from 'react-redux'
import {cerrarSessionAction} from './../../ducks/userDuck.js'
import {
    Button,
    makeStyles,
    AppBar,
    Toolbar,
    Typography,
} from '@material-ui/core'
import { useHistory } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {
  deepOrange,
} from '@material-ui/core/colors';
//start useStyles
  const useStyles = makeStyles(theme => ({
  	root: {
    flexGrow: 1,
    background : deepOrange[500]
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  }))
//end useStyles
const NavBar = ({tool}) => {
  //start uses
  const dispatch = useDispatch();
  let history = useHistory();
  //end uses
 // start methods
  const logout = () => {
    dispatch(cerrarSessionAction())
    history.push("/auth");
  }
// end methods
//start uses
	const classes = useStyles()
//start uses
   return(
	 <AppBar position="static" className={classes.root}>
	  <Toolbar>
	    <IconButton onClick={() => tool()} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
	      <MenuIcon />
	    </IconButton>
	    <Typography variant="h6" className={classes.title}>
	      Manejo de Orden de Compra. 
	    </Typography>
	    <Button color="inherit" onClick={()=>logout()}>Cerrar Sesión</Button>
	  </Toolbar>
	</AppBar>
   );

}

export default NavBar;

