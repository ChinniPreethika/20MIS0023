import {Component} from 'react'
class Product extends Component{
    componentDidMount(){
        this.getProducts();
    }
    getProducts=async()=>{
        const api_Url="http://20.244.56.144/test/companies"
        const option={method:"Get"}
        const response=await fetch(api_Url,option)
        const data=await response.json()
        console.log(data);

    }
    render(){
        return(<div>
            <h1>E-Commerce Page</h1>
        </div>)
    }
}
export default Product