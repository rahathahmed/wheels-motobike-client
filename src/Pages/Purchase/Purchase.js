import React, { useEffect ,useState} from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';

const Purchase = () => {
    const { register, handleSubmit } = useForm();
    const [products,setProducts] = useState({})
    const {authError} =useAuth()

    const { productid } = useParams();

    const email = sessionStorage.getItem("email")

    useEffect(()=>{
        fetch(`http://localhost:5000/singleProduct/${productid}`)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    console.log(products);

    const onSubmit = (data) => {
        data.email = email;
        fetch("http://localhost:5000/confirmOrder" , {
            method:"POST",
            headers: {"content-type":"application/json"},
            body:JSON.stringify(data)
        })
        .then(res => res.json())
       .then(result =>{
            if(result.acknowledged){
                alert("Order Placed Succesfully")
            }
            
       })
       
    };
    return (
      <div className="mt-5 p-5">
        <h2>Products Info</h2>

        <div className="row">
          <div className="col-md-4">
            <div class="card text-center" style={{ width: "18rem" }}>
              <img
                class="card-img-top"
                src={products.image}
                alt="Card image cap"
              />

              <h4>{products.name} </h4>
              <h3 className="text-primary"> $ {products.price} </h3>
              <div class="card-body">
                <p class="card-text">{products.description}</p>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <form className="w-50 mx-auto" onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("name")}
                value={products.name}
                placeholder="Name"
                className="mb-2 p-2 form-control"
              />

              <input
                {...register("description")}
                value={products._id}
                placeholder="Order Id"
                className="mb-2 p-2 form-control"
              />

              <input
                {...register("image", { required: true })}
                value={products.image}
                className="mb-2 p-2 form-control"
                placeholder="Image"
              />
              <input
                {...register("price", { required: true })}
                value={products.price}
                className="mb-2 p-2 form-control"
                placeholder="Price"
              />

              <input
                {...register("customername")}
                placeholder=" Type Your Name"
                className="mb-2 p-2 form-control"
              />
              <input
                {...register("date")}
                placeholder="DAte"
                className="mb-2 p-2 form-control"
                type="date"
              />

              <input
                type="submit"
                value="Order "
                className="p-2 btn btn-primary form-control"
              />
            </form>

            <div class="alert alert-danger mt-2" role="alert">
              To See Your All Order Visit Our Dashboard Page and Go To MyOrder{" "}
              <Link to="/dashboard">
                {" "}
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Purchase;