import axios from "axios"

function App () {
  const handleSubmit = (e) =>{
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    const phone_number = e.target.phone.value
    const gender = e.target.gander.value
    
    const userData = {
      email,
      password,
      phone_number,
      gender
    }

    axios.post('http://127.0.0.1:8000/signup/', userData)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });



  }
  return (
    <>
      <div className='hero min-h-screen bg-base-200'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
            <form className='card-body' onSubmit={handleSubmit}>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='email'
                  placeholder='email'
                  className='input input-bordered'
                  required
                  name="email"
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <input
                  type='password'
                  placeholder='password'
                  className='input input-bordered'
                  required
                  name="password"
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Phone</span>
                </label>
                <input
                  type='number'
                  placeholder='Phone Number'
                  className='input input-bordered'
                  required
                  name="phone"
                />
              </div>
              <select name="gander" className="select w-full max-w-xs">
                <option disabled selected>Gander</option>
                <option>Male</option>
                <option>Female</option>
            </select>
              <div className='form-control mt-6'>
                <input type="submit" value="Submit" className='btn btn-primary'/>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
