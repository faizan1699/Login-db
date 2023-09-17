import React, { useState } from 'react'

function App() {

  const [form, setForm] = useState({})

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://127.0.0.1:8080/demo', {
      method: 'POST',
      body: JSON.stringify({
        username: form.username,
        number: form.number,
        email: form.email,
        file: form.file,
        password: form.password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json();
    console.log(data);

  }

  return (
    <>
      <div className="container col-lg-5 col-md-6 col-12 mx-auto">
        <h1 className='text-center text-danger fw-bold'>Login</h1>
        <form onSubmit={handleSubmit}>
          <input onChange={handleForm} name='username' type="text" className="form-control mb-2" placeholder='--- Name ---' />
          <input onChange={handleForm} name='number' type="number" className="form-control mb-2" placeholder='--- Contact ---' />
          <input onChange={handleForm} name='email' type="email" className="form-control mb-2" placeholder='--- Email ---' />
          <input onChange={handleForm} name='file' type="file" className="form-control mb-2" placeholder='---  ---' />
          <input onChange={handleForm} name='password' type="password" className="form-control mb-2" placeholder='--- Password---' />
          <div className=" d-flex justify-content-end">
            <button className='btn-lg btn btn-dark border-0 text-light fw-bold py-2 px-4 btn-outline-danger' type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
