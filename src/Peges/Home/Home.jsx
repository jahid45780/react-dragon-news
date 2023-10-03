import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";


const Home = () => {
    return (
        <div>
            
            
            <Navbar></Navbar>
            <BreakingNews></BreakingNews>
            <Header></Header>
       
            <div className=" grid grid-cols-1 md:grid-cols-4 gap-6" >
                <div> 
                    <LeftSideNav></LeftSideNav>
                     </div>
                <div className=" md:col-span-2" >
                    <h2> news come in soon </h2>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;