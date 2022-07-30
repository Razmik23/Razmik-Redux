import React from "react";
import { useState } from "react";
import { productActions } from "../../state/product/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROUTER_NAMES } from "../../routers";
import { addProductData } from "../../platform/api/auth";


const AddProducts = ()=>{
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [productData, setProductData] = useState({
    productName: '',
    message: '',
    productImage: '',
    price:''
    })
   
    const handleChange = (e) => {
      setProductData({...productData, [e.target.name]: e.target.value})
      
    }
    const uploadImage = (e) => {
      const element = e.currentTarget
      const fileList = element.files;
      console.log(element.files)
      if (fileList && fileList?.length) {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
          console.log(reader)
       
          setProductData({...productData,productImage:reader.result})
        });
        reader.readAsDataURL(fileList[0]);
      }
    }
    const saveChanges = async () => {
      const result = await addProductData(productData)
      // const result = await DeleteUser('62e2c2796f047803e8aee6cf')
      console.log(result)
      if(result.data._id){
      
        navigate(ROUTER_NAMES.PRODUCTS)
      }
    }
  
      
  return <div className="Add-Product">
    <div className='P-manage-form'>
        <p>Product Name</p>
        <label>
          <input onChange = {handleChange} name={'productName'} className='P-input' type="text" placeholder='Product Name'/>
        </label>
      </div>
      <div className='P-manage-form'>
        <p>Price</p>
        <label>
          <input  onChange = {handleChange} name={'price'} className='P-input' type="number" placeholder='Price'/>
        </label>
      </div>
      <div className='P-manage-form'>
        <p>Description</p>
        <label>
          <input  onChange = {handleChange} name={'message'} className='P-input' type="text" placeholder='Description'/>
        </label>
      </div>
      <div className='P-manage-form'>
        <p>Product Image</p>
        <label>
          <input onChange={uploadImage} type="file" />
        </label>
      </div>

      <button onClick = {saveChanges} className='P-save-changes'> Save Changes</button>
    
  </div>
}

export default AddProducts