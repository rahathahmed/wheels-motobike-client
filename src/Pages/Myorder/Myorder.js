import React, { useEffect, useState } from 'react';
const Myorder = () => {
    const [orders,setOrders] = useState([]);
    const email = sessionStorage.getItem("email");

    useEffect(()=> {
        fetch(`http://localhost:5000/single/${email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[email])

    
    const handleToDelete = (id) => {
        const confirmModal = window.confirm("Are You Seur To Deleted Your Order");
        if( confirmModal ){
            const url = `http://localhost:5000/deleted/${id}`;
            fetch(url,{
                method:"DELETE",
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    alert("Deleted Successfully");
                    const remaining = orders.filter(order => order._id !== id)
                    setOrders(remaining)
                }
            })
            
        }
       
        window.location.reload();
    }
    return (
      <div style={{ margin: "100px" }}>
        <h2 className="bg-primary p-2 text-white">
          {" "}
          <button type="button" class="btn btn-primary">
            My Orders <span class="badge badge-light">{orders.length}</span>
            <span class="sr-only">unread messages</span>
          </button>
        </h2>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Order_id</th>
              <th scope="col"> Date </th>
              <th scope="col">Product</th>
              <th scope="col">Cancel</th>
            </tr>
            {orders.map((order) => (
              <tr>
                <th scope="row">1</th>
                <td>{order.name}</td>
                <td>{order._id}</td>
                <td>{order.date}</td>
                <td>
                  <img
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      margin: "auto",
                    }}
                    className="card-img-top"
                    src={order.image}
                    alt="Card image cap"
                  />
                </td>
                <td>
                  <button
                    onClick={() => handleToDelete(order._id)}
                    className="btn btn-danger"
                  >
                    <i class="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </thead>
        </table>
      </div>
    );
};

export default Myorder;


 
    
 
  <tbody>
    
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>

