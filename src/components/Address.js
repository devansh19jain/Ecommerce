import React from 'react'
import { Link } from 'react-router-dom'

function Address({addresshandler}) {
  return (
    <div className='mt-4'>
      <h5>Shipping Address</h5>
      <form class="row g-3" onSubmit={(e)=>addresshandler(e)}>
  <div class="col-md-6">
    <label for="fullname" class="form-label">Full name</label>
    <input name='fullname' type="text" class="form-control" id="fullname" required/>
  </div>
  <div class="col-md-6">
    <label for="phonenumber" class="form-label">Mobile number</label>
    <input type="number" name='phone' class="form-control" id="phonenumber" required/>
  </div>
  <div class="col-md-6">
  <label for="inputAddress" class="form-label">Flat, House no., Building</label>
    <input type="text" name='address1' class="form-control" id="inputAddress" placeholder="E.g. block-205.." required/>
  </div>
  <div class="col-md-6">
  <label for="pincode" class="form-label">Pincode</label>
    <input type="number" name='pincode' placeholder='6 digits [0-9] PIN code' class="form-control" id="pincode" required/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Complete address</label>
    <input type="text" class="form-control" id="inputAddress2" required/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity" required/>
  </div>
  <div class="col-md-6">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select" required>
      <option selected>Choose a state</option>
      <option value="Andhra Pradesh">Andhra Pradesh</option>
        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
        <option value="Assam">Assam</option>
        <option value="Bihar">Bihar</option>
        <option value="Chhattisgarh">Chhattisgarh</option>
        <option value="Goa">Goa</option>
        <option value="Gujarat">Gujarat</option>
        <option value="Haryana">Haryana</option>
        <option value="Himachal Pradesh">Himachal Pradesh</option>
        <option value="Jharkhand">Jharkhand</option>
        <option value="Karnataka">Karnataka</option>
        <option value="Kerala">Kerala</option>
        <option value="Madhya Pradesh">Madhya Pradesh</option>
        <option value="Maharashtra">Maharashtra</option>
        <option value="Manipur">Manipur</option>
        <option value="Meghalaya">Meghalaya</option>
        <option value="Mizoram">Mizoram</option>
        <option value="Nagaland">Nagaland</option>
        <option value="Odisha">Odisha</option>
        <option value="Punjab">Punjab</option>
        <option value="Rajasthan">Rajasthan</option>
        <option value="Sikkim">Sikkim</option>
        <option value="Tamil Nadu">Tamil Nadu</option>
        <option value="Telangana">Telangana</option>
        <option value="Tripura">Tripura</option>
        <option value="Uttar Pradesh">Uttar Pradesh</option>
        <option value="Uttarakhand">Uttarakhand</option>
        <option value="West Bengal">West Bengal</option>
        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
        <option value="Chandigarh">Chandigarh</option>
        <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
        <option value="Lakshadweep">Lakshadweep</option>
        <option value="Delhi">Delhi</option>
        <option value="Puducherry">Puducherry</option>
    </select>
  </div>
  <div class="col-12 justify-content-between d-flex">
    <Link className='my-auto' to="/cart">Back to Cart</Link>
    <button type="submit" class="button buynow">Next</button>
  </div>
</form>
    </div>
  )
}

export default Address
