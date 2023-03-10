//templating engine(ejs)
const express=require('express');

const app=express();

app.set('view engine','ejs');		//setting the view engine to ejs

app.get('/profile/:username',(req,res)=>{
	var data={age:20,occupation:'developer',hobbies:['eating','playing','music']};						
	res.render("profile",{person:req.params.username,data:data});	//rendering the data in profile.ejs in views folder
});
app.get('/contact',(req,res)=>{
	res.render("contact");
})
app.listen(3000,()=>{
	console.log('server running at port 3000');
});