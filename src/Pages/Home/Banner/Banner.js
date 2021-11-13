import React from 'react';
import Bg from '../../../Img/bg-5.jpg';


const Banner = () => {
    const bannerBg = {
        background : `url(${Bg})`,
        backgroundRepeat:'no-reapet',
        backgroundSize:'cover',
        backgroundPosition:'center',
        paddingBottom:'180px '
    }
// Unfortunatly didn't import css file so i used inline jsx css fot custom design
    return (
        <div  > 
            <div  style={bannerBg}>
          
            <div className="row container text-center mt-5 py-5 ">
                <div className="col-md-7 text-white text-justify" > 
                        <h4 style={{fontSize: '2.71rem'}}> Introducing </h4>
                        <h1 style={{fontSize: '4.5rem',textShadow: '6px 6px 7.83px rgb(0 0 0 / 18%)'}} > THRILLING 
                            <span style={{color: 'red',textShadow: '6px 6px 7.83px rgb(0 0 0 / 18%)',marginTop:'-10px'}}> DAD3333</span>
                        </h1>
                        <p style={{fontSize: '1.30rem'}}>Two Wheels to move the soul. <br/> Power Packed Performance</p>
                        <button style={{
                        background:'red',
                        padding:'5px',
                        width:'30%',
                        borderRadius:'10px',
                        fontSize:'18px',
                        color:'#fff'}} 
                        className="btn btn-danger">Book Test Ride <i class="fas fa-arrow-right"></i></button>
                </div>
                <div className="col-md-5 text-white">
                <h5> Starting at : <span style={{fontSize: '2.725rem',color:'red'}}> 12000$</span> </h5>
                        <h2 className="" style={{fontSize: '5.725rem',opacity:'0.2'}}> 
                        WXL1300CC
                        </h2>
                </div>
            </div>
            </div>
        </div>
    );
};



export default Banner;