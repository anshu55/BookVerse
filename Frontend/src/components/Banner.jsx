import React from 'react';
import { Link } from "react-router-dom";
import banner from '../../public/newbanner-Photoroom (1).jpg';

function Banner() {
	return (
	  <>
		<div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
		  <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
			<div className="space-y-8">
			  <h1 className="text-2xl md:text-4xl font-bold">
			  "Hello, welcome here to discover something "{" "}
				<span className="text-pink-500">new everyday!!!</span>
			  </h1>
			  <p className="text-sm md:text-xl">
			  Discover a world of stories with BookVerse. Our extensive digital library offers something for everyone, from timeless classics to modern bestsellers. Enjoy seamless reading on any device and connect with a community of book lovers. Start your next literary adventure with us today!
			  </p>
			  
			</div>
			<Link to="/explore">
			<button className="btn mt-6 btn-secondary">Get Started</button>
			</Link>
		  </div>
		  <div className=" order-1 w-full mt-20 md:w-1/2">
			<img
			  src={banner}
			  className="md:w-[550px] md:h-[460px] md:ml-12"
			  alt=""
			/>
		  </div>
		</div>
	  </>
	);
  }
  
  export default Banner;
  
  