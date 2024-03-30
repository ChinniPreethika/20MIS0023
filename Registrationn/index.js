const axios=require('axios')
const data=
    {
       "companyName": 'Afford Medical College Technologies',
        "clientID": 'e7cd5296-5e5b-4ea2-be3c-b2b01661f23d',
        "clientSecret": 'iFuVxPsLGykTJNDF',
        "ownerName": 'Gnana Preethika',
        "ownerEmail": 'chinnignanapreetika@gmail.com',
        "rollNo": '20MIS0023'
      }
 ;
axios.post("http://20.244.56.144/test/auth",data)
.then(response=>{
    console.log("API Status:",response.status);
    console.log("API Data:",response.data);

})
.catch(error=>{
    console.error("Error:",error);
})