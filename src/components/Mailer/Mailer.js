import React from 'react';
import emailjs from 'emailjs-com';

const Mailer = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_kiqwmpa', 'template_lwo935u', e.target, 'user_rQcSrqu2UAQtEHCLMDNzr')
        .then(res => {
            console.log(res);
        }).catch(err => console.log(err));
    }

    return (
        <div className="container border" style={{marginTop:"50px", width:"50%", backgroundImage:`url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuw_C9TmXXBy-9q5UZdv3jxslpK9qn_bBmiA&usqp=CAU')`, backgroundPosition:"center", backgroundSize:"cover"}}>
            <h2 style={{marginTop:"30px", textAlign:"center"}}>Contact Form</h2>
            <form className="row" style={{margin:"0 auto"}} onSubmit={sendEmail}>
                <label>name</label>
                <input type="text" name="name" id="" className="form-control" required/>
                <label>Email</label>
                <input type="email" name="user_email" id="" className="form-control" required/>
                <label>Message</label>
                <textarea name="message" rows="4"  className="form-control" required></textarea>
                <input style={{marginTop:"30px"}} type="submit" value="Send"  className="form-control btn btn-primary"/>
            </form>
        </div>
    );
};

export default Mailer;