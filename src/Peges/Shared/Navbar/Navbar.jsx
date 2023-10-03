import moment from 'moment';
const Navbar = () => {
    return (
        <div className=' text-center space-y-2 mt-3 ' >
          <img className=' mx-auto' src="https://i.ibb.co/19ddqrV/logo.png" alt="" />
          <p>Journalism Without Fear or Favour</p>
          <p className=" text-xl" > {moment().format("dddd, MMMM D- YYYY, h:mm a")} </p>
        </div>
    );
};

export default Navbar;