import { Publish } from '@material-ui/icons';
import { productData } from 'chartData';
import Chart from 'components/admincomponents/chart/Chart';
import { LadyStyle1 } from 'images';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = () => {
  return (
    <div className='product'>
         <div className="productTitleContainer">
              <h1 className="productTitle">Product</h1>
              <Link to='/admin/newproduct'>
                   <button className="productAddButton">Create</button> 
              </Link>
         </div>
         <div className="productTop">
            <div className="productTopLeft">
                <Chart data={productData} datakey='Sales' title='Sales Performance' />
            </div>
            <div className="productTopRight">
                <div className="productInfoTop">
                    <img src={LadyStyle1} alt="" className="productInfoImg" />
                    <span className="productName">Apple AIrpod</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="productInfoKey">Id:</span>
                        <span className="productInfoKey">123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">Sales:</span>
                        <span className="productInfoKey">4123</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">Active:</span>
                        <span className="productInfoKey">Yes</span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey">In Stock:</span>
                        <span className="productInfoKey">No</span>
                    </div>
                </div>
            </div>
         </div>
         <div className="productBottom">
              <form className="productForm">
                  <div className="productFormLeft">
                      <label>Product Name</label>
                      <input type="text" placeholder='Apple Airpod' />
                      <label>In Stock</label>
                      <select name="inStock" id="inStock">
                          <option value='yes'>Yes</option>
                          <option value='no'>No</option>
                      </select>
                      <label>Active</label>
                      <select name="active" id="active">
                          <option value='yes'>Yes</option>
                          <option value='no'>No</option>
                      </select>
                  </div>
                  <div className="productFormRight">
                      <div className="productUpload">
                          <img src={LadyStyle1} alt="" className="productUploadImg" />
                          <label for="file">
                              <Publish />
                          </label>
                          <input type="file" id='file' style={{display: 'none'}} />
                      </div>
                      <button className="productButton">Update</button>
                  </div>
              </form>
         </div>
    </div>
  )
}

export default Product