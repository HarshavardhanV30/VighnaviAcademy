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

/* Vighnavi Academy Logo Colors */
const C = {
  dark: '#00035B',
  navy: '#02083D',
  blue: '#075BFF',
  bright: '#008CFF',
  cyan: '#00D9FF',
  gold: '#D9A441',
  light: '#F3F7FF',
  white: '#FFFFFF',
  text: '#101A35',
  muted: '#66738D',
  border: '#D9E3F5'
};

const courses = [
  ['Java Development',javaLogo,'Bestseller','Master Java programming, OOP concepts and enterprise development with practical projects.',['Core Java','OOP','Collections','Spring Boot','SQL']],
  ['Python Development',pythonLogo,'Popular','Build strong Python fundamentals and develop real-world applications with confidence.',['Python','OOP','Data Structures','Django','Projects']],
  ['Java Full Stack',javaFullStack,'Career Track','Become a complete full-stack developer with Java, Spring Boot, React and databases.',['Java','Spring Boot','HTML/CSS','React','MySQL']],
  ['Python Full Stack',pythonFullStack,'Trending','Learn modern full-stack development using Python, Django, React and databases.',['Python','Django','React','JavaScript','PostgreSQL']],
  ['MERN Stack Development',mernStack,'Full Stack','Build scalable web applications using MongoDB, Express, React and Node.js.',['MongoDB','Express','React','Node.js','Projects']],
  ['Data Analyst',dataAnalytics,'In Demand','Turn business data into insights and make data-driven decisions using modern tools.',['Excel','SQL','Python','Power BI','Visualization']],
  ['Generative AI',genaiLogo,'New','Explore Generative AI, LLMs, prompt engineering and intelligent AI applications.',['AI/ML','Prompt Engineering','LLMs','LangChain','AI Projects']],
  ['Cloud & DevOps',devops,'Future Skills','Learn cloud technologies, deployment, DevOps practices and production workflows.',['AWS','Linux','Docker','CI/CD','DevOps']],
  ['Java with SQL',javaSqlLogo,'Popular','Learn Java programming together with SQL database concepts and practical projects.',['Core Java','OOP','SQL','MySQL','Projects']],
  ['Python with SQL',pythonSqlLogo,'Career Track','Build strong Python and SQL skills through practical real-world projects.',['Python','SQL','MySQL','Data Handling','Projects']]
];

const categories = [
  ['💻','Web Development','Full Stack'],['🐍','Python','Programming'],
  ['☕','Java','Development'],['📊','Data Analytics','Business Intelligence'],
  ['🤖','Generative AI','AI & Automation'],['☁️','Cloud Computing','AWS & DevOps'],
  ['⚛️','React Development','Frontend'],['🗄️','Database','SQL & NoSQL']
];

const features = [
  ['🎓','Industry Expert Trainers','Learn from experienced professionals with practical industry knowledge.'],
  ['🎥','Live & Recorded Classes','Attend interactive classes and access learning resources anytime.'],
  ['🛠️','Hands-on Projects','Build practical projects that develop job-ready technical skills.'],
  ['🏆','Career-Focused Learning','Follow structured learning paths based on industry requirements.'],
  ['📜','Course Certification','Complete your course and showcase your technical skills.'],
  ['💬','Mentor Support','Get guidance, doubt clarification and learning support.']
];

const why = [
  ['🎯','Job-Oriented Curriculum','Learn technologies and skills aligned with current industry requirements.'],
  ['👨‍💻','Practical Training','Build applications and projects instead of depending only on theory.'],
  ['🧑‍🏫','Expert Mentorship','Get continuous guidance from experienced trainers.'],
  ['💼','Career Preparation','Prepare for interviews, projects, resumes and real-world development.'],
  ['🚀','Real-World Projects','Develop portfolio-ready projects that demonstrate your skills.'],
  ['🤝','Personalized Support','Get help with doubts, assignments and projects.']
];

const testimonials = [
  ['Rahul K.','Software Developer','The practical teaching approach helped me understand programming concepts much faster.'],
  ['Divya S.','Data Analyst','The Python and Data Analytics training gave me confidence with real-world datasets.'],
  ['Suresh M.','Full Stack Developer','The trainers explain every topic clearly and provide excellent project guidance.']
];

const Btn = ({children,onClick,outline=false}) => (
  <button className="btn" onClick={onClick} style={{
    border:outline?`1px solid ${C.blue}`:'none',background:outline?C.white:C.blue,
    color:outline?C.dark:C.white,padding:'13px 25px',borderRadius:28,
    fontWeight:800,fontSize:14,cursor:'pointer'
  }}>{children}</button>
);

