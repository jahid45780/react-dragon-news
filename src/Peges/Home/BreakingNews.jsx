import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className=" flex gap-3 bg-gray-300 py-2" >
       <button className=" btn btn-secondary" >Breaking News</button>    
       <Marquee pauseOnHover={true} speed={80} >
        <Link className=" mr-4" > Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...  </Link>
        <Link>Donald in frame to remain as captain as focus turns to Ryder Cup 2025</Link>
      </Marquee> 
        </div>
    );
};

export default BreakingNews;