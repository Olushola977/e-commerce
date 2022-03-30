import './NewProduct.css';

const NewProduct = () => {
    return (
        <div className='newProduct'>
            <h1 className="addProductTitle">New Product</h1>
            <form className="addProductForm">
                <div className="addProductItem">
                    <label>Image</label>
                    <input type="file" id='file' />
                </div>
                <div className="addProductItem">
                    <label>Product Name</label>
                    <input type="text" placeholder='Apple Airpod' />
                </div>
                <div className="addProductItem">
                    <label>In Stock</label>
                    <select name="inStock" id="inStock">
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select>
                </div>
                <div className="addProductItem">
                    <label>Active</label>
                    <select name="active" id="active">
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select>
                </div>
                <button className="addProductButton">Create</button>
            </form>
        </div>
    )
}

export default NewProduct