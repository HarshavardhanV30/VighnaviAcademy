import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

import javaLogo from '../assets/Java-Logo.png';
import pythonLogo from '../assets/python logo.jpeg';
import javaFullStack from '../assets/full stack java.jpeg';
import pythonFullStack from '../assets/python full stack.jpeg';
import mernStack from '../assets/mernstack.jpeg';
import dataAnalytics from '../assets/data analytics.jpeg';
import devops from '../assets/devops.png';
import genaiLogo from '../assets/genai logo.png';
import javaSqlLogo from '../assets/java with sql combo.png';
import pythonSqlLogo from '../assets/python with sql logo.png';

/* VIGHNAVI ACADEMY LOGO COLORS */
const C = {
  dark: '#00035B',
  dark2: '#03077A',
  blue: '#075BFF',
  cyan: '#00D9FF',
  gold: '#D9A441',
  white: '#FFFFFF',
  light: '#F5F8FF',
  text: '#101638',
  muted: '#66708A',
  border: '#DDE5F5'
};

const courses = [
  ['Java Development',javaLogo,'Bestseller','Master Java programming, OOP concepts and enterprise development with practical projects.',['Core Java','OOP','Collections','Spring Boot','SQL']],
  ['Python Development',pythonLogo,'Popular','Build strong Python fundamentals and develop real-world applications with confidence.',['Python','OOP','Data Structures','Django','Projects']],
  ['Java Full Stack',javaFullStack,'Career Track','Become a complete full-stack developer with Java, Spring Boot, React and databases.',['Java','Spring Boot','HTML/CSS','React','MySQL']],
  ['Python Full Stack',pythonFullStack,'Trending','Learn modern full-stack development using Python, Django, React and databases.',['Python','Django','React','JavaScript','PostgreSQL']],
  ['MERN Stack Development',mernStack,'Full Stack','Build scalable web applications using MongoDB, Express, React and Node.js.',['MongoDB','Express','React','Node.js','Projects']],
  ['Data Analyst',dataAnalytics,'In Demand','Turn business data into insights using modern analytics tools.',['Excel','SQL','Python','Power BI','Visualization']],
  ['Generative AI',genaiLogo,'New','Explore Generative AI, LLMs, prompt engineering and intelligent AI applications.',['AI/ML','Prompt Engineering','LLMs','LangChain','AI Projects']],
  ['Cloud & DevOps',devops,'Future Skills','Learn cloud technologies, deployment, DevOps practices and production workflows.',['AWS','Linux','Docker','CI/CD','DevOps']],
  ['Java with SQL',javaSqlLogo,'Popular','Learn Java programming together with SQL database concepts and practical projects.',['Core Java','OOP','SQL','MySQL','Projects']],
  ['Python with SQL',pythonSqlLogo,'Career Track','Build strong Python programming and SQL database skills through practical projects.',['Python','SQL','MySQL','Data Handling','Projects']]
];

const categories = [
  ['💻','Web Development','Full Stack'],['🐍','Python','Programming'],
  ['☕','Java','Development'],['📊','Data Analytics','Business Intelligence'],
  ['🤖','Generative AI','AI & Automation'],['☁️','Cloud Computing','AWS & DevOps'],
  ['⚛️','React Development','Frontend'],['🗄️','Database','SQL & NoSQL']
];

const features = [
  ['🎓','Industry Expert Trainers','Learn from experienced professionals with practical industry knowledge.'],
  ['🎥','Live & Recorded Classes','Attend interactive classes and access learning resources whenever you need them.'],
  ['🛠️','Hands-on Projects','Build practical projects that help you develop job-ready technical skills.'],
  ['🏆','Career-Focused Learning','Follow structured learning paths designed around real-world requirements.'],
  ['📜','Course Certification','Complete your course and showcase your skills with a professional certificate.'],
  ['💬','Mentor Support','Get guidance, doubt clarification and learning support throughout your journey.']
];

const why = [
  ['🎯','Job-Oriented Curriculum','Learn technologies aligned with current industry requirements.'],
  ['👨‍💻','Practical Training','Build applications and projects instead of depending only on theory.'],
  ['🧑‍🏫','Expert Mentorship','Get continuous guidance from experienced trainers.'],
  ['💼','Career Preparation','Prepare for interviews, projects, resumes and real-world development.'],
  ['🚀','Real-World Projects','Develop portfolio-ready projects that demonstrate your skills.'],
  ['🤝','Personalized Support','Get help with doubts, assignments, projects and learning.']
];

