import axios from 'axios';
import  React , {Component} from 'react';
import Navi from './navi';
import { Link } from 'react-router-dom';

const API_Url = 'https://611f50dd9771bf001785c846.mockapi.io/Products';


export default class ViewProduct extends Component {

    constructor(){

     super();

     this.state = {

     products:[],
    

     }

    }
    componentDidMount () {

     this.getProduct();

    }

  getProduct = async () =>{
      
   const {data} = await axios.get(API_Url);

   this.setState({products:data})


    }


    deleteProducts = async (id)  =>{ 

await axios.delete(`${API_Url}/${id}`);

alert("deleted Succesfully");

this.getProduct();

    }
    render(){
return(

    <>
               <Navi />

<table class="table table-dark table-hover">
<thead>
    <tr>
    <td>Id</td>
    <td>ProductName</td>
    <td>Quantity</td>
    <td>Barcode</td>
    <td>Amount</td>
    <td>Edit</td>
    <td>Delete</td>
    </tr>
</thead>


<tbody>
            {this.state.products.map(product => {
              return (
                <tr key={product.id}>
                    <td>{product.id}</td>
                  <td>
                    <label class="form-group">{product.ProductName}</label>
                                 
                  </td>
                   <td>
                     <label class="form-group">{product.Quantity}</label>
                   
                   </td>
                  <td>
                    <label class="form-group">{product.Barcode}</label>
                  
                  </td>
                  <td>
                    <label class="form-group">{product.Amount}</label>
                  
                  </td>
                  <td>
                  <Link to={`/EditProduct/${product.id}`}>
                  <i class="" aria-hidden="true">Edit</i>
                 </Link>
                  </td>
                  <td>
                    
                      <i class="" aria-hidden="true" onClick={() => this.deleteProducts(product.id)}>Delete</i>
                  
                  </td>
                </tr>
              );
            })}
          </tbody>


</table>
    </>
)

    }

}