const SectionTitle = ({label,title,sub}) => (
  <div style={{textAlign:'center',maxWidth:850,margin:'0 auto 42px'}}>
    <small style={{color:C.blue,letterSpacing:3,fontWeight:900}}>{label}</small>
    <h2 className="title" style={{color:C.dark,margin:'9px 0',fontFamily:'Georgia,serif'}}>{title}</h2>
    {sub&&<p style={{color:C.muted,lineHeight:1.6,margin:0}}>{sub}</p>}
  </div>
);

export default function Home() {
  const navigate = useNavigate();

  const go = path => {
    navigate(path);
    window.scrollTo({top:0,behavior:'smooth'});
  };

  const whatsapp = () =>
    window.open('https://wa.me/919390642779','_blank','noopener,noreferrer');

  return (
    <main style={{fontFamily:"Inter,'Segoe UI',Arial,sans-serif",color:C.text,overflowX:'hidden'}}>
      <style>{`
        *{box-sizing:border-box}
        .card,.cat,.btn{transition:.3s ease}
        .card:hover{transform:translateY(-7px)!important;box-shadow:0 18px 40px rgba(0,3,91,.13)!important;border-color:#69CFFF!important}
        .cat:hover{transform:translateY(-6px);border-color:${C.bright}!important;box-shadow:0 15px 35px rgba(0,91,255,.13)}
        .btn:hover{transform:translateY(-2px);box-shadow:0 10px 25px rgba(0,91,255,.25)}
        @media(max-width:1100px){.courses{grid-template-columns:repeat(2,1fr)!important}.cats{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:900px){.hero{flex-direction:column!important}.hero>*{width:100%!important;max-width:100%!important}.features,.why{grid-template-columns:repeat(2,1fr)!important}.demo{grid-template-columns:1fr!important}}
        @media(max-width:600px){.hero{padding:45px 5%!important}.hero h1{font-size:39px!important}.title{font-size:32px!important}.courses,.cats,.features,.why{grid-template-columns:1fr!important}.heroImg{height:350px!important}.stats{gap:10px!important}.stats div:nth-child(4),.stats div:nth-child(6),.stats div:nth-child(8){display:none}}
      `}</style>

      <Header />

      {/* HERO */}
      <section className="hero" style={{
        minHeight:650,padding:'70px 6%',display:'flex',alignItems:'center',
        gap:60,position:'relative',background:
        `linear-gradient(135deg,#EEF5FF 0%,#FFFFFF 45%,#E8F8FF 100%)`
      }}>
        <div style={{position:'absolute',width:500,height:500,borderRadius:'50%',
          background:'rgba(0,3,91,.05)',right:-180,top:-180}}/>

        <div style={{flex:1,maxWidth:620,zIndex:2}}>
          <span style={{
            display:'inline-block',background:C.white,color:C.blue,
            padding:'9px 17px',borderRadius:30,fontSize:12,fontWeight:900,
            letterSpacing:1.3,boxShadow:'0 8px 25px rgba(0,3,91,.09)'
          }}>
            🎓 LEARN • PRACTICE • BUILD • GROW
          </span>

          <h1 style={{
            fontFamily:'Georgia,serif',fontSize:58,lineHeight:1.04,
            color:C.dark,margin:'22px 0'
          }}>
            Build Your Future<br/>
            With <span style={{color:C.blue}}>Vighnavi Academy</span>
          </h1>

          <p style={{fontSize:20,lineHeight:1.5,fontWeight:600,color:C.navy}}>
            Industry-focused technical education designed to transform learners into confident, job-ready professionals.
          </p>

          <p style={{fontSize:15,lineHeight:1.7,color:C.muted}}>
            Learn Java, Python, Full Stack Development, MERN Stack, Data Analytics and Generative AI through practical learning, expert mentorship and real-world projects.
          </p>

          <div style={{display:'flex',gap:13,flexWrap:'wrap',margin:'27px 0 32px'}}>
            <Btn onClick={()=>go('/courses')}>Explore Courses →</Btn>
            <Btn outline onClick={()=>go('/contact')}>Book a Demo ↗</Btn>
          </div>

          <div className="stats" style={{display:'flex',alignItems:'center',gap:18,flexWrap:'wrap'}}>
            {[
              ['5,000+','Learners'],['50+','Expert Mentors'],
              ['8+','Career Courses'],['95%','Career Support']
            ].map((x,i)=>(
              <React.Fragment key={x[1]}>
                {i>0&&<i style={{height:38,width:1,background:C.border}}/>}
                <div>
                  <b style={{display:'block',fontSize:18,color:C.blue}}>{x[0]}</b>
                  <small style={{color:C.muted}}>{x[1]}</small>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div style={{flex:1,maxWidth:600,minWidth:300,position:'relative'}}>
          <div className="heroImg" style={{
            height:470,borderRadius:32,overflow:'hidden',position:'relative',
            boxShadow:'0 25px 55px rgba(0,3,91,.22)'
          }}>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=90"
              alt="Students learning"
              style={{width:'100%',height:'100%',objectFit:'cover'}}
            />
            <div style={{position:'absolute',inset:0,background:'linear-gradient(0deg,rgba(0,3,91,.9),transparent 60%)'}}/>
            <div style={{position:'absolute',bottom:30,left:30,color:C.white}}>
              <small style={{color:C.cyan,letterSpacing:3}}>SKILLS</small>
              <strong style={{display:'block',fontSize:27}}>Create Opportunities</strong>
              <span>Your Future Starts Here</span>
            </div>
          </div>

          <div style={{position:'absolute',top:'8%',left:'-5%',padding:'14px 18px',
            background:C.white,color:C.dark,borderRadius:15,fontWeight:800,
            boxShadow:'0 12px 30px rgba(0,3,91,.15)'}}>
            💻 Practical Learning
          </div>

          <div style={{position:'absolute',bottom:'13%',right:'-3%',padding:'14px 18px',
            background:C.white,color:C.blue,borderRadius:15,fontWeight:800,
            boxShadow:'0 12px 30px rgba(0,3,91,.15)'}}>
            🚀 Career Ready
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section style={{
        padding:'23px 6%',background:C.dark,color:C.white,
        display:'flex',justifyContent:'space-around',gap:20,flexWrap:'wrap',
        fontSize:14,fontWeight:700
      }}>
        {['✓ Live Interactive Classes','✓ Industry Experts','✓ Real-World Projects','✓ Certification','✓ Career Guidance'].map(x=><span key={x}>{x}</span>)}
      </section>

      {/* CATEGORIES */}
      <section style={{padding:'80px 6%'}}>
        <SectionTitle label="EXPLORE LEARNING" title={<>Explore Top <span style={{color:C.blue}}>Categories</span></>}/>
        <div className="cats" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:18}}>
          {categories.map(x=>(
            <div className="cat" key={x[1]} onClick={()=>go('/courses')} style={{
              padding:25,textAlign:'center,borderRadius:20'.replace(',',''),
              background:`linear-gradient(145deg,#fff,#F0F8FF)`,
              border:`1px solid ${C.border}`,cursor:'pointer'
            }}>
              <div style={{width:62,height:62,borderRadius:17,background:C.light,
                display:'flex',alignItems:'center',justifyContent:'center',
                fontSize:29,margin:'0 auto 14px'}}>{x[0]}</div>
              <h3 style={{margin:'0 0 5px',color:C.dark,fontSize:17}}>{x[1]}</h3>
              <p style={{margin:'0 0 10px',color:C.muted,fontSize:13}}>{x[2]}</p>
              <b style={{fontSize:12,color:C.blue}}>Explore →</b>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section style={{padding:'80px 6%',background:C.light}}>
        <SectionTitle
          label="WHY VIGHNAVI ACADEMY"
          title={<>Learn Skills That <span style={{color:C.blue}}>Matter</span></>}
          sub="A practical learning experience focused on confidence, skills and career growth."
        />

        <div className="features" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20}}>
          {features.map(x=>(
            <div className="card" key={x[1]} style={{
              padding:28,textAlign:'center',background:C.white,
              border:`1px solid ${C.border}`,borderRadius:20
            }}>
              <div style={{width:62,height:62,borderRadius:17,background:'#EAF7FF',
                display:'flex',alignItems:'center',justifyContent:'center',
                fontSize:29,margin:'0 auto 16px'}}>{x[0]}</div>
              <h3 style={{fontSize:18,color:C.dark,margin:'0 0 9px'}}>{x[1]}</h3>
              <p style={{fontSize:13,lineHeight:1.6,color:C.muted,margin:0}}>{x[2]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section style={{padding:'80px 6%',background:C.white}}>
        <SectionTitle
          label="WHY CHOOSE US"
          title={<>Why Choose <span style={{color:C.blue}}>Vighnavi Academy?</span></>}
          sub="More than just courses — we focus on practical skills, mentorship and career-ready learning."
        />

        <div style={{
          maxWidth:1000,margin:'0 auto 35px',padding:25,borderRadius:22,
          background:`linear-gradient(135deg,${C.dark},#071A8A,${C.blue})`,
          color:C.white,display:'flex',alignItems:'center',gap:20,
          boxShadow:'0 18px 40px rgba(0,3,91,.18)'
        }}>
          <span style={{fontSize:36}}>⭐</span>
          <div>
            <h3 style={{margin:'0 0 7px',fontSize:21}}>Your Learning. Your Skills. Your Career.</h3>
            <p style={{margin:0,color:'#DDE8FF',fontSize:13,lineHeight:1.6}}>
              Learn technologies, practice concepts, build projects and prepare for real-world opportunities.
            </p>
          </div>
        </div>

        <div className="why" style={{maxWidth:1100,margin:'auto',display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20}}>
          {why.map((x,i)=>(
            <div className="card" key={x[1]} style={{
              padding:25,minHeight:165,position:'relative',display:'flex',
              gap:15;background:C.light,border:`1px solid ${C.border}`,borderRadius:20
            }}>
              <div style={{minWidth:55,height:55,borderRadius:15,background:C.white,
                display:'flex',alignItems:'center',justifyContent:'center',fontSize:25}}>{x[0]}</div>
              <div>
                <h3 style={{margin:'2px 0 8px',fontSize:17,color:C.dark}}>{x[1]}</h3>
                <p style={{margin:0,fontSize:13,lineHeight:1.6,color:C.muted}}>{x[2]}</p>
              </div>
              <b style={{position:'absolute',right:12,bottom:-8,fontSize:55,color:'rgba(0,3,91,.06)'}}>0{i+1}</b>
            </div>
          ))}
        </div>

        <div style={{
          maxWidth:1000,margin:'35px auto 0',display:'grid',
          gridTemplateColumns:'repeat(4,1fr)',background:C.dark,
          borderRadius:18,padding:20
        }}>
          {[['100%','Practical Approach'],['24/7','Learning Resources'],['100+','Practice Opportunities'],['1:1','Mentor Guidance']].map(x=>(
            <div key={x[1]} style={{textAlign:'center',color:C.white}}>
              <b style={{display:'block',fontSize:20,color:C.cyan}}>{x[0]}</b>
              <small>{x[1]}</small>
            </div>
          ))}
        </div>
      </section>

      {/* COURSES */}
      <section style={{padding:'80px 6%',background:'#F7FAFF'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'end',
          flexWrap:'wrap',gap:20,marginBottom:38}}>
          <div>
            <small style={{color:C.blue,letterSpacing:3,fontWeight:900}}>OUR PROGRAMS</small>
            <h2 className="title" style={{color:C.dark,fontFamily:'Georgia,serif',margin:'8px 0'}}>
              Build Skills. <span style={{color:C.blue}}>Build Your Career.</span>
            </h2>
            <p style={{color:C.muted,margin:0}}>Explore our industry-focused technical courses.</p>
          </div>
          <Btn outline onClick={()=>go('/courses')}>View All Courses →</Btn>
        </div>

        <div className="courses" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:22}}>
          {courses.map((x,i)=>(
            <div className="card" key={x[0]} style={{
              background:C.white,border:`1px solid ${C.border}`,
              borderRadius:20,overflow:'hidden'
            }}>
              <div style={{height:185,position:'relative'}}>
                <img src={x[1]} alt={x[0]} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                <div style={{position:'absolute',inset:0,background:'linear-gradient(0deg,rgba(0,3,91,.8),transparent 65%)'}}/>
                <span style={{
                  position:'absolute',top:13,left:13,padding:'6px 11px',
                  borderRadius:20,background:i%2?C.blue:C.gold,color:C.white,
                  fontSize:10,fontWeight:900
                }}>{x[2]}</span>
                <b style={{position:'absolute',bottom:13,left:15,color:C.white,fontSize:10,letterSpacing:2}}>VIGHNAVI ACADEMY</b>
              </div>

              <div style={{padding:19}}>
                <small style={{color:C.gold,fontWeight:800}}>⭐ 4.9 <span style={{color:C.muted}}>(1,500+ learners)</span></small>
                <h3 style={{fontFamily:'Georgia,serif',fontSize:20,color:C.dark,margin:'8px 0'}}>{x[0]}</h3>
                <p style={{fontSize:13,lineHeight:1.55,color:C.muted,minHeight:58}}>{x[3]}</p>

                <div style={{padding:12,borderRadius:11,background:C.light,display:'grid',gap:5,marginBottom:15}}>
                  {x[4].map(s=><span key={s} style={{fontSize:11,color:C.dark}}>✓ {s}</span>)}
                </div>

                <button className="btn" onClick={()=>go('/courses')} style={{
                  width:'100%',border:0,borderRadius:24,padding:11,
                  background:C.blue,color:C.white,fontWeight:800,cursor:'pointer'
                }}>
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DEMO */}
      <section className="demo" style={{
        padding:'80px 6%',display:'grid',gridTemplateColumns:'1fr 1fr',
        gap:55,alignItems:'center'
      }}>
        <div style={{
          height:480,borderRadius:28,overflow:'hidden',position:'relative',
          boxShadow:'0 22px 50px rgba(0,3,91,.17)'
        }}>
          <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1100&q=90"
            alt="Students learning" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
          <div style={{position:'absolute',inset:0,background:'linear-gradient(0deg,rgba(0,3,91,.88),transparent 65%)'}}/>
          <div style={{position:'absolute',bottom:30,left:30,color:C.white}}>
            <span style={{fontSize:45,color:C.cyan}}>“</span>
            <strong style={{display:'block',fontSize:27}}>Learn Today.<br/>Lead Tomorrow.</strong>
          </div>
        </div>

        <div>
          <small style={{color:C.blue,letterSpacing:3,fontWeight:900}}>START YOUR JOURNEY</small>
          <h2 className="title" style={{color:C.dark,fontFamily:'Georgia,serif'}}>
            Experience Our <span style={{color:C.blue}}>Learning Style</span>
          </h2>
          <p style={{color:C.muted,lineHeight:1.7}}>
            Join a demo class and understand our teaching approach before choosing your learning path.
          </p>

          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12,margin:'22px 0'}}>
            {['Meet the Trainer','Course Structure','Practical Teaching','Ask Questions'].map(x=>
              <b key={x} style={{fontSize:13,color:C.dark}}>✓ {x}</b>
            )}
          </div>

          <div style={{padding:15,background:'#FFF7E5',borderLeft:`4px solid ${C.gold}`,borderRadius:8,marginBottom:20}}>
            <b>Demo Class Confirmation</b>
            <p style={{fontSize:12,color:C.muted,margin:'5px 0 0'}}>Demo class confirmation fees, if applicable, will be discussed separately.</p>
          </div>

          <Btn onClick={()=>go('/contact')}>Schedule Demo Class →</Btn>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{padding:'80px 6%',background:C.light,textAlign:'center'}}>
        <SectionTitle label="LEARNER STORIES" title={<>What Our <span style={{color:C.blue}}>Learners Say</span></>}/>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:22}} className="features">
          {testimonials.map(x=>(
            <div className="card" key={x[0]} style={{
              background:C.white,border:`1px solid ${C.border}`,
              borderRadius:20,padding:27,textAlign:'left'
            }}>
              <div style={{fontSize:42,color:C.gold}}>“</div>
              <div style={{color:C.gold,letterSpacing:3}}>★★★★★</div>
              <p style={{color:C.muted,lineHeight:1.7,minHeight:85}}>{x[2]}</p>
              <div style={{borderTop:`1px solid ${C.border}`,paddingTop:14}}>
                <b style={{display:'block',color:C.dark}}>{x[0]}</b>
                <small style={{color:C.muted}}>{x[1]}</small>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{
        padding:'85px 6%',textAlign:'center',color:C.white,
        background:`linear-gradient(125deg,${C.dark},#071A8A,${C.blue})`
      }}>
        <small style={{color:C.cyan,letterSpacing:3,fontWeight:900}}>YOUR FUTURE STARTS HERE</small>
        <h2 style={{fontFamily:'Georgia,serif',fontSize:46,margin:'12px 0'}}>
          Ready to Learn, Build & <span style={{color:C.cyan}}>Grow?</span>
        </h2>
        <p style={{color:'#DCE7FF',fontSize:16}}>Take the first step toward a stronger technical career with Vighnavi Academy.</p>

        <div style={{display:'flex',justifyContent:'center',gap:14,flexWrap:'wrap',marginTop:25}}>
          <button className="btn" style={{...Btn,background:C.gold,color:C.dark}} onClick={()=>go('/courses')}>
            Explore Courses →
          </button>
          <button className="btn" style={{...Btn,background:'transparent',color:C.white,border:'1px solid #fff'}} onClick={()=>go('/contact')}>
            Contact Our Team
          </button>
        </div>
      </section>

      {/* WHATSAPP */}
      <button onClick={whatsapp} aria-label="WhatsApp" style={{
        position:'fixed',right:24,bottom:24,width:60,height:60,border:0,
        borderRadius:'50%',background:'#25D366',color:C.white,fontSize:27,
        cursor:'pointer',zIndex:9999,boxShadow:'0 8px 25px rgba(37,211,102,.4)'
      }}>📞</button>

      <Footer />
    </main>
  );
}
