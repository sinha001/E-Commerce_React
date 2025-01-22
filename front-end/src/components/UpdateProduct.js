import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    let result = await fetch(`http://localhost:5000/product/${params.id}`,{
      headers:{
        authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
      }
    });
    result = await result.json();
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);
  };

  const updateProduct = async () => {
    let result = await fetch(`http://localhost:5000/product/${params.id}`,{
        method:'put',
        body: JSON.stringify({name,price,company,category}),
        headers:
        {
            "Content-Type":"application/json",
            authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
        }
    });
    result = await result.json();
    navigate("/");
  };

  return (
    <div className="vh-100 container">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-12 col-lg-9 col-xl-7">
          <div className="card card-add-product">
            <div className="card-body product-card p-4 p-md-5">
              <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 product-text-color">
                Update Product
              </h3>
              <form>
                <div className="row">
                  <div className="col-md-12 mb-4">
                    <div className="form-outline product-text-color">
                      <label
                        className="form-label product-text-color"
                        htmlFor="Product Name"
                      >
                        Product Name
                      </label>
                      <input
                        type="text"
                        id="product-name"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        className="form-control product-control form-control-lg"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 mb-4">
                    <div className="form-outline product-text-color">
                      <label
                        className="form-label product-text-color"
                        htmlFor="Product Price"
                      >
                        Product Price
                      </label>
                      <input
                        type="text"
                        id="product-price"
                        value={price}
                        onChange={(e) => {
                          setPrice(e.target.value);
                        }}
                        className="form-control product-control form-control-lg"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 mb-4">
                    <div className="form-outline product-text-color">
                      <label
                        className="form-label product-text-color"
                        htmlFor="Product Category"
                      >
                        Product Category
                      </label>
                      <input
                        type="text"
                        id="product-category"
                        value={category}
                        onChange={(e) => {
                          setCategory(e.target.value);
                        }}
                        className="form-control product-control form-control-lg"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 mb-4">
                    <div className="form-outline product-text-color">
                      <label
                        className="form-label product-text-color"
                        htmlFor="Product Company"
                      >
                        Product Company
                      </label>
                      <input
                        type="text"
                        id="product-company"
                        value={company}
                        onChange={(e) => {
                          setCompany(e.target.value);
                        }}
                        className="form-control product-control form-control-lg"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-2">
                  <button
                    className="btn product-button btn-lg"
                    type="button"
                    onClick={updateProduct}
                  >
                    Update Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
