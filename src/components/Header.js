import React,{useState,useEffect}from'react';
import{Link}from'react-router-dom';
import logo from '../assets/logovighnaviacademy.png';

export default function Header(){
const[isMobile,setIsMobile]=useState(false);
useEffect(()=>{
const handleResize=()=>setIsMobile(window.innerWidth<=768);
handleResize();
window.addEventListener('resize',handleResize);
return()=>window.removeEventListener('resize',handleResize);
},[]);
return(
<>
<style>{`
.nav-link:hover{color:#00D2C4!important;transform:translateY(-2px)}
.cta-button:hover{background-color:#00b3a6!important;box-shadow:0 0 18px rgba(0,210,196,.5);transform:translateY(-2px) scale(1.03)}
.logo-brand:hover{color:#00D2C4!important}
.logo-image{transition:all .3s ease}
.logo-image:hover{transform:scale(1.03)}
.logo-image img{image-rendering:auto;-webkit-font-smoothing:antialiased}
`}</style>
<nav style={{backgroundColor:'#030812',borderBottom:'1px solid rgba(255,255,255,.08)',padding:isMobile?'6px 18px':'6px 42px',display:'flex',justifyContent:'space-between',alignItems:'center',position:'sticky',top:0,zIndex:50,width:'100%',boxSizing:'border-box',minHeight:isMobile?'72px':'92px',overflow:'hidden'}}>
<Link to="/" style={{display:'flex',alignItems:'center',gap:isMobile?'10px':'15px',textDecoration:'none',flexShrink:0}}>
<div className="logo-image" style={{width:isMobile?'180px':'300px',height:isMobile?'70px':'80px',display:'flex',alignItems:'center',justifyContent:'center',overflow:'hidden',flexShrink:0,position:'relative',backgroundColor:'#030812'}}>
<img src={logo} alt="Vighnavi Academy Logo" style={{width:isMobile?'330px':'210px',height:isMobile?'330px':'210px',maxWidth:'none',maxHeight:'none',objectFit:'cover',objectPosition:'center 30%',display:'block',position:'absolute',left:'30%',top:'50%',transform:'translate(-50%,-50%)',transformOrigin:'center'}}/>
</div>
</Link>
{!isMobile&&(
<div style={{display:'flex',alignItems:'center',gap:'38px',fontSize:'17px',fontWeight:'600'}}>
<Link to="/" className="nav-link" style={{color:'#d1d5db',textDecoration:'none',transition:'all .2s ease'}}>Home</Link>
<Link to="/courses" className="nav-link" style={{color:'#d1d5db',textDecoration:'none',transition:'all .2s ease'}}>Courses</Link>
<Link to="/about" className="nav-link" style={{color:'#d1d5db',textDecoration:'none',transition:'all .2s ease'}}>About Us</Link>
<Link to="/contact" className="nav-link" style={{color:'#d1d5db',textDecoration:'none',transition:'all .2s ease'}}>Contact Us</Link>
</div>
)}
<div>
<Link to="/contact" className="cta-button" style={{backgroundColor:'#00D2C4',color:'#000',padding:isMobile?'11px 17px':'13px 25px',borderRadius:'28px',textDecoration:'none',fontWeight:'700',fontSize:isMobile?'13px':'16px',display:'inline-block',transition:'all .3s ease',whiteSpace:'nowrap',boxShadow:'0 4px 12px rgba(0,210,196,.18)'}}>Book Consultation&nbsp; →</Link>
</div>
</nav>
</>
);
}
