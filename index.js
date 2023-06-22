function sendEmail(){
    var params={
     email : document.getElementById('email').value,
     password : document.getElementById('password').value
    }
    const serviceId="service_4d5a7o1";
const templateId="template_dqvyida";
emailjs.send(serviceId,templateId,params).then((res)=>{
        document.getElementById('email').value="";
        document.getElementById('password').value="";
        console.log(res);

    }
)
.catch(err=>console.log(err));
}
