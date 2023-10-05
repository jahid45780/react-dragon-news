import { Link } from "react-router-dom";
import Header from "../Header/Header";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";


const Register = () => {

    const {createUser} = useContext(AuthContext)

    const handleRegister = e =>{
        e.preventDefault()
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name,photo,email,password)

         // create user
         createUser(email, password) 
         .then(result=>{
            console.log(result.user)
         })
        .catch(error =>{
            console.error(error)
        })
    
    }

    return (
        <div>
            
     <Header></Header>

     <div className=" m-4" >

<h2 className=" text-3xl text-center my-10 font-bold " > Register your account  </h2>

<form onSubmit={handleRegister} className=" lg:w-1/2 md:w-3/4 mx-auto" >
<div className="form-control">
<label className="label">
<span className="label-text">Name</span>
</label>
<input type="text" placeholder="name" name="name" className="input input-bordered" required />
</div>
<div className="form-control">
<label className="label">
<span className="label-text">Photo</span>
</label>
<input type="text" placeholder="photo URL" name="photo" className="input input-bordered" required />
</div>
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

</div>
<div className="form-control mt-6">
<button className="btn btn-primary">Register</button>
</div>





</form>
<p className=" text-center mt-9" >Register your account ? <Link to='/login' > <span className=" text-red-600 font-bold " >Login</span> </Link> </p>

</div>


        </div>
    );
};

export default Register;