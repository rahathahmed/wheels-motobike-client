import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Myorder = () => {
    const [orders,setOrders] = useState([]);

    const email = sessionStorage.getItem("email");

    useEffect(()=> {
        fetch(`http://localhost:5000/single/${email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])

    const handleToDelete = (id) => {
        fetch(`http://localhost:5000/deleted/${id}`,{
            method:"DELETE",

        })
        .then(res => res.json())
        .then(data => console.log(data))
        
    }
    return (
        <div style={{margin:"100px"}} >
                    <h2 className="bg-primary p-2 text-white">  <button type="button" class="btn btn-primary">
                    My Orders <span class="badge badge-light">{orders.length}</span>
                    <span class="sr-only">unread messages</span>
                    </button>
                    </h2>
             <div className="row g-2">
               
                {
                    orders.map( order => 
                    <div className="col-md-4"> 
                        <div class="card text-center rounded" >
                            <img style={{width:'100%',height:'220px',margin:'auto'}} className="card-img-top" src={order.image} alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">{order.name}</h5>
                                <p class="card-text">{order.description}</p>
                                <h5 class="card-title text-primary"> $  {order.price}</h5>
                                
                                      <button onClick={() => handleToDelete(order._id )}  className="btn btn-primary">
                                          <i className="fas fa-trash-alt"></i>  Delete Order 
                                      </button>
                                
                               
                            </div>
                        </div>
                    </div> )
                }
            </div>
        </div>
    );
};

export default Myorder;