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
const Providers = () => {
  //start uses
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [edit, setEdit] = useState({});
  let [providerData,setProviderData] = useState();//rows del datatable
  const columns=[//columnas del datatable
  'nombre',
  'dirección',
  'télefono',
  'email',
  'rif'
  ]
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
  if(edit.editing && open){
    setEdit({});
    setOpen(!open);
  }
    setOpen(!open);
  };
const editing = (id,data) => {
  setEdit({
    editing:true,
    id:id,
    provider:data
  })
  handleModal();
  };
const removing = async (id) => {
  try {
            const res = await axios.delete(`/api/providers/${id}`);
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Has Eliminado el proveedor éxito',
              showConfirmButton: false,
              timer: 1000
            }).then(res => {
              fetchProviders();
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
              Proveedores 
             </Typography>
              
             <Modal handleModal={handleModal} open={open}>
                <Form Edit={edit} handleModal={handleModal} fetchProviders={fetchProviders}/>
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
            <SimpleTable removing={removing} editing={editing} data={providerData} columns={columns} className={classes.table}/>
        </CardContent>
        
      </Card>
    </Grid>
    </Fragment>
   );

}

export default Providers;