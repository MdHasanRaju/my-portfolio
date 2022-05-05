import React from 'react';
import emailjs from 'emailjs-com';

const Mailer = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_kiqwmpa', 'template_lwo935u', e.target, 'user_rQcSrqu2UAQtEHCLMDNzr')
        .then(res => {
            console.log(res);
            if (res) {
                alert('Thanks For your Message')
            }
        }).catch(err => console.log(err));
    }

    return (
        <div className="container border text-light" style={{marginTop:"100px", padding:"20px 10px", minWidth:"350px", maxWidth:"50%", backgroundImage:`url('https://t4.ftcdn.net/jpg/02/69/27/55/360_F_269275503_fL3Dx8hgvCDgrnuvbm8XLPHJ461QIM4o.jpg')`, backgroundPosition:"center", backgroundSize:"cover"}}>
            <h2 style={{marginTop:"30px", textAlign:"center"}}>Contact Form</h2>
            <form className="row" style={{margin:"0 auto"}} onSubmit={sendEmail}>
                <label>Name</label>
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