import React, { Component } from 'react';
import emailjs from 'emailjs-com';


export default class ContactUs extends Component {
  onSubmit(e){
     
    
    e.preventDefault()
    console.log(e.target);
     emailjs.send("service_n9r839f","template_ubs4cbp",{
      name: e.target.name.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    })
    .then(result => {
    alert('Message Sent, I\'ll get back to you shortly', result.text);
    },
    error => {
    alert( 'An error occured, Plese try again',error.text)
    })
    }


  render() {
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>
          <div className="row" style={{justifyContent:'center'}}>
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <form onSubmit = {this.onSubmit} style={{width:'90vh'}}  >
                <input name='name' type='text' placeholder='Name' style={{width:'100%'}} required/>
                <input name='subject' type='text' placeholder='Subject' style={{width:'100%'}} required/>
                <textarea name='message' type='text' placeholder='Your Message' style={{width:'100%'}} required></textarea>
                <button style={{width:'100%'}} type='submit'>Send Message</button>
                </form>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}