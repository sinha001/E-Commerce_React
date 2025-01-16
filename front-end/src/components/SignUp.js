import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const collectData = async (e) => {
    e.preventDefault(); // Prevents form from refreshing
    console.warn(name, password, email, phoneNumber);
    let result = await fetch('http://localhost:5000/register',{
        method: 'post',
        body: JSON.stringify({name,password,email,phoneNumber}),
        headers:{
            'Content-Type':'application/json'
        }
    });

    result = await result.json();
    if(result){ 
        navigate('/');
    }
  };

  return (
    <section className="vh-100 gradient-custom ">
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-9 col-xl-7">
            <div className="card card-registration">
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 custom-text-color">
                  Registration Form
                </h3>
                <form>
                  <div className="row">
                    <div className="col-md-12 mb-2">
                      <div data-mdb-input-init className="form-outline">
                        <input
                          type="text"
                          id="Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" for="Name">
                          Name
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12 mb-2 d-flex align-items-center">
                      <div
                        data-mdb-input-init
                        className="form-outline datepicker w-100"
                      >
                        <input
                          type="password"
                          className="form-control form-control-lg"
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label for="password" className="form-label">
                          Password
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12 mb-2 pb-2">
                      <div data-mdb-input-init className="form-outline">
                        <input
                          type="email"
                          id="emailAddress"
                          className="form-control form-control-lg"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className="form-label" for="emailAddress">
                          Email
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 mb-2 pb-2">
                      <div data-mdb-input-init className="form-outline">
                        <input
                          type="tel"
                          id="phoneNumber"
                          className="form-control form-control-lg"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        <label className="form-label" for="phoneNumber">
                          Phone Number
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-2">
                    <button
                      data-mdb-ripple-init
                      className="btn btn-light btn-lg"
                      type="submit"
                      value="Submit"
                      onClick={collectData}
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
