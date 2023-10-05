import { Link } from "react-router-dom";
import Header from "../Shared/Header/Header";




const About = () => {
    return (
        <div >
            <Header></Header>
           
             
            <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img   src="https://i.ibb.co/CVpNZpr/379641018-1105186307126902-6981114204164505259-n.jpg" className="max-w-lg rounded-lg shadow-2xl" />
    <div>
      <h1  className="text-5xl font-bold"> MD Jahid </h1>
       <p> <small> full stack developer </small> </p>
      <p className="py-6"> The estimated total pay for a Full Stack Developer is BDT 94,500 per month in the Dhaka, Bangladesh area, with an average salary of BDT 42,500 per month. These numbers represent the median, which is the midpoint of the ranges from our proprietary Total Pay Estimate model and based on salaries collected from our users. The estimated additional pay is BDT 52,000 per month. Additional pay could include cash bonus, commission, tips, and profit sharing. The Most Likely Range represents values that exist within the 25th and 75th percentile of all pay data available for this role. </p>
       <Link to='/' > <button className=" btn shadow-lg" > Back Home </button> </Link>
    </div>
  </div>
</div>

                 

           
        </div>
    );
};

export default About;