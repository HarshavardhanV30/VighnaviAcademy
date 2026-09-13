import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
const styles={
page:{fontFamily:"Arial,Helvetica,sans-serif",color:"#123f3d",background:"#fff",overflow:"hidden"},
hero:{minHeight:"520px",backgroundImage:"linear-gradient(90deg,rgba(0,74,70,.96) 0%,rgba(0,74,70,.78) 42%,rgba(0,74,70,.08) 75%),url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1800&q=90')",backgroundSize:"cover",backgroundPosition:"center",display:"flex",alignItems:"center",padding:"70px 6%",boxSizing:"border-box"},
heroContent:{maxWidth:"590px",color:"#fff"},
eyebrow:{fontSize:"14px",letterSpacing:"4px",fontWeight:"700",marginBottom:"15px"},
heroTitle:{fontFamily:"Georgia,serif",fontSize:"50px",lineHeight:"1.02",margin:"0 0 22px",fontWeight:"700"},
gold:{color:"#e8b94f"},
heroText:{fontSize:"17px",lineHeight:"1.6",margin:"0 0 28px",maxWidth:"560px"},
button:{display:"inline-flex",alignItems:"center",gap:"18px",padding:"15px 24px",borderRadius:"30px",background:"#f5c65b",color:"#123f3d",fontWeight:"700",border:"none",fontSize:"14px",cursor:"pointer"},
arrow:{fontSize:"22px",lineHeight:"0"},
stats:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",padding:"28px 6%",background:"#fff",boxSizing:"border-box"},
stat:{textAlign:"center",padding:"10px 20px",borderRight:"1px solid #ccd8d7"},
statIcon:{fontSize:"32px",display:"block",marginBottom:"8px"},
statNumber:{fontSize:"25px",fontWeight:"800",margin:"0"},
statLabel:{fontSize:"15px",color:"#333",marginTop:"5px"},
story:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"55px",alignItems:"center",padding:"55px 6%",background:"#fff"},
imageWrap:{position:"relative"},
storyImage:{width:"100%",height:"500px",objectFit:"cover",borderRadius:"12px",display:"block"},
quote:{position:"absolute",bottom:"-25px",left:"20px",maxWidth:"270px",background:"#005d59",color:"#fff",padding:"25px",borderRadius:"12px",fontFamily:"Georgia,serif",fontSize:"18px",lineHeight:"1.45",boxShadow:"0 12px 30px rgba(0,0,0,.18)"},
storyContent:{padding:"10px"},
sectionTitle:{fontFamily:"Georgia,serif",fontSize:"38px",lineHeight:"1.12",margin:"10px 0 20px",color:"#123f3d"},
storyText:{fontSize:"16px",lineHeight:"1.65",color:"#4a4a4a",marginBottom:"15px"},
features:{margin:"0 6% 45px",padding:"28px",background:"#f4f7f6",borderRadius:"12px",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:"0",boxSizing:"border-box"},
feature:{padding:"12px 28px",borderRight:"1px solid #cbd6d5"},
featureIcon:{fontSize:"35px",display:"block",marginBottom:"12px"},
featureTitle:{fontFamily:"Georgia,serif",fontSize:"21px",margin:"0 0 10px"},
featureText:{fontSize:"14px",lineHeight:"1.55",color:"#555",margin:0},
cta:{minHeight:"360px",backgroundImage:"linear-gradient(90deg,rgba(0,74,70,.95),rgba(0,74,70,.35)),url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1800&q=90')",backgroundSize:"cover",backgroundPosition:"center",display:"flex",alignItems:"center",padding:"55px 6%",boxSizing:"border-box",color:"#fff"},
ctaContent:{maxWidth:"550px"},
ctaTitle:{fontFamily:"Georgia,serif",fontSize:"39px",lineHeight:"1.05",margin:"0 0 18px"},
ctaText:{fontSize:"16px",lineHeight:"1.6",margin:"0 0 24px"},
};
export default function About(){
return <div style={styles.page}>
<Header/>
<section style={styles.hero}>
<div style={styles.heroContent}>
<div style={styles.eyebrow}>ABOUT US</div>
<h1 style={styles.heroTitle}>Building<br/>Brighter Futures<br/><span style={styles.gold}>Together</span></h1>
<p style={styles.heroText}>At Vighnavi Academy, we believe education is more than learning — it’s a journey towards confidence, opportunities and a better tomorrow.</p>
<button style={styles.button}>Our Story <span style={styles.arrow}>→</span></button>
</div>
</section>
<section style={styles.stats}>
<div style={styles.stat}><span style={styles.statIcon}>🎓</span><p style={styles.statNumber}>5,000+</p><div style={styles.statLabel}>Happy Learners</div></div>
<div style={styles.stat}><span style={styles.statIcon}>👥</span><p style={styles.statNumber}>50+</p><div style={styles.statLabel}>Expert Mentors</div></div>
<div style={styles.stat}><span style={styles.statIcon}>📖</span><p style={styles.statNumber}>100+</p><div style={styles.statLabel}>Courses</div></div>
<div style={{...styles.stat,borderRight:"none"}}><span style={styles.statIcon}>🏆</span><p style={styles.statNumber}>95%</p><div style={styles.statLabel}>Success Rate</div></div>
</section>
<section style={styles.story}>
<div style={styles.imageWrap}>
<img style={styles.storyImage} src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=90" alt="Vighnavi Academy"/>
<div style={styles.quote}>“Education is the foundation for a brighter tomorrow.”</div>
</div>
<div style={styles.storyContent}>
<div style={{...styles.eyebrow,color:"#00625e"}}>OUR STORY</div>
<h2 style={styles.sectionTitle}>Empowering Learners.<br/><span style={styles.gold}>Enriching Lives.</span></h2>
<p style={styles.storyText}>Vighnavi Academy was founded with a simple yet powerful vision — to make quality education accessible to everyone. We started as a small initiative with a big dream: to create a learning platform that nurtures talent, builds skills, and unlocks opportunities.</p>
<p style={styles.storyText}>Today, we are proud to be a trusted name in education, helping thousands of learners achieve their goals through industry-relevant courses, expert guidance, and a learner-first approach.</p>
<button style={styles.button}>Our Mission & Vision <span style={styles.arrow}>→</span></button>
</div>
</section>
<section style={styles.features}>
<div style={styles.feature}><span style={styles.featureIcon}>🎯</span><h3 style={styles.featureTitle}>Our Mission</h3><p style={styles.featureText}>To provide high-quality, practical and accessible education that empowers individuals to achieve their personal and professional goals.</p></div>
<div style={styles.feature}><span style={styles.featureIcon}>👁️</span><h3 style={styles.featureTitle}>Our Vision</h3><p style={styles.featureText}>To be a leading learning platform recognized for transforming lives through education and innovation.</p></div>
<div style={{...styles.feature,borderRight:"none"}}><span style={styles.featureIcon}>💎</span><h3 style={styles.featureTitle}>Our Values</h3><p style={styles.featureText}>We stand for integrity, excellence, inclusivity and a strong commitment to our learners’ success.</p></div>
</section>
<section style={styles.cta}>
<div style={styles.ctaContent}>
<h2 style={styles.ctaTitle}>Let’s Shape<br/><span style={styles.gold}>a Brighter Tomorrow</span></h2>
<p style={styles.ctaText}>Join Vighnavi Academy and take the next step towards your goals.</p>
<button style={styles.button}>Explore Our Courses <span style={styles.arrow}>→</span></button>
</div>
</section>
<Footer/>
</div>
}