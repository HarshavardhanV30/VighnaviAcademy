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

const C = {
  navy: '#020817',
  blue: '#075BFF',
  brightBlue: '#008CFF',
  cyan: '#00D9FF',
  cyanSoft: '#E8FAFF',
  royal: '#123BCE',
  silver: '#F4F7FF',
  white: '#FFFFFF',
  text: '#101A35',
  muted: '#64708A',
  gold: '#D9A441',
  goldLight: '#FFF5D6',
  border: '#DCE5F5',
  bg: '#F7FAFF',
  darkBlue: '#061B57',
};

const courses = [
  ['Java Development', javaLogo, 'Bestseller', 'Master Java programming, OOP concepts and enterprise development with practical projects.', ['Core Java','OOP','Collections','Spring Boot','SQL']],
  ['Python Development', pythonLogo, 'Popular', 'Build strong Python fundamentals and develop real-world applications with confidence.', ['Python','OOP','Data Structures','Django','Projects']],
  ['Java Full Stack', javaFullStack, 'Career Track', 'Become a complete full-stack developer with Java, Spring Boot, React and databases.', ['Java','Spring Boot','HTML/CSS','React','MySQL']],
  ['Python Full Stack', pythonFullStack, 'Trending', 'Learn modern full-stack development using Python, Django, React and databases.', ['Python','Django','React','JavaScript','PostgreSQL']],
  ['MERN Stack Development', mernStack, 'Full Stack', 'Build scalable web applications using MongoDB, Express, React and Node.js.', ['MongoDB','Express','React','Node.js','Projects']],
  ['Data Analyst', dataAnalytics, 'In Demand', 'Turn business data into insights and make data-driven decisions using modern tools.', ['Excel','SQL','Python','Power BI','Visualization']],
  ['Generative AI', genaiLogo, 'New', 'Explore modern Generative AI, LLMs, prompt engineering and intelligent AI applications.', ['AI/ML','Prompt Engineering','LLMs','LangChain','AI Projects']],
  ['Cloud & DevOps', devops, 'Future Skills', 'Learn cloud technologies, deployment, DevOps practices and production workflows.', ['AWS','Linux','Docker','CI/CD','DevOps']],
  ['Java with SQL', javaSqlLogo, 'Popular', 'Learn Java programming together with SQL database concepts and practical application development.', ['Core Java','OOP','SQL','MySQL','Projects']],
  ['Python with SQL', pythonSqlLogo, 'Career Track', 'Build strong Python programming and SQL database skills through practical real-world projects.', ['Python','SQL','MySQL','Data Handling','Projects']]
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
  ['🏆','Career-Focused Learning','Follow structured learning paths designed around real-world career requirements.'],
  ['📜','Course Certification','Complete your course and showcase your skills with a professional certificate.'],
  ['💬','Mentor Support','Get guidance, doubt clarification and learning support throughout your journey.']
];

const whyChooseUs = [
  ['🎯','Job-Oriented Curriculum','Learn technologies and practical skills aligned with current industry requirements.'],
  ['👨‍💻','Practical Training','Build applications and projects instead of depending only on theory.'],
  ['🧑‍🏫','Expert Mentorship','Get continuous guidance from trainers who help you understand concepts clearly.'],
  ['💼','Career Preparation','Prepare for technical interviews, projects, resumes and real-world development.'],
  ['🚀','Real-World Projects','Develop portfolio-ready projects that demonstrate your technical capabilities.'],
  ['🤝','Personalized Support','Get help with doubts, assignments, projects and your overall learning journey.']
];

const testimonials = [
  ['Rahul K.','Software Developer','The practical teaching approach helped me understand programming concepts much faster. The projects were extremely useful.'],
  ['Divya S.','Data Analyst','The Python and Data Analytics training gave me confidence to work with real-world datasets and build my portfolio.'],
  ['Suresh M.','Full Stack Developer','The trainers explain every topic clearly and provide excellent project guidance. A great place to start a tech career.']
];

const button = {
  border: 'none', borderRadius: 30, padding: '14px 26px',
  fontWeight: 800, fontSize: 15, cursor: 'pointer'
};

