import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "",
    country: "India",
    streetAddress: "", city: "", state: "", postalCode: "",
    comments: false, candidates: false, offers: false,
    pushNotifications : ""
  })

  function changeHandler(event) {
    const { name, value, checked, type } = event.target
    setFormData((prev) => ({
      ...prev, [name]: type === "checkbox" ? checked : value
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(formData)
  }
  return (
    <div className='flex flex-col justify-center items-center'>
      <form onSubmit={submitHandler}>
        <label htmlFor='firstName'>First Name</label>
        <br />
        <input
          className='outline'
          type="text"
          name='firstName'
          id='firstName'
          placeholder='Love'
          value={formData.firstName}
          onChange={changeHandler} />

        <br />

        <label htmlFor='lastName'>Last Name</label>
        <br />
        <input
          className='outline'
          type="text"
          name='lastName'
          id='lastName'
          placeholder='Babbar'
          value={formData.lastName}
          onChange={changeHandler} />

        <br />

        <label htmlFor='email'>Email</label>
        <br />
        <input
          className='outline'
          type="text"
          name='email'
          id='email'
          placeholder='Love'
          value={formData.email}
          onChange={changeHandler} />

        <br />

        <label htmlFor="country">Country</label>
        <br />
        <select name='country' id='country' value={formData.country} onChange={changeHandler} className='outline'>
          <option>India</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
        <br />

        <label htmlFor='streetAddress'>Street Address</label>
        <br />
        <input
          className='outline'
          type="text"
          name='streetAddress'
          id='streetAddress'
          placeholder='B-25C'
          value={formData.streetAddress}
          onChange={changeHandler} />

        <br />
        <label htmlFor='city'>City</label>
        <br />
        <input
          className='outline'
          type="text"
          name='city'
          id='city'
          placeholder='Jalandhar'
          value={formData.city}
          onChange={changeHandler} />

        <br />
        <label htmlFor='state'>State / Province</label>
        <br />
        <input
          className='outline'
          type="text"
          name='state'
          id='state'
          placeholder='Punjab'
          value={formData.state}
          onChange={changeHandler} />

        <br />

        <label htmlFor='postalCode'>Postal Code</label>
        <br />
        <input
          className='outline'
          type="text"
          name='postalCode'
          id='postalCode'
          placeholder='144001'
          value={formData.postalCode}
          onChange={changeHandler} />

        <br />
        <br />
        <fieldset>
          <legend>By Email</legend>
          
          <div className='flex'>
          <input type="checkbox" name="comments" id="comments" checked={formData.comments} onChange={changeHandler}/>
          <div>
            <label htmlFor="comments">Comments</label>
            <p>Get Notified when Someone Post a comment on a posting</p>
          </div>
          </div>

          <div className='flex'>
          <input type="checkbox" name="candidates" id="candidates" checked={formData.candidates} onChange={changeHandler}/>
          <div>
            <label htmlFor="candidates">Candidates</label>
            <p>Get Notified when a candidate applies for the Job</p>
          </div>
          </div>

          <div className='flex'>
          <input type="checkbox" name="offers" id="offers" checked={formData.offers} onChange={changeHandler}/>
          <div>
            <label htmlFor="offers">Offers</label>
            <p>Get Notified when a candidate accepts or reject an Offer</p>
          </div>
          </div>
        </fieldset>
        <br /><br />
        <fieldset>
          <legend>Push Notifications</legend>
          <p>These are delivered via SMS to your Mobile phone</p>
          <br />
          <input type="radio" name='pushNotifications' id='pushEverything' value="Everything"  onChange={changeHandler} />
          <label htmlFor="pushEverything">Everything</label>
          <br />
          <input type="radio" name='pushNotifications' id='pushEmail' value="Same as email"  onChange={changeHandler} />
          <label htmlFor="pushEmail">Same as Email</label>
          <br />
          <input type="radio" name='pushNotifications' id='pushNothing' value="No Push Notifications"  onChange={changeHandler} />
          <label htmlFor="pushNothing">No Push Notification</label>
        </fieldset>

        <button className='bg-blue-500 text-white font-bold rounded py-2 px-5'>Save</button>


      </form>
    </div>
  );
}

export default App;
