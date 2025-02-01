import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const apiURL = process.env.REACT_APP_API_URL;


  useEffect(()=>{
    const auth = localStorage.getItem("user");
    if(auth){
        navigate('/');
    }
  },);

  const handleLogin = async () => {
    let result = await fetch(`${apiURL.replace(/\/$/, "")}/login`, {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    if(result.auth){
        localStorage.setItem("user",JSON.stringify(result.user));
        localStorage.setItem("token",JSON.stringify(result.auth));
        navigate('/');
    }else{
        alert('please enter connect details');
    }
  };

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-9 col-xl-7">
            <div className="card card-registration">
              <div className="card-body login-card p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 login-text-color">
                  Login
                </h3>
                <form>
                  <div className="row">
                    <div className="col-md-12 mb-4">
                      <div className="form-outline login-text-color">
                        <label
                          className="form-label login-text-color"
                          htmlFor="email"
                        >
                          Email
                        </label>
                        <input
                          type="text"
                          id="email"
                          required
                          value={email}
                          className="form-control login-control form-control-lg"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 mb-2">
                      <div className="form-outline">
                        <label
                          className="form-label login-text-color"
                          htmlFor="password"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          value={password}
                          required
                          className="form-control login-control form-control-lg"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-2">
                    <button
                      onClick={handleLogin}
                      className="btn login-button btn-lg"
                      type="button"
                    >
                      Login
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

export default Login;
