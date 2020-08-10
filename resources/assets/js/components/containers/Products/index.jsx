import React,{Fragment,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import SimpleTable from './../../SimpleTable'
import Form from './Form.jsx'
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
const Products = () => {
  //start uses
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [edit, setEdit] = useState({});
  let [productsData,setProductsData] = useState();//rows del datatable
  const columns=[//columnas del datatable
  'descripción',
  'categoria',
  'proveedor',
  'precio unit',
  'tipo de IVA',
  'cantidad',
  ]
  const token = useSelector(store => store.user.session.access_token)
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`//autorizacion
  //end uses
//start uses
// axios.post(url, params: params, headers: headers)
const [open, setOpen] = React.useState(false);
  const classes = useStyles()
React.useEffect(() => {
    fetchProducts();
  }, [])

//start uses
//start methods
const fetchProducts = async () => {

        let dataProv = [];
        axios.get('api/products')
        .then(res => {
        res.data.map((item,index) => {
        dataProv = [
        ...dataProv,
        {
          id:item.id,
          rows:[
          item.description,
          item.category_name,
          item.name,
          item.unit_price,
          item.tax_name,
          item.quantity,
          ]
        }
        
        ]
        })
        setProductsData(dataProv);
      }).catch(err => {
        console.log(err);
      });
}
const handleModal = () => {
  if(edit.editing && open){
    setEdit({});
    setOpen(!open);
  }
    setOpen(!open);
  };
const editing = async (id,data) => {
              axios.get(`/api/products/${id}`)
              .then(res => {
              setEdit({
                editing:true,
                id:id,
                products:res.data
              })
              handleModal();
            }).catch(err => {
              console.log(err);
            });
  
  };
const removing = async (id) => {
  try {
            const res = await axios.delete(`/api/products/${id}`)
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Has Eliminado la Categoria con éxito',
              showConfirmButton: false,
              timer: 1000
            }).then(res => {
              fetchProducts();
            })
        } catch (error) {
          console.log(error)
          }
  };

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
              Productos 
             </Typography>
              
             <Modal handleModal={handleModal} open={open}>
                <Form Edit={edit} handleModal={handleModal} fetchProducts={fetchProducts}/>
             </Modal>
      <Card className={classes.root}>
          <Grid
          container
          direction="row-reverse"
          justify="flex-start"
          alignItems="flex-start"
        > 
            <Button onClick={()=>handleModal()} size="small" variant="contained" className={classes.add} color="primary">Añadir Producto</Button>
        </Grid>
        <CardContent>
            <SimpleTable removing={removing} editing={editing} data={productsData} columns={columns} className={classes.table}/>
        </CardContent>
        
      </Card>
    </Grid>
    </Fragment>
   );

}

export default Products;