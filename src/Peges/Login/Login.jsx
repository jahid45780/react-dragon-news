import { Link } from "react-router-dom";
import Header from "../Shared/Header/Header";




const Login = () => {
 
    const handleLogin = e =>{
        e.preventDefault()
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        console.log(form.get('email'))
    }


    return (
        <div>
          <Header></Header>
         <div className=" m-4" >

         <h2 className=" text-3xl text-center my-10 font-bold " >  Login your account  </h2>

<form onSubmit={handleLogin} className=" lg:w-1/2 md:w-3/4 mx-auto" >

<div className="form-control">
<label className="label">
<span className="label-text">Email</span>
</label>
<input type="email" placeholder="email" name="email" className="input input-bordered" required />
</div>
<div className="form-control">
<label className="label">
<span className="label-text">Password</span>
</label>
<input type="password" placeholder="password" name="password" className="input input-bordered" required />
<label className="label">
<a href="#" className="label-text-alt link link-hover">Forgot password?</a>
</label>
</div>
<div className="form-control mt-6">
<button className="btn btn-primary">Login</button>
</div>





</form>
   <p className=" text-center mt-9" >Don’t Have An Account ? <Link to='/register' > <span className=" text-red-600 font-bold " >Register</span> </Link> </p>

         </div>


        </div>
    );
};

export default Login;