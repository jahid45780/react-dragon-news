
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const [categories, setCategories]= useState([])

    useEffect(()=>{
        fetch('categories.json')
        .then(res=> res.json())
        .then(data=> setCategories(data))
    },[])
    return (
        <div className=" grid grid-cols-2 md:grid-cols-1 lg:grid-cols-1 space-y-5">
            <h2 className="  text-2xl"> All Categories </h2>
            {
                categories.map(category =>
                 <Link className=" block ml-3 font-semibold text-xl px-4 "
                  key={category.id} to={`/category/${category.id}`} > 
                {category.name} </Link>)
            }
        </div>
    );
};

export default LeftSideNav;