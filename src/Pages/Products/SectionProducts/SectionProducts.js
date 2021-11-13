import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

const SectionProducts = () => {
     const [products,setProducts] = useState([]);
    
    useEffect(()=> {
        fetch("http://localhost:5000/allProducts")
        .then(res => res.json())
        .then(data =>setProducts(data))
    },[])
    return (
        <div className="text-center mt-5" style={{background:'#eeeeee'}}>
            <div className="container py-5">
            <h4> our </h4>
            <h2> Products </h2>
            <div className="row g-2">
                {
                    products.slice(0,6).map(product => <div className="col-md-4"> 
                        <div class="card text-center rounded" >
                            <img style={{width:'100%',height:'220px',margin:'auto'}} className="card-img-top" src={product.image} alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">{product.name}</h5>
                                <p class="card-text">{product.description}</p>
                                <h5 class="card-title text-primary"> $  {product.price}</h5>
                                <Link to={`/purchase/${product._id}`}> 
                                <button className="btn btn-primary"> <i class="fas fa-cart-plus"></i> Buy Now</button>
                                </Link>
                               
                            </div>
                        </div>
                    </div> )
                }
            </div>
            </div>
         
        </div>
    );
};

export default SectionProducts;