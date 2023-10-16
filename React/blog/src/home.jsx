import {useState} from 'react';

const Home=()=>{

	const [blogs,setBlogs]=useState([
		{body:"i am ayush",title:"ayushname",author:"ayush",id:0},
		{body:"i am hari",title:"hariname",author:"hari",id:1},
		{body:"i am sita",title:"sitaname",author:"sita",id:2}])
		

	
	return(
		<div className="home">
			{blogs.map((blog)=>(
				<div className="blog-preview" key={blog.id}>
				<h1>{blog.title}</h1>
				<p>{blog.body}</p>
				</div>

				))}

		</div>
		);
}

export default Home;