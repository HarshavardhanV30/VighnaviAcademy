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

export default function Home() {
  const navigate = useNavigate();

  const go = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const courses = [
    {
      title: 'Java Development',
      image: javaLogo,
      tag: 'Bestseller',
      description: 'Master Java programming, OOP concepts and enterprise development with practical projects.',
      skills: ['Core Java', 'OOP', 'Collections', 'Spring Boot', 'SQL'],
      rating: '4.9',
      learners: '2,850+',
      color: '#087f79'
    },
    {
      title: 'Python Development',
      image: pythonLogo,
      tag: 'Popular',
      description: 'Build strong Python fundamentals and develop real-world applications with confidence.',
      skills: ['Python', 'OOP', 'Data Structures', 'Django', 'Projects'],
      rating: '4.9',
      learners: '3,200+',
      color: '#2563eb'
    },
    {
      title: 'Java Full Stack',
      image: javaFullStack,
      tag: 'Career Track',
      description: 'Become a complete full-stack developer with Java, Spring Boot, React and databases.',
      skills: ['Java', 'Spring Boot', 'HTML/CSS', 'React', 'MySQL'],
      rating: '4.8',
      learners: '2,100+',
      color: '#0f766e'
    },
    {
      title: 'Python Full Stack',
      image: pythonFullStack,
      tag: 'Trending',
      description: 'Learn modern full-stack development using Python, Django, React and databases.',
      skills: ['Python', 'Django', 'React', 'JavaScript', 'PostgreSQL'],
      rating: '4.9',
      learners: '2,400+',
      color: '#0284c7'
    },
    {
      title: 'MERN Stack Development',
      image: mernStack,
      tag: 'Full Stack',
      description: 'Build scalable web applications using MongoDB, Express, React and Node.js.',
      skills: ['MongoDB', 'Express', 'React', 'Node.js', 'Projects'],
      rating: '4.8',
      learners: '1,900+',
      color: '#059669'
    },
    {
      title: 'Data Analyst',
      image: dataAnalytics,
      tag: 'In Demand',
      description: 'Turn business data into insights and make data-driven decisions using modern tools.',
      skills: ['Excel', 'SQL', 'Python', 'Power BI', 'Visualization'],
      rating: '4.8',
      learners: '1,750+',
      color: '#1d4ed8'
    },
    {
      title: 'Generative AI',
      image: genaiLogo,
      tag: 'New',
      description: 'Explore modern Generative AI, LLMs, prompt engineering and intelligent AI applications.',
      skills: ['AI/ML', 'Prompt Engineering', 'LLMs', 'LangChain', 'AI Projects'],
      rating: '4.9',
      learners: '1,500+',
      color: '#115e59'
    },
    {
      title: 'Cloud & DevOps',
      image: devops,
      tag: 'Future Skills',
      description: 'Learn cloud technologies, deployment, DevOps practices and production workflows.',
      skills: ['AWS', 'Linux', 'Docker', 'CI/CD', 'DevOps'],
      rating: '4.8',
      learners: '1,300+',
      color: '#0369a1'
    },
    {
      title: 'Java with SQL',
      image: javaSqlLogo,
      tag: 'Popular',
      description: 'Learn Java programming together with SQL database concepts and practical application development.',
      skills: ['Core Java', 'OOP', 'SQL', 'MySQL', 'Projects'],
      rating: '4.9',
      learners: '1,850+',
      color: '#7c3aed'
    },
    {
      title: 'Python with SQL',
      image: pythonSqlLogo,
      tag: 'Career Track',
      description: 'Build strong Python programming and SQL database skills through practical real-world projects.',
      skills: ['Python', 'SQL', 'MySQL', 'Data Handling', 'Projects'],
      rating: '4.9',
      learners: '1,950+',
      color: '#0369a1'
    }
  ];

  const categories = [
    { icon: '💻', title: 'Web Development', sub: 'Full Stack' },
    { icon: '🐍', title: 'Python', sub: 'Programming' },
    { icon: '☕', title: 'Java', sub: 'Development' },
    { icon: '📊', title: 'Data Analytics', sub: 'Business Intelligence' },
    { icon: '🤖', title: 'Generative AI', sub: 'AI & Automation' },
    { icon: '☁️', title: 'Cloud Computing', sub: 'AWS & DevOps' },
    { icon: '⚛️', title: 'React Development', sub: 'Frontend' },
    { icon: '🗄️', title: 'Database', sub: 'SQL & NoSQL' }
  ];

  const features = [
    {
      icon: '🎓',
      title: 'Industry Expert Trainers',
      desc: 'Learn directly from experienced professionals with practical industry knowledge.'
    },
    {
      icon: '🎥',
      title: 'Live & Recorded Classes',
      desc: 'Attend interactive classes and access learning resources for flexible preparation.'
    },
    {
      icon: '🛠️',
      title: 'Hands-on Projects',
      desc: 'Work on practical projects that help you develop job-ready technical skills.'
    },
    {
      icon: '🏆',
      title: 'Career-Focused Learning',
      desc: 'Follow structured learning paths designed around real-world career requirements.'
    },
    {
      icon: '📜',
      title: 'Course Certification',
      desc: 'Complete your course and showcase your skills with a professional certificate.'
    },
    {
      icon: '💬',
      title: 'Mentor Support',
      desc: 'Get guidance, doubt clarification and learning support throughout your journey.'
    }
  ];

  const whyChooseUs = [
    {
      icon: '🎯',
      title: 'Job-Oriented Curriculum',
      desc: 'Learn technologies and practical skills aligned with current industry requirements.'
    },
    {
      icon: '👨‍💻',
      title: 'Practical Training',
      desc: 'Build applications and projects while learning instead of depending only on theory.'
    },
    {
      icon: '🧑‍🏫',
      title: 'Expert Mentorship',
      desc: 'Get continuous guidance from trainers who help you understand concepts clearly.'
    },
    {
      icon: '💼',
      title: 'Career Preparation',
      desc: 'Prepare for technical interviews, projects, resumes and real-world development.'
    },
    {
      icon: '🚀',
      title: 'Real-World Projects',
      desc: 'Develop portfolio-ready projects that demonstrate your technical capabilities.'
    },
    {
      icon: '🤝',
      title: 'Personalized Support',
      desc: 'Get help with doubts, assignments, projects and your overall learning journey.'
    }
  ];

  const testimonials = [
    {
      quote: 'The practical teaching approach helped me understand programming concepts much faster. The projects were extremely useful.',
      name: 'Rahul K.',
      role: 'Software Developer'
    },
    {
      quote: 'The Python and Data Analytics training gave me confidence to work with real-world datasets and build my portfolio.',
      name: 'Divya S.',
      role: 'Data Analyst'
    },
    {
      quote: 'The trainers explain every topic clearly and provide excellent project guidance. A great place to start a tech career.',
      name: 'Suresh M.',
      role: 'Full Stack Developer'
    }
  ];

  const openWhatsApp = () => {
    window.open('https://wa.me/919390642779', '_blank', 'noopener,noreferrer');
  };

  return (
    <div style={styles.container}>
      <style>{`
        @keyframes floatUp {
          0%,100%{transform:translateY(0)}
          50%{transform:translateY(-10px)}
        }
        @keyframes pulseGlow {
          0%,100%{box-shadow:0 0 0 0 rgba(10,125,118,.25)}
          50%{box-shadow:0 0 0 12px rgba(10,125,118,0)}
        }
        @keyframes whatsappPulse {
          0%,100%{box-shadow:0 0 0 0 rgba(37,211,102,.35)}
          50%{box-shadow:0 0 0 14px rgba(37,211,102,0)}
        }
        .home-card:hover{
          transform:translateY(-8px)!important;
          box-shadow:0 20px 45px rgba(5,70,68,.13)!important;
        }
        .home-button:hover{
          transform:translateY(-2px);
          box-shadow:0 12px 25px rgba(4,104,98,.25);
        }
        .outline-button:hover{
          background:#075e59!important;
          color:#fff!important;
        }
        .category-card:hover{
          transform:translateY(-7px)!important;
          border-color:#0b8179!important;
          box-shadow:0 15px 35px rgba(8,111,105,.12)!important;
        }
        .why-card:hover{
          transform:translateY(-8px)!important;
          box-shadow:0 20px 45px rgba(5,70,68,.14)!important;
          border-color:#0b8179!important;
        }
        .whatsapp-button:hover{
          transform:scale(1.08);
        }
        @media(max-width:1100px){
          .home-course-grid{grid-template-columns:repeat(2,1fr)}
        }
        @media(max-width:900px){
          .home-hero{flex-direction:column!important}
          .home-hero-content{max-width:100%!important}
          .home-hero-visual{max-width:100%!important;width:100%!important}
          .home-category-grid{grid-template-columns:repeat(2,1fr)!important}
          .home-feature-grid{grid-template-columns:repeat(2,1fr)!important}
          .home-course-grid{grid-template-columns:repeat(2,1fr)!important}
          .home-demo-section{grid-template-columns:1fr!important}
          .home-testimonial-grid{grid-template-columns:1fr!important}
          .home-why-grid{grid-template-columns:repeat(2,1fr)!important}
        }
        @media(max-width:600px){
          .home-hero{padding:50px 5%!important}
          .home-hero-title{font-size:40px!important}
          .home-section-title{font-size:34px!important}
          .home-category-grid{grid-template-columns:1fr!important}
          .home-feature-grid{grid-template-columns:1fr!important}
          .home-course-grid{grid-template-columns:1fr!important}
          .home-why-grid{grid-template-columns:1fr!important}
          .home-demo-points{grid-template-columns:1fr!important}
          .home-hero-image-card{height:380px!important}
          .home-demo-image{height:380px!important}
          .home-mini-divider{display:none!important}
        }
      `}</style>

      <Header />

      <section style={styles.hero} className="home-hero">
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent} className="home-hero-content">
          <div style={styles.heroBadge}>🎓 LEARN • PRACTICE • BUILD • GROW</div>
          <h1 style={styles.heroTitle} className="home-hero-title">
            Build Your Future
            <br />
            With <span style={styles.goldText}>Vighnavi Academy</span>
          </h1>
          <p style={styles.heroLead}>
            Industry-focused technical education designed to transform
            learners into confident, job-ready professionals.
          </p>
          <p style={styles.heroDescription}>
            Learn Java, Python, Full Stack Development, MERN Stack,
            Data Analytics and Generative AI through practical learning,
            expert mentorship and real-world projects.
          </p>
          <div style={styles.heroButtons}>
            <button className="home-button" style={styles.primaryButton} onClick={() => go('/courses')}>
              Explore Courses <span>→</span>
            </button>
            <button className="home-button" style={styles.secondaryButton} onClick={() => go('/contact')}>
              Book a Demo <span>↗</span>
            </button>
          </div>
          <div style={styles.heroMiniStats}>
            <div>
              <strong style={styles.statNumber}>5,000+</strong>
              <span style={styles.statLabel}>Learners</span>
            </div>
            <div style={styles.miniDivider} className="home-mini-divider"></div>
            <div>
              <strong style={styles.statNumber}>50+</strong>
              <span style={styles.statLabel}>Expert Mentors</span>
            </div>
            <div style={styles.miniDivider} className="home-mini-divider"></div>
            <div>
              <strong style={styles.statNumber}>8+</strong>
              <span style={styles.statLabel}>Career Courses</span>
            </div>
            <div style={styles.miniDivider} className="home-mini-divider"></div>
            <div>
              <strong style={styles.statNumber}>95%</strong>
              <span style={styles.statLabel}>Career Support</span>
            </div>
          </div>
        </div>

        <div style={styles.heroVisual} className="home-hero-visual">
          <div style={styles.heroImageCard} className="home-hero-image-card">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=90"
              alt="Students learning together"
              style={styles.heroImage}
            />
            <div style={styles.imageGradient}></div>
            <div style={styles.heroImageText}>
              <span>SKILLS</span>
              <strong>Create Opportunities</strong>
              <small>Your Future Starts Here</small>
            </div>
          </div>
          <div style={{ ...styles.floatingCard, top: '8%', left: '-5%' }}>
            💻 <strong>Practical Learning</strong>
          </div>
          <div style={{ ...styles.floatingCard, bottom: '13%', right: '-3%' }}>
            🚀 <strong>Career Ready</strong>
          </div>
        </div>
      </section>

      <section style={styles.trustBar}>
        <div><span>✓</span> Live Interactive Classes</div>
        <div><span>✓</span> Industry Experts</div>
        <div><span>✓</span> Real-World Projects</div>
        <div><span>✓</span> Certification</div>
        <div><span>✓</span> Career Guidance</div>
      </section>

      <section style={styles.section}>
        <div style={styles.sectionHeading}>
          <small style={styles.eyebrow}>EXPLORE LEARNING</small>
          <h2 style={styles.sectionTitle} className="home-section-title">
            Explore Top <span style={styles.goldText}>Categories</span>
          </h2>
          <p style={styles.sectionSubtitle}>
            Choose the right technology path and start building your future.
          </p>
        </div>

        <div style={styles.categoryGrid} className="home-category-grid">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="category-card"
              style={styles.categoryCard}
              onClick={() => go('/courses')}
            >
              <div style={styles.categoryIcon}>{cat.icon}</div>
              <h3 style={styles.categoryTitle}>{cat.title}</h3>
              <p style={styles.categorySub}>{cat.sub}</p>
              <span style={styles.categoryArrow}>Explore →</span>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.whySection}>
        <div style={styles.sectionHeading}>
          <small style={styles.eyebrow}>WHY VIGHNAVI ACADEMY</small>
          <h2 style={styles.sectionTitle} className="home-section-title">
            Learn Skills That <span style={styles.goldText}>Matter</span>
          </h2>
          <p style={styles.sectionSubtitle}>
            A practical learning experience focused on confidence, skills and career growth.
          </p>
        </div>

        <div style={styles.featureGrid} className="home-feature-grid">
          {features.map((feature, index) => (
            <div key={index} className="home-card" style={styles.featureCard}>
              <div style={styles.featureIcon}>{feature.icon}</div>
              <h3 style={styles.featureTitle}>{feature.title}</h3>
              <p style={styles.featureDescription}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.whyChooseSection}>
        <div style={styles.sectionHeading}>
          <small style={styles.eyebrow}>WHY CHOOSE US</small>
          <h2 style={styles.sectionTitle} className="home-section-title">
            Why Choose <span style={styles.goldText}>Vighnavi Academy?</span>
          </h2>
          <p style={styles.sectionSubtitle}>
            More than just courses — we focus on practical skills, mentorship
            and career-ready learning.
          </p>
        </div>

        <div style={styles.whyChooseIntro}>
          <div style={styles.whyChooseIntroIcon}>⭐</div>
          <div>
            <h3 style={styles.whyChooseIntroTitle}>
              Your Learning. Your Skills. Your Career.
            </h3>
            <p style={styles.whyChooseIntroText}>
              We provide a structured learning environment where students can
              learn technologies, practice concepts, build projects and prepare
              themselves for real-world opportunities.
            </p>
          </div>
        </div>

        <div style={styles.whyChooseGrid} className="home-why-grid">
          {whyChooseUs.map((item, index) => (
            <div key={index} className="why-card" style={styles.whyChooseCard}>
              <div style={styles.whyChooseIcon}>{item.icon}</div>
              <div style={styles.whyChooseContent}>
                <h3 style={styles.whyChooseTitle}>{item.title}</h3>
                <p style={styles.whyChooseDescription}>{item.desc}</p>
              </div>
              <div style={styles.whyChooseNumber}>0{index + 1}</div>
            </div>
          ))}
        </div>

        <div style={styles.whyChooseBottom}>
          <div style={styles.whyChooseBottomItem}>
            <strong>100%</strong>
            <span>Practical Approach</span>
          </div>
          <div style={styles.whyChooseBottomItem}>
            <strong>24/7</strong>
            <span>Learning Resources</span>
          </div>
          <div style={styles.whyChooseBottomItem}>
            <strong>100+</strong>
            <span>Practice Opportunities</span>
          </div>
          <div style={styles.whyChooseBottomItem}>
            <strong>1:1</strong>
            <span>Mentor Guidance</span>
          </div>
        </div>
      </section>

      <section style={styles.courseSection}>
        <div style={styles.courseHeader}>
          <div>
            <small style={styles.eyebrow}>OUR PROGRAMS</small>
            <h2 style={styles.sectionTitle} className="home-section-title">
              Build Skills. <span style={styles.goldText}>Build Your Career.</span>
            </h2>
            <p style={styles.sectionSubtitle}>
              Explore our industry-focused technical courses.
            </p>
          </div>

          <button
            className="outline-button"
            style={styles.outlineButton}
            onClick={() => go('/courses')}
          >
            View All Courses →
          </button>
        </div>

        <div style={styles.courseGrid} className="home-course-grid">
          {courses.map((course, index) => (
            <div key={index} className="home-card" style={styles.courseCard}>
              <div style={styles.courseImageWrapper}>
                <img
                  src={course.image}
                  alt={course.title}
                  style={styles.courseImage}
                />

                <div style={styles.courseImageOverlay}></div>

                <span
                  style={{
                    ...styles.courseTag,
                    background: course.color
                  }}
                >
                  {course.tag}
                </span>

                <div style={styles.courseImageLabel}>
                  <span>VIGHNAVI</span>
                  <strong>ACADEMY</strong>
                </div>
              </div>

              <div style={styles.courseBody}>
                <div style={styles.courseRating}>
                  ⭐ {course.rating} <span>({course.learners} learners)</span>
                </div>

                <h3 style={styles.courseTitle}>{course.title}</h3>

                <p style={styles.courseDescription}>{course.description}</p>

                <div style={styles.skillsBox}>
                  {course.skills.map((skill, skillIndex) => (
                    <span key={skillIndex}>✓ {skill}</span>
                  ))}
                </div>

                <div style={styles.courseFooter}>
                  <span style={styles.learningText}>🎓 Career-focused</span>

                  <button
                    className="home-button"
                    style={styles.courseButton}
                    onClick={() => go('/courses')}
                  >
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.demoSection} className="home-demo-section">
        <div style={styles.demoImageBox} className="home-demo-image">
          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1100&q=90"
            alt="Students in a learning session"
            style={styles.demoImage}
          />
          <div style={styles.demoImageOverlay}></div>
          <div style={styles.demoQuote}>
            <span style={styles.quoteIcon}>“</span>
            <strong>
              Learn Today.
              <br />
              Lead Tomorrow.
            </strong>
          </div>
        </div>

        <div style={styles.demoContent}>
          <small style={styles.eyebrow}>START YOUR JOURNEY</small>

          <h2 style={styles.demoTitle}>
            Experience Our <span style={styles.goldText}>Learning Style</span>
          </h2>

          <p style={styles.demoDescription}>
            Join a demo class and understand our teaching approach before
            choosing your learning path. Meet the trainer, explore the
            curriculum and ask your questions.
          </p>

          <div style={styles.demoPoints} className="home-demo-points">
            <div><span>✓</span><strong>Meet the Trainer</strong></div>
            <div><span>✓</span><strong>Understand Course Structure</strong></div>
            <div><span>✓</span><strong>Experience Practical Teaching</strong></div>
            <div><span>✓</span><strong>Ask Your Questions</strong></div>
          </div>

          <div style={styles.demoNote}>
            <strong>Demo Class Confirmation</strong>
            <p>
              Demo class confirmation fees, if applicable, will be discussed
              separately during the demo/class confirmation process.
            </p>
          </div>

          <button
            className="home-button"
            style={styles.primaryButtonDark}
            onClick={() => go('/contact')}
          >
            Schedule Demo Class →
          </button>
        </div>
      </section>

      <section style={styles.testimonialSection}>
        <div style={styles.sectionHeading}>
          <small style={styles.eyebrow}>LEARNER STORIES</small>

          <h2 style={styles.sectionTitle} className="home-section-title">
            What Our <span style={styles.goldText}>Learners Say</span>
          </h2>

          <p style={styles.sectionSubtitle}>
            Real learning experiences from our growing community.
          </p>
        </div>

        <div style={styles.testimonialGrid} className="home-testimonial-grid">
          {testimonials.map((item, index) => (
            <div key={index} className="home-card" style={styles.testimonialCard}>
              <div style={styles.quoteIcon}>“</div>

              <div style={styles.testimonialStars}>★★★★★</div>

              <p style={styles.testimonialQuote}>{item.quote}</p>

              <div style={styles.userRow}>
                <div style={styles.avatar}>{item.name.charAt(0)}</div>

                <div>
                  <strong style={styles.userName}>{item.name}</strong>
                  <span style={styles.userRole}>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="outline-button"
          style={styles.testimonialButton}
          onClick={() => go('/contact')}
        >
          Read More Success Stories →
        </button>
      </section>

      <section style={styles.finalBanner}>
        <div style={styles.finalBannerGlow}></div>

        <div style={styles.finalContent}>
          <small style={styles.finalEyebrow}>YOUR FUTURE STARTS HERE</small>

          <h2 style={styles.finalTitle}>
            Ready to Learn, Build & <span>Grow?</span>
          </h2>

          <p style={styles.finalDescription}>
            Take the first step toward a stronger technical career with
            Vighnavi Academy.
          </p>

          <div style={styles.finalButtons}>
            <button
              className="home-button"
              style={styles.finalPrimary}
              onClick={() => go('/courses')}
            >
              Explore Courses →
            </button>

            <button
              className="home-button"
              style={styles.finalSecondary}
              onClick={() => go('/contact')}
            >
              Contact Our Team
            </button>
          </div>
        </div>
      </section>

      <button
        className="whatsapp-button"
        style={styles.whatsappButton}
        onClick={openWhatsApp}
        aria-label="Connect with Vighnavi Academy on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <span style={styles.whatsappIcon}> 📞</span>
      </button>
      <Footer />
    </div>
  );
}

const styles = {
  container:{fontFamily:"'Inter','Segoe UI',Arial,sans-serif",background:'#ffffff',color:'#123238',overflowX:'hidden'},
  hero:{minHeight:'650px',background:'linear-gradient(120deg,#eaf8f6 0%,#f8fcfb 48%,#dff3ef 100%)',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'70px 6%',gap:'60px',position:'relative',overflow:'hidden'},
  heroOverlay:{position:'absolute',width:'420px',height:'420px',borderRadius:'50%',background:'rgba(19,125,118,.08)',right:'-100px',top:'-120px'},
  heroContent:{flex:1,maxWidth:'620px',position:'relative',zIndex:2},
  heroBadge:{display:'inline-block',padding:'10px 18px',borderRadius:'30px',background:'#ffffff',color:'#08756f',fontSize:'13px',fontWeight:'800',letterSpacing:'1.2px',marginBottom:'22px',boxShadow:'0 8px 25px rgba(0,70,65,.08)'},
  heroTitle:{fontFamily:"Georgia,'Times New Roman',serif",fontSize:'58px',lineHeight:'1.03',margin:'0 0 22px',color:'#073a40',fontWeight:'700'},
  goldText:{color:'#c28a16'},
  heroLead:{fontSize:'21px',lineHeight:'1.5',fontWeight:'600',color:'#244b52',margin:'0 0 12px'},
  heroDescription:{fontSize:'16px',lineHeight:'1.7',color:'#52686d',maxWidth:'590px',margin:'0 0 30px'},
  heroButtons:{display:'flex',gap:'14px',flexWrap:'wrap',marginBottom:'35px'},
  primaryButton:{border:'none',background:'#066e69',color:'#ffffff',padding:'15px 28px',borderRadius:'30px',fontSize:'16px',fontWeight:'800',cursor:'pointer',transition:'all .3s ease'},
  secondaryButton:{border:'1px solid #c69428',background:'#ffffff',color:'#16444a',padding:'14px 27px',borderRadius:'30px',fontSize:'16px',fontWeight:'800',cursor:'pointer',transition:'all .3s ease'},
  heroMiniStats:{display:'flex',alignItems:'center',gap:'18px',flexWrap:'wrap'},
  statNumber:{display:'block',color:'#075f5a',fontSize:'18px',fontWeight:'900'},
  statLabel:{display:'block',color:'#66777b',fontSize:'12px',marginTop:'3px'},
  miniDivider:{width:'1px',height:'40px',background:'#c8dcd9'},
  heroVisual:{flex:1,maxWidth:'600px',minWidth:'320px',position:'relative'},
  heroImageCard:{height:'470px',borderRadius:'35px',overflow:'hidden',position:'relative',boxShadow:'0 30px 60px rgba(0,67,64,.2)'},
  heroImage:{width:'100%',height:'100%',objectFit:'cover'},
  imageGradient:{position:'absolute',inset:0,background:'linear-gradient(0deg,rgba(0,55,53,.8),transparent 55%)'},
  heroImageText:{position:'absolute',bottom:'35px',left:'35px',color:'#ffffff',display:'flex',flexDirection:'column',gap:'4px'},
  floatingCard:{position:'absolute',zIndex:3,padding:'15px 20px',background:'#ffffff',color:'#075e59',borderRadius:'16px',fontSize:'14px',boxShadow:'0 15px 35px rgba(0,50,48,.15)',animation:'floatUp 3s ease-in-out infinite'},
  trustBar:{padding:'24px 6%',background:'#075d59',color:'#ffffff',display:'flex',justifyContent:'space-around',gap:'20px',flexWrap:'wrap',fontSize:'15px',fontWeight:'700'},
  section:{padding:'80px 6%',background:'#ffffff'},
  sectionHeading:{textAlign:'center',maxWidth:'850px',margin:'0 auto 45px'},
  eyebrow:{display:'block',color:'#08736d',letterSpacing:'3px',fontSize:'12px',fontWeight:'900',marginBottom:'10px'},
  sectionTitle:{fontFamily:"Georgia,'Times New Roman',serif",fontSize:'43px',color:'#073b41',margin:'0 0 10px',lineHeight:'1.15'},
  sectionSubtitle:{color:'#64767b',fontSize:'16px',lineHeight:'1.6',margin:0},
  categoryGrid:{display:'grid',gridTemplateColumns:'repeat(4,minmax(0,1fr))',gap:'18px'},
  categoryCard:{padding:'28px 20px',borderRadius:'20px',background:'linear-gradient(145deg,#f9fdfc,#edf8f6)',border:'1px solid #dcebe8',textAlign:'center',cursor:'pointer',transition:'all .3s ease'},
  categoryIcon:{width:'65px',height:'65px',borderRadius:'18px',background:'#ffffff',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'31px',margin:'0 auto 16px',boxShadow:'0 8px 20px rgba(0,70,65,.08)'},
  categoryTitle:{fontSize:'18px',margin:'0 0 6px',color:'#103f45'},
  categorySub:{margin:'0 0 13px',color:'#718186',fontSize:'14px'},
  categoryArrow:{fontSize:'13px',color:'#08756f',fontWeight:'800'},
  whySection:{padding:'80px 6%',background:'#eef8f6'},
  featureGrid:{display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:'20px'},
  featureCard:{padding:'30px',background:'#ffffff',border:'1px solid #dceae8',borderRadius:'20px',textAlign:'center',transition:'all .3s ease'},
  featureIcon:{width:'65px',height:'65px',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 18px',background:'#edf8f6',borderRadius:'18px',fontSize:'30px'},
  featureTitle:{fontSize:'18px',color:'#103f45',margin:'0 0 10px'},
  featureDescription:{color:'#6c7b80',fontSize:'14px',lineHeight:'1.65',margin:0},
  whyChooseSection:{padding:'85px 6%',background:'linear-gradient(135deg,#f9fcfb 0%,#edf8f6 50%,#ffffff 100%)',position:'relative',overflow:'hidden'},
  whyChooseIntro:{maxWidth:'1000px',margin:'0 auto 35px',padding:'25px 30px',borderRadius:'22px',background:'#ffffff',border:'1px solid #dceae8',display:'flex',alignItems:'center',gap:'22px',boxShadow:'0 12px 35px rgba(0,65,60,.07)'},
  whyChooseIntroIcon:{minWidth:'65px',height:'65px',borderRadius:'18px',background:'#edf8f6',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'30px'},
  whyChooseIntroTitle:{color:'#103f45',fontFamily:"Georgia,'Times New Roman',serif",fontSize:'23px',margin:'0 0 7px'},
  whyChooseIntroText:{color:'#65777b',fontSize:'14px',lineHeight:'1.7',margin:0},
  whyChooseGrid:{maxWidth:'1100px',margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:'20px'},
  whyChooseCard:{position:'relative',background:'#ffffff',border:'1px solid #dceae8',borderRadius:'22px',padding:'27px',display:'flex',alignItems:'flex-start',gap:'17px',minHeight:'175px',transition:'all .3s ease',overflow:'hidden'},
  whyChooseIcon:{minWidth:'58px',width:'58px',height:'58px',borderRadius:'16px',background:'#edf8f6',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'27px'},
  whyChooseContent:{position:'relative',zIndex:2},
  whyChooseTitle:{margin:'2px 0 8px',color:'#103f45',fontSize:'17px',fontWeight:'800'},
  whyChooseDescription:{margin:0,color:'#6a7b80',fontSize:'13px',lineHeight:'1.65'},
  whyChooseNumber:{position:'absolute',right:'15px',bottom:'-14px',fontSize:'62px',fontWeight:'900',color:'rgba(7,95,90,.055)',lineHeight:1},
  whyChooseBottom:{maxWidth:'1000px',margin:'38px auto 0',display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'15px',padding:'22px',borderRadius:'20px',background:'#075f5a',boxShadow:'0 20px 40px rgba(0,65,60,.14)'},
  whyChooseBottomItem:{textAlign:'center',color:'#ffffff',display:'flex',flexDirection:'column',gap:'5px',borderRight:'1px solid rgba(255,255,255,.18)'},
  courseSection:{padding:'80px 6%',background:'#f9fcfb'},
  courseHeader:{display:'flex',justifyContent:'space-between',alignItems:'flex-end',gap:'25px',marginBottom:'40px',flexWrap:'wrap'},
  outlineButton:{border:'1px solid #0a756e',color:'#075f5a',background:'#ffffff',borderRadius:'28px',padding:'13px 22px',fontSize:'14px',fontWeight:'800',cursor:'pointer',transition:'all .3s ease'},
  courseGrid:{display:'grid',gridTemplateColumns:'repeat(4,minmax(0,1fr))',gap:'22px'},
  courseCard:{background:'#ffffff',border:'1px solid #dceae8',borderRadius:'20px',overflow:'hidden',transition:'all .3s ease',boxShadow:'0 5px 20px rgba(0,60,55,.04)'},
  courseImageWrapper:{height:'190px',position:'relative',overflow:'hidden'},
  courseImage:{width:'100%',height:'100%',objectFit:'cover'},
  courseImageOverlay:{position:'absolute',inset:0,background:'linear-gradient(0deg,rgba(0,50,48,.65),transparent 65%)'},
  courseTag:{position:'absolute',top:'15px',left:'15px',color:'#ffffff',padding:'7px 12px',borderRadius:'20px',fontSize:'11px',fontWeight:'800'},
  courseImageLabel:{position:'absolute',bottom:'15px',left:'17px',color:'#ffffff',display:'flex',flexDirection:'column',fontSize:'11px',letterSpacing:'2px'},
  courseBody:{padding:'20px'},
  courseRating:{color:'#b27c13',fontSize:'13px',fontWeight:'800',marginBottom:'9px'},
  courseTitle:{color:'#103e44',fontFamily:"Georgia,'Times New Roman',serif",fontSize:'21px',margin:'0 0 9px',lineHeight:'1.2'},
  courseDescription:{color:'#66777c',fontSize:'13px',lineHeight:'1.55',minHeight:'62px',margin:'0 0 15px'},
  skillsBox:{display:'flex',flexDirection:'column',gap:'6px',padding:'13px',borderRadius:'12px',background:'#f3f9f8',marginBottom:'17px'},
  courseFooter:{borderTop:'1px solid #edf0ef',paddingTop:'15px',display:'flex',flexDirection:'column',gap:'12px'},
  learningText:{fontSize:'12px',color:'#587076',fontWeight:'700'},
  courseButton:{width:'100%',border:'none',background:'#075f5a',color:'#ffffff',padding:'12px 15px',borderRadius:'25px',fontWeight:'800',cursor:'pointer',transition:'all .3s ease'},
  demoSection:{padding:'80px 6%',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'60px',alignItems:'center',background:'#ffffff'},
  demoImageBox:{height:'500px',borderRadius:'28px',overflow:'hidden',position:'relative',boxShadow:'0 25px 55px rgba(0,60,57,.15)'},
  demoImage:{width:'100%',height:'100%',objectFit:'cover'},
  demoImageOverlay:{position:'absolute',inset:0,background:'linear-gradient(0deg,rgba(0,61,58,.75),transparent 65%)'},
  demoQuote:{position:'absolute',bottom:'35px',left:'35px',color:'#ffffff',display:'flex',flexDirection:'column'},
  quoteIcon:{fontFamily:'Georgia',fontSize:'50px',color:'#c69525',lineHeight:'.7'},
  demoContent:{maxWidth:'600px'},
  demoTitle:{fontFamily:"Georgia,'Times New Roman',serif",color:'#073b41',fontSize:'44px',lineHeight:'1.15',margin:'0 0 18px'},
  demoDescription:{color:'#64777b',fontSize:'16px',lineHeight:'1.7',marginBottom:'24px'},
  demoPoints:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'12px',marginBottom:'20px'},
  demoNote:{background:'#f1f8f6',borderLeft:'4px solid #c69428',padding:'15px 18px',borderRadius:'8px',marginBottom:'22px'},
  primaryButtonDark:{border:'none',background:'#075f5a',color:'#ffffff',padding:'15px 27px',borderRadius:'28px',fontSize:'15px',fontWeight:'800',cursor:'pointer',transition:'all .3s ease'},
  testimonialSection:{padding:'80px 6%',background:'#eef8f6',textAlign:'center'},
  testimonialGrid:{display:'grid',gridTemplateColumns:'repeat(3,minmax(0,1fr))',gap:'22px',textAlign:'left'},
  testimonialCard:{background:'#ffffff',borderRadius:'20px',padding:'28px',border:'1px solid #dceae8',transition:'all .3s ease'},
  testimonialStars:{color:'#c58a17',letterSpacing:'3px',marginBottom:'15px'},
  testimonialQuote:{color:'#52676c',lineHeight:'1.7',fontSize:'15px',minHeight:'95px'},
  userRow:{display:'flex',alignItems:'center',gap:'12px',borderTop:'1px solid #edf0ef',paddingTop:'17px'},
  avatar:{width:'45px',height:'45px',borderRadius:'50%',background:'#075f5a',color:'#ffffff',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'18px',fontWeight:'800'},
  userName:{display:'block',color:'#103f45'},
  userRole:{display:'block',color:'#718186',fontSize:'12px',marginTop:'3px'},
  testimonialButton:{marginTop:'35px',padding:'13px 25px',borderRadius:'25px',background:'#ffffff',color:'#075f5a',border:'1px solid #075f5a',fontWeight:'800',cursor:'pointer'},
  finalBanner:{position:'relative',overflow:'hidden',padding:'85px 6%',background:'linear-gradient(125deg,#034d4b,#08756e,#063f42)',color:'#ffffff',textAlign:'center'},
  finalBannerGlow:{position:'absolute',width:'450px',height:'450px',borderRadius:'50%',background:'rgba(255,255,255,.05)',top:'-250px',right:'-100px'},
  finalContent:{position:'relative',zIndex:2,maxWidth:'850px',margin:'0 auto'},
  finalEyebrow:{color:'#e5bb57',letterSpacing:'3px',fontSize:'12px',fontWeight:'900'},
  finalTitle:{fontFamily:"Georgia,'Times New Roman',serif",fontSize:'46px',margin:'12px 0',lineHeight:'1.2'},
  finalDescription:{fontSize:'17px',color:'#d6ece9',marginBottom:'28px'},
  finalButtons:{display:'flex',justifyContent:'center',gap:'14px',flexWrap:'wrap'},
  finalPrimary:{border:'none',background:'#e8b944',color:'#153d40',padding:'15px 28px',borderRadius:'28px',fontSize:'15px',fontWeight:'900',cursor:'pointer'},
  finalSecondary:{border:'1px solid rgba(255,255,255,.6)',background:'transparent',color:'#ffffff',padding:'14px 28px',borderRadius:'28px',fontSize:'15px',fontWeight:'800',cursor:'pointer'},
  whatsappButton:{position:'fixed',right:'25px',bottom:'25px',width:'62px',height:'62px',borderRadius:'50%',border:'none',background:'#25D366',color:'#ffffff',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer',zIndex:9999,boxShadow:'0 8px 25px rgba(37,211,102,.35)',animation:'whatsappPulse 2s infinite',transition:'all .3s ease'},
  whatsappIcon:{fontSize:'32px',fontWeight:'900',lineHeight:1,transform:'rotate(-20deg)'}
};
