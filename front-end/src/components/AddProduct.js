import React, { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);

  const AddProduct = async () => {
    if (!name || !price || !category || !company) {
      setError(true);
      return false;
    }

    const userId = JSON.parse(localStorage.getItem("user"))._id;

    let result = await fetch("http://localhost:5000/add-product", {
      method: "post",
      body: JSON.stringify({ name, price, category, company, userId }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    console.warn(result);
  };

  return (
    <div className="vh-100 container">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-12 col-lg-9 col-xl-7">
          <div className="card card-add-product">
            <div className="card-body product-card p-4 p-md-5">
              <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 product-text-color">
                Add Product
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
                      {error && !name && (
                        <span className="invalid-input">Enter Valid Value</span>
                      )}
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
                      {error && !price && (
                        <span className="invalid-input">Enter Valid Price</span>
                      )}
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
                      {error && !category && (
                        <span className="invalid-input">Enter Valid Category</span>
                      )}
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
                      {error && !company && (
                        <span className="invalid-input">Enter Valid Company</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-2">
                  <button
                    className="btn product-button btn-lg"
                    type="button"
                    onClick={AddProduct}
                  >
                    Add Product
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

export default AddProduct;