export default function Home() {
  const navigate = useNavigate();
  const go = path => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () =>
    window.open('https://wa.me/919390642779', '_blank', 'noopener,noreferrer');

  return (
    <div style={{fontFamily:"Inter,'Segoe UI',Arial,sans-serif",color:C.text,background:C.white,overflowX:'hidden'}}>
      <style>{`
        .card:hover{transform:translateY(-7px)!important;box-shadow:0 18px 40px rgba(7,91,255,.12)!important;border-color:#8BDFFF!important}
        .btn:hover{transform:translateY(-2px);box-shadow:0 10px 25px rgba(7,91,255,.25)}
        .cat:hover{transform:translateY(-6px)!important;border-color:#00BFFF!important;box-shadow:0 15px 30px rgba(0,140,255,.12)!important}
        .outline:hover{background:#075BFF!important;color:#fff!important}
        @media(max-width:1100px){.courses{grid-template-columns:repeat(2,1fr)!important}.cats{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:900px){.hero{flex-direction:column!important}.heroContent,.heroVisual{max-width:100%!important;width:100%!important}.features,.whyGrid{grid-template-columns:repeat(2,1fr)!important}.demo{grid-template-columns:1fr!important}.testimonials{grid-template-columns:1fr!important}}
        @media(max-width:600px){.hero{padding:50px 5%!important}.heroTitle{font-size:40px!important}.sectionTitle{font-size:32px!important}.courses,.cats,.features,.whyGrid{grid-template-columns:1fr!important}.heroImage{height:350px!important}.demoImage{height:350px!important}.stats{gap:12px!important}.divider{display:none!important}.bottomStats{grid-template-columns:repeat(2,1fr)!important}}
      `}</style>

      <Header />

      {/* HERO */}
      <section className="hero" style={{
        minHeight:650,padding:'70px 6%',display:'flex',alignItems:'center',
        gap:60,position:'relative',overflow:'hidden',
        background:`linear-gradient(120deg,${C.silver},#fff 50%,${C.cyanSoft})`
      }}>
        <div style={{position:'absolute',width:450,height:450,borderRadius:'50%',background:'rgba(0,140,255,.07)',right:-150,top:-130}} />

        <div className="heroContent" style={{flex:1,maxWidth:620,zIndex:2}}>
          <div style={{
            display:'inline-block',padding:'9px 17px',borderRadius:30,
            background:C.white,color:C.blue,fontSize:12,fontWeight:900,
            letterSpacing:1.2,marginBottom:20,boxShadow:'0 7px 22px rgba(7,91,255,.10)'
          }}>
            🎓 LEARN • PRACTICE • BUILD • GROW
          </div>

          <h1 className="heroTitle" style={{
            fontFamily:"Georgia,'Times New Roman',serif",fontSize:58,
            lineHeight:1.04,margin:'0 0 20px',color:C.navy
          }}>
            Build Your Future<br />
            With <span style={{color:C.blue}}>Vighnavi Academy</span>
          </h1>

          <p style={{fontSize:20,lineHeight:1.5,fontWeight:600,color:C.darkBlue,margin:'0 0 12px'}}>
            Industry-focused technical education designed to transform learners into confident, job-ready professionals.
          </p>

          <p style={{fontSize:16,lineHeight:1.7,color:C.muted,maxWidth:590,margin:'0 0 28px'}}>
            Learn Java, Python, Full Stack Development, MERN Stack, Data Analytics and Generative AI through practical learning, expert mentorship and real-world projects.
          </p>

          <div style={{display:'flex',gap:14,flexWrap:'wrap',marginBottom:32}}>
            <button className="btn" style={{...button,background:C.blue,color:C.white}} onClick={()=>go('/courses')}>
              Explore Courses →
            </button>
            <button className="btn" style={{...button,background:C.white,color:C.darkBlue,border:`1px solid ${C.gold}`}} onClick={()=>go('/contact')}>
              Book a Demo ↗
            </button>
          </div>

          <div className="stats" style={{display:'flex',alignItems:'center',gap:18,flexWrap:'wrap'}}>
            {[
              ['5,000+','Learners'],['50+','Expert Mentors'],
              ['8+','Career Courses'],['95%','Career Support']
            ].map((s,i)=>(
              <React.Fragment key={s[1]}>
                {i>0&&<div className="divider" style={{width:1,height:38,background:C.border}}/>}
                <div>
                  <strong style={{display:'block',fontSize:18,color:C.blue}}>{s[0]}</strong>
                  <span style={{fontSize:12,color:C.muted}}>{s[1]}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="heroVisual" style={{flex:1,maxWidth:600,minWidth:300,position:'relative'}}>
          <div className="heroImage" style={{height:470,borderRadius:32,overflow:'hidden',position:'relative',boxShadow:'0 25px 55px rgba(3,27,87,.20)'}}>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=90"
              alt="Students learning together"
              style={{width:'100%',height:'100%',objectFit:'cover'}}
            />
            <div style={{position:'absolute',inset:0,background:'linear-gradient(0deg,rgba(2,8,23,.82),transparent 60%)'}}/>
            <div style={{position:'absolute',bottom:30,left:30,color:C.white}}>
              <small style={{color:C.cyan,fontWeight:900,letterSpacing:3}}>SKILLS</small>
              <strong style={{display:'block',fontSize:27}}>Create Opportunities</strong>
              <span>Your Future Starts Here</span>
            </div>
          </div>

          <div style={{position:'absolute',top:'8%',left:'-5%',padding:'14px 18px',background:C.white,color:C.blue,borderRadius:15,fontSize:14,fontWeight:800,boxShadow:'0 12px 30px rgba(0,50,100,.15)'}}>
            💻 Practical Learning
          </div>
          <div style={{position:'absolute',bottom:'13%',right:'-3%',padding:'14px 18px',background:C.white,color:C.blue,borderRadius:15,fontSize:14,fontWeight:800,boxShadow:'0 12px 30px rgba(0,50,100,.15)'}}>
            🚀 Career Ready
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section style={{padding:'23px 6%',background:C.navy,color:C.white,display:'flex',justifyContent:'space-around',gap:20,flexWrap:'wrap',fontWeight:700,fontSize:14}}>
        {['✓ Live Interactive Classes','✓ Industry Experts','✓ Real-World Projects','✓ Certification','✓ Career Guidance'].map(x=><div key={x}>{x}</div>)}
      </section>

      {/* CATEGORIES */}
      <section style={{padding:'80px 6%'}}>
        <SectionTitle eyebrow="EXPLORE LEARNING" title={<>Explore Top <span style={{color:C.blue}}>Categories</span></>} />
        <div className="cats" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:18}}>
          {categories.map(c=>(
            <div className="cat" key={c[1]} onClick={()=>go('/courses')} style={{
              padding:26,background:`linear-gradient(145deg,#fff,${C.cyanSoft})`,
              border:`1px solid ${C.border}`,borderRadius:20,textAlign:'center',
              cursor:'pointer',transition:'all .3s'
            }}>
              <div style={{width:62,height:62,borderRadius:17,background:C.white,display:'flex',alignItems:'center',justifyContent:'center',fontSize:30,margin:'0 auto 14px',boxShadow:'0 6px 18px rgba(0,90,180,.08)'}}>{c[0]}</div>
              <h3 style={{fontSize:17,margin:'0 0 5px',color:C.darkBlue}}>{c[1]}</h3>
              <p style={{margin:'0 0 10px',fontSize:13,color:C.muted}}>{c[2]}</p>
              <span style={{fontSize:12,color:C.blue,fontWeight:800}}>Explore →</span>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section style={{padding:'80px 6%',background:C.silver}}>
        <SectionTitle eyebrow="WHY VIGHNAVI ACADEMY" title={<>Learn Skills That <span style={{color:C.blue}}>Matter</span></>} subtitle="A practical learning experience focused on confidence, skills and career growth." />
        <div className="features" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20}}>
          {features.map(f=>(
            <div className="card" key={f[1]} style={{
              padding:28,background:C.white,border:`1px solid ${C.border}`,borderRadius:20,
              textAlign:'center',transition:'all .3s'
            }}>
              <div style={{width:62,height:62,borderRadius:17,background:C.cyanSoft,display:'flex',alignItems:'center',justifyContent:'center',fontSize:29,margin:'0 auto 16px'}}>{f[0]}</div>
              <h3 style={{fontSize:18,color:C.darkBlue,margin:'0 0 9px'}}>{f[1]}</h3>
              <p style={{fontSize:14,lineHeight:1.6,color:C.muted,margin:0}}>{f[2]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{padding:'80px 6%',background:C.white}}>
        <SectionTitle eyebrow="WHY CHOOSE US" title={<>Why Choose <span style={{color:C.blue}}>Vighnavi Academy?</span></>} subtitle="More than just courses — we focus on practical skills, mentorship and career-ready learning." />

        <div style={{maxWidth:1000,margin:'0 auto 32px',padding:25,borderRadius:20,background:`linear-gradient(135deg,${C.navy},${C.royal})`,color:C.white,display:'flex',gap:20,alignItems:'center'}}>
          <div style={{fontSize:35}}>⭐</div>
          <div>
            <h3 style={{margin:'0 0 6px',fontSize:21}}>Your Learning. Your Skills. Your Career.</h3>
            <p style={{margin:0,lineHeight:1.6,color:'#DDEAFF',fontSize:14}}>
              We provide a structured learning environment where students learn technologies, practice concepts, build projects and prepare for real-world opportunities.
            </p>
          </div>
        </div>

        <div className="whyGrid" style={{maxWidth:1100,margin:'auto',display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20}}>
          {whyChooseUs.map((w,i)=>(
            <div className="card" key={w[1]} style={{
              padding:25,minHeight:165,position:'relative',display:'flex',gap:15,
              background:C.silver,border:`1px solid ${C.border}`,borderRadius:20,transition:'all .3s'
            }}>
              <div style={{minWidth:55,width:55,height:55,borderRadius:15,background:C.white,display:'flex',alignItems:'center',justifyContent:'center',fontSize:26}}>{w[0]}</div>
              <div>
                <h3 style={{margin:'2px 0 8px',fontSize:17,color:C.darkBlue}}>{w[1]}</h3>
                <p style={{margin:0,fontSize:13,lineHeight:1.6,color:C.muted}}>{w[2]}</p>
              </div>
              <b style={{position:'absolute',right:14,bottom:-8,fontSize:55,color:'rgba(7,91,255,.06)'}}>0{i+1}</b>
            </div>
          ))}
        </div>

        <div className="bottomStats" style={{maxWidth:1000,margin:'35px auto 0',display:'grid',gridTemplateColumns:'repeat(4,1fr)',background:C.navy,borderRadius:18,padding:20}}>
          {[['100%','Practical Approach'],['24/7','Learning Resources'],['100+','Practice Opportunities'],['1:1','Mentor Guidance']].map(x=>(
            <div key={x[1]} style={{textAlign:'center',color:C.white,borderRight:`1px solid rgba(255,255,255,.15)`}}>
              <strong style={{display:'block',color:C.cyan,fontSize:20}}>{x[0]}</strong>
              <span style={{fontSize:12}}>{x[1]}</span>
            </div>
          ))}
        </div>
      </section>

      {/* COURSES */}
      <section style={{padding:'80px 6%',background:C.bg}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'end',gap:20,flexWrap:'wrap',marginBottom:38}}>
          <div>
            <small style={{color:C.blue,fontWeight:900,letterSpacing:3}}>OUR PROGRAMS</small>
            <h2 className="sectionTitle" style={{fontFamily:"Georgia,'Times New Roman',serif",fontSize:43,color:C.navy,margin:'8px 0'}}>Build Skills. <span style={{color:C.blue}}>Build Your Career.</span></h2>
            <p style={{color:C.muted,margin:0}}>Explore our industry-focused technical courses.</p>
          </div>
          <button className="outline" style={{...button,background:C.white,color:C.blue,border:`1px solid ${C.blue}`}} onClick={()=>go('/courses')}>View All Courses →</button>
        </div>

        <div className="courses" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:22}}>
          {courses.map((c,i)=>(
            <div className="card" key={c[0]} style={{background:C.white,border:`1px solid ${C.border}`,borderRadius:20,overflow:'hidden',transition:'all .3s'}}>
              <div style={{height:185,position:'relative',overflow:'hidden'}}>
                <img src={c[1]} alt={c[0]} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                <div style={{position:'absolute',inset:0,background:'linear-gradient(0deg,rgba(2,8,23,.72),transparent 65%)'}}/>
                <span style={{position:'absolute',top:14,left:14,padding:'6px 11px',borderRadius:20,background:i%2?C.blue:C.gold,color:C.white,fontSize:10,fontWeight:900}}>{c[2]}</span>
                <div style={{position:'absolute',bottom:14,left:16,color:C.white,fontSize:10,letterSpacing:2,fontWeight:800}}>VIGHNAVI ACADEMY</div>
              </div>

              <div style={{padding:19}}>
                <div style={{color:C.gold,fontSize:12,fontWeight:800,marginBottom:8}}>⭐ 4.9 <span style={{color:C.muted}}>(1,500+ learners)</span></div>
                <h3 style={{fontFamily:"Georgia,'Times New Roman',serif",fontSize:20,color:C.darkBlue,margin:'0 0 8px'}}>{c[0]}</h3>
                <p style={{fontSize:13,lineHeight:1.55,color:C.muted,minHeight:60,margin:'0 0 13px'}}>{c[3]}</p>

                <div style={{padding:12,borderRadius:11,background:C.silver,display:'flex',flexDirection:'column',gap:5,marginBottom:15}}>
                  {c[4].map(s=><span key={s} style={{fontSize:11,color:C.darkBlue}}>✓ {s}</span>)}
                </div>

                <button className="btn" style={{...button,width:'100%',padding:'11px 15px',background:C.blue,color:C.white}} onClick={()=>go('/courses')}>
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DEMO */}
      <section className="demo" style={{padding:'80px 6%',display:'grid',gridTemplateColumns:'1fr 1fr',gap:55,alignItems:'center'}}>
        <div className="demoImage" style={{height:490,borderRadius:28,overflow:'hidden',position:'relative',boxShadow:'0 20px 50px rgba(3,27,87,.15)'}}>
          <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1100&q=90" alt="Students learning" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
          <div style={{position:'absolute',inset:0,background:'linear-gradient(0deg,rgba(2,8,23,.8),transparent 65%)'}}/>
          <div style={{position:'absolute',bottom:30,left:30,color:C.white}}>
            <span style={{display:'block',fontSize:48,color:C.cyan}}>“</span>
            <strong style={{fontSize:27}}>Learn Today.<br/>Lead Tomorrow.</strong>
          </div>
        </div>

        <div>
          <small style={{color:C.blue,fontWeight:900,letterSpacing:3}}>START YOUR JOURNEY</small>
          <h2 className="sectionTitle" style={{fontFamily:"Georgia,'Times New Roman',serif",fontSize:43,color:C.navy,margin:'10px 0 18px'}}>Experience Our <span style={{color:C.blue}}>Learning Style</span></h2>
          <p style={{color:C.muted,fontSize:16,lineHeight:1.7}}>
            Join a demo class and understand our teaching approach before choosing your learning path. Meet the trainer, explore the curriculum and ask your questions.
          </p>

          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12,margin:'22px 0'}}>
            {['Meet the Trainer','Understand Course Structure','Experience Practical Teaching','Ask Your Questions'].map(x=><div key={x} style={{fontSize:13,fontWeight:700,color:C.darkBlue}}>✓ {x}</div>)}
          </div>

          <div style={{padding:15,background:C.goldLight,borderLeft:`4px solid ${C.gold}`,borderRadius:8,marginBottom:20}}>
            <strong style={{color:C.darkBlue}}>Demo Class Confirmation</strong>
            <p style={{fontSize:12,color:C.muted,margin:'5px 0 0'}}>Demo class confirmation fees, if applicable, will be discussed separately.</p>
          </div>

          <button className="btn" style={{...button,background:C.blue,color:C.white}} onClick={()=>go('/contact')}>Schedule Demo Class →</button>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{padding:'80px 6%',background:C.silver,textAlign:'center'}}>
        <SectionTitle eyebrow="LEARNER STORIES" title={<>What Our <span style={{color:C.blue}}>Learners Say</span></>} subtitle="Real learning experiences from our growing community." />

        <div className="testimonials" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:22,textAlign:'left'}}>
          {testimonials.map(t=>(
            <div className="card" key={t[0]} style={{background:C.white,border:`1px solid ${C.border}`,borderRadius:20,padding:27,transition:'all .3s'}}>
              <div style={{fontSize:45,color:C.gold,fontFamily:'Georgia',lineHeight:.7}}>“</div>
              <div style={{color:C.gold,letterSpacing:3,margin:'10px 0'}}>★★★★★</div>
              <p style={{fontSize:14,lineHeight:1.7,color:C.muted,minHeight:90}}>{t[2]}</p>
              <div style={{borderTop:`1px solid ${C.border}`,paddingTop:15}}>
                <strong style={{display:'block',color:C.darkBlue}}>{t[0]}</strong>
                <span style={{fontSize:12,color:C.muted}}>{t[1]}</span>
              </div>
            </div>
          ))}
        </div>

        <button className="outline" style={{...button,marginTop:32,background:C.white,color:C.blue,border:`1px solid ${C.blue}`}} onClick={()=>go('/contact')}>
          Read More Success Stories →
        </button>
      </section>

      {/* FINAL CTA */}
      <section style={{padding:'85px 6%',background:`linear-gradient(125deg,${C.navy},${C.royal},${C.blue})`,color:C.white,textAlign:'center'}}>
        <small style={{color:C.cyan,letterSpacing:3,fontWeight:900}}>YOUR FUTURE STARTS HERE</small>
        <h2 style={{fontFamily:"Georgia,'Times New Roman',serif",fontSize:46,margin:'12px 0'}}>Ready to Learn, Build & <span style={{color:C.cyan}}>Grow?</span></h2>
        <p style={{color:'#DDEAFF',fontSize:17,marginBottom:28}}>Take the first step toward a stronger technical career with Vighnavi Academy.</p>
        <div style={{display:'flex',justifyContent:'center',gap:14,flexWrap:'wrap'}}>
          <button className="btn" style={{...button,background:C.gold,color:C.navy}} onClick={()=>go('/courses')}>Explore Courses →</button>
          <button className="btn" style={{...button,background:'transparent',color:C.white,border:'1px solid rgba(255,255,255,.7)'}} onClick={()=>go('/contact')}>Contact Our Team</button>
        </div>
      </section>

      {/* WHATSAPP */}
      <button
        onClick={openWhatsApp}
        aria-label="Chat with Vighnavi Academy on WhatsApp"
        style={{
          position:'fixed',right:24,bottom:24,width:60,height:60,borderRadius:'50%',
          border:'none',background:'#25D366',color:C.white,fontSize:27,cursor:'pointer',
          zIndex:9999,boxShadow:'0 8px 25px rgba(37,211,102,.4)'
        }}
      >
        📞
      </button>

      <Footer />
    </div>
  );
}

function SectionTitle({eyebrow,title,subtitle}) {
  return (
    <div style={{textAlign:'center',maxWidth:850,margin:'0 auto 42px'}}>
      <small style={{color:C.blue,letterSpacing:3,fontSize:11,fontWeight:900}}>{eyebrow}</small>
      <h2 className="sectionTitle" style={{fontFamily:"Georgia,'Times New Roman',serif",fontSize:43,lineHeight:1.15,color:C.navy,margin:'9px 0 10px'}}>{title}</h2>
      {subtitle && <p style={{color:C.muted,fontSize:15,lineHeight:1.6,margin:0}}>{subtitle}</p>}
    </div>
  );
}
