import React from 'react';
import { Link} from 'react-router-dom';
import useAuth from "./../../Hook/useAuth";

const Dashboard = () => {
    const {admin} = useAuth();
    return (
      <div className="row mt-5 pt-3 g-0">
        <div className="col-md-2">
          <div className="mt-5 p-2">
            <h2> Wellcome to Dashboard </h2>
            <p className="">
              Dear user wellcome to choosing Wheels-moto bike. Wheels moto bike
              is the now trand one of the most populer motobike seller company.
            </p>
            <a
              class="btn btn-primary text-center"
              data-bs-toggle="offcanvas"
              href="#offcanvasExample"
              role="button"
              aria-controls="offcanvasExample"
            >
              {" "}
              Dashboard Menu
            </a>

            <div
              class="offcanvas offcanvas-start"
              tabindex="-1"
              id="offcanvasExample"
              aria-labelledby="offcanvasExampleLabel"
            >
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">
                  My Dashboard{" "}
                </h5>
                <button
                  type="button"
                  class="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body">
                <ul class="list-group list-unstyled">
                  <li>
                    <Link class="list-group-item mb-2" to="/myorder">
                      {" "}
                      <i class="fas fa-cart-plus"></i> My Order{" "}
                    </Link>
                  </li>
                  <li>
                    <Link class="list-group-item mb-2" to="/review">
                      {" "}
                      <i class="fas fa-comments"></i> Review{" "}
                    </Link>
                  </li>
                  <li>
                    {admin ? (
                      <Link class="list-group-item " to="/makeadmin">
                        {" "}
                        <i class="fas fa-user"></i>
                        Make Admin
                      </Link>
                    ) : (
                      <Link class="list-group-item disabled" to="/makeadmin">
                        {" "}
                        <i class="fas fa-user"></i>
                        Make Admin
                      </Link>
                    )}
                    {admin ? (
                      <Link class="list-group-item " to="/addproducts">
                        {" "}
                        <i class="fas fa-lock-open"></i>
                        Add Products
                      </Link>
                    ) : (
                      <Link class="list-group-item disabled" to="/addproducts">
                        {" "}
                        <i class="fas fa-lock"></i>
                        Add Products
                      </Link>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-10">
          <img
            className="img-fluid"
            src="https://thumbs.dreamstime.com/z/dashboard-infographic-ui-elements-mobile-application-website-visits-profits-statistics-network-analytics-mockup-modern-204044757.jpg"
            alt=""
          />
        </div>
      </div>
    );
};

export default Dashboard;