
import React, { useState } from 'react'
import './Product.css'

function ProductList() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [quantity, setQuantity] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");
    const [products, setProducts] = useState([]);

    const crateNewProduct = (e) => {
        e.preventDefault();

        if (name.trim() === "") {
            setError("Name is required");
        } else if (price === "" || Number(price) <= 0) {
            setError("Price is required");
        } else if (category === "") {
            setError("Category is required");
        } else if (quantity === "" || Number(quantity) <= 0) {
            setError("Quantity is required");
        } else if (description.trim() === "") {
            setError("Description is required");
        } else {
            const newProduct = {
                id: Date.now(),
                name: name,
                price: price,
                category: category,
                description: description,
                quantity: quantity,
            };

            setProducts([...products, newProduct]);

            setName("");
            setPrice("");
            setCategory("");
            setQuantity("");
            setDescription("");
            setError("");
        }
    };

    return (
        <div className='app'>

            <header className='header'>
                <h1>Manage products</h1>
            </header>

            <main className="container">
                <div className="stats">
                    <div className="stat-card">
                        <p>Total products</p>
                        <h2>{products.length}</h2>
                    </div>
                </div>
            </main>

            <div className="card">
                <h2>Add new products</h2>

                <form onSubmit={crateNewProduct}>
                    <div className="form-grid">

                        <div className="form-group">
                            <label htmlFor="name">
                                Product name
                            </label>

                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="price">
                                Product price
                            </label>

                            <input
                                type="number"
                                id="price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="cat">
                                Product category
                            </label>

                            <select
                                name="category"
                                id="cat"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option value="">Category</option>
                                <option value="electronic">Electronic</option>
                                <option value="toys">Toys</option>
                                <option value="school">School</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="quantity">
                                Product quantity
                            </label>

                            <input
                                type="number"
                                id="quantity"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">
                                Product description
                            </label>

                            <textarea
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>

                        {error && (
                            <p className="error">
                                {error}
                            </p>
                        )}

                        <div className='form-group'>
                            <button
                                className='add-btn'
                                type='submit'
                            >
                                Submit
                            </button>
                        </div>

                    </div>
                </form>
            </div>

            <div className="card">
                <h2>Products</h2>

                <div className="products">
                {products.length === 0 ? (
                 <p>Empty array</p>
                ) : (
                  products.map((product) => (
                  <div className="product" key={product.id}>
                  <h2>{product.name}</h2>
                   <p>Price: {product.price} €</p>
                    <p>Description: {product.description}</p>
                 <p>Category: {product.category}</p>
                <p>Quantity: {product.quantity}</p>
                  </div>
                      ))
                )}
                    
                </div>
            </div>

        </div>
    );
}

export default ProductList;
