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
const Form = ({handleModal,fetchProducts,Edit}) => {
//start uses
const classes = useStyles()
  const [loading, setLoading] = useState(false);
  const [validationInputs, setValidationInputs] = useState(false);
  const [taxData, setTaxData] = useState([]);//rows del select categories
  const [categoriesData, setCategoriesData] = useState([]);//rows del select categories
  let [providerData,setProviderData] = useState();//rows del select providers
  const token = useSelector(store => store.user.session.access_token)
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
  const [error, setError] = useState({
    status:'',
    error:false
  });
const [inputs, setInputs] = useState({//inputs
		description:'',
   unit_price:'',
   quantity:'',
   provider_id:'',
   category_id:'',
   tax_id:'',
  })
  const [descriptionError, setDescriptionError] = useState({
      error:false,
      message:''
  });
  const [unit_priceError, setUnit_priceError] = useState({
      error:false,
      message:''
  });
  const [quantityError, setQuantityError] = useState({
      error:false,
      message:''
  });
  const [providersError, setProvidersError] = useState({
      error:false,
      message:''
  });
  const [categoriesError, setCategoriesError] = useState({
      error:false,
      message:''
  });
  const [taxesError, setTaxesError] = useState({
      error:false,
      message:''
  });
 React.useEffect(() => {
  fetchCategories()
  fetchProviders()
  fetchTaxes()
  if(Edit.editing){
  	setInputs({
	    description:Edit.products.description,
      unit_price:Edit.products.unit_price,
      quantity:Edit.products.quantity,
      provider_id:Edit.products.provider_id,
      category_id:Edit.products.category_id,
      tax_id:Edit.products.tax_id
	})
	}else{
	setInputs({
    description:'',
    unit_price:'',
    quantity:'',
    provider_id:'',
    category_id:'',
    tax_id:'',
	})
	}
  }, [])
//end uses
//start methods
//starts fetchs
const fetchCategories = async () => {

        let dataCat = [];
        axios.get('api/categories')
        .then(res => {
        
        res.data.map((item,index) => {
        dataCat = [
        ...dataCat,
        {
          value:item.id,
          label:item.category_name,
        }
        
        ]
        })
        setCategoriesData(dataCat);
      }).catch(err => {
        console.log(err);
      });
}
//start fetch providers
const fetchProviders = async () => {

        let dataProv = [];
        axios.get('api/providers')
        .then(res => {
        // setProviderData(res.data)
        res.data.map((item,index) => {
        dataProv = [
        ...dataProv,
        {
          value:item.id,
          label:item.name,
        }
        
        ]
        })
        setProviderData(dataProv);
      }).catch(err => {
        console.log(err);
      });
}
//end fetchs providers
//start fetch taxes
const fetchTaxes = async () => {
        let dataTax = [];
        axios.get('api/taxes')
        .then(res => {
        res.data.map((item,index) => {
        dataTax = [
        ...dataTax,
        {
          value:item.id,
          label:item.tax_name,
        }
        
        ]
        })
        setTaxData(dataTax);
      }).catch(err => {
        console.log(err);
      });
}
//end fetchs taxes
	const handleInputs = event => {
     if(event.target.name === 'description'){
      setInputs({
        ...inputs,
        description:event.target.value
      })
     }else if(event.target.name === 'unit_price'){
      setInputs({
        ...inputs,
        unit_price:event.target.value
      })
     }else if(event.target.name === 'quantity'){
      setInputs({
        ...inputs,
        quantity:event.target.value
      })
     }else if(event.target.name === 'providers'){
      setInputs({
        ...inputs,
        provider_id:event.target.value
      })
     }else if(event.target.name === 'categories'){
      setInputs({
        ...inputs,
        category_id:event.target.value
      })
     }else if(event.target.name === 'taxes'){
      setInputs({
        ...inputs,
        tax_id:event.target.value
      })
     }

    }
//start validation
const validation = () => {
  let error = false;
  setDescriptionError({
    error:false,
      message:''
  })
  setUnit_priceError({
    error:false,
      message:''
  })
  setQuantityError({
    error:false,
      message:''
  })
  setProvidersError({
    error:false,
      message:''
  })
  setCategoriesError({
    error:false,
      message:''
  })
  setTaxesError({
    error:false,
      message:''
  })
  if(inputs.description === ''){//vemos si descripción esta lleno
    setDescriptionError({
    error:true,
      message:'descripción obligatorio'
    })
    error = true;
  }
  if(inputs.unit_price === ''){//vemos si precio unitario esta lleno
    setUnit_priceError({
    error:true,
      message:'precio unitario obligatorio'
    })
    error = true;
  }
  if(inputs.quantity === ''){//vemos si precio unitario esta lleno
    setQuantityError({
    error:true,
      message:'cantidad de productos obligatorio'
    })
    error = true;
  }
  if(inputs.provider_id === ''){//vemos si el proveedor fue seleccionado
    setProvidersError({
    error:true,
    message:'seleccionar un proveedor es obligatorio'
    })
    error = true;
  }
  if(inputs.category_id === ''){//vemos si la categoria fue seleccionada
    setCategoriesError({
    error:true,
    message:'seleccionar una categoria es obligatorio'
    })
    error = true;
  }
  if(inputs.tax_id === ''){//vemos si la categoria fue seleccionada
    setTaxesError({
    error:true,
    message:'seleccionar un tipo impuesto es obligatorio'
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
            const res = await axios.put(`/api/products/${Edit.id}`,inputs);
              handleModal ();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Has Editado la Categoria éxito',
              showConfirmButton: false,
              timer: 1000
            }).then(res => {
              fetchProducts();
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
            const res = await axios.post('/api/products',inputs);
              handleModal ();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Has registrado el producto con éxito',
              showConfirmButton: false,
              timer: 1000
            }).then(res => {
              fetchProducts();
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
                    <TextField
                        select
                        id="categories"
                        label="Seleccionar Categoria"
                        onChange={(e) =>handleInputs(e)}
                        fullWidth
                        defaultValue={
                        Edit.editing &&
                        Edit.products.category_id
                        }
                        variant="outlined"
                        name="categories"
                        error={categoriesError.error} 
                        helperText={categoriesError.message}
                      >
                        {
                          categoriesData &&
                          (
                              categoriesData.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))
                          )
                        }
                  </TextField>              
            </Box>
                   <Box my={3}>
                    <TextField
                        select
                        id="providers"
                        label="Seleccionar Proveedor"
                        onChange={(e) =>handleInputs(e)}
                        fullWidth
                        defaultValue={
                        Edit.editing &&
                        Edit.products.provider_id
                        }
                        variant="outlined"
                        name="providers"
                        error={providersError.error} 
                        helperText={providersError.message}
                      >
                        {
                          providerData &&
                          (
                              providerData.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))
                          )
                        }
                  </TextField>              
            </Box>
                   <Box my={3}>
                    <TextField
                        select
                        id="taxes"
                        label="Seleccionar Tipo de Impuesto"
                        onChange={(e) =>handleInputs(e)}
                        fullWidth
                        variant="outlined"
                        name="taxes"
                        defaultValue={
                        Edit.editing &&
                        Edit.products.category_id
                        }
                        error={taxesError.error} 
                        helperText={taxesError.message}
                       
                      >
                        {
                          taxData &&
                          (
                              taxData.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))
                          )
                        }
                  </TextField>              
            </Box>
               <Box my={3}>
                <TextField defaultValue={Edit.editing ? Edit.products.description : ''} type="text" onChange={(e) =>handleInputs(e)} fullWidth id="description" key="description" label="Descipción del Producto" variant="outlined" name="description" error={descriptionError.error} helperText={descriptionError.message}/>
              </Box>
               <Box my={3}>
                <TextField type="number" defaultValue={Edit.editing ? Edit.products.unit_price : ''} onChange={(e) =>handleInputs(e)} fullWidth id="unit_price" key="unit_price" label="Precio Unitario" variant="outlined" name="unit_price" error={unit_priceError.error} helperText={unit_priceError.message}/>
              </Box>
               <Box my={3}>
                <TextField type="number" defaultValue={Edit.editing ? Edit.products.quantity : ''} onChange={(e) =>handleInputs(e)} fullWidth id="quantity" key="quantity" label="Cantidad del Producto" variant="outlined" name="quantity" error={quantityError.error} helperText={quantityError.message}/>
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