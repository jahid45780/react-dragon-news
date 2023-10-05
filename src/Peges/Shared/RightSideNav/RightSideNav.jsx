import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { AiFillGoogleCircle,AiFillGithub,AiOutlineFacebook,AiOutlineTwitter,AiOutlineInstagram } from "react-icons/ai";
import app from "../../../firebase/firebase.config";
import { useState } from "react";

const RightSideNav = () => {
    const [user, setUser]= useState(null)
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
    const GitHupProvider = new GithubAuthProvider()


      const handleGoogleSingIn = ()=>{
          signInWithPopup(auth,provider)
          .then(result => {
            const logInUser = result.user
            console.log(logInUser)
            setUser(logInUser)
          })
          .catch(error =>{
            console.error(error.message)
          })

      }

      const handleGitHubSingIn = ()=>{
        signInWithPopup(auth,GitHupProvider)
        .then(result=>{
            const logInUser = result.user
            console.log(logInUser)
            setUser(logInUser)
        })

        .catch(error=>{
            console.error(error)
        })
      }

    return (
        <div>
            <div className=" p-4 space-y-3 mb-6 " >
                <h2 className=" text-3xl" >Login With</h2>
                { user && <div className=" flex items-center" >
                    <h2 className=" text-xl text-green-600" > {user.displayName} </h2>
                    <img className=" rounded-full" src={ user.photoURL } alt="" />
                </div> }
                <button onClick={ handleGoogleSingIn} className="btn btn-outline w-full ">
                    <AiFillGoogleCircle className=" text-xl" ></AiFillGoogleCircle>
                    Google
                </button>
                <button onClick={ handleGitHubSingIn } className="btn btn-outline w-full ">
                    <AiFillGithub  className=" text-xl" ></AiFillGithub>
                    GitHup
                </button>
            </div>


            <div className=" p-4  mb-6 " >
                <h2 className=" text-3xl mb-4 " > Find Us On </h2>
               

                 <a className=" flex gap-2 p-4 text-xl items-center border border-x-lg " href="">
                  <AiOutlineFacebook></AiOutlineFacebook>
                  <span>Facebook</span>
                  </a>
            

                  <a className=" flex gap-2 p-4 text-xl items-center border border-x-lg " href="">
                  <AiOutlineTwitter></AiOutlineTwitter>
                  <span>Twitter</span>
                  </a>

                 
               
                  <a className=" flex gap-2 p-4 text-xl items-center border border-t-lg " href="">
                <AiOutlineInstagram></AiOutlineInstagram>
                  <span>Instagram</span>
                  </a>

               </div>

            {/* Q Zone */}
            <div className=" p-4 space-y-3 mb-6 " >
                <h2 className=" text-3xl" > Q-Zone </h2>
               <img src="https://i.ibb.co/qnYtWLC/qZone1.png" alt="" />
               <img src="https://i.ibb.co/LSjpbFT/qZone2.png" alt="" />
                <img src="https://i.ibb.co/BLPX5JX/qZone3.png" alt="" />

            </div>



        </div>
    );
};

export default RightSideNav;