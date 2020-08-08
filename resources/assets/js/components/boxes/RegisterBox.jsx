import React,{useState,Fragment} from 'react';
import axios from 'axios';
import {loginAccion, cerrarSessionAction} from './../../ducks/userDuck.js'
import {useDispatch} from 'react-redux'
import { useHistory } from "react-router-dom";
import BtnLoginRoutesActionsBox from "./../boxes/BtnLoginRoutesActionsBox.jsx";
import {
    Button,
    TextField,
    Box,
    Grid,
    CircularProgress,
    Typography,
    makeStyles
} from '@material-ui/core'
import Alert from '@material-ui/lab/Alert';
import {
  deepOrange,
  blue,
  yellow
} from '@material-ui/core/colors';
//start useStyles
  const useStyles = makeStyles(theme => ({
    spinning: {
      marginLeft: theme.spacing(2),
  },
  }))
//end useStyles
const RegisterBox = () => {
  //start uses
  const classes = useStyles()
  const dispatch = useDispatch()
  let history = useHistory();
  const [validationInputs, setValidationInputs] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    email:'',
    password:'',
    repetPassword:'',
    first_name:'',
    last_name:'',
    identification_card:'',
    phone:''
  })
  const [error, setError] = useState({
    status:'',
    error:false
  });
  const [inputsErrors, setInputsErrors] = useState({
    emailError:{
      error:false,
      message:''
    },
    passwordError:{
      error:false,
      message:''
    },
    first_nameError : {
      error:false,
      message:'',
    },
    last_nameError : {
      error:false,
      message:'',
    },
    icError : {
      error:false,
      message:'',
    },
    phoneError : {
      error:false,
      message:'',
    },
    repetPasswordError : {
      error:false,
      message:'',
    },
  });
//start uses
//start handles
// start inputs handles
  const handleInputs = event => {
     if(event.target.name === 'first_name'){
      setInputs({
        ...inputs,
        first_name:event.target.value
      })
     }else if(event.target.name === 'last_name'){
      setInputs({
        ...inputs,
        last_name:event.target.value
      })
     }
     else if(event.target.name === 'ic'){
      setInputs({
        ...inputs,
        identification_card:event.target.value
      })
     }
     else if(event.target.name === 'phone'){
      setInputs({
        ...inputs,
        phone:event.target.value
      })
     }
     else if(event.target.name === 'repetPassword'){
      setInputs({
        ...inputs,
        repetPassword:event.target.value
      })
     }
     else if(event.target.name === 'email'){
      setInputs({
        ...inputs,
        email:event.target.value
      })
     }else{
        setInputs({
        ...inputs,
        password:event.target.value
      })

     }
    }
// start inputs handles
// start methods
//start validation
const validation = () => {
  let error = false;
  setValidationInputs(false);
  setInputsErrors({
    emailError:{
      error:false,
      message:''
    },
    passwordError:{
      error:false,
      message:''
    },
    first_nameError : {
      error:false,
      message:'',
    },
    last_nameError : {
      error:false,
      message:'',
    },
    icError : {
      error:false,
      message:'',
    },
    phoneError : {
      error:false,
      message:'',
    },
    repetPasswordError : {
      error:false,
      message:'',
    },
  })
  if(inputs.first_name.length == 0){//vemos si nombre esta lleno
    setInputsErrors({
      ...inputsErrors,
        first_nameError:{
        error:true,
        message:'nombre obligatorio'
      },
    })
    error = true;
  }
  if(inputs.last_name.length == 0){//vemos si Apellido esta lleno
    setInputsErrors({
      ...inputsErrors,
        last_nameError:{
        error:true,
        message:'apellido obligatorio'
      }
    })
    error = true;
  }
  if(inputs.identification_card.length == 0){//vemos si cedula esta lleno
    setInputsErrors({
      ...inputsErrors,
        icError:{
        error:true,
        message:'cédula obligatoria'
      }
    })
    error = true;
  }
  if(inputs.phone.length == 0){//vemos si télefono esta lleno
    setInputsErrors({
      ...inputsErrors,
        phoneError:{
        error:true,
        message:'télefono obligatoria'
      }
    })
    error = true;
  }
  if(inputs.email.length == 0){//vemos si email esta lleno
    setInputsErrors({
      ...inputsErrors,
        emailError:{
        error:true,
        message:'correo obligatorio'
      }
    })
    error = true;
  }
  if(inputs.password.length == 0){//vemos si clave esta lleno
    setInputsErrors({
      ...inputsErrors,
        passwordError:{
        error:true,
        message:'clave obligatoria'
      }

    })
    error = true;
  }
  if(inputs.repetPassword.length == 0){//vemos si repetir Clave esta lleno
    setInputsErrors({
      ...inputsErrors,
        repetPasswordError:{
        error:true,
        message:'repetir la clave es obligatorio'
      }

    })
    error = true;
  }
  else if(inputs.password.length < 3){//vemos si calve es menor a 3 esta lleno
    setInputsErrors({
      ...inputsErrors,
        passwordError:{
        error:true,
        message:'clave invalida'
      },
    })
    error = true;
  }
  if(inputs.repetPassword != inputs.password){
  setInputsErrors({
    ...inputsErrors,
    passwordError:{
      error:true,
      message:'las claves no coinciden'
    },
    repetPasswordError:{
      error:true,
      message:'las claves no coinciden'
    }
  })
  error = true;
  error = true;
  // error = true;
  }
  if(!error){
    setValidationInputs(true)
  }
}
//end validation
//start loging
  const register = async () => {
    validation()
    if(validationInputs){
    setLoading(true)
      try {
            const res = await axios.post('/api/auth/register',inputs);
            setLoading(false)
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Te has registrado con exito',
              showConfirmButton: false,
              timer: 3000
            }).then(res => {
              dispatch(cerrarSessionAction())
            history.push("/auth");
            })
      } catch (error) {
           setLoading(false)
            setError({
              status: error.response.status,
              error: true
            })
        }
    }
  }