const testimonials = [
  ['Rahul K.','Software Developer','The practical teaching approach helped me understand programming concepts much faster.'],
  ['Divya S.','Data Analyst','The Python and Data Analytics training gave me confidence with real-world datasets.'],
  ['Suresh M.','Full Stack Developer','The trainers explain every topic clearly and provide excellent project guidance.']
];

const btn = {
  border:'none',
  borderRadius:30,
  padding:'14px 27px',
  fontSize:15,
  fontWeight:800,
  cursor:'pointer',
  transition:'all .25s'
};

function SectionTitle({ eyebrow, children, subtitle }) {
  return (
    <div style={{textAlign:'center',maxWidth:850,margin:'0 auto 42px'}}>
      <small style={{color:C.blue,letterSpacing:3,fontWeight:900}}>{eyebrow}</small>
      <h2 className="title" style={{margin:'9px 0 10px'}}>{children}</h2>
      {subtitle && <p style={{color:C.muted,lineHeight:1.6,margin:0}}>{subtitle}</p>}
    </div>
  );
}

export default function Home() {
  const navigate = useNavigate();

  const go = path => {
    navigate(path);
    window.scrollTo({top:0,behavior:'smooth'});
  };

  const whatsapp = () =>
    window.open('https://wa.me/919390642779','_blank','noopener,noreferrer');

  return (
    <div style={{fontFamily:"Inter,'Segoe UI',Arial,sans-serif",color:C.text,overflowX:'hidden'}}>
      <style>{`
        *{box-sizing:border-box}
        .card,.cat,.btn,.outline{transition:all .25s ease}
        .card:hover{transform:translateY(-7px);box-shadow:0 18px 40px rgba(0,3,91,.14)!important;border-color:#8BDFFF!important}
        .cat:hover{transform:translateY(-7px);border-color:${C.cyan}!important;box-shadow:0 15px 35px rgba(0,91,255,.12)}
        .btn:hover{transform:translateY(-2px);box-shadow:0 10px 25px rgba(0,3,91,.3)}
        .outline:hover{background:${C.dark}!important;color:#fff!important}
        @media(max-width:1100px){.courses{grid-template-columns:repeat(2,1fr)!important}.cats{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:900px){.hero{flex-direction:column!important}.heroPart{max-width:100%!important;width:100%!important}.features,.why{grid-template-columns:repeat(2,1fr)!important}.demo{grid-template-columns:1fr!important}}
        @media(max-width:600px){.hero{padding:50px 5%!important}.heroTitle{font-size:40px!important}.title{font-size:32px!important}.courses,.cats,.features,.why{grid-template-columns:1fr!important}.heroPic,.demoPic{height:350px!important}.stats{gap:12px!important}.divider{display:none!important}.numbers{grid-template-columns:repeat(2,1fr)!important}}
      `}</style>

      <Header />

      {/* HERO */}
      <section className="hero" style={{
        minHeight:650,padding:'70px 6%',display:'flex',alignItems:'center',
        gap:60,position:'relative',overflow:'hidden',
        background:`linear-gradient(135deg,#EEF3FF 0%,#FFFFFF 52%,#E7F7FF 100%)`
      }}>
        <div style={{position:'absolute',width:430,height:430,borderRadius:'50%',background:'rgba(0,3,91,.06)',right:-140,top:-120}}/>

        <div className="heroPart" style={{flex:1,maxWidth:620,zIndex:2}}>
          <div style={{
            display:'inline-block',padding:'9px 17px',borderRadius:30,
            background:C.white,color:C.dark,fontSize:12,fontWeight:900,
            letterSpacing:1.2,marginBottom:20,boxShadow:'0 7px 22px rgba(0,3,91,.1)'
          }}>
            🎓 LEARN • PRACTICE • BUILD • GROW
          </div>

          <h1 className="heroTitle" style={{
            fontFamily:"Georgia,'Times New Roman',serif",fontSize:58,
            lineHeight:1.04,margin:'0 0 20px',color:C.dark
          }}>
            Build Your Future<br/>
            With <span style={{color:C.blue}}>Vighnavi Academy</span>
          </h1>

          <p style={{fontSize:20,lineHeight:1.5,fontWeight:600,color:C.dark2,margin:'0 0 12px'}}>
            Industry-focused technical education designed to transform learners into confident, job-ready professionals.
          </p>

          <p style={{fontSize:16,lineHeight:1.7,color:C.muted,maxWidth:590,margin:'0 0 28px'}}>
            Learn Java, Python, Full Stack Development, MERN Stack, Data Analytics and Generative AI through practical learning, expert mentorship and real-world projects.
          </p>

          <div style={{display:'flex',gap:14,flexWrap:'wrap',marginBottom:32}}>
            <button className="btn" style={{...btn,background:C.dark,color:C.white}} onClick={()=>go('/courses')}>
              Explore Courses →
            </button>
            <button className="btn" style={{...btn,background:C.white,color:C.dark,border:`1px solid ${C.gold}`}} onClick={()=>go('/contact')}>
              Book a Demo ↗
            </button>
          </div>

          <div className="stats" style={{display:'flex',alignItems:'center',gap:18,flexWrap:'wrap'}}>
            {[
              ['5,000+','Learners'],['50+','Expert Mentors'],
              ['8+','Career Courses'],['95%','Career Support']
            ].map((x,i)=>(
              <React.Fragment key={x[1]}>
                {i>0&&<div className="divider" style={{width:1,height:38,background:C.border}}/>}
                <div>
                  <strong style={{display:'block',fontSize:18,color:C.dark}}>{x[0]}</strong>
                  <span style={{fontSize:12,color:C.muted}}>{x[1]}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="heroPart" style={{flex:1,maxWidth:600,minWidth:300,position:'relative'}}>
          <div className="heroPic" style={{height:470,borderRadius:32,overflow:'hidden',position:'relative',boxShadow:`0 25px 55px rgba(0,3,91,.22)`}}>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=90"
              alt="Students learning"
              style={{width:'100%',height:'100%',objectFit:'cover'}}
            />
            <div style={{position:'absolute',inset:0,background:`linear-gradient(0deg,rgba(0,3,91,.9),transparent 60%)`}}/>
            <div style={{position:'absolute',bottom:30,left:30,color:C.white}}>
              <small style={{color:C.cyan,letterSpacing:3,fontWeight:900}}>SKILLS</small>
              <strong style={{display:'block',fontSize:27}}>Create Opportunities</strong>
              <span>Your Future Starts Here</span>
            </div>
          </div>

          <Float text="💻 Practical Learning" top="8%" left="-5%"/>
          <Float text="🚀 Career Ready" bottom="13%" right="-3%"/>
        </div>
      </section>

      {/* TRUST BAR */}
      <section style={{padding:'23px 6%',background:C.dark,color:C.white,display:'flex',justifyContent:'space-around',gap:20,flexWrap:'wrap',fontWeight:700}}>
        {['✓ Live Interactive Classes','✓ Industry Experts','✓ Real-World Projects','✓ Certification','✓ Career Guidance'].map(x=><div key={x}>{x}</div>)}
      </section>

      {/* CATEGORIES */}
      <section style={{padding:'80px 6%',background:C.white}}>
        <SectionTitle eyebrow="EXPLORE LEARNING" subtitle="Choose the right technology path and start building your future.">
          Explore Top <span style={{color:C.blue}}>Categories</span>
        </SectionTitle>

        <div className="cats" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:18}}>
          {categories.map(x=>(
            <div className="cat" key={x[1]} onClick={()=>go('/courses')} style={{
              padding:26,border:`1px solid ${C.border}`,borderRadius:20,
              background:`linear-gradient(145deg,#fff,#F1F6FF)`,textAlign:'center',cursor:'pointer'
            }}>
              <div style={{width:62,height:62,borderRadius:17,background:C.white,display:'flex',alignItems:'center',justifyContent:'center',fontSize:30,margin:'0 auto 14px',boxShadow:'0 6px 18px rgba(0,3,91,.08)'}}>{x[0]}</div>
              <h3 style={{fontSize:17,color:C.dark,margin:'0 0 5px'}}>{x[1]}</h3>
              <p style={{fontSize:13,color:C.muted,margin:'0 0 10px'}}>{x[2]}</p>
              <span style={{fontSize:12,color:C.blue,fontWeight:800}}>Explore →</span>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section style={{padding:'80px 6%',background:C.light}}>
        <SectionTitle eyebrow="WHY VIGHNAVI ACADEMY" subtitle="A practical learning experience focused on confidence, skills and career growth.">
          Learn Skills That <span style={{color:C.blue}}>Matter</span>
        </SectionTitle>

        <div className="features" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20}}>
          {features.map(x=>(
            <div className="card" key={x[1]} style={{
              padding:28,background:C.white,border:`1px solid ${C.border}`,
              borderRadius:20,textAlign:'center'
            }}>
              <div style={{width:62,height:62,borderRadius:17,background:'#EAF8FF',display:'flex',alignItems:'center',justifyContent:'center',fontSize:29,margin:'0 auto 16px'}}>{x[0]}</div>
              <h3 style={{fontSize:18,color:C.dark,margin:'0 0 9px'}}>{x[1]}</h3>
              <p style={{fontSize:14,lineHeight:1.6,color:C.muted,margin:0}}>{x[2]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section style={{padding:'80px 6%',background:C.white}}>
        <SectionTitle eyebrow="WHY CHOOSE US" subtitle="More than just courses — we focus on practical skills, mentorship and career-ready learning.">
          Why Choose <span style={{color:C.blue}}>Vighnavi Academy?</span>
        </SectionTitle>

        <div style={{
          maxWidth:1000,margin:'0 auto 32px',padding:25,borderRadius:20,
          background:`linear-gradient(135deg,${C.dark},${C.dark2})`,
          color:C.white,display:'flex',gap:20,alignItems:'center',
          boxShadow:'0 15px 35px rgba(0,3,91,.18)'
        }}>
          <div style={{fontSize:35}}>⭐</div>
          <div>
            <h3 style={{margin:'0 0 6px',fontSize:21}}>Your Learning. Your Skills. Your Career.</h3>
            <p style={{margin:0,lineHeight:1.6,color:'#DCE8FF',fontSize:14}}>
              We provide a structured learning environment where students learn technologies, practice concepts, build projects and prepare for real-world opportunities.
            </p>
          </div>
        </div>

        <div className="why" style={{maxWidth:1100,margin:'auto',display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20}}>
          {why.map((x,i)=>(
            <div className="card" key={x[1]} style={{
              padding:25,minHeight:165,position:'relative',display:'flex',gap:15,
              background:C.light,border:`1px solid ${C.border}`,borderRadius:20
            }}>
              <div style={{minWidth:55,width:55,height:55,borderRadius:15,background:C.white,display:'flex',alignItems:'center',justifyContent:'center',fontSize:26}}>{x[0]}</div>
              <div>
                <h3 style={{margin:'2px 0 8px',fontSize:17,color:C.dark}}>{x[1]}</h3>
                <p style={{margin:0,fontSize:13,lineHeight:1.6,color:C.muted}}>{x[2]}</p>
              </div>
              <b style={{position:'absolute',right:14,bottom:-8,fontSize:55,color:'rgba(0,3,91,.06)'}}>0{i+1}</b>
            </div>
          ))}
        </div>

        <div className="numbers" style={{
          maxWidth:1000,margin:'35px auto 0',display:'grid',
          gridTemplateColumns:'repeat(4,1fr)',background:C.dark,
          borderRadius:18,padding:20,boxShadow:'0 15px 35px rgba(0,3,91,.2)'
        }}>
          {[
            ['100%','Practical Approach'],['24/7','Learning Resources'],
            ['100+','Practice Opportunities'],['1:1','Mentor Guidance']
          ].map(x=>(
            <div key={x[1]} style={{textAlign:'center',color:C.white,borderRight:'1px solid rgba(255,255,255,.15)'}}>
              <strong style={{display:'block',fontSize:20,color:C.cyan}}>{x[0]}</strong>
              <span style={{fontSize:12}}>{x[1]}</span>
            </div>
          ))}
        </div>
      </section>

      {/* COURSES */}
      <section style={{padding:'80px 6%',background:C.light}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'end',gap:20,flexWrap:'wrap',marginBottom:38}}>
          <div>
            <small style={{color:C.blue,fontWeight:900,letterSpacing:3}}>OUR PROGRAMS</small>
            <h2 className="title" style={{textAlign:'left',margin:'8px 0'}}>Build Skills. <span style={{color:C.blue}}>Build Your Career.</span></h2>
            <p style={{color:C.muted,margin:0}}>Explore our industry-focused technical courses.</p>
          </div>

          <button className="outline" style={{...btn,background:C.white,color:C.dark,border:`1px solid ${C.dark}`}} onClick={()=>go('/courses')}>
            View All Courses →
          </button>
        </div>

        <div className="courses" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:22}}>
          {courses.map((c,i)=>(
            <div className="card" key={c[0]} style={{
              background:C.white,border:`1px solid ${C.border}`,
              borderRadius:20,overflow:'hidden'
            }}>
              <div style={{height:185,position:'relative'}}>
                <img src={c[1]} alt={c[0]} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                <div style={{position:'absolute',inset:0,background:'linear-gradient(0deg,rgba(0,3,91,.8),transparent 65%)'}}/>
                <span style={{
                  position:'absolute',top:14,left:14,padding:'6px 11px',
                  borderRadius:20,background:i%2?C.blue:C.dark,
                  color:C.white,fontSize:10,fontWeight:900
                }}>{c[2]}</span>
                <div style={{position:'absolute',bottom:14,left:16,color:C.white,fontSize:10,letterSpacing:2,fontWeight:800}}>
                  VIGHNAVI ACADEMY
                </div>
              </div>

              <div style={{padding:19}}>
                <div style={{color:C.gold,fontSize:12,fontWeight:800,marginBottom:8}}>
                  ⭐ 4.9 <span style={{color:C.muted}}>(1,500+ learners)</span>
                </div>

                <h3 style={{fontFamily:"Georgia,'Times New Roman',serif",fontSize:20,color:C.dark,margin:'0 0 8px'}}>
                  {c[0]}
                </h3>

                <p style={{fontSize:13,lineHeight:1.55,color:C.muted,minHeight:60,margin:'0 0 13px'}}>
                  {c[3]}
                </p>

                <div style={{padding:12,borderRadius:11,background:C.light,display:'flex',flexDirection:'column',gap:5,marginBottom:15}}>
                  {c[4].map(s=><span key={s} style={{fontSize:11,color:C.dark}}>✓ {s}</span>)}
                </div>

                <button className="btn" style={{...btn,width:'100%',padding:'11px',background:C.dark,color:C.white}} onClick={()=>go('/courses')}>
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DEMO */}
      <section className="demo" style={{padding:'80px 6%',display:'grid',gridTemplateColumns:'1fr 1fr',gap:55,alignItems:'center',background:C.white}}>
        <div className="demoPic" style={{height:490,borderRadius:28,overflow:'hidden',position:'relative',boxShadow:'0 20px 50px rgba(0,3,91,.18)'}}>
          <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1100&q=90" alt="Students learning" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
          <div style={{position:'absolute',inset:0,background:`linear-gradient(0deg,rgba(0,3,91,.9),transparent 65%)`}}/>
          <div style={{position:'absolute',bottom:30,left:30,color:C.white}}>
            <span style={{display:'block',fontSize:48,color:C.cyan}}>“</span>
            <strong style={{fontSize:27}}>Learn Today.<br/>Lead Tomorrow.</strong>
          </div>
        </div>

        <div>
          <small style={{color:C.blue,fontWeight:900,letterSpacing:3}}>START YOUR JOURNEY</small>
          <h2 className="title" style={{textAlign:'left',margin:'10px 0 18px'}}>
            Experience Our <span style={{color:C.blue}}>Learning Style</span>
          </h2>

          <p style={{color:C.muted,fontSize:16,lineHeight:1.7}}>
            Join a demo class and understand our teaching approach before choosing your learning path. Meet the trainer, explore the curriculum and ask your questions.
          </p>

          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12,margin:'22px 0'}}>
            {['Meet the Trainer','Understand Course Structure','Experience Practical Teaching','Ask Your Questions'].map(x=>(
              <div key={x} style={{fontSize:13,fontWeight:700,color:C.dark}}>✓ {x}</div>
            ))}
          </div>

          <div style={{padding:15,background:'#FFF8E7',borderLeft:`4px solid ${C.gold}`,borderRadius:8,marginBottom:20}}>
            <strong style={{color:C.dark}}>Demo Class Confirmation</strong>
            <p style={{fontSize:12,color:C.muted,margin:'5px 0 0'}}>
              Demo class confirmation fees, if applicable, will be discussed separately.
            </p>
          </div>

          <button className="btn" style={{...btn,background:C.dark,color:C.white}} onClick={()=>go('/contact')}>
            Schedule Demo Class →
          </button>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{padding:'80px 6%',background:C.light,textAlign:'center'}}>
        <SectionTitle eyebrow="LEARNER STORIES" subtitle="Real learning experiences from our growing community.">
          What Our <span style={{color:C.blue}}>Learners Say</span>
        </SectionTitle>

        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:22,textAlign:'left'}} className="features">
          {testimonials.map(x=>(
            <div className="card" key={x[0]} style={{background:C.white,border:`1px solid ${C.border}`,borderRadius:20,padding:27}}>
              <div style={{fontSize:45,color:C.gold,fontFamily:'Georgia'}}>“</div>
              <div style={{color:C.gold,letterSpacing:3}}>★★★★★</div>
              <p style={{fontSize:14,lineHeight:1.7,color:C.muted,minHeight:75}}>{x[2]}</p>
              <div style={{borderTop:`1px solid ${C.border}`,paddingTop:14}}>
                <strong style={{display:'block',color:C.dark}}>{x[0]}</strong>
                <span style={{fontSize:12,color:C.muted}}>{x[1]}</span>
              </div>
            </div>
          ))}
        </div>

        <button className="outline" style={{...btn,marginTop:32,background:C.white,color:C.dark,border:`1px solid ${C.dark}`}} onClick={()=>go('/contact')}>
          Read More Success Stories →
        </button>
      </section>

      {/* FINAL CTA */}
      <section style={{
        padding:'85px 6%',background:`linear-gradient(135deg,${C.dark},${C.dark2},${C.blue})`,
        color:C.white,textAlign:'center',position:'relative',overflow:'hidden'
      }}>
        <div style={{position:'absolute',width:350,height:350,borderRadius:'50%',background:'rgba(0,217,255,.08)',right:-120,top:-200}}/>

        <small style={{color:C.cyan,letterSpacing:3,fontWeight:900}}>YOUR FUTURE STARTS HERE</small>

        <h2 style={{fontFamily:"Georgia,'Times New Roman',serif",fontSize:46,margin:'12px 0'}}>
          Ready to Learn, Build & <span style={{color:C.cyan}}>Grow?</span>
        </h2>

        <p style={{color:'#DDE8FF',fontSize:17,marginBottom:28}}>
          Take the first step toward a stronger technical career with Vighnavi Academy.
        </p>

        <div style={{display:'flex',justifyContent:'center',gap:14,flexWrap:'wrap'}}>
          <button className="btn" style={{...btn,background:C.dark,color:C.white,border:`1px solid ${C.cyan}`}} onClick={()=>go('/courses')}>
            Explore Courses →
          </button>

          <button className="btn" style={{...btn,background:C.white,color:C.dark}} onClick={()=>go('/contact')}>
            Contact Our Team
          </button>
        </div>
      </section>

      {/* WHATSAPP */}
      <button onClick={whatsapp} aria-label="WhatsApp" style={{
        position:'fixed',right:24,bottom:24,width:60,height:60,borderRadius:'50%',
        border:'none',background:'#25D366',color:C.white,fontSize:27,cursor:'pointer',
        zIndex:9999,boxShadow:'0 8px 25px rgba(37,211,102,.4)'
      }}>
        📞
      </button>

      <Footer />
    </div>
  );
}

function Float({text,top,left,right,bottom}) {
  return (
    <div style={{
      position:'absolute',top,left,right,bottom,padding:'14px 18px',
      background:'#fff',color:C.dark,borderRadius:15,fontSize:14,
      fontWeight:800,boxShadow:'0 12px 30px rgba(0,3,91,.16)',zIndex:3
    }}>
      {text}
    </div>
  );
}
