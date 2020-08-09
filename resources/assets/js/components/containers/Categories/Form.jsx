import React,{Fragment,useState} from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios'
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
import Alert from '@material-ui/lab/Alert';
import {
  deepOrange,
} from '@material-ui/core/colors';
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
const Form = ({handleModal,fetchCategories,Edit}) => {
//start uses
const classes = useStyles()
  const [loading, setLoading] = useState(false);
  const [validationInputs, setValidationInputs] = useState(false);
    const token = useSelector(store => store.user.session.access_token)
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
  const [error, setError] = useState({
    status:'',
    error:false
  });
const [inputs, setInputs] = useState({//inputs
		name:'',
	    code:'',
  })
  const [nameError, setNameError] = useState({
      error:false,
      message:''
  });
  const [codeError, setCodeError] = useState({
      error:false,
      message:''
  });
 React.useEffect(() => {
  if(Edit.editing){
  	setInputs({
	    name:Edit.categories[0],
	    code:Edit.categories[1],
	})
	}else{
	setInputs({
		name:'',
	  code:''
	})
	}
  }, [])
//end uses
//start methods
	const handleInputs = event => {
     if(event.target.name === 'name'){
      setInputs({
        ...inputs,
        name:event.target.value
      })
     }else if(event.target.name === 'code'){
      setInputs({
        ...inputs,
        code:event.target.value
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
  setCodeError({
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
  if(inputs.code === ''){//vemos si codigo esta lleno
    setAddressError({
    error:true,
      message:'dirección obligatorio'
    })
    error = true;
  }
  if(!error){
    setValidationInputs(true)
  }
}
//start register
  const register = async () => {
    validation()
    if(validationInputs){
    setLoading(true)
    if(Edit.editing){
    	try {
            const res = await axios.put(`/api/categories/${Edit.id}`,inputs);
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Has Editado la Categoria éxito',
              showConfirmButton: false,
              timer: 1000
            }).then(res => {
              handleModal ();
              fetchCategories();
            })
	      } catch (error) {
	           setLoading(false)
	            setError({
	              status: error.response.status,
	              error: true
	            })
	        }
    }else{
      try {

            const res = await axios.post('/api/categories',inputs);
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Has registrado el proveedor éxito',
              showConfirmButton: false,
              timer: 1000
            }).then(res => {
              handleModal ();
              fetchCategories();
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
  }
//end register
//start methods
	return (
	<Fragment>
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
            	<h1 >
            	{Edit.editing ? 'Editar Categoria' : 'Añadir Categoria'}
                
               </h1>
               <Box my={3}>
                <TextField defaultValue={Edit.editing ? Edit.categories[0] : ''} type="text" onChange={(e) =>handleInputs(e)} fullWidth id="name" key="name" label="Nombre" variant="outlined" name="name" error={nameError.error} helperText={nameError.message}/>
              </Box>
               <Box my={3}>
                <TextField defaultValue={Edit.editing ? Edit.categories[1] : ''} type="text" onChange={(e) =>handleInputs(e)} fullWidth id="code" key="code" label="Codigo de la Categoria" variant="outlined" name="code" error={codeError.error} helperText={codeError.message}/>
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
                <Button disabled={loading} onClick={() => register()} fullWidth={true} variant="contained" color="primary" >
                       {Edit.editing ? 'Editar Categoria' : 'Registrar Categoria'} 
                </Button>
              </Box>
     </Fragment>
	);
}
export default Form;