const formDetails=document.getElementById('details')
formDetails.addEventListener("submit", (e)=>{
  e.preventDefault();
  

  const formData= new FormData(formDetails)

  const res=Object.fromEntries(formData)
  console.log(res.email)
var email=res.email
var username=res.firstName
console.log(email)
// fetch('https://comm-engine.ks-tech.in/api/v1',{
//   method:'POST',
//   headers:{
//       'Content-Type':'application/json',
//   },
//   body:JSON.stringify(res)
  
// }).then(res=>res.json()).catch(error=>console.log(error))




  fetch('https://engine-bfkj.onrender.com/api',{
   method:"POST",
   headers:{
     'Content-Type': 'application/json',
   },
   body:JSON.stringify(res),
 })
 .then(res=>res.json())
 .then(dataRespond=> console.log(dataRespond))
.then(()=>{
    fetch('https://engine-bfkj.onrender.com/api/v1',{
    method:'POST',
    headers:{
        'Content-Type':'application/json',
    },
    body:JSON.stringify(res)
    
}).then(res=>res.json()).catch(error=>console.log(error))

 })
 .catch(error=> console.log(error))



})
