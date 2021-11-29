import React from 'react';

const Mailer = () => {
    return (
        <div className="container border" style={{marginTop:"50px", width:"50%", backgroundImage:`url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuw_C9TmXXBy-9q5UZdv3jxslpK9qn_bBmiA&usqp=CAU')`, backgroundPosition:"center", backgroundSize:"cover"}}>
            <h2 style={{marginTop:"30px"}}>Contact Form</h2>
            <form className="row" style={{margin:"25px 85px 75px 100px"}}>
                <label>Name</label>
                <input type="text" name="name" id="" className="form-control"/>
                <label>Email</label>
                <input type="email" name="user_email" id="" className="form-control" />
                <label>Message</label>
                <textarea name="message" rows="4"  className="form-control"></textarea>
                <input style={{marginTop:"30px"}} type="submit" value="Send"  className="form-control btn btn-primary"/>
            </form>
        </div>
    );
};

export default Mailer;