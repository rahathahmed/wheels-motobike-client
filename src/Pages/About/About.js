import React from 'react';

const About = () => {
    return (
        <div className="row container py-5">
            <div className="col-md-6 "> 
                <img className="img-fluid"  style={{marginLeft:'20px'}} src="https://i.ibb.co/cv7JpL1/image-2.jpg" alt="" />
            </div>
            <div className="col-md-6 p-5 mt-5"> 
                <h4 style={{color:'red'}}>About</h4>
                <h2 style={{fontSize:'3.75rem',fontWeight:'bold',color:'black'}} > DAD3333 </h2>
                <p style={{fontSize:'20px',lineHeight:'30px'}}  > 
                Wheels DAD3333 comes with new modern design to give your more driving power and thrilling experience with added stance, proportions, and a certain attitude.
                It has been designed with great suspension geometry that consists of fork angle and height to absorb front and rear shock.
                </p>
                <button style={{
                    background:'red',
                    padding:'5px',
                    width:'50%',
                    borderRadius:'10px',
                    fontSize:'18px',
                    color:'#fff'}} className="btn" > Read More <i class="fas fa-arrow-right"></i> </button>
            </div>
        </div>
    );
};

export default About;