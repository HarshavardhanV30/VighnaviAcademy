import React from'react';
import{Link}from'react-router-dom';
import logo from'../assets/logovighnaviacademy.png';

export default function Footer(){
return(
<>

<style>{`
.footer-social:hover{background:#00D2C4!important;color:#000!important;transform:translateY(-3px) scale(1.05);box-shadow:0 0 16px rgba(0,210,196,.35)}
.footer-link:hover{color:#00D2C4!important;padding-left:7px}
.footer-course:hover{color:#00D2C4!important;padding-left:7px}
.footer-contact:hover{color:#00D2C4!important}
.footer-cta:hover{background:#fff!important;color:#031014!important;transform:translateY(-2px)}
.footer-phone:hover{color:#00D2C4!important}
@media(max-width:800px){
.footer-main-grid{grid-template-columns:1fr 1fr!important}
.footer-brand{grid-column:span 2!important}
}
@media(max-width:520px){
.footer-main-grid{grid-template-columns:1fr!important}
.footer-brand{grid-column:span 1!important}
.footer-bottom-row{align-items:flex-start!important;text-align:left!important}
.footer-socials{justify-content:flex-start!important}
}
`}</style>

<footer style={{background:'linear-gradient(135deg,#020812 0%,#04121c 45%,#062a2b 100%)',color:'#fff',borderTop:'1px solid rgba(0,210,196,.16)',padding:'72px 28px 32px',fontFamily:'Arial,sans-serif',position:'relative',overflow:'hidden'}}>

<div style={{position:'absolute',width:'420px',height:'420px',borderRadius:'50%',background:'rgba(0,210,196,.05)',filter:'blur(80px)',right:'-180px',top:'-180px',pointerEvents:'none'}}></div>

<div style={{position:'absolute',width:'300px',height:'300px',borderRadius:'50%',background:'rgba(121,40,202,.04)',filter:'blur(70px)',left:'-150px',bottom:'-150px',pointerEvents:'none'}}></div>

<div className="footer-main-grid" style={{maxWidth:'1250px',margin:'0 auto',display:'grid',gridTemplateColumns:'2fr 1fr 1fr 1.4fr',gap:'55px',marginBottom:'55px',position:'relative',zIndex:1}}>

<div className="footer-brand" style={{gridColumn:'span 1'}}>

<Link to="/" style={{display:'inline-flex',alignItems:'center',textDecoration:'none',marginBottom:'22px',width:'100%',maxWidth:'300px'}}>

<div style={{width:'220px',height:'80px',display:'flex',alignItems:'center',justifyContent:'center',overflow:'hidden',position:'relative',flexShrink:0,background:'#030303'}}>

<img src={logo} alt="Vighnavi Academy Logo" style={{width:'220px',height:'220px',maxWidth:'none',maxHeight:'none',objectFit:'cover',objectPosition:'center 43%',display:'block',position:'absolute',left:'50%',top:'50%',transform:'translate(-50%,-50%)'}}/>

</div>

</Link>

<p style={{color:'#00D2C4',fontSize:'21px',lineHeight:'1.5',maxWidth:'480px',margin:'0 0 14px',fontWeight:'800',letterSpacing:'.3px'}}>
<strong>Unlock Infinity Capabilities</strong>
</p>

<p style={{color:'#c8d1d5',fontSize:'17px',lineHeight:'1.75',maxWidth:'480px',margin:'0 0 27px'}}>
Empowering learners to become skilled, confident, and industry-ready developers through quality education, expert mentorship, and practical learning.
</p>

<div className="footer-socials" style={{display:'flex',gap:'13px',alignItems:'center'}}>

{[['f','Facebook'],['in','LinkedIn'],['◎','Instagram'],['▶','YouTube']].map(([icon,label],idx)=><a key={idx} href="#" aria-label={label} className="footer-social" style={{width:'46px',height:'46px',borderRadius:'50%',background:'rgba(255,255,255,.07)',border:'1px solid rgba(255,255,255,.1)',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',textDecoration:'none',fontSize:idx===1?'14px':'18px',fontWeight:'700',transition:'all .3s ease'}}>{icon}</a>)}

</div>
</div>

<div>

<h4 style={{fontSize:'19px',fontWeight:'800',margin:'0 0 23px',color:'#fff',letterSpacing:'.5px'}}>Quick Links</h4>

<ul style={{listStyle:'none',padding:0,margin:0}}>

{[['Home','/'],['About Us','/about'],['Courses','/courses'],['Testimonials','/contact'],['Contact Us','/contact']].map(([name,path],idx)=><li key={idx} style={{marginBottom:'15px'}}><Link to={path} className="footer-link" style={{color:'#aebbc0',textDecoration:'none',fontSize:'16px',fontWeight:'500',transition:'all .25s ease',display:'inline-block'}}>{name}</Link></li>)}

</ul>

</div>

<div>

<h4 style={{fontSize:'19px',fontWeight:'800',margin:'0 0 23px',color:'#fff',letterSpacing:'.5px'}}>Our Courses</h4>

<ul style={{listStyle:'none',padding:0,margin:0}}>

{['Java Development','Python Development','Java Full Stack','Python Full Stack','MERN Stack','Data Analyst','Generative AI'].map((course,idx)=><li key={idx} style={{marginBottom:'13px'}}><Link to="/courses" className="footer-course" style={{color:'#aebbc0',textDecoration:'none',fontSize:'15px',fontWeight:'500',transition:'all .25s ease',display:'inline-block'}}>{course}</Link></li>)}

</ul>

</div>

<div>

<h4 style={{fontSize:'19px',fontWeight:'800',margin:'0 0 23px',color:'#fff',letterSpacing:'.5px'}}>Get In Touch</h4>

<div style={{display:'flex',flexDirection:'column',gap:'18px'}}>

<a href="tel:+918688110258" className="footer-contact footer-phone" style={{display:'flex',gap:'12px',alignItems:'flex-start',color:'#c8d1d5',textDecoration:'none',fontSize:'15px',lineHeight:'1.5',transition:'all .25s ease'}}>

<span style={{fontSize:'21px'}}>☎</span>

</a>

<a href="tel:+919390642779" className="footer-contact footer-phone" style={{display:'flex',gap:'12px',alignItems:'flex-start',color:'#c8d1d5',textDecoration:'none',fontSize:'15px',lineHeight:'1.5',transition:'all .25s ease'}}>

<span style={{fontSize:'21px'}}>☎</span>

<span>
<strong style={{display:'block',color:'#fff',fontSize:'16px',marginBottom:'2px'}}>Phone 2</strong>
+91 9390642779
</span>

</a>

<a href="mailto:vighnaviacademy@gmail.com" className="footer-contact" style={{display:'flex',gap:'12px',alignItems:'flex-start',color:'#c8d1d5',textDecoration:'none',fontSize:'15px',lineHeight:'1.5',transition:'all .25s ease'}}>

<span style={{fontSize:'21px'}}>✉</span>

<span>
<strong style={{display:'block',color:'#fff',fontSize:'16px',marginBottom:'2px'}}>Email</strong>
vighnaviacademy@gmail.com
</span>

</a>

<div style={{display:'flex',gap:'12px',alignItems:'flex-start',color:'#c8d1d5',fontSize:'15px',lineHeight:'1.5'}}>

<span style={{fontSize:'21px'}}>⌖</span>

<span>
<strong style={{display:'block',color:'#fff',fontSize:'16px',marginBottom:'2px'}}>Location</strong>
India • Online Training
</span>

</div>

</div>

<Link to="/contact" className="footer-cta" style={{display:'inline-flex',alignItems:'center',justifyContent:'center',gap:'10px',marginTop:'25px',padding:'13px 21px',borderRadius:'28px',background:'#00D2C4',color:'#031014',textDecoration:'none',fontSize:'15px',fontWeight:'800',transition:'all .3s ease'}}>Start Learning&nbsp; →</Link>

</div>

</div>

<div className="footer-bottom-row" style={{maxWidth:'1250px',margin:'0 auto',paddingTop:'27px',borderTop:'1px solid rgba(255,255,255,.1)',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'20px',fontSize:'14px',color:'#87969b',position:'relative',zIndex:1}}>

<div style={{lineHeight:'1.7'}}>© 2026 <span style={{color:'#00D2C4',fontWeight:'700'}}>Vighnavi Academy</span>. All Rights Reserved.</div>

<div style={{display:'flex',gap:'25px',alignItems:'center',flexWrap:'wrap'}}>

<Link to="/privacy" style={{color:'#87969b',textDecoration:'none',fontSize:'14px'}}>Privacy Policy</Link>

<span style={{color:'#39494e'}}>|</span>

<Link to="/terms" style={{color:'#87969b',textDecoration:'none',fontSize:'14px'}}>Terms & Conditions</Link>

</div>

</div>

</footer>
</>
);
}
