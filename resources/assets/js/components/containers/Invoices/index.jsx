import React,{Fragment,useState} from 'react'
import {cerrarSessionAction} from './../../../ducks/userDuck.js'
import Order from './Order.jsx'
import Payment from './Payment.jsx'
import axios from 'axios'
import {useDispatch,useSelector} from 'react-redux'
import { useHistory } from "react-router-dom";
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
  const dispatch = useDispatch()
  const [validationInputs, setValidationInputs] = useState(false);
  const [price_unit, setPrice_unit] = useState(0);
  const [tax_name, setTax_name] = useState('');
  const [quantity, setQuantity] = useState('');
  const token = useSelector(store => store.user.session.access_token)
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
	const classes = useStyles()
  let history = useHistory();
  const [inputs, setInputs] = useState({
    product_id:0,
    total:0,
    quantity_product_sold:0,
    sub_total:0,
    IVA:0
  });
  const [quantity_product_soldError, setQuantity_product_soldError] = useState({
      error:false,
      message:''
  });
  const [productError, setProductError] = useState({
        error:false,
        message:''
    });
  const [productsData, setProductsData] = useState([]);
   React.useEffect(() => {
  fetchProducts()
  }, [])
  //end uses
//start methods
//start validation
//start validation
const validation = () => {
  let error = false;
  setProductError({
    error:false,
      message:''
  })
  setQuantity_product_soldError({
    error:false,
      message:''
  })
  if(inputs.quantity_product_sold === 0){//vemos si descripción esta lleno

    setQuantity_product_soldError({
    error:true,
      message:'cantidad de productos obligatoria'
    })
    error = true;
  }
  if(inputs.product_id === 0){//vemos si precio unitario esta lleno
    setProductError({
    error:true,
      message:'producto obligatorio'
    })
    error = true;
  }
  if(inputs.quantity_product_sold > quantity){//vemos si descripción esta lleno
    setQuantity_product_soldError({
    error:true,
      message:'cantidad de productos solicitados no disponible'
    })
    error = true;
  }
  if(!error){
    setValidationInputs(true)
  }
}
//end validation
//start submit
const submit = async() => {
  validation()
  if(validationInputs){
    try {
            const res = await axios.post('/api/invoices',inputs);
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Has registrado la factura éxitosamente',
              showConfirmButton: false,
              timer: 1000
            }).then(res => {
            })
      } catch (error) {
        console.log(error)

        }  
  }
  
}
const handleInputs = event => {
     if(event.target.name === 'product_id'){
      setInputs({
        ...inputs,
        product_id:event.target.value
      })
      
     }else if(event.target.name === 'quantity_product_sold'){
      setInputs({
        ...inputs,
        quantity_product_sold: event.target.value
      })
    }
}
const getPayment = () =>{
  axios.get(`api/products/productTax/${inputs.product_id}`)
        .then(res => {
          // setQuantity_sold(inputs.quantity_product_sold)
          setTax_name(res.data.tax.tax_name)
          setPrice_unit(res.data.unit_price)
          setQuantity(res.data.quantity)
          const subTotal = (inputs.quantity_product_sold * res.data.unit_price); 
          let taxIVA = (subTotal * res.data.tax.value)
          let total_var_xd = taxIVA + subTotal;
          setInputs({
            ...inputs,
            sub_total:subTotal,
            IVA:taxIVA,
            total:total_var_xd
          })
      }).catch(err => {
        console.log(err);
      });
}
const fetchProducts = async () => {
        let dataProd = [];
        axios.get('api/products')
        .then(res => {
        res.data.map((item,index) => {
        dataProd = [
        ...dataProd,
        {
          value:item.id,
          label:item.description,
        }
        ];
        })
        setProductsData(dataProd);
        if(dataProd){
          setInputs({
            ...inputs,
            product_id:dataProd[0].value
          })
        }
      }).catch(err => {
        console.log(err.response.status);
        if(err.response.status === 401){
          dispatch(cerrarSessionAction())
          history.push("/auth");
        }
      });
}

//end methos
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
        <Order getPayment={getPayment} product={productsData} handleInputs={handleInputs} productError={productError} quantity_product_soldError={quantity_product_soldError}/>
        <Payment price_unit={price_unit} IVA={tax_name} sub_total={inputs.sub_total} total={inputs.total} tax_IVA={inputs.IVA} product_id={inputs.product_id} submit={submit}/>
        </Grid>
       </CardContent>
      </Card>
    </Grid>
    </Fragment>
   );

}

export default Invoices;
     