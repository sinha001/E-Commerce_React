import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [key, setKey] = useState("");

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/products",{
      headers:{
        authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
      }
    });
    result = await result.json();
    setProducts(result);
  };

  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:5000/products/${id}`, {
      method: "Delete",
      headers:{
        authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
      }
    });
    result = result.json();
    if (result) {
      alert("Record is deleted");
      getProducts();
    }
  };

  const handleSearch = async () => {
    console.log(key);
    if (key) {
      let result = await fetch(`http://localhost:5000/search/${key}`,{
        headers:{
          authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
        }
      });
      result = await result.json();
      if (result) {
        setProducts(result);
      }
    }
  };

  return (
    <section>
      <div className="list-container container py-5">
        <div className="row justify-content-center align-items-center">
          <h2 className="text-center mb-3">Products</h2>

          <div className="input-group search-box mb-3 py-3">
            <input
              type="search"
              className="form-control me-3 rounded"
              placeholder="Search"
              aria-label="Search"
              value={key}
              onChange={(e) => {
                setKey(e.target.value);
                if(!e.target.value){
                  getProducts();
                }
              }}
              aria-describedby="search-addon"
            />
            <button
              type="button"
              className="btn btn-outline-light"
              data-mdb-ripple-init
              onClick={handleSearch}
            >
              search
            </button>
          </div>
          {products.length>0 ? products.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="card border rounded-3">
                <div className="card-body product-container">
                  <div className="row justify-content-center align-items-center">
                    <div className="col-12">
                      <h5>
                        {item.company} {item.name}
                      </h5>
                      <div className="mb-2 text-muted small">
                        <span>{item.category}</span>
                      </div>
                    </div>
                    <div className="col-12 mt-3">
                      <h4 className="mb-1">Rs. {item.price}</h4>
                      <h6 className="text-success">Free shipping</h6>
                      <div className="d-flex flex-column mt-4">
                        <button
                          className="btn btn-primary btn-sm"
                          type="button"
                          onClick={() => deleteProduct(item._id)}
                        >
                          Delete
                        </button>
                        <Link
                          className="btn btn-outline-primary btn-sm mt-2"
                          to={"/update/" + item._id}
                        >
                          Update
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )):<h1>No result Found</h1>}
        </div>
      </div>
    </section>
  )
};

export default Products;
