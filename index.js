const express=require("express");
const app=express();
const PORT=process.env.port | "3000";
app.use(express.urlencoded({extended:true}));
app.post("/bfhl",(req,res)=>{
  let data=req.body;
  if(Array.isArray(data)===false){
    res.send("Invalid form submitted");
  }
  let odd=[];
  let even=[];
  let alphabet=[];
  for(let i=0;i<data.length();i++){
    if(isNaN(data[i])){
      let x=parseInt(data[i]);
      if(x%2===0){
        even.push(x);
      }else{
        odd.push(x);
      }
    }else{
      alphabet.push(data[i].toUpperCase());
    }
  }
  let obj={};
  obj["is_success"]=true;
  obj["user_id"]="gaurav_sharma_10112001";
  obj["roll_number"]="2011981227";
  obj["odd_number"]=odd;
  obj["even_number"]=even;
  obj["alphabet"]=alphabet;
    res.send(obj);
})

app.listen(PORT,()=>{
    console.log("Sever running...")
})
