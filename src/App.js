import React, { useEffect, useState, useRef } from "react";
import Navbar from "./components/Navbar";
import "./styles/index.css";
import henryImage from "./assets/henry.png";
import sswmsimage from "./assets/sswms1.png";
import tesda from "./assets/tesda.png";
import grab from "./assets/grab.png";
import brgy from "./assets/sanguninang_kabataan.png";
import ojt from "./assets/ojt.png";
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");
  const [setSelectedProject] = useState(null);

  const roles = [
    "Frontend Developer",
    "Full Stack Developer",
    "Freelancer",
    "Problem Solver",
  ];

  const projects = [
    {
      title: "Social Service and Welfare Management System",
      description:
        "A full-stack system for managing social welfare services, beneficiary records, and assistance requests.",
      fullDescription:
        "The Social Service and Welfare Management System (SSWMS) is designed to streamline the operations of local government units in providing welfare services. It enables efficient handling of beneficiary applications, assistance distribution, case management, and reporting. The platform also provides dashboards for social workers and administrators, ensuring transparency and accountability in service delivery.",
      image: sswmsimage,
      technologies: ["React", "Bootsrap 5", "Laravel", "Mysql"],
      category: "Full Stack",
      link: "#",
      github: "#",
      features: [
        "Beneficiary profiling and household information management",
        "Assistance request and approval workflows",
        "Case management and monitoring by social workers",
        "Automated generation of reports and certificates",
        "Notification system for application status updates",
        "Admin dashboard with service analytics and statistics",
        "Integration with census and civil registrar modules",
        "Mobile-friendly responsive design",
      ],
      challenges:
        "Designing a secure and scalable workflow for handling large volumes of beneficiary data while ensuring data privacy and real-time updates across different welfare services.",
      duration: "4 months",
      teamSize: "5 developers",
    },

    {
      title: "Grab Rider Clone",
      description:
        "A React + PHP-based Grab-like delivery app with real-time GPS tracking, payments, and role-based dashboards.",
      fullDescription:
        "The Grab Rider Clone is a mobile-first food delivery and ride-hailing application inspired by Grab. It includes separate apps for customers and delivery partners, plus a management dashboard for restaurants and merchants. Features include real-time GPS tracking, integrated payment systems, push notifications, customer support chat, and a rating/review system. The backend is built with PHP and MySQL, while React powers the frontend, and Firebase manages real-time communication and notifications.",
      image: grab,

      technologies: ["React", "PHP", "MySQL", "Firebase", "Google Maps API"],
      category: "Mobile",
      link: "#",
      github: "#",
      features: [
        "Real-time GPS tracking for deliveries and rides",
        "Role-based dashboards for customers, riders, and restaurants",
        "Multi-payment gateway support (cash, wallet, credit/debit card)",
        "Push notifications for ride/order updates",
        "Customer support chat system",
        "Ratings and reviews for riders and merchants",
        "Discounts, promos, and loyalty rewards",
        "Delivery partner app with order and earnings management",
      ],
      challenges:
        "Ensuring real-time synchronization of GPS locations, handling communication across multiple user roles, and maintaining system scalability during peak order requests.",
      duration: "5 months",
      teamSize: "1 developers",
    },

    {
      title: "Sangguniang Kabataan Admin System",
      description:
        "A React + PHP-based SK management system with youth profiling, program monitoring, and role-based dashboards.",
      fullDescription:
        "The SK Admin System is a digital governance platform designed for Sangguniang Kabataan officials to manage community programs, youth profiles, and barangay projects. It provides separate dashboards for SK Chairpersons, secretaries, treasurers, and barangay staff. Features include youth census management, project and event tracking, budget monitoring, document generation, and transparent reporting. The backend is built with PHP and MySQL, while React powers the frontend. Firebase or WebSockets can be integrated for real-time updates and notifications.",
      image: brgy,
      technologies: ["React", "PHP", "MySQL", "Bootstrap", "Firebase"],
      category: "Governance",
      link: "#",
      github: "#",
      features: [
        "Youth profiling and census management",
        "Role-based dashboards for SK officials",
        "Program and event planning with status tracking",
        "Budget and expense monitoring with transparency reports",
        "Automated document and certificate generation",
        "Real-time notifications for meetings and activities",
        "Feedback and survey collection from youth constituents",
        "Audit logs for accountability and governance compliance",
      ],
      challenges:
        "Handling accurate youth data management, ensuring transparency in financial reports, and maintaining system security for sensitive barangay records.",
      duration: "4 months",
      teamSize: "1 developer",
    },
    {
      title: "TESDA SK Admin System",
      description:
        "A React + PHP-based Sangguniang Kabataan management system with youth profiling, project monitoring, and role-based dashboards.",
      fullDescription:
        "The TESDA SK Admin System is a digital governance platform designed for Sangguniang Kabataan officials to manage youth profiles, barangay projects, and community programs. It provides role-based dashboards for SK Chairpersons, secretaries, treasurers, and barangay staff. Core features include youth census management, project/event planning with progress tracking, budget transparency, automated document generation, and real-time notifications for meetings and barangay activities. Built with React for the frontend and PHP + MySQL for the backend, with Firebase/WebSockets integrated for instant updates and alerts.",
      image: tesda, // replace with your TESDA-themed image import
      technologies: ["React", "PHP", "MySQL", "Bootstrap", "Firebase"],
      category: "Governance",
      link: "#",
      github: "#",
      features: [
        "Youth profiling and barangay census management",
        "Role-based dashboards for SK officials (Chairperson, Secretary, Treasurer)",
        "Program and event planning with progress and status tracking",
        "Budget monitoring with transparent financial reports",
        "Automated document and certificate generation (resolutions, permits, reports)",
        "Real-time notifications for barangay activities and meetings",
        "Feedback and survey tools for youth constituents",
        "Audit logs for accountability and governance compliance",
      ],
      challenges:
        "Ensuring data accuracy for youth profiling, maintaining financial transparency in SK reports, and securing sensitive barangay records against unauthorized access.",
      duration: "4 months",
      teamSize: "1 developer",
    },
    {
      title: "Schedule Management System",
      description:
        "A web-based application for creating, managing, and tracking schedules efficiently.",
      fullDescription:
        "A user-friendly schedule management system designed to organize tasks, events, and appointments. It features a responsive interface with real-time updates, calendar integration, reminders, and task categorization. Built using React for interactivity and Bootstrap for a clean, professional layout, the system ensures easy navigation and smooth performance across devices.",
      image:
        "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&h=300&fit=crop",
      technologies: ["React", "Bootstrap", "Node.js", "MySQL"],
      category: "Fullstack",
      link: "#",
      github: "#",
      features: [
        "Responsive calendar view",
        "Task and event creation with categories",
        "Drag-and-drop schedule management",
        "Reminders and notifications",
        "Daily, weekly, and monthly views",
        "User authentication and profiles",
        "Export schedules as PDF or Excel",
        "Search and filter functionality",
      ],
      challenges:
        "Implementing real-time updates and reminders while maintaining lightweight performance across browsers and devices.",
      duration: "2 months",
      teamSize: "2 developers",
    },
    {
      title: "Task Management System",
      description:
        "Comprehensive project management tool with team collaboration, time tracking, and reporting features.",
      fullDescription:
        "A full-featured project management application designed for team collaboration. Includes task creation and assignment, time tracking, project timelines, team communication tools, and comprehensive reporting dashboard with data visualization.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      technologies: ["React", "Firebase", "Material-UI", "Chart.js"],
      category: "Full Stack",
      link: "#",
      github: "#",
      features: [
        "Kanban board for task management",
        "Time tracking and reporting",
        "Team collaboration tools",
        "Project timeline visualization",
        "File sharing and comments",
        "Custom project templates",
        "Advanced filtering and search",
        "Export reports to PDF/Excel",
      ],
      challenges:
        "Designing an intuitive interface that scales from small teams to large organizations while maintaining performance.",
      duration: "5 months",
      teamSize: "3 developers",
    },
    {
      title: "Weather Analytics Dashboard",
      description:
        "Advanced weather tracking with data visualization, forecasting, and location-based alerts.",
      fullDescription:
        "An advanced weather analytics platform that provides detailed weather information, forecasting, and data visualization. Features interactive charts, location-based weather alerts, historical data analysis, and integration with multiple weather APIs for accurate predictions.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop",
      technologies: ["React", "D3.js", "Weather API", "Bootstrap"],
      category: "Frontend",
      link: "#",
      github: "#",
      features: [
        "Real-time weather data visualization",
        "7-day weather forecasting",
        "Interactive weather maps",
        "Location-based weather alerts",
        "Historical weather data analysis",
        "Multiple weather metrics display",
        "Customizable dashboard widgets",
        "Export weather reports",
      ],
      challenges:
        "Processing and visualizing large amounts of weather data while maintaining smooth user interactions and real-time updates.",
      duration: "2 months",
      teamSize: "2 developers",
    },
    {
      title: "Learning Management System",
      description:
        "Educational platform with course management, progress tracking, and interactive quizzes.",
      fullDescription:
        "A comprehensive learning management system designed for educational institutions. Features course creation and management, student progress tracking, interactive quizzes and assignments, video conferencing integration, and detailed analytics for instructors.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      technologies: ["React", "Laravel", "MySQL", "WebRTC"],
      category: "Full Stack",
      link: "#",
      github: "#",
      features: [
        "Course creation and management",
        "Interactive quiz and assignment system",
        "Student progress tracking",
        "Video conferencing integration",
        "Discussion forums and chat",
        "Grade book and analytics",
        "Certificate generation",
        "Mobile-responsive interface",
      ],
      challenges:
        "Implementing real-time video conferencing and ensuring scalable architecture for thousands of concurrent users during online classes.",
      duration: "6 months",
      teamSize: "5 developers",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Project Manager at TechCorp",
      content:
        "Outstanding developer with excellent problem-solving skills. Delivered our project ahead of schedule with exceptional quality.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Michael Chen",
      role: "CEO at StartupXYZ",
      content:
        "Transformed our vision into reality. The attention to detail and technical expertise exceeded our expectations.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Emily Rodriguez",
      role: "Design Director",
      content:
        "Perfect collaboration between design and development. The final product was pixel-perfect and performant.",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    },
  ];

  // Tech Stack Data

  const programmingLanguages = [
    { name: "Python", color: "#3776ab" },
    { name: "JavaScript", color: "#f7df1e" },
    { name: "React", color: "#61dafb" },
    { name: "PHP", color: "#777bb4" },
    { name: "Java", color: "#ed8b00" },
    { name: "C#", color: "#239120" },
    { name: "Django", color: "#092e20" },
    { name: "Flutter", color: "#02569b" },
    { name: "Go", color: "#00add8" },
    { name: "Rust", color: "#000000" },
    { name: "TypeScript", color: "#3178c6" },
    { name: "Laravel", color: "#ff2d20" },
    { name: "Vue.js", color: "#4fc08d" },
    { name: "Angular", color: "#dd0031" },
    { name: "Node.js", color: "#339933" },
  ];

  // Filter projects based on active filter
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  // Handle opening project modal
  const handleOpenProjectModal = (project) => {
    setSelectedProject(project);
    const modal = new window.bootstrap.Modal(
      document.getElementById("projectModal")
    );
    modal.show();
  };

  // Handle opening experience modal

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const element = entry.target;
        if (entry.isIntersecting) {
          element.classList.add("fade-in");
          element.classList.remove("fade-out");
        } else {
          element.classList.remove("fade-in");
          element.classList.add("fade-out");
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll(".fade-scroll");
    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Enhanced typing animation with better timing
  useEffect(() => {
    const currentRole = roles[currentIndex];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex <= currentRole.length) {
        setTypedText(currentRole.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % roles.length);
          setTypedText("");
        }, 2000);
      }
    }, 80);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  // Initialize AOS and other animations
  useEffect(() => {
    // Initialize AOS when it's available
    const initAOS = () => {
      if (window.AOS) {
        window.AOS.init({
          duration: 800,
          easing: "ease-in-out",
          once: true,
          offset: 100,
          delay: 0,
        });
      }
    };

    // Wait for AOS to load
    if (window.AOS) {
      initAOS();
    } else {
      const checkAOS = setInterval(() => {
        if (window.AOS) {
          initAOS();
          clearInterval(checkAOS);
        }
      }, 100);
    }

    // Enhanced scroll effects and navbar
    const counters = document.querySelectorAll(".counter");

    const animateCounters = () => {
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute("data-target"));
        const count = parseInt(counter.innerText);
        const increment = target / 100;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(animateCounters, 20);
        } else {
          counter.innerText = target;
        }
      });
    };

    const nav = document.querySelector(".navbar");
    if (nav) {
      const onScroll = () => {
        if (window.scrollY > 50) {
          nav.classList.add("scrolled");
        } else {
          nav.classList.remove("scrolled");
        }
      };
      window.addEventListener("scroll", onScroll);
    }

    // Enhanced intersection observer for stats
    const statsSection = document.querySelector("#stats");
    if (statsSection) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            animateCounters();
            observer.disconnect();
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(statsSection);
    }
  }, []);
  const introRef = useRef(null);
  const circleRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);
  const mainRef = useRef(null);

  useEffect(() => {
    // Simple scroll-based animations without GSAP
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      if (introRef.current && circleRef.current) {
        const introRect = introRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(
          0,
          Math.min(1, (windowHeight - introRect.top) / windowHeight)
        );

        // Animate greeting text
        const greetingSpans =
          introRef.current.querySelectorAll(".greeting span");
        greetingSpans.forEach((span, index) => {
          const delay = index * 0.2;
          const progress = Math.max(
            0,
            Math.min(1, (scrollProgress - delay) / 0.3)
          );
          span.style.opacity = progress;
          span.style.transform = `translateX(${(1 - progress) * -50}px)`;
        });

        // Animate circle
        const circleProgress = Math.max(0, Math.min(1, scrollProgress));
        const scale = 0.5 + circleProgress * 1.5;
        circleRef.current.style.transform = `scale(${scale})`;
        circleRef.current.style.opacity = circleProgress;
      }

      // Animate main content
      if (mainRef.current) {
        const mainRect = mainRef.current.getBoundingClientRect();
        const mainProgress = Math.max(
          0,
          Math.min(1, (windowHeight - mainRect.top) / windowHeight)
        );

        if (imgRef.current) {
          imgRef.current.style.opacity = mainProgress;
          imgRef.current.style.transform = `translateY(${
            (1 - mainProgress) * 100
          }px)`;
        }

        if (textRef.current) {
          textRef.current.style.opacity = mainProgress;
          textRef.current.style.transform = `translateY(${
            (1 - mainProgress) * 100
          }px)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const styles = {
    app: {
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    },
    navbar: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: "rgba(0, 0, 0, 0.95)",
      backdropFilter: "blur(10px)",
      padding: "1rem 0",
      transition: "all 0.3s ease",
    },
    navContainer: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 2rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    logo: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#f59e0b",
    },
    navLinks: {
      display: "flex",
      gap: "2rem",
      listStyle: "none",
      margin: 0,
      padding: 0,
    },
    navLink: {
      color: "white",
      textDecoration: "none",
      fontSize: "1rem",
      fontWeight: "500",
      transition: "color 0.3s ease",
      cursor: "pointer",
    },
    hero: {
      background:
        "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%)",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      color: "white",
      paddingTop: "80px",
    },
    heroContainer: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 2rem",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "4rem",
      alignItems: "center",
    },
    profileImg: {
      width: "250px",
      height: "250px",
      borderRadius: "50%",
      objectFit: "cover",
      border: "5px solid #f59e0b",
      marginBottom: "2rem",
      animation: "float 6s ease-in-out infinite",
    },
    heroTitle: {
      fontSize: "clamp(2.5rem, 5vw, 4rem)",
      fontWeight: "bold",
      marginBottom: "1rem",
      lineHeight: 1.2,
    },
    heroSubtitle: {
      fontSize: "clamp(1.5rem, 3vw, 2rem)",
      marginBottom: "1.5rem",
      color: "#e5e7eb",
    },
    heroDescription: {
      fontSize: "1.2rem",
      lineHeight: 1.6,
      marginBottom: "2rem",
      color: "#d1d5db",
    },
    heroButtons: {
      display: "flex",
      gap: "1rem",
      flexWrap: "wrap",
    },
    btnPrimary: {
      background: "linear-gradient(45deg, #f59e0b, #d97706)",
      border: "none",
      padding: "1rem 2rem",
      borderRadius: "50px",
      fontSize: "1.1rem",
      fontWeight: "bold",
      color: "white",
      textDecoration: "none",
      display: "inline-block",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      cursor: "pointer",
    },
    btnSecondary: {
      background: "transparent",
      border: "2px solid white",
      padding: "1rem 2rem",
      borderRadius: "50px",
      fontSize: "1.1rem",
      fontWeight: "bold",
      color: "white",
      textDecoration: "none",
      display: "inline-block",
      transition: "all 0.3s ease",
      cursor: "pointer",
    },
    heroImage: {
      textAlign: "center",
    },
    codingImg: {
      maxWidth: "100%",
      height: "auto",
      borderRadius: "15px",
      boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
      animation: "fadeInUp 1s ease-out 0.5s both",
    },
    aboutSection: {
      backgroundColor: "#000",
      minHeight: "300vh",
      color: "white",
      overflow: "hidden",
      position: "relative",
    },
    containerMain: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 20px",
    },
    containerInner: {
      position: "relative",
      minHeight: "100vh",
    },
    aboutIntro: {
      position: "sticky",
      top: 0,
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 10,
    },
    greetingContainer: {
      textAlign: "center",
      marginBottom: "2rem",
      zIndex: 15,
    },
    greeting: {
      fontSize: "clamp(2.5rem, 8vw, 6rem)",
      fontWeight: "bold",
      margin: 0,
      lineHeight: 1.2,
    },
    greetingSpan: {
      display: "inline-block",
      marginRight: "0.5rem",
      opacity: 0,
      transform: "translateX(-50px)",
      transition: "all 0.8s ease-out",
    },
    name1st: {
      color: "#f59e0b",
    },
    name2nd: {
      color: "#8b5cf6",
    },
    circleContainer: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 1,
    },
    circle: {
      width: "750px",
      height: "750px",
      borderRadius: "50%",
      background:
        "radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(139,92,246,1) 100%)",
      opacity: 0,
      transform: "scale(0.5)",
      transition: "all 0.3s ease-out",
    },
    aboutMain: {
      position: "relative",
      backgroundColor: "#000",
      padding: "4rem 2rem",
      zIndex: 20,
      marginTop: "100vh",
    },
    aboutImgContainer: {
      textAlign: "center",
      marginBottom: "3rem",
    },
    aboutImg: {
      maxWidth: "100%",
      height: "auto",
      borderRadius: "15px",
      boxShadow: "0 20px 40px rgba(139,92,246,0.3)",
      opacity: 0,
      transform: "translateY(100px)",
      transition: "all 1s ease-out",
    },
    aboutTextContainer: {
      maxWidth: "800px",
      margin: "0 auto",
      opacity: 0,
      transform: "translateY(100px)",
      transition: "all 1s ease-out",
    },
    workExperience: {
      fontSize: "1.2rem",
      lineHeight: 1.8,
      marginBottom: "2rem",
      color: "#e5e7eb",
    },
    aboutMe: {
      marginTop: "2rem",
    },
    aboutMeH2: {
      color: "#f59e0b",
      fontSize: "2rem",
      marginBottom: "1.5rem",
      fontWeight: "bold",
    },
    aboutMeUl: {
      listStyle: "none",
      padding: 0,
      marginBottom: "2rem",
    },
    aboutMeLi: {
      marginBottom: "1.5rem",
      fontSize: "1.1rem",
      lineHeight: 1.6,
      paddingLeft: "1.5rem",
      position: "relative",
    },
    aboutMeStrong: {
      color: "#8b5cf6",
      fontWeight: "bold",
    },
    highlight: {
      background: "linear-gradient(45deg, #f59e0b, #8b5cf6)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      fontWeight: "bold",
    },
    aboutMeP: {
      fontSize: "1.1rem",
      lineHeight: 1.7,
      color: "#e5e7eb",
    },
    typingCursor: {
      animation: "blink 1s infinite",
      color: "#f59e0b",
    },
    "@keyframes float": {
      "0%, 100%": { transform: "translateY(0px)" },
      "50%": { transform: "translateY(-20px)" },
    },
    "@keyframes fadeInUp": {
      from: { opacity: 0, transform: "translateY(30px)" },
      to: { opacity: 1, transform: "translateY(0)" },
    },
    "@keyframes blink": {
      "0%, 50%": { opacity: 1 },
      "51%, 100%": { opacity: 0 },
    },
  };

  const [showMouse, setShowMouse] = useState(false);

  useEffect(() => {
    AOS.init({ once: false, duration: 1000 });

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowMouse(true); // fade in on scroll down
      } else {
        setShowMouse(false); // fade out on scroll up
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [selectedImage, setSelectedImage] = useState(null);
  const [section, setSection] = useState(1);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSection(entry.target.dataset.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <section
        data-id="1"
        className="hero text-white position-relative"
        id="home"
        style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
      >
        {/* Animated Background Elements */}
        <div
          className="position-absolute w-100 h-100"
          style={{ top: 0, left: 0, zIndex: -1, overflow: "hidden" }}
        >
          {/* Background Gradient Overlay with AOS */}
          <div
            className="position-absolute w-100 h-100"
            data-aos="fade-in"
            data-aos-duration="1500"
            data-aos-anchor-placement="top-bottom"
            data-aos-mirror="true"
            style={{
              background:
                "linear-gradient(135deg, rgba(255, 193, 7, 0.1) 0%, rgba(0, 123, 255, 0.1) 100%)",
              zIndex: 1,
            }}
          ></div>

          {/* Floating Background Shapes with Enhanced AOS */}
          <div
            className="position-absolute"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
            data-aos-anchor-placement="top-center"
            data-aos-mirror="true"
            data-aos-once="false"
            style={{
              top: "10%",
              left: "10%",
              width: "100px",
              height: "100px",
              background: "rgba(255, 193, 7, 0.1)",
              borderRadius: "50%",
              zIndex: 1,
              transition: "all 0.3s ease",
            }}
          ></div>

          <div
            className="position-absolute"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="400"
            data-aos-anchor-placement="center-bottom"
            data-aos-mirror="true"
            data-aos-once="false"
            style={{
              top: "20%",
              right: "15%",
              width: "80px",
              height: "80px",
              background: "rgba(0, 123, 255, 0.1)",
              borderRadius: "20px",
              transform: "rotate(45deg)",
              zIndex: 1,
              transition: "all 0.3s ease",
            }}
          ></div>

          <div
            className="position-absolute"
            data-aos="slide-right"
            data-aos-duration="1300"
            data-aos-delay="600"
            data-aos-anchor-placement="bottom-center"
            data-aos-mirror="true"
            data-aos-once="false"
            style={{
              bottom: "30%",
              left: "5%",
              width: "60px",
              height: "60px",
              background: "rgba(255, 193, 7, 0.15)",
              borderRadius: "10px",
              zIndex: 1,
              transition: "all 0.3s ease",
            }}
          ></div>

          <div
            className="position-absolute"
            data-aos="slide-left"
            data-aos-duration="1100"
            data-aos-delay="800"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-mirror="true"
            data-aos-once="false"
            style={{
              bottom: "10%",
              right: "10%",
              width: "120px",
              height: "120px",
              background: "rgba(0, 123, 255, 0.08)",
              borderRadius: "50%",
              zIndex: 1,
              transition: "all 0.3s ease",
            }}
          ></div>

          {/* Animated Lines/Particles with Enhanced Scroll Response */}
          <div
            className="position-absolute"
            data-aos="zoom-in-up"
            data-aos-duration="900"
            data-aos-delay="300"
            data-aos-anchor-placement="center-center"
            data-aos-mirror="true"
            data-aos-once="false"
            style={{
              top: "40%",
              left: "20%",
              width: "2px",
              height: "150px",
              background:
                "linear-gradient(to bottom, rgba(255, 193, 7, 0.3), transparent)",
              zIndex: 1,
              transition: "all 0.4s ease",
            }}
          ></div>

          <div
            className="position-absolute"
            data-aos="zoom-in-down"
            data-aos-duration="1100"
            data-aos-delay="500"
            data-aos-anchor-placement="top-center"
            data-aos-mirror="true"
            data-aos-once="false"
            style={{
              top: "15%",
              right: "25%",
              width: "2px",
              height: "100px",
              background:
                "linear-gradient(to bottom, rgba(0, 123, 255, 0.3), transparent)",
              transform: "rotate(30deg)",
              zIndex: 1,
              transition: "all 0.4s ease",
            }}
          ></div>

          {/* Additional Floating Elements for More Dynamic Effect */}
          <div
            className="position-absolute"
            data-aos="flip-up"
            data-aos-duration="1400"
            data-aos-delay="700"
            data-aos-anchor-placement="center-bottom"
            data-aos-mirror="true"
            data-aos-once="false"
            style={{
              top: "60%",
              left: "80%",
              width: "40px",
              height: "40px",
              background: "rgba(255, 193, 7, 0.2)",
              borderRadius: "50%",
              zIndex: 1,
              transition: "all 0.3s ease",
            }}
          ></div>

          <div
            className="position-absolute"
            data-aos="flip-down"
            data-aos-duration="1200"
            data-aos-delay="900"
            data-aos-anchor-placement="bottom-center"
            data-aos-mirror="true"
            data-aos-once="false"
            style={{
              top: "70%",
              left: "15%",
              width: "30px",
              height: "30px",
              background: "rgba(0, 123, 255, 0.2)",
              borderRadius: "5px",
              transform: "rotate(20deg)",
              zIndex: 1,
              transition: "all 0.3s ease",
            }}
          ></div>
        </div>

        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <img
                src={henryImage}
                alt="Profile"
                className="rounded-circle mb-4 border border-5 border-warning animate__animated animate__zoomIn animate__delay-1s"
                style={{
                  width: "200px",
                  height: "300px",
                  objectFit: "cover",
                }}
              />

              <h1 className="display-4 fw-bold mb-3">
                Hi, I'm <span className="text-warning">Henryco Buena</span>
              </h1>
              <h2 className="h3 mb-4">
                I'm a <span className="text-warning">{typedText}</span>
                <span className="typing-cursor">|</span>
              </h2>
              <p className="lead mb-4">
                Passionate about creating digital experiences that make a
                difference. I build modern, responsive, and user-friendly
                applications.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <a
                  href="#projects"
                  className="btn btn-warning btn-lg px-4 py-2 rounded-pill animate__animated animate__pulse animate__infinite animate__slow"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="btn btn-outline-light btn-lg px-4 py-2 rounded-pill"
                >
                  Get In Touch
                </a>
              </div>
            </div>

            <div
              className="col-lg-6 text-center"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="position-relative">
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=400&fit=crop"
                  alt="Coding"
                  className="img-fluid rounded-3 shadow-lg animate__animated animate__fadeInUp animate__delay-2s"
                  style={{ maxWidth: "500px" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mouse Scroll Indicator */}
        <div
          className="hero__bottom--mouse-container"
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
            zIndex: 50,
            opacity: showMouse ? 1 : 0,
            transition: "opacity 0.6s ease-in-out",
          }}
        >
          {/* Scroll Down Text */}
          <div
            style={{
              color: "white",
              fontSize: "14px",
              fontWeight: "bold",
              marginBottom: "10px",
              letterSpacing: "2px",
            }}
          >
            SCROLL DOWN
          </div>

          {/* Mouse SVG */}
          <svg
            className="mouse-svg"
            width="40"
            height="70"
            viewBox="0 0 24 40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="mouse">
              <rect
                x="6.5"
                y="3.5"
                width="11"
                height="33"
                rx="5.5"
                stroke="white"
                strokeWidth="2"
                fill="transparent"
              />
              <circle
                cx="12"
                cy="10"
                r="2"
                fill="white"
                className="scroll-wheel"
              >
                <animateTransform
                  attributeType="xml"
                  attributeName="transform"
                  type="translate"
                  values="0 0; 0 6; 0 0"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          </svg>
        </div>
      </section>
      {/* Stats Section */}
      {/* About Section */}
      <section data-id="2" style={styles.aboutSection} id="aboutSection">
        {/* Animated Mouse Indicator with Scroll Text */}

        {/* Spacer */}
        <div style={{ height: "100vh" }}></div>

        {/* Main Content */}
        <div style={styles.containerMain}>
          <div style={styles.containerInner}>
            <div className="about__animations">
              <div ref={introRef} style={styles.aboutIntro}>
                <div style={styles.greetingContainer}>
                  <h1 style={styles.greeting} className="greeting">
                    <span style={styles.greetingSpan}>Hi, I'm</span>{" "}
                    <span style={{ ...styles.greetingSpan, ...styles.name1st }}>
                      Henryco
                    </span>{" "}
                    <span style={{ ...styles.greetingSpan, ...styles.name2nd }}>
                      D. Buena
                    </span>
                  </h1>
                </div>

                <div style={styles.circleContainer}>
                  <div
                    ref={circleRef}
                    style={styles.circle}
                    className="circle"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animation Keyframes */}
        <style>{`
    @keyframes scroll {
      0% { transform: translateY(0); opacity: 1; }
      50% { transform: translateY(6px); opacity: 0.5; }
      100% { transform: translateY(0); opacity: 1; }
    }
    .scroll-wheel {
      animation: scroll 1.2s infinite;
    }
  `}</style>
      </section>

      <section
        data-id="3"
        id="about"
        className="section-padding bg-black text-white"
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          {/* Image fades in/out on scroll */}
          <div
            style={{ marginBottom: "40px" }}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="false"
          >
            <img
              src={ojt}
              alt="group photo of us"
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </div>

          {/* Text fades in/out on scroll */}
          <div
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-once="false"
          >
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#fff" }}>
              I am a 24-year-old web developer with a experience in fullstack
              developing Web app and Mobile app through Freelancing and
              Capstone.
            </p>

            <h2 style={{ marginTop: "30px", color: "#FFD700" }}>
              Key Achievements
            </h2>
            <ul style={{ paddingLeft: "20px", color: "#fff" }}>
              <li>
                <strong>RESTful API Design:</strong> Designed and implemented a{" "}
                <span style={{ color: "#FFD700" }}>RESTful API</span> for
                attendance monitoring system.
              </li>
              <li>
                <strong>Code Reviews & Mentorship:</strong>{" "}
                <span style={{ color: "#FFD700" }}>Conducted code reviews</span>{" "}
                and mentored junior developers.
              </li>
              <li>
                <strong>Full Stack Expertise:</strong> Utilized{" "}
                <span style={{ color: "#FFD700" }}>React.js</span>,{" "}
                <span style={{ color: "#FFD700" }}>Laravel</span>, and{" "}
                <span style={{ color: "#FFD700" }}>MySQL</span>.
              </li>
            </ul>

            <h2 style={{ marginTop: "30px", color: "#FFD700" }}>
              Skills & Specializations
            </h2>
            <p style={{ color: "#fff", fontSize: "16px", lineHeight: "1.6" }}>
              I specialize in creating responsive websites optimized for all
              devices using a{" "}
              <span style={{ color: "#FFD700" }}>mobile-first workflow</span>.
              My goal is to design{" "}
              <span style={{ color: "#FFD700" }}>
                visually appealing and functional websites
              </span>
              .
            </p>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section
        data-id="4"
        id="projects"
        className="section-padding bg-black text-white"
      >
        <div className="container">
          {/* Heading */}
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-4 text-warning">
              Featured Projects
            </h2>
            <p className="lead text-gray-300">
              A showcase of my recent work and personal projects
            </p>

            {/* Filter Buttons */}
            <div className="mb-4">
              {["All", "Frontend", "Full Stack", "Mobile"].map((filter) => (
                <button
                  key={filter}
                  className={`filter-btn ${
                    activeFilter === filter ? "active" : ""
                  }`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Alternating Layout */}
          {filteredProjects.map((project, index) => (
            <div
              className="row align-items-center mb-5"
              key={index}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              {/* Image */}
              <div
                className={`col-lg-6 ${index % 2 === 0 ? "" : "order-lg-2"}`}
              >
                <div className="project-img-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="img-fluid rounded shadow-lg project-img"
                    style={{
                      height: "350px",
                      width: "100%",
                      objectFit: "cover",
                      cursor: "pointer",
                    }}
                    onClick={() => setSelectedImage(project.image)}
                  />
                </div>
              </div>

              {/* Details */}
              <div
                className={`col-lg-6 mt-4 mt-lg-0 ${
                  index % 2 === 0 ? "" : "order-lg-1"
                }`}
              >
                <span className="badge bg-warning text-dark mb-2">
                  {project.category}
                </span>
                <h3 className="fw-bold">{project.title}</h3>
                <p className="text-light">{project.description}</p>

                {/* Tech stack */}
                <div className="mb-3">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="badge bg-secondary me-2 mb-2">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="d-flex gap-2">
                  <a
                    href={project.link}
                    className="btn btn-warning"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-eye"></i> Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="btn btn-outline-light"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-github"></i> Code
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Modal */}
          {selectedImage && (
            <div
              className="modal fade show"
              style={{ display: "block", backgroundColor: "rgba(0,0,0,0.8)" }}
              onClick={() => setSelectedImage(null)}
            >
              <div className="modal-dialog modal-dialog-centered modal-xl">
                {/* 👆 modal-xl makes it extra wide */}
                <div className="modal-content bg-transparent border-0">
                  <button
                    type="button"
                    className="btn-close btn-close-white ms-auto"
                    onClick={() => setSelectedImage(null)}
                  ></button>
                  <img
                    src={selectedImage}
                    alt="Project"
                    className="img-fluid rounded shadow"
                    style={{ maxHeight: "90vh", objectFit: "contain" }}
                    // 👆 limits height so it won’t overflow screen
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <section
        data-id="5"
        id="testimonials"
        className="section-padding bg-black text-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-6">
              My Tech Stack & Skills
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore the most in-demand languages and frameworks shaping the
              future of technology
            </p>
          </div>

          <div className="relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>

            {/* Moving lists */}
            <div className="space-y-4">
              <div className="flex overflow-hidden">
                <div className="flex gap-4 animate-slide-left">
                  {[...programmingLanguages, ...programmingLanguages].map(
                    (lang, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-full border border-gray-700 backdrop-blur-sm whitespace-nowrap hover:scale-105 transition-transform duration-300"
                      >
                        <div
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: lang.color }}
                        ></div>
                        <span className="text-gray-100 font-medium">
                          {lang.name}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="flex overflow-hidden">
                <div className="flex gap-4 animate-slide-right">
                  {[
                    ...programmingLanguages.slice().reverse(),
                    ...programmingLanguages.slice().reverse(),
                  ].map((lang, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-full border border-gray-700 backdrop-blur-sm whitespace-nowrap hover:scale-105 transition-transform duration-300"
                    >
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: lang.color }}
                      ></div>
                      <span className="text-gray-100 font-medium">
                        {lang.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="section-padding bg-black text-white"
      >
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4">Client Testimonials</h2>
            <p className="lead">What my clients say about working with me</p>
          </div>
          <div className="row g-4">
            {testimonials.map((testimonial, index) => (
              <div
                className="col-lg-4 col-md-6"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="testimonial-card">
                  <div className="mb-3">
                    <i
                      className="bi bi-quote text-warning"
                      style={{ fontSize: "2rem" }}
                    ></i>
                  </div>
                  <p className="mb-4 fst-italic">"{testimonial.content}"</p>
                  <div className="d-flex align-items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="rounded-circle me-3"
                      width="60"
                      height="60"
                      style={{ objectFit: "cover" }}
                    />
                    <div>
                      <h6 className="mb-0 fw-bold">{testimonial.name}</h6>
                      <small className="text-muted">{testimonial.role}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="section-padding bg-black text-white">
        <div className="container">
          {/* Heading */}
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4 text-warning">
              Get In Touch
            </h2>
            <p className="lead text-gray-300">
              Ready to start your next project? Let’s discuss how I can help.
            </p>
          </div>

          {/* Contact Form */}
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div
                className="contact-form bg-dark p-5 rounded-3 shadow-lg"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control form-control-lg bg-secondary text-white border-0"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input
                        type="email"
                        className="form-control form-control-lg bg-secondary text-white border-0"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control form-control-lg bg-secondary text-white border-0"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control form-control-lg bg-secondary text-white border-0"
                      rows="6"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-warning btn-lg px-5 py-3 rounded-pill shadow"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Info - Dark Cards */}
          <div className="row mt-5">
            {[
              {
                icon: "bi-geo-alt-fill",
                title: "Location",
                text: "Manila, Philippines",
              },
              {
                icon: "bi-envelope-fill",
                title: "Email",
                text: "Henryco@example.com",
              },
              {
                icon: "bi-phone-fill",
                title: "Phone",
                text: "+63 917 123 4567",
              },
            ].map((info, index) => (
              <div
                key={index}
                className="col-md-4 text-center mb-4"
                data-aos="fade-up"
                data-aos-delay={100 * (index + 1)}
              >
                <div className="card bg-dark text-white border-0 shadow-lg p-4 rounded-3 h-100">
                  <i className={`bi ${info.icon} text-warning fs-1 mb-3`}></i>
                  <h5 className="fw-bold">{info.title}</h5>
                  <p className="text-gray-400">{info.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div
            className="text-center mt-5"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <h5 className="fw-bold mb-3">Follow Me</h5>
            <div className="d-flex justify-content-center gap-3 fs-3">
              {[
                { href: "https://github.com/", icon: "bi-github" },
                { href: "https://linkedin.com/", icon: "bi-linkedin" },
                { href: "https://twitter.com/", icon: "bi-twitter" },
                { href: "https://facebook.com/", icon: "bi-facebook" },
                { href: "https://instagram.com/", icon: "bi-instagram" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-warning transition"
                >
                  <i className={`bi ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Text Info with Fade Animations */}
        </div>
      </section>
      {/* Floating Resume Button */}
      <a
        href="/resume.pdf"
        download="My_Resume.pdf"
        className={`resume-btn pos-${section}`}
      >
        📄 Download Resume
      </a>
      {/* Footer */}
      <footer className="bg-dark text-white pt-5 pb-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4" data-aos="fade-up">
              <h5 className="fw-bold text-warning mb-3">Henryco Buena</h5>
              <p className="mb-3">
                Full Stack Developer passionate about creating innovative
                solutions and helping businesses grow through technology.
              </p>
              <div className="social-links">
                <a href="https://github.com/" target="_blank" rel="noreferrer">
                  <i className="bi bi-github"></i>
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                  <i className="bi bi-twitter"></i>
                </a>
              </div>
            </div>
            <div
              className="col-lg-2 col-md-6 mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h6 className="fw-bold text-warning mb-3">Quick Links</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#home" className="text-white text-decoration-none">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-white text-decoration-none">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-white text-decoration-none">
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-white text-decoration-none"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="col-lg-3 col-md-6 mb-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h6 className="fw-bold text-warning mb-3">Services</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Mobile Apps
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white text-decoration-none">
                    Consulting
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="col-lg-3 mb-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h6 className="fw-bold text-warning mb-3">Contact Info</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="bi bi-geo-alt-fill me-2"></i>
                  Manila, Philippines
                </li>
                <li className="mb-2">
                  <i className="bi bi-envelope-fill me-2"></i>
                  Henryco@example.com
                </li>
                <li className="mb-2">
                  <i className="bi bi-phone-fill me-2"></i>
                  +63 917 123 4567
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-4" />
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="mb-0">
                &copy; 2025 Henryco Buena. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="mb-0">
                Made with <i className="bi bi-heart-fill text-danger"></i> using
                React & Bootstrap
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* Bootstrap Icons CDN */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.0/font/bootstrap-icons.min.css"
        rel="stylesheet"
      />
      {/* Bootstrap JS */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
      {/* AOS JS */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
    </>
  );
}

export default App;
