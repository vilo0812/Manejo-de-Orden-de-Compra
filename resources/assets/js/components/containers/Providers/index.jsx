import React,{Fragment,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import SimpleTable from './../../SimpleTable'
import Modal from './../../Modal'
import axios from 'axios'
import Alert from '@material-ui/lab/Alert';
import {
    makeStyles,
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
    Grid,
    Box,
    TextField,
    CircularProgress,
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
  background : '#ffc107',
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
  add:{
    margin : '10px',
    marginBottom : '0px',
    padding : '10px'
 }
  }))
//end useStyles
const Providers = () => {
  //start uses
  const dispatch = useDispatch();
  const [validationInputs, setValidationInputs] = useState(false);
  const [error, setError] = useState({
    status:'',
    error:false
  });
  const [loading, setLoading] = useState(false);
  let [providerData,setProviderData] = useState();//rows del datatable
  const columns=[//columnas del datatable
  'nombre',
  'dirección',
  'télefono',
  'email',
  'rif'
  ]
  const [inputs, setInputs] = useState({//inputs
    name:'',
    address:'',
    phone:'',
    email:'',
    rif:'',
  })
  const [nameError, setNameError] = useState({
      error:false,
      message:''
  });
  const [addressError, setAddressError] = useState({
      error:false,
      message:''
  });
  const [phoneError, setPhoneError] = useState({
      error:false,
      message:''
  });
  const [emailError, setEmailError] = useState({
      error:false,
      message:''
  });
  const [rifError, setRifError] = useState({
      error:false,
      message:''
  });
  const token = useSelector(store => store.user.session.access_token)
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`//autorizacion
  //end uses
//start uses
// axios.post(url, params: params, headers: headers)
const [open, setOpen] = React.useState(false);
  const classes = useStyles()
React.useEffect(() => {
    fetchProviders();
  }, [])

//start uses
//start methods
const fetchProviders = async () => {

        let dataProv = [];
        axios.get('api/providers')
        .then(res => {
        // setProviderData(res.data)
        res.data.map((item,index) => {
        dataProv = [
        ...dataProv,
        {
          id:item.id,
          rows:[
          item.name,
          item.address,
          item.phone,
          item.email,
          item.rif,
          ]
        }
        
        ]
        })
        setProviderData(dataProv);
      }).catch(err => {
        console.log(err);
      });
}
const handleModal = () => {
    setOpen(!open);
  };
const handleInputs = event => {
     if(event.target.name === 'name'){
      setInputs({
        ...inputs,
        name:event.target.value
      })
     }else if(event.target.name === 'address'){
      setInputs({
        ...inputs,
        address:event.target.value
      })
     }
     else if(event.target.name === 'phone'){
      setInputs({
        ...inputs,
        phone:event.target.value
      })
     }
     else if(event.target.name === 'email'){
      setInputs({
        ...inputs,
        email:event.target.value
      })
     }
     else if(event.target.name === 'rif'){
      setInputs({
        ...inputs,
        rif:event.target.value
      })
     }
    }
//start validation
const validation = () => {
  let error = false;
  setNameError({
    error:false,
      message:''
  })
  setAddressError({
    error:false,
      message:''
  })
  setPhoneError({
    error:false,
      message:''
  })
  setEmailError({
    error:false,
      message:''
  })
  setRifError({
    error:false,
      message:''
  })
  if(inputs.name === ''){//vemos si nombre esta lleno
    setNameError({
    error:true,
      message:'nombre obligatorio'
    })
    error = true;
  }
  if(inputs.address === ''){//vemos si direcion esta lleno
    setAddressError({
    error:true,
      message:'dirección obligatorio'
    })
    error = true;
  }
  if(inputs.phone === ''){//vemos si telefonop esta lleno
    setPhoneError({
    error:true,
      message:'télefono obligatorio'
    })
    error = true;
  }
  if(inputs.email === ''){//vemos si email esta lleno
    setEmailError({
    error:true,
      message:'correo obligatorio'
    })
    error = true;
  }
  if(inputs.rif === ''){//vemos si clave esta lleno
    setRifError({
    error:true,
      message:'rif obligatorio'
    })
    error = true;
  }
  else if(inputs.rif.length < 3){//vemos si calve es menor a 3 esta lleno
    setRifError({
    error:true,
      message:'rif invalido'
    })
    error = true;
  }
  if(!error){
    setValidationInputs(true)
  }
}
//end validation
//start register
  const register = async () => {
    validation()
    if(validationInputs){
    setLoading(true)
      try {
            const res = await axios.post('/api/providers',inputs);
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Te has registrado con exito',
              showConfirmButton: false,
              timer: 1000
            }).then(res => {
              handleModal();
              fetchProviders();
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
//end register
//end methods
   return(
    <Fragment>
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
             <Typography className={classes.title} variant="h5" component="h5">
              Proveedores 
             </Typography>
              
             <Modal handleModal={handleModal} open={open}>
               <h1 >
                Añadir Proveedor
               </h1>
            { 
            loading === true ? (
              <>
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
            </>
            ) : (
            <>
               <Box my={3}>
                <TextField type="text" onChange={(e) =>handleInputs(e)} fullWidth id="name" key="name" label="Nombre" variant="outlined" name="name" error={nameError.error} helperText={nameError.message}/>
              </Box>
               <Box my={3}>
                <TextField type="text" onChange={(e) =>handleInputs(e)} fullWidth id="address" key="address" label="Dirección" variant="outlined" name="address" error={addressError.error} helperText={addressError.message}/>
              </Box>
               <Box my={3}>
                <TextField type="text" onChange={(e) =>handleInputs(e)} fullWidth id="phone" key="phone" label="Télefono" variant="outlined" name="phone" error={phoneError.error} helperText={phoneError.message}/>
              </Box>
               <Box my={3}>
                <TextField type="text" onChange={(e) =>handleInputs(e)} fullWidth id="email" key="email" label="email" variant="outlined" name="email" error={emailError.error} helperText={emailError.message}/>
              </Box>
               <Box my={3}>
                <TextField type="text" onChange={(e) =>handleInputs(e)} fullWidth id="rif" key="rif" label="Rif" variant="outlined" name="rif" error={rifError.error} helperText={rifError.message}/>
              </Box>
            </>
              )
          }
              { error.error &&
                <Alert variant="filled" severity="warning" >
                  { 
                    error.status === 401 ? 'datos invalidos' : 'ha ocurrido un error, por favor vuelva a intentarlo'
                  }
                </Alert>
              }
              <Box  my={3}>
                <Button onClick={() => register()} fullWidth={true} variant="contained" color="primary" >
                        Registrar Proveedor
                </Button>
              </Box>
             </Modal>
      <Card className={classes.root}>
          <Grid
          container
          direction="row-reverse"
          justify="flex-start"
          alignItems="flex-start"
        > 
            <Button onClick={()=>handleModal()} size="small" variant="contained" className={classes.add} color="primary">Añadir Proveedor</Button>
        </Grid>
        <CardContent>
            <SimpleTable data={providerData} columns={columns} className={classes.table}/>
        </CardContent>
        
      </Card>
    </Grid>
    </Fragment>
   );

}

export default Providers;