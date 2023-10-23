import React from 'react'

const Contact = () => {
  return (
    <div 
    id="Connect"
    className="hero min-h-screen bg-primary">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-4xl font-bold from-purple-600 via-primary-focus to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">Connect</h1>
      <p className="py-6">Got a question or proposal, or just want to say hello? Go ahead.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        
        <div className="form-control mt-6">
          <button className="btn btn-primary">Get Connect</button>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default Contact