import React,{useState}from'react';
import Header from'../components/Header';
import Footer from'../components/Footer';

const Contact=()=>{
const[form,setForm]=useState({name:'',phone:'',email:'',choice:'',message:''});
const[status,setStatus]=useState('idle');
const[openFaq,setOpenFaq]=useState(null);

const faqs=[
['How do I join the online classes?','Choose your course, complete the enrolment process, and our team will share your class schedule and joining details.'],
['Are the classes live or recorded?','Our courses include live interactive classes along with learning resources and recordings where applicable.'],
['Will I get a certificate after the course?','Students who successfully complete the required course work can receive a course completion certificate.'],
['Do you provide placement support?','We provide placement guidance, interview preparation, resume support and career assistance.'],
['What if I miss a live class?','You can contact our support team for the available recording or alternate learning arrangement.'],
['How can I make the payment?','Our team will provide the available payment options and instructions during enrolment.']
];

const handleChange=e=>setForm({...form,[e.target.name]:e.target.value});

const handleSubmit=async e=>{
e.preventDefault();
setStatus('sending');
const body=new FormData();
body.append('access_key','a70b7dfc9b3b49499bcfb8c178f936ae');
body.append('name',form.name);
body.append('phone',form.phone);
body.append('email',form.email);
body.append('choice',form.choice);
body.append('message',form.message);
try{
const response=await fetch('https://splitforms.com/api/submit',{method:'POST',headers:{Accept:'application/json'},body});
if(!response.ok)throw new Error('Submission failed');
setForm({name:'',phone:'',email:'',choice:'',message:''});
setStatus('success');
setTimeout(()=>setStatus('idle'),6000);
}catch{
setStatus('error');
}
};

return(
<>
<style>{`
*{box-sizing:border-box}
.contact-page{width:100%;font-family:Inter,Arial,sans-serif;color:#183d44;background:#fff;overflow:hidden}
.contact-page button,.contact-page input,.contact-page select,.contact-page textarea{font-family:inherit}
.contact-hero{position:relative;min-height:470px;background:linear-gradient(90deg,#effaf8 0%,#eef9f7 38%,rgba(230,246,243,.5) 64%,rgba(0,67,70,.2) 100%),url("https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1800&q=90") center/cover no-repeat}
.contact-hero:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(239,249,247,.99) 0%,rgba(239,249,247,.94) 39%,rgba(239,249,247,.42) 68%,rgba(0,50,52,.16) 100%)}
.hero-container{position:relative;z-index:2;width:min(1180px,calc(100% - 48px));min-height:470px;margin:auto;display:flex;align-items:center}
.hero-content{width:60%;padding:45px 0}
.hero-label{font-size:12px;letter-spacing:3px;font-weight:900;color:#075b5d;margin-bottom:13px}
.hero-title{font-family:Georgia,"Times New Roman",serif;font-size:57px;line-height:.98;letter-spacing:-1.8px;color:#103b42;margin:0}
.hero-title span{color:#bd8c27}
.hero-description{max-width:570px;color:#455c62;font-size:15px;line-height:1.6;margin:19px 0 25px}
.hero-features{display:grid;grid-template-columns:repeat(3,1fr);max-width:540px}
.hero-feature{display:flex;align-items:center;gap:10px;border-right:1px solid #cbdedb;padding:5px 17px 5px 0;margin-right:17px}
.hero-feature:last-child{border:0}
.hero-feature-icon{font-size:26px;color:#075f60}
.hero-feature-text{font-size:12px;line-height:1.35;color:#29474d;font-weight:700}
.hero-question{position:absolute;z-index:3;left:47%;top:63px;color:#153f45;font-family:"Comic Sans MS",cursive;font-size:21px;line-height:1.05;font-style:italic;transform:rotate(-7deg);text-align:center}
.hero-question:after{content:"";display:block;width:78px;height:3px;background:#c99a2d;margin:8px auto;transform:rotate(-8deg)}
.hero-smile{color:#d9a83b;font-size:27px}
.hero-contact-list{position:absolute;z-index:3;right:0;top:25px;width:195px}
.hero-contact-item{height:48px;margin-bottom:7px;border-radius:10px;background:rgba(247,252,251,.94);display:flex;align-items:center;gap:11px;padding:0 12px;color:#29464c;font-size:11px;font-weight:700;box-shadow:0 5px 16px rgba(0,0,0,.09);transition:.25s}
.hero-contact-item:hover{transform:translateX(-6px);box-shadow:0 8px 22px rgba(7,95,96,.18)}
.hero-contact-icon{width:30px;height:30px;border-radius:8px;display:flex;align-items:center;justify-content:center;background:#075e60;color:#fff;font-size:16px;flex-shrink:0}
.hero-note{position:absolute;z-index:4;right:0;bottom:25px;color:#17484d;font-family:"Comic Sans MS",cursive;font-size:18px;line-height:1.05;text-align:center;font-style:italic;transform:rotate(-5deg)}
.hero-note span{color:#e7b94c;font-size:27px}
.contact-main{padding:30px 0 0}
.container{width:min(1180px,calc(100% - 48px));margin:auto}
.contact-grid{display:grid;grid-template-columns:1fr 1.15fr;gap:22px;align-items:start}
.left-column{display:flex;flex-direction:column;gap:13px}
.contact-card{border:1px solid #dbe8e7;border-radius:17px;background:#fff;padding:23px;box-shadow:0 10px 32px rgba(9,65,68,.08);position:relative;overflow:hidden}
.contact-card:before{content:"";position:absolute;top:0;left:0;width:100%;height:5px;background:#075fca}
.card-heading{display:flex;align-items:center;gap:13px;margin-bottom:18px}
.card-heading-icon{width:52px;height:52px;border-radius:15px;background:#075fca;color:#fff;display:flex;align-items:center;justify-content:center;font-size:24px;box-shadow:0 7px 18px rgba(7,95,202,.25)}
.card-title{font-family:Georgia,"Times New Roman",serif;font-size:23px;color:#143e45;margin:0}
.card-subtitle{color:#627177;font-size:12px;margin:4px 0 0;line-height:1.45}
.form-group{margin-bottom:11px;position:relative}
.input-icon{position:absolute;left:14px;top:50%;transform:translateY(-50%);font-size:15px;color:#075fca;z-index:1}
.contact-input,.contact-select,.contact-textarea{width:100%;border:1.5px solid #d4dfe1;border-radius:11px;background:#fff;color:#304950;font-size:12px;outline:none;transition:.25s}
.contact-input,.contact-select{height:47px;padding:0 14px 0 42px}
.contact-textarea{height:120px;padding:13px 14px 13px 42px;resize:vertical;min-height:100px}
.contact-input:focus,.contact-select:focus,.contact-textarea:focus{border-color:#075fca;box-shadow:0 0 0 4px rgba(7,95,202,.09);transform:translateY(-1px)}
.phone-row{display:grid;grid-template-columns:128px 1fr;gap:0}
.phone-code{border:1.5px solid #d4dfe1;border-radius:11px 0 0 11px;height:47px;display:flex;align-items:center;padding:0 10px;gap:5px;font-size:11px;background:#f9fcff}
.phone-number{border-radius:0 11px 11px 0!important;padding-left:15px!important}
.send-button{width:100%;height:49px;border:0;border-radius:25px;background:linear-gradient(135deg,#075fca,#064b9f);color:#fff;font-size:13px;font-weight:900;cursor:pointer;margin-top:7px;transition:.25s;box-shadow:0 8px 18px rgba(7,95,202,.2)}
.send-button:hover{transform:translateY(-2px);box-shadow:0 12px 24px rgba(7,95,202,.3)}
.send-button:disabled{opacity:.65;cursor:not-allowed;transform:none}
.success-message,.error-message{margin-top:11px;padding:11px 13px;border-radius:9px;font-size:11px;text-align:center;font-weight:700}
.success-message{background:#eaf8f4;color:#08706d;border:1px solid #bde9dd}
.error-message{background:#fff1f1;color:#c0392b;border:1px solid #f0caca}
.form-trust{display:flex;justify-content:center;gap:16px;margin-top:13px;color:#758286;font-size:9px}
.form-trust span{display:flex;align-items:center;gap:4px}
.right-column{display:flex;flex-direction:column;gap:13px}
.info-card{background:linear-gradient(135deg,#f0faf8,#e5f5f3);border-radius:17px;padding:20px 21px;min-height:280px;border:1px solid #d7ebe8;box-shadow:0 9px 28px rgba(9,65,68,.07)}
.info-heading{display:flex;align-items:center;gap:11px;margin-bottom:4px}
.info-heading-icon{width:50px;height:50px;border-radius:14px;background:#075fca;color:#fff;display:flex;align-items:center;justify-content:center;font-size:23px;box-shadow:0 7px 18px rgba(7,95,202,.2)}
.info-row{display:flex;align-items:center;gap:13px;margin:14px 0;padding:10px;border-radius:12px;transition:.25s}
.info-row:hover{background:#fff;transform:translateX(4px);box-shadow:0 6px 18px rgba(7,95,202,.08)}
.info-icon{width:43px;height:43px;border-radius:12px;background:#075fca;color:#fff;display:flex;align-items:center;justify-content:center;font-size:19px;flex-shrink:0}
.info-main{color:#143f46;font-size:13px;font-weight:900}
.info-main a{color:#143f46;text-decoration:none}
.info-detail{color:#65747a;font-size:10px;line-height:1.45;margin-top:3px}
.quick-card{border:1px solid #dce7e6;border-radius:17px;padding:19px 21px;background:#fff;box-shadow:0 8px 25px rgba(9,65,68,.06)}
.quick-heading{display:flex;align-items:center;gap:11px;margin-bottom:12px}
.quick-icon{width:49px;height:49px;border-radius:14px;background:#075fca;color:#fff;display:flex;align-items:center;justify-content:center;font-size:22px}
.quick-title{font-family:Georgia,"Times New Roman",serif;color:#143e45;font-size:21px;margin:0}
.quick-subtitle{font-size:10px;color:#68767b;margin-top:3px}
.quick-grid{display:grid;grid-template-columns:1fr 1fr;gap:9px}
.quick-item{border:1px solid #dbe5e4;border-radius:11px;padding:11px;display:flex;gap:9px;align-items:center;transition:.25s}
.quick-item:hover{border-color:#075fca;transform:translateY(-3px);box-shadow:0 8px 18px rgba(7,95,202,.1)}
.quick-item-icon{font-size:20px;color:#075fca}
.quick-item-title{font-size:11px;font-weight:900;color:#183e44}
.quick-item-text{font-size:9px;color:#6a777c;margin-top:2px}
.support-banner{position:relative;min-height:155px;border-radius:15px;overflow:hidden;margin-top:22px;background:#075d5e url("https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85") center/cover no-repeat;box-shadow:0 12px 30px rgba(4,79,80,.15)}
.support-banner:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,79,80,.96),rgba(0,79,80,.82),rgba(0,79,80,.48))}
.support-content{position:relative;z-index:2;display:flex;align-items:center;min-height:155px;padding:20px 25px;color:#fff}
.support-icon{width:57px;height:57px;border-radius:16px;background:#fff;color:#075fca;display:flex;align-items:center;justify-content:center;font-size:27px;margin-right:15px;flex-shrink:0}
.support-title{font-family:Georgia,"Times New Roman",serif;font-size:22px;line-height:1.05;margin:0}
.support-text{font-size:10px;margin-top:7px;max-width:380px;line-height:1.5;color:#e6f4f3}
.support-stats{margin-left:auto;display:grid;grid-template-columns:repeat(3,1fr);background:rgba(3,67,68,.82);border-radius:11px;min-width:385px}
.support-stat{text-align:center;padding:12px 14px;border-right:1px solid rgba(255,255,255,.22)}
.support-stat:last-child{border:0}
.support-stat-icon{font-size:20px;color:#f1c75c}
.support-stat-number{font-size:16px;font-weight:900;margin-top:2px}
.support-stat-text{font-size:8px;color:#e3efee;margin-top:2px}
.support-note{position:absolute;z-index:3;right:16px;top:14px;color:#fff;font-family:"Comic Sans MS",cursive;font-size:16px;line-height:1.02;font-style:italic;transform:rotate(-5deg)}
.support-note span{color:#f0c355;font-size:22px}
.faq-section{padding:25px 0 32px}
.faq-header{display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:13px}
.faq-label{font-size:11px;font-weight:900;letter-spacing:2.5px;color:#075fca}
.faq-title{font-family:Georgia,"Times New Roman",serif;font-size:28px;color:#143e45;margin:3px 0 0}
.faq-title:after{content:"";display:inline-block;width:47px;height:3px;background:#075fca;margin:0 0 6px 12px;border-radius:3px}
.faq-right{font-size:11px;color:#53666b}
.faq-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px 17px}
.faq-item{border:1px solid #dce6e5;border-radius:10px;background:#fff;overflow:hidden;transition:.25s}
.faq-item:hover{border-color:#075fca;box-shadow:0 6px 18px rgba(7,95,202,.08)}
.faq-question{width:100%;min-height:43px;border:0;background:#fff;display:flex;justify-content:space-between;align-items:center;text-align:left;padding:0 14px;color:#314c52;font-size:15px;font-weight:700;cursor:pointer}
.faq-plus{font-size:19px;color:#075fca;font-weight:500}
.faq-answer{padding:0 14px 12px;color:#68777b;font-size:14px;line-height:1.5}
@media(max-width:1000px){
.hero-content{width:63%}
.hero-question{left:49%}
.contact-grid{grid-template-columns:1fr}
.support-stats{min-width:350px}
}
@media(max-width:700px){
.contact-hero{min-height:620px}
.hero-container{width:calc(100% - 30px);min-height:620px;align-items:flex-start}
.hero-content{width:100%;padding-top:48px}
.hero-title{font-size:43px}
.hero-description{font-size:14px}
.hero-question,.hero-contact-list,.hero-note{display:none}
.hero-features{max-width:100%;grid-template-columns:repeat(3,1fr)}
.hero-feature{padding-right:8px;margin-right:8px}
.container{width:calc(100% - 30px)}
.contact-grid{gap:13px}
.contact-card{padding:17px}
.phone-row{grid-template-columns:112px 1fr}
.support-banner{min-height:310px}
.support-content{min-height:310px;display:block;padding:20px}
.support-icon{margin-bottom:10px}
.support-stats{min-width:0;width:100%;margin:18px 0 0}
.support-note{display:none}
.faq-header{display:block}
.faq-right{margin-top:8px}
.faq-grid{grid-template-columns:1fr}
}
@media(max-width:430px){
.hero-title{font-size:38px}
.hero-features{grid-template-columns:1fr}
.hero-feature{border-right:0;border-bottom:1px solid #cbdedb;padding:8px 0;margin:0}
.hero-feature:last-child{border-bottom:0}
.phone-row{grid-template-columns:100px 1fr}
.phone-code{font-size:9px;padding:0 6px}
.quick-grid{grid-template-columns:1fr}
.support-stats{grid-template-columns:1fr}
.support-stat{border-right:0;border-bottom:1px solid rgba(255,255,255,.2)}
.support-stat:last-child{border-bottom:0}
}
`}</style>
<Header/>
<main className="contact-page">
<section className="contact-hero">
<div className="hero-container">
<div className="hero-content">
<div className="hero-label">CONTACT US</div>
<h1 className="hero-title">We’re Here<br/>to <span>Help You!</span></h1>
<p className="hero-description">Have questions about our online courses, batches, payments, or certifications? Our team is ready to assist you. Get in touch and take the next step towards your brighter future with Vighnavi Academy.</p>
<div className="hero-features">
<div className="hero-feature"><div className="hero-feature-icon">♧</div><div className="hero-feature-text">Quick<br/>Response</div></div>
<div className="hero-feature"><div className="hero-feature-icon">♟</div><div className="hero-feature-text">Friendly<br/>Support</div></div>
<div className="hero-feature"><div className="hero-feature-icon">◷</div><div className="hero-feature-text">Guidance<br/>at Every Step</div></div>
</div>
</div>
<div className="hero-question">Your<br/>Questions<br/>Our Priority<div className="hero-smile">☺</div></div>
<div className="hero-contact-list">
{[['🎓','Course Guidance'],['▣','Batch Details'],['◆','Fee & Offers'],['⚙','Technical Support'],['▤','Certifications'],['●','General Queries']].map((x,i)=><div className="hero-contact-item" key={i}><div className="hero-contact-icon">{x[0]}</div>{x[1]}</div>)}
</div>
<div className="hero-note">We’re<br/>Just a Message<br/>Away! <span>♡</span></div>
</div>
</section>

<section className="contact-main">
<div className="container contact-grid">

<div className="left-column">
<div className="info-card">
<div className="info-heading"><div className="info-heading-icon">⌖</div><div><h2 className="card-title">Get in Touch</h2><p className="card-subtitle">Reach out to us through any of the following channels.</p></div></div>
<div className="info-row"><div className="info-icon">☎</div><div><div className="info-main"><a href="tel:+919390642779">+91 9390642779 / 8688110258</a></div><div className="info-detail">Mon - Sat, 9:00 AM - 7:00 PM<br/>Online Support Only</div></div></div>
<div className="info-row"><div className="info-icon">✉</div><div><div className="info-main"><a href="mailto:vighnaviacademy@gmail.com">vighnaviacademy@gmail.com</a></div><div className="info-detail">We reply within 24 hours</div></div></div>
<div className="info-row"><div className="info-icon">●</div><div><div className="info-main">Online Classes Only</div><div className="info-detail">Live interactive online training<br/>Learn from anywhere, anytime.</div></div></div>
</div>

<div className="quick-card">
<div className="quick-heading"><div className="quick-icon">💡</div><div><h2 className="quick-title">Quick Help Topics</h2><div className="quick-subtitle">Find quick answers or reach the right team faster.</div></div></div>
<div className="quick-grid">
{[['📖','Course Information','Know about our courses'],['▣','Batch Schedule','Upcoming batches'],['◆','Fees & Payment','Fee details & offers'],['▤','Certifications','Get certified']].map((x,i)=><div className="quick-item" key={i}><div className="quick-item-icon">{x[0]}</div><div><div className="quick-item-title">{x[1]}</div><div className="quick-item-text">{x[2]}</div></div></div>)}
</div>
</div>
</div>

<div className="right-column">
<div className="contact-card">
<div className="card-heading"><div className="card-heading-icon">✉</div><div><h2 className="card-title">Send Us a Message</h2><p className="card-subtitle">Tell us what you are looking for and our team will contact you shortly.</p></div></div>
<form onSubmit={handleSubmit}>
<div className="form-group"><span className="input-icon">♟</span><input className="contact-input" type="text" name="name" value={form.name} onChange={handleChange} placeholder="Full Name *" required/></div>
<div className="form-group"><span className="input-icon">☎</span><input className="contact-input" type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number *" pattern="[0-9]{10}" title="Please enter a valid 10 digit phone number" required/></div>
<div className="form-group"><span className="input-icon">✉</span><input className="contact-input" type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email Address *" required/></div>
<div className="form-group"><span className="input-icon">▤</span><select className="contact-select" name="choice" value={form.choice} onChange={handleChange} required><option value="">What are you interested in? *</option><option>1 : 1 mentorship</option><option>Python With Sql</option><option>Java With Sql</option><option>Java Development</option><option>Python Development</option><option>Java Full Stack Development</option><option>Python Full Stack Development</option><option>MERN Stack Development</option><option>Data Analyst</option><option>Generative AI</option><option>Course Information</option><option>Batch Schedule</option><option>Fees & Payment</option><option>Certification</option><option>Technical Support</option><option>General Query</option></select></div>
<div className="form-group"><span className="input-icon" style={{top:'23px'}}>▰</span><textarea className="contact-textarea" name="message" value={form.message} onChange={handleChange} placeholder="Tell us what you want to learn or ask us your question *" required/></div>
<button className="send-button" type="submit" disabled={status==='sending'}>{status==='sending'?'Sending Your Message...':'Send Message   →'}</button>
{status==='success'&&<div className="success-message">✓ Thank you! Your message has been sent successfully. Our team will contact you shortly.</div>}
{status==='error'&&<div className="error-message">⚠ Something went wrong. Please try again or contact us directly.</div>}
<div className="form-trust"><span>🔒 Secure Enquiry</span><span>⚡ Quick Response</span><span>✓ Student Support</span></div>
</form>
</div>
</div>
</div>

<div className="container">
<div className="support-banner">
<div className="support-content">
<div className="support-icon">♧</div>
<div><h2 className="support-title">Live Support for<br/>Your Learning Journey</h2><p className="support-text">Our support team is always ready to help you with course selection, technical issues, or any other queries.</p></div>
<div className="support-stats">
<div className="support-stat"><div className="support-stat-icon">♟</div><div className="support-stat-number">100%</div><div className="support-stat-text">Student Support</div></div>
<div className="support-stat"><div className="support-stat-icon">◷</div><div className="support-stat-number">Quick</div><div className="support-stat-text">Response</div></div>
<div className="support-stat"><div className="support-stat-icon">♥</div><div className="support-stat-number">Dedicated</div><div className="support-stat-text">Guidance</div></div>
</div>

</div>
</div>
</div>
</section>

<section className="faq-section">
<div className="container">
<div className="faq-header">
<div><div className="faq-label">FAQ</div><h2 className="faq-title">Common Questions</h2></div>
<div className="faq-right">Still have a question? Send us a message! →</div>
</div>
<div className="faq-grid">
{faqs.map((faq,i)=><div className="faq-item" key={i}><button type="button" className="faq-question" onClick={()=>setOpenFaq(openFaq===i?null:i)}><span>{faq[0]}</span><span className="faq-plus">{openFaq===i?'−':'+'}</span></button>{openFaq===i&&<div className="faq-answer">{faq[1]}</div>}</div>)}
</div>
</div>
</section>
</main>
<Footer/>
</>
);
};
export default Contact;