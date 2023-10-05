
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Header from "../Shared/Header/Header";
import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";


const News = () => {
    const [news,setNews] = useState([])
     const {id}= useParams()
    useEffect(()=>{
fetch('/news.json')
.then(res=> res.json())
.then(data => setNews(data))
    },[])
   
   console.log(news);

   const singlesNews = news.find(n=> n._id== id)

    console.log(singlesNews)
 
    return (
        <div>
            <Navbar></Navbar>
             <Header></Header>
            <div className=" grid md:grid-cols-4 " >

                <div className=" col-span-3 " >
                    <h2 className=" text-3xl" > News Details </h2>
                   <p> {id} </p>

                        
               
                
                
                
                
                
                    
                    
                   
             
                    

         </div>
                   <div>
                    <RightSideNav></RightSideNav>
                   </div>
            </div>

        </div>
    );
};

export default News;