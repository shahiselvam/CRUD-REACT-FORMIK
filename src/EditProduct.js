import  React , {Component} from 'react';
import axios from 'axios';
import Navi from './navi';

const API_Url = 'https://611f50dd9771bf001785c846.mockapi.io/Products';

export default class EditProduct extends Component {

    constructor(){
        super();

        this.state={
            ProductId:'',
            ProductName:'',
            Quantity:'',
            Barcode:'',
            Amount:'' ,
            
            
    

        }
    }
componentDidMount() {
    const id = this.props.match.params.id;
    this.getProduct(id)

}

getProduct = async (id) =>{
 
const { data } =  await axios.get(`${API_Url}/${id}`)

this.setState({ProductId:data.id})
this.setState({ProductName:data.ProductName})
this.setState({Quantity:data.Quantity})
this.setState({Barcode:data.Barcode})
this.setState({Amount:data.Amount})
}


handelchange = ({target:{name , value}}) =>{

    this.setState({ [name]: value });



}

handleSubmit = (event) =>{


    event.preventDefault();


    this.UpdateProduct();
}

UpdateProduct = async () =>{


const { ProductId , ProductName , Quantity, Barcode, Amount }   =this.state;

const { data } = await axios.put(`${API_Url}/${ProductId}`,{

    ProductName,
    Quantity,
    Barcode,
    Amount

})

alert("Updated Succesfully");

this.props.history.push(`/ViewProduct`);  



}
    render(){

   return(
    <>

<Navi />
<div class="container">
          <h1 class="header">Edit Product</h1>
          <br />

    <form class="row g-3" onSubmit={this.handleSubmit}>


         <div class="row g-3">

         <div class="col-6">
             
         <label for="inputAddress" class="form-label">ProductName</label>
          <input type="text" class="form-control" name ="ProductName" value={this.state.ProductName} onChange={this.handelchange}  />
         </div>

      
         <div class="col-6">
          <label for="inputAddress2" class="form-label">Quantity</label>
          <input type="text" class="form-control"  name ="Quantity" value={this.state.Quantity} onChange={this.handelchange} />
          </div>


         <div class="col-6">
          <label for="inputAddress2" class="form-label">Barcode</label>
          <input type="text" class="form-control"  name ="Barcode" value={this.state.Barcode} onChange={this.handelchange} />
          </div>



         <div class="col-6">
          <label for="inputAddress2" class="form-label">Amount</label>
          <input type="text" class="form-control"  name ="Amount" value={this.state.Amount} onChange={this.handelchange} />
          </div>
<br />
<br />

          <div class="col-12">
          <button type="submit" class="btn btn-primary">Update</button>
            </div>
            </div>
         
          </form>
</div>
    </>
   )
   
        
    }

}
