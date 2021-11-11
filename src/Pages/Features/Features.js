import React from 'react';

const Features = () => {
    const services = [
        {"name" : "More Powerfull RIM","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque.","img":'https://sacredthemes.net/wheels/images/rim-icon.png'
        },
        {"name" : "Powerfull Chasis","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque.","img":'https://sacredthemes.net/wheels/images/chasis-icon.png'
        },
        {"name" : "Rolak Peachully","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque.","img":'https://sacredthemes.net/wheels/images/chasis-icon.png'
    }
    ]
    return (
        <div className="text-center" style={{background:'#eeeeee'}}>
            <div className="container py-5">
            <h4> SMART </h4>
            <h2> FEATURE </h2>
            <div className="row ">
                {
                    services.map(service => <div className="col-md-4"> 
                        <div class="card text-center" >
                            <img style={{width:'100px',margin:'auto'}} class="card-img-top" src={service.img} alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">{service.name}</h5>
                                <p class="card-text">{service.description}</p>
                               
                            </div>
                        </div>
                    </div> )
                }
            </div>
            </div>
         
        </div>
    );
};

export default Features;