//end loging
// end methods
//end handles
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
          <CircularProgress size={20} className={classes.spinning} />
          <Box mt={2} ml={2}>
            <Typography variant="subtitle1" gutterBottom>
               Cargando...
            </Typography>
          </Box>
    </Grid>
    ) : (
    <Box>
      <Box my={3}>
        <TextField type="text" onChange={(e) =>handleInputs(e)} fullWidth id="first_name" key="first_name" label="Nombre" variant="outlined" name="first_name" error={inputsErrors.first_nameError.error} helperText={inputsErrors.first_nameError.message}/>
      </Box>  
      <Box my={3}>
        <TextField type="text" onChange={(e) =>handleInputs(e)} fullWidth id="last_name" key="last_name" label="Apellido" variant="outlined" name="last_name" error={inputsErrors.last_nameError.error} helperText={inputsErrors.last_nameError.message}/>
      </Box>  
      <Box my={3}>
        <TextField type="text" onChange={(e) =>handleInputs(e)} fullWidth id="ic" key="ic" label="Cédula" variant="outlined" name="ic" error={inputsErrors.icError.error} helperText={inputsErrors.icError.message}/>
      </Box>  
      <Box my={3}>
        <TextField type="text" onChange={(e) =>handleInputs(e)} fullWidth id="phone" key="phone" label="Télefono" variant="outlined" name="phone" error={inputsErrors.phoneError.error} helperText={inputsErrors.phoneError.message}/>
      </Box>  
      <Box my={3}>
        <TextField type="email" onChange={(e) =>handleInputs(e)} fullWidth id="email" key="email" label="Correo" variant="outlined" name="email" error={inputsErrors.emailError.error} helperText={inputsErrors.emailError.message}/>
      </Box>  
      <Box my={3}>
        <TextField 
        type="password" 
        onChange={(e) =>handleInputs(e)} 
        fullWidth 
        id="password" 
        key="password" 
        label="Clave" 
        variant="outlined" 
        name="password" 
        error={inputsErrors.passwordError.error}
         helperText={inputsErrors.passwordError.message}/>
      </Box>  
       <Box my={3}>
         <TextField 
        type="password" 
        onChange={(e) =>handleInputs(e)} 
        fullWidth 
        id="repetPassword" 
        key="repetPassword" 
        label="Repetir Clave" 
        variant="outlined" 
        name="repetPassword" 
        error={inputsErrors.repetPasswordError.error} 
        helperText={inputsErrors.repetPasswordError.message}/>
      </Box>   
      <Box  my={3}>
        <Button onClick={() => register()} fullWidth={true} variant="contained" color="primary" >
                Registrarse
        </Button>
      </Box>
    { error.error &&
      <Alert variant="filled" severity="warning" >
        { 
          error.status === 401 ? 'datos invalidos' : 'ha ocurrido un error, por favor vuelva a intentarlo'
        }
      </Alert>
    }
    <BtnLoginRoutesActionsBox/>
    </Box>
    )
  }
  </Fragment>
    );
}

export default RegisterBox;