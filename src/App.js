import React, { useEffect, useState, useRef } from "react";
import Navbar from "./components/Navbar";
import "./styles/index.css";
import henryImage from "./assets/henry.png";
import sswmsimage from "./assets/sswms1.png";
import tesda from "./assets/tesda.png";
import grab from "./assets/grab.png";
import brgy from "./assets/sanguninang_kabataan.png";
import ojt from "./assets/ojt.png";
import capstone from "./assets/capstone.png";
import college from "./assets/college.png";
// import freelance from "./assets/freelance.png"; // Add this line
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import Swal from "sweetalert2";

function App() {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [stars, setStars] = useState([]);
  const [showMouse, setShowMouse] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  // Before your return() in App.js
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject] = useState(null);

  const [setActiveProject] = useState(null);
  const [setCurrentImageIndex] = useState(0);
  const images = [
    "/images/project1.jpg",
    "/images/project2.jpg",
    "/images/project3.jpg",
  ];
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const openProject = (projectId) => {
    setActiveProject(projectId);
  };

  const closeProject = () => {
    setActiveProject(null);
  };
  useEffect(() => {
    const generatedStars = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      animationDuration: Math.random() * 3 + 2,
      animationDelay: Math.random() * 2,
    }));
    setStars(generatedStars);
  }, []);

  const roles = [
    "Frontend Developer",
    "Full Stack Developer",
    "Freelancer",
    "Problem Solver",
  ];

  const projects = [
    {
      title: "Social Service & Welfare Management System",
      description:
        "An integrated system for LGU social services with AI DSS and dynamic PHP backend.",
      category: "Web App",
      technologies: ["React", "Bootstrap", "PHP", "MySQL"],
      image: sswmsimage,
      link: "http://www.henry.gt.tc/sswms/?i=1",
      github: "https://github.com/Henrycoa/capstone-sswms",
      gallery: ["assets/img/sswms1.png", "assets/img/sswms2.png"],
    },

    {
      title: "Grab Rider Clone",
      description:
        "A React + PHP-based Grab-like delivery app with real-time GPS tracking, payments, and role-based dashboards.",
      fullDescription:
        "The Grab Rider Clone is a mobile-first food delivery and ride-hailing application inspired by Grab. It includes separate apps for customers and delivery partners, plus a management dashboard for restaurants and merchants. Features include real-time GPS tracking, integrated payment systems, push notifications, customer support chat, and a rating/review system. The backend is built with PHP and MySQL, while React powers the frontend, and Firebase manages real-time communication and notifications.",
      image: grab,
      gallery: [
        sswmsimage,
        "https://via.placeholder.com/1200x800?text=SSWMS+Screenshot+1",
        "https://via.placeholder.com/1200x800?text=SSWMS+Screenshot+2",
      ],
      technologies: [
        "Flutter",
        "PHP",
        "MySQL",
        "Firebase",
        "Google Console",
        "Google auth",
        "Google Maps API",
      ],
      category: "Mobile",
      link: "http://www.henry.gt.tc/sswms/?i=1",
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
      gallery: [
        sswmsimage,
        "https://via.placeholder.com/1200x800?text=SSWMS+Screenshot+1",
        "https://via.placeholder.com/1200x800?text=SSWMS+Screenshot+2",
      ],
      technologies: ["React", "PHP", "MySQL", "Bootstrap", "Firebase"],
      category: "Web App",
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
      gallery: [
        sswmsimage,
        "https://via.placeholder.com/1200x800?text=SSWMS+Screenshot+1",
        "https://via.placeholder.com/1200x800?text=SSWMS+Screenshot+2",
      ],
      technologies: ["React", "PHP", "MySQL", "Bootstrap", "Firebase"],
      category: "Web App",
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
      gallery: [
        sswmsimage,
        "https://via.placeholder.com/1200x800?text=SSWMS+Screenshot+1",
        "https://via.placeholder.com/1200x800?text=SSWMS+Screenshot+2",
      ],
      technologies: ["React", "Bootstrap", "Node.js", "MySQL"],
      category: "Web App",
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
      category: "Web App",
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
      category: "Web App",
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
      category: "Web App",
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

  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedProject]);

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

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById("projects");

      if (projectsSection) {
        const sectionRect = projectsSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Show popup when section comes into view
        const sectionInView =
          sectionRect.top <= windowHeight * 0.5 && sectionRect.top >= -100;

        if (sectionInView && !showPopup) {
          setShowPopup(true);
          // Auto hide after 3 seconds
          setTimeout(() => {
            setShowPopup(false);
          }, 3000);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, [showPopup]);

  useEffect(() => {
    const generateStars = () => {
      const starArray = [];
      for (let i = 0; i < 200; i++) {
        starArray.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          animationDelay: Math.random() * 4,
          animationDuration: Math.random() * 3 + 2,
        });
      }
      setStars(starArray);
    };

    generateStars();
  }, []);
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      // Nag-scroll pababa → show image
      setShow(true);
    } else {
      // Nag-scroll pataas → hide image
      setShow(false);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

    const [formData, setFormData] = useState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    // Handle input changes
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle submit
   const handleSubmit = async (e) => {
     e.preventDefault();
     setLoading(true);
     setStatus("");

     try {
       const response = await axios.post(
         "http://localhost/PORTFOLIO/Backend/send_email.php",
         formData,
         {
           headers: { "Content-Type": "application/json" },
         }
       );

       if (response.data.success) {
         // ✅ SUCCESS ALERT
         Swal.fire({
           icon: "success",
           title: "Message Sent!",
           text: "Your message has been sent successfully 🚀",
           confirmButtonColor: "#4b6cb7",
         });

         setFormData({ name: "", email: "", subject: "", message: "" });
       } else {
         // ⚠️ ERROR ALERT
         Swal.fire({
           icon: "error",
           title: "Failed to Send",
           text:
             response.data.message || "Something went wrong. Please try again.",
           confirmButtonColor: "#d33",
         });
       }
     } catch (error) {
       console.error(error);
       // ⚠️ NETWORK ERROR ALERT
       Swal.fire({
         icon: "error",
         title: "Network Error",
         text: "Please check your internet connection or server.",
         confirmButtonColor: "#d33",
       });
     }

     setLoading(false);
   };


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
            className="position-absolute w-100 h-100 gradient-overlay"
            data-aos="fade-in"
            data-aos-duration="1500"
            style={{
              background:
                "linear-gradient(135deg, rgba(255, 193, 7, 0.1) 0%, rgba(0, 123, 255, 0.1) 100%)",
              zIndex: 1,
            }}
          ></div>

          {/* Floating Background Shapes with Enhanced Animations */}
          <div
            className="floating-shape shape-1"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
            style={{
              top: "10%",
              left: "10%",
              width: "100px",
              height: "100px",
              background: "rgba(255, 193, 7, 0.1)",
              borderRadius: "50%",
              zIndex: 1,
            }}
          ></div>

          <div
            className="floating-shape shape-2"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="400"
            style={{
              top: "20%",
              right: "15%",
              width: "80px",
              height: "80px",
              background: "rgba(0, 123, 255, 0.1)",
              borderRadius: "20px",
              transform: "rotate(45deg)",
              zIndex: 1,
            }}
          ></div>

          <div
            className="floating-shape shape-3"
            data-aos="slide-right"
            data-aos-duration="1300"
            data-aos-delay="600"
            style={{
              bottom: "30%",
              left: "5%",
              width: "60px",
              height: "60px",
              background: "rgba(255, 193, 7, 0.15)",
              borderRadius: "10px",
              zIndex: 1,
            }}
          ></div>

          <div
            className="floating-shape shape-4"
            data-aos="slide-left"
            data-aos-duration="1100"
            data-aos-delay="800"
            style={{
              bottom: "10%",
              right: "10%",
              width: "120px",
              height: "120px",
              background: "rgba(0, 123, 255, 0.08)",
              borderRadius: "50%",
              zIndex: 1,
            }}
          ></div>

          {/* Animated Lines/Particles */}
          <div
            className="animated-line line-1"
            data-aos="zoom-in-up"
            data-aos-duration="900"
            data-aos-delay="300"
            style={{
              top: "40%",
              left: "20%",
              width: "2px",
              height: "150px",
              background:
                "linear-gradient(to bottom, rgba(255, 193, 7, 0.3), transparent)",
              zIndex: 1,
            }}
          ></div>

          <div
            className="animated-line line-2"
            data-aos="zoom-in-down"
            data-aos-duration="1100"
            data-aos-delay="500"
            style={{
              top: "15%",
              right: "25%",
              width: "2px",
              height: "100px",
              background:
                "linear-gradient(to bottom, rgba(0, 123, 255, 0.3), transparent)",
              transform: "rotate(30deg)",
              zIndex: 1,
            }}
          ></div>

          {/* Additional Floating Elements */}
          <div
            className="floating-shape shape-5"
            data-aos="flip-up"
            data-aos-duration="1400"
            data-aos-delay="700"
            style={{
              top: "60%",
              left: "80%",
              width: "40px",
              height: "40px",
              background: "rgba(255, 193, 7, 0.2)",
              borderRadius: "50%",
              zIndex: 1,
            }}
          ></div>

          <div
            className="floating-shape shape-6"
            data-aos="flip-down"
            data-aos-duration="1200"
            data-aos-delay="900"
            style={{
              top: "70%",
              left: "15%",
              width: "30px",
              height: "30px",
              background: "rgba(0, 123, 255, 0.2)",
              borderRadius: "5px",
              transform: "rotate(20deg)",
              zIndex: 1,
            }}
          ></div>

          {/* Extra Decorative Particles */}
          <div
            className="particle particle-1"
            style={{
              top: "25%",
              left: "45%",
              width: "8px",
              height: "8px",
            }}
          ></div>
          <div
            className="particle particle-2"
            style={{
              top: "55%",
              left: "60%",
              width: "6px",
              height: "6px",
            }}
          ></div>
          <div
            className="particle particle-3"
            style={{
              top: "80%",
              left: "40%",
              width: "10px",
              height: "10px",
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
                className="profile-image rounded-circle mb-4 border border-5 border-warning"
                style={{
                  width: "200px",
                  height: "300px",
                  objectFit: "cover",
                }}
                data-aos="zoom-in"
                data-aos-delay="300"
              />

              <h1
                className="display-4 fw-bold mb-3"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Hi, I'm{" "}
                <span className="text-warning name-highlight">
                  Henryco Buena
                </span>
              </h1>
              <h2 className="h3 mb-4" data-aos="fade-up" data-aos-delay="500">
                I'm a <span className="text-warning">{typedText}</span>
                <span className="typing-cursor">|</span>
              </h2>
              <p className="lead mb-4" data-aos="fade-up" data-aos-delay="600">
                Passionate about creating digital experiences that make a
                difference. I build modern, responsive, and user-friendly
                applications.
              </p>
              <div
                className="d-flex gap-3 flex-wrap"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <a
                  href="#projects"
                  className="btn btn-warning btn-lg px-4 py-2 rounded-pill cta-button"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="btn btn-outline-light btn-lg px-4 py-2 rounded-pill cta-button-outline"
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
              <div className="position-relative image-container">
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=400&fit=crop"
                  alt="Coding"
                  className="img-fluid rounded-3 shadow-lg hero-image"
                  style={{ maxWidth: "500px" }}
                  data-aos="zoom-in"
                  data-aos-delay="500"
                />
                {/* Glowing Border Effect */}
                <div className="image-glow"></div>
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
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          {/* Scroll Down Text */}
          <div
            className="scroll-text"
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

        <style>{`
        .hero {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        min-height: 100vh;
        display: flex;
        align-items: center;
        position: relative;
        overflow: hidden;
        margin: 0;
        padding: 0;
      }

      .hero::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="50" cy="10" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="10" cy="90" r="1" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grain)"/></svg>');
        animation: float 20s ease-in-out infinite;
      }

      /* Profile Image */
      .hero .rounded-circle {
        width: 200px;
        height: 200px;
        object-fit: cover;
        margin: 0 auto;
        display: block;
      }

      /* Typing cursor animation */
      .typing-cursor {
        animation: blink 1s infinite;
      }

      @keyframes blink {

        0%,
        50% {
          opacity: 1;
        }

        51%,
        100% {
          opacity: 0;
        }
      }

      /* Mouse scroll indicator animation */
      .mouse-svg .scroll-wheel {
        animation: scroll-animation 1.5s ease-in-out infinite;
      }

      @keyframes scroll-animation {

        0%,
        100% {
          transform: translateY(0);
        }

        50% {
          transform: translateY(6px);
        }
      }

      /* ===== HERO RESPONSIVE STYLES ===== */

      /* Desktop (992px and up) */
      @media (min-width: 992px) {
        .hero .container {
          padding: 2rem;
        }

        .hero h1.display-4 {
          font-size: 3.5rem;
        }

        .hero h2.h3 {
          font-size: 2rem;
        }

        .hero .lead {
          font-size: 1.25rem;
        }

        .hero .rounded-circle {
          width: 200px;
          height: 200px;
          margin: 0 0 1.5rem 0;
        }
      }

      /* Tablet (768px to 991px) */
      @media (min-width: 768px) and (max-width: 991px) {
        .hero {
          min-height: 100vh;
          padding: 2rem 0;
        }

        .hero h1.display-4 {
          font-size: 2.5rem;
        }

        .hero h2.h3 {
          font-size: 1.5rem;
        }

        .hero .lead {
          font-size: 1.1rem;
        }

        .hero .rounded-circle {
          width: 180px;
          height: 180px;
          margin: 0 auto 1.5rem;
        }

        .hero .col-lg-6 {
          text-align: center;
          margin-bottom: 2rem;
        }

        .hero .col-lg-6:last-child img {
          max-width: 400px;
        }

        .hero .position-absolute[data-aos] {
          transform: scale(0.8) !important;
        }

        .hero .d-flex.gap-3 {
          justify-content: center;
        }

        .hero-container {
          grid-template-columns: 1fr !important;
          text-align: center;
          gap: 2rem !important;
        }

        .nav-links {
          display: none !important;
        }
      }

      /* Mobile (576px to 767px) */
      @media (min-width: 576px) and (max-width: 767px) {
        .hero {
          min-height: 100vh;
          padding: 3rem 0 2rem;
        }

        .hero h1.display-4 {
          font-size: 2rem;
          text-align: center;
        }

        .hero h2.h3 {
          font-size: 1.3rem;
          text-align: center;
        }

        .hero .lead {
          font-size: 1rem;
          text-align: center;
        }

        .hero .rounded-circle {
          width: 150px;
          height: 150px;
          margin: 0 auto 1.5rem;
        }

        .hero .col-lg-6 {
          text-align: center;
          margin-bottom: 2rem;
        }

        .hero .d-flex.gap-3 {
          flex-direction: column;
          align-items: center;
        }

        .hero .btn {
          width: 100%;
          max-width: 300px;
        }

        .hero .col-lg-6:last-child {
          display: none;
        }

        .hero .position-absolute[data-aos] {
          transform: scale(0.6) !important;
          opacity: 0.5;
        }

        .hero__bottom--mouse-container {
          bottom: 10px;
        }

        .hero__bottom--mouse-container svg {
          width: 30px;
          height: 50px;
        }

        .hero__bottom--mouse-container div {
          font-size: 12px;
        }
      }
      `}</style>
      </section>

      {/* About Section */}
      <section data-id="2" style={styles.aboutSection} id="aboutSection">
        {/* Animated Starfield Background */}

        <div style={styles.starField}>
          {stars.map((star) => (
            <div
              key={star.id}
              style={{
                ...styles.star,
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                animationDelay: `${star.animationDelay}s`,
                animationDuration: `${star.animationDuration}s`,
              }}
              className="star-sparkle"
            />
          ))}
        </div>

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
        
        @keyframes star-sparkle {
          0%, 100% { 
            opacity: 0.3; 
            transform: scale(1);
          }
          50% { 
            opacity: 1; 
            transform: scale(1.5);
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
          }
        }
        
        .star-sparkle {
          animation: star-sparkle var(--duration, 2s) infinite;
        }
        
        @keyframes glow {
          0% { 
            text-shadow: 0 0 20px rgba(100, 255, 218, 0.5);
          }
          100% { 
            text-shadow: 0 0 30px rgba(100, 255, 218, 0.8), 0 0 40px rgba(100, 255, 218, 0.3);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes pulse {
          0%, 100% { 
            box-shadow: 0 0 50px rgba(102, 126, 234, 0.5), inset 0 0 50px rgba(255, 255, 255, 0.1);
          }
          50% { 
            box-shadow: 0 0 80px rgba(102, 126, 234, 0.8), inset 0 0 80px rgba(255, 255, 255, 0.2);
          }
        }
        
        /* Shooting star effect */
        @keyframes shooting-star {
          0% {
            transform: translateX(-100px) translateY(-100px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(100vw) translateY(100vh);
            opacity: 0;
          }
        }
        
        /* Add some larger shooting stars */
        .star-sparkle:nth-child(50n) {
          animation: shooting-star 8s infinite linear;
          width: 2px !important;
          height: 2px !important;
          background: linear-gradient(45deg, #fff, #64ffda) !important;
          border-radius: 0 !important;
          box-shadow: 0 0 10px rgba(100, 255, 218, 0.8) !important;
        }
        
        /* Twinkling effect for some stars */
        .star-sparkle:nth-child(7n) {
          animation: star-sparkle 1.5s infinite ease-in-out;
        }
        
        .star-sparkle:nth-child(11n) {
          animation: star-sparkle 2.5s infinite ease-in-out;
        }
        
        .star-sparkle:nth-child(13n) {
          animation: star-sparkle 3.5s infinite ease-in-out;
        }
        `}</style>
        <div style={{ height: "100vh" }}></div>
        {/* <div
          className="elementor-element elementor-element-21baa8c elementor-widget elementor-widget-image elementor-motion-effects-parent animated"
          data-id="21baa8c"
          data-element_type="widget"
          data-widget_type="image.default"
          style={{ display: "flex", justifyContent: "center" }} // Center horizontally
        >
          <div
            className="elementor-widget-container elementor-motion-effects-element"
            style={{
              opacity: show ? 1 : 0,
              transition: "opacity 0.5s ease",
              willChange: "opacity",
            }}
          >
            <img
              decoding="async"
              width="300"
              height="107"
              src="https://mjcweb.dev/wp-content/uploads/2023/07/Shade-300x107.webp"
              className="attachment-medium size-medium wp-image-2205"
              alt=""
              srcSet="
            https://mjcweb.dev/wp-content/uploads/2023/07/Shade-300x107.webp 300w, 
            https://mjcweb.dev/wp-content/uploads/2023/07/Shade-1024x364.webp 1024w, 
            https://mjcweb.dev/wp-content/uploads/2023/07/Shade-768x273.webp 768w, 
            https://mjcweb.dev/wp-content/uploads/2023/07/Shade-1536x546.webp 1536w, 
            https://mjcweb.dev/wp-content/uploads/2023/07/Shade-2048x728.webp 2048w
          "
              sizes="(max-width: 300px) 100vw, 300px"
            />
          </div>
            </div> */}
      </section>

      <section
        data-id="3"
        id="about"
        className="section-padding text-white"
        style={{
          padding: "70px 20px",
          position: "relative",
          overflow: "hidden",
          background: "black",
        }}
      >
        {/* Starry Background Layers */}
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="shooting-stars"></div>

        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Top Banner */}
          <div
            className="text-center mb-5"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <img
              src={ojt}
              alt="OJT group photo"
              style={{
                width: "100%",
                maxHeight: "500px",
                objectFit: "cover",
                borderRadius: "15px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.6)",
              }}
            />
            <h2
              className="mt-4"
              style={{
                color: "#f97316",
                fontWeight: "bold",
                fontSize: "32px",
                textShadow: "0 0 12px rgba(255, 215, 0, 0.8)",
              }}
            >
              My Journey as a Developer
            </h2>
          </div>

          {/* Timeline Sections */}
          {[
            {
              title: "🎓 College (2021 – 2024)",
              desc1:
                "My college years built the foundation of my software development career. I gained technical knowledge in programming, databases, and software engineering concepts, which became my stepping stone as a developer.",
              desc2:
                "College also taught me discipline, research, and problem-solving—skills that prepared me for real-world software challenges.",
              aos: "fade-right",
              img: college,
              reverse: false,
            },
            {
              title: "💼 On-the-Job Training (OJT)",
              desc1:
                "During my On-the-Job Training, I worked on real-world projects where I learned how to collaborate with professionals, write clean and efficient code, and solve practical problems through software.",
              desc2:
                "This experience strengthened my technical knowledge and helped me develop soft skills such as communication, teamwork, and time-management—skills that continue to benefit me today.",
              aos: "fade-left",
              img: ojt,
              reverse: true,
            },
            {
              title: "💡 Capstone Project (2024)",
              desc1:
                "For my final year project, I designed and developed an Attendance Monitoring System using Laravel, MySQL, and RESTful API principles.",
              desc2:
                "It introduced me to full-stack development practices such as database design, backend logic, and frontend integration, while teaching me to build scalable applications.",
              aos: "fade-right",
              img: capstone,
              reverse: false,
            },
            {
              title: "🌍 Freelancing (2024 – 2025)",
              desc1:
                "After graduation, I explored freelancing opportunities, where I worked on both web and mobile apps. I built responsive websites using React.js and backend systems with Laravel + MySQL.",
              desc2:
                "Freelancing taught me project ownership, client communication, and adaptability. I also conducted code reviews and mentored junior developers, strengthening my leadership skills.",
              aos: "fade-left",
              // img: freelance,
              reverse: true,
            },
          ].map((section, idx) => (
            <div
              key={idx}
              className={`row align-items-center mb-5 ${
                section.reverse ? "flex-md-row-reverse" : ""
              }`}
            >
              <div className="col-md-5" data-aos={section.aos}>
                <img
                  src={section.img}
                  alt={section.title}
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    boxShadow: "0 6px 15px rgba(0,0,0,0.5)",
                  }}
                />
              </div>
              <div
                className="col-md-7"
                data-aos={section.reverse ? "fade-right" : "fade-left"}
              >
                <h3 className="highlight-scroll">{section.title}</h3>
                <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
                  {section.desc1}
                </p>
                <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
                  {section.desc2}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Star Animations */}
        <style>{`
        .stars, .twinkling, .shooting-stars {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          display: block;
        }

        .stars {
          background: black url("https://www.script-tutorials.com/demos/360/images/stars.png") repeat;
          z-index: 0;
        }

        .twinkling {
          background: transparent url("https://www.script-tutorials.com/demos/360/images/twinkling.png") repeat;
          animation: move-twinkling 200s linear infinite;
          z-index: 1;
        }

        .shooting-stars {
          background: transparent url("https://www.script-tutorials.com/demos/360/images/clouds.png") repeat;
          animation: move-clouds 200s linear infinite;
          z-index: 2;
        }

        @keyframes move-twinkling {
          from { background-position:0 0; }
          to { background-position:-10000px 5000px; }
        }

        @keyframes move-clouds {
          from { background-position:0 0; }
          to { background-position:10000px 0; }
        }

        .highlight-scroll {
          color: #f97316;
          font-weight: 600;
          text-shadow: 0 0 8px rgba(255, 215, 0, 0.6);
        }
      `}</style>
      </section>

      {/* <section className="wave-divider">
        <div
          className="elementor-shape elementor-shape-top"
          data-negative="false"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <path
              className="elementor-shape-fill"
              d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7
           c75.8,32.2,133.7,44.5,192.6,49.7c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3
           c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
            />
          </svg>
        </div>
      </section> */}
      <section style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            overflow: "hidden",
            lineHeight: 0,
          }}
        >
          <svg
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            style={{ display: "block", width: "100%", height: "100px" }}
          >
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#667eea", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#764ba2", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
            <path
              fill="url(#grad1)" // Gradient
              d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7
                c75.8,32.2,133.7,44.5,192.6,49.7c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5
                c39.2-0.7,92.8-6.7,134-22.4c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
            />
          </svg>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects-section" className="projects-section">
        <div style={{ height: "5vh" }}></div>
        {/* Animated Background */}
        <div className="stars-bg" data-aos="fade-in" data-aos-duration="2000">
          {stars.map((star) => (
            <div
              key={star.id}
              className="star"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                animationDuration: `${star.animationDuration}s`,
                animationDelay: `${star.animationDelay}s`,
              }}
            />
          ))}
        </div>

        {/* Gradient Orbs */}
        <div
          className="orb orb-left"
          data-aos="fade-right"
          data-aos-duration="1500"
        />
        <div
          className="orb orb-right"
          data-aos="fade-left"
          data-aos-duration="1500"
        />

        <div className="container">
          {/* Section Header */}
          <div
            className="section-header"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            <div
              className="badge-wrapper"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <span className="section-badge">Project</span>
            </div>
            <h2
              className="section-title"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Featured Projects
            </h2>
            <p
              className="section-subtitle"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Crafting digital experiences that blend creativity with
              functionality
            </p>

            {/* Filter Buttons */}
            <div
              className="filter-container"
              data-aos="zoom-in-up"
              data-aos-delay="600"
            >
              {["All", "Web App", "Mobile"].map((filter, i) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`filter-btn ${
                    activeFilter === filter ? "active" : ""
                  }`}
                  data-aos="zoom-in"
                  data-aos-delay={700 + i * 100}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <article
                key={index}
                className={`project-card ${index % 2 ? "reverse" : ""}`}
                data-aos={index % 2 ? "fade-left" : "fade-right"}
                data-aos-delay={200}
                data-aos-duration="1000"
              >
                {/* Image Section */}
                <div
                  className="project-image-container"
                  data-aos="zoom-in"
                  data-aos-delay={300}
                >
                  <div
                    className="project-image-wrapper"
                    onClick={() => openProject(project, 0)}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                    />
                    <div className="image-overlay">
                      <div className="overlay-content">
                        <svg
                          className="icon"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <circle cx="11" cy="11" r="8"></circle>
                          <path d="m21 21-4.35-4.35"></path>
                        </svg>
                        <span>View Gallery</span>
                      </div>
                    </div>
                    <div className="image-glow"></div>
                  </div>
                </div>

                {/* Content Section */}
                <div
                  className="project-content"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  <span
                    className="category-badge"
                    data-aos="fade-right"
                    data-aos-delay={450}
                  >
                    {project.category}
                  </span>
                  <h3
                    className="project-title"
                    data-aos="fade-up"
                    data-aos-delay={500}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="project-description"
                    data-aos="fade-up"
                    data-aos-delay={550}
                  >
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div
                    className="tech-stack"
                    data-aos="fade-up"
                    data-aos-delay={600}
                  >
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="tech-tag"
                        data-aos="zoom-in"
                        data-aos-delay={650 + idx * 50}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div
                    className="action-buttons"
                    data-aos="fade-up"
                    data-aos-delay={700}
                  >
                    {project.link && project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary"
                        data-aos="zoom-in"
                        data-aos-delay={750}
                      >
                        <svg
                          className="btn-icon"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        Live Demo
                      </a>
                    )}
                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-secondary"
                        data-aos="zoom-in"
                        data-aos-delay={800}
                      >
                        <svg
                          className="btn-icon"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                        </svg>
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
            <div style={{ height: "5vh" }}></div>
          </div>

          {/* Modal */}
          {selectedProject && (
            <div className="modal-overlay" onClick={closeProject}>
              <div
                className="modal-container"
                onClick={(e) => e.stopPropagation()}
                data-aos="zoom-in"
                data-aos-duration="500"
              >
                <div
                  className="modal-header"
                  data-aos="fade-down"
                  data-aos-delay="100"
                >
                  <h3 className="modal-title">{selectedProject.title}</h3>
                  <button className="modal-close" onClick={closeProject}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>

                <div
                  className="modal-body"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <img
                    src={
                      selectedProject.gallery?.[currentIndex] ||
                      selectedProject.image
                    }
                    alt="project"
                    className="modal-image"
                  />

                  {/* Thumbnails */}
                  {selectedProject.gallery?.length > 1 && (
                    <div
                      className="thumbnails"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      {selectedProject.gallery.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={`thumb-${idx}`}
                          className={`thumbnail ${
                            idx === currentIndex ? "active" : ""
                          }`}
                          onClick={() => setCurrentIndex(idx)}
                          data-aos="flip-left"
                          data-aos-delay={350 + idx * 50}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Modal Footer */}
                {selectedProject.gallery?.length > 1 && (
                  <div
                    className="modal-footer"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <button onClick={prevImage} className="nav-btn">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <polyline points="15 18 9 12 15 6"></polyline>
                      </svg>
                      Previous
                    </button>
                    <span className="modal-counter">
                      {currentIndex + 1} / {selectedProject.gallery.length}
                    </span>
                    <button onClick={nextImage} className="nav-btn">
                      Next
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <style>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          .projects-section {
            position: relative;
            min-height: 100vh;
            padding: 100px 0;
            background: linear-gradient(180deg, #000000 0%, #0a0a0a 100%);
            overflow: hidden;
          }

          /* Background Elements */
          .stars-bg {
            position: absolute;
            inset: 0;
            pointer-events: none;
            opacity: 0.4;
          }

          .star {
            position: absolute;
            background: white;
            border-radius: 50%;
            animation: twinkle infinite ease-in-out;
          }

          @keyframes twinkle {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
          }

          .orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(120px);
            animation: float 10s ease-in-out infinite;
            pointer-events: none;
          }

          .orb-left {
            top: 10%;
            left: 0;
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, rgba(245,158,11,0.2) 0%, transparent 70%);
          }

          .orb-right {
            bottom: 10%;
            right: 0;
            width: 700px;
            height: 700px;
            background: radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%);
            animation-delay: 3s;
          }

          @keyframes float {
            0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
            50% { transform: translate(30px, -30px) scale(1.1); opacity: 0.8; }
          }

          .container {
            position: relative;
            z-index: 1;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }

          /* Section Header */
          .section-header {
            text-align: center;
            margin-bottom: 80px;
          }

          .badge-wrapper {
            margin-bottom: 20px;
          }

          .section-badge {
            display: inline-block;
            padding: 8px 24px;
            background: rgba(245,158,11,0.1);
            border: 1px solid rgba(245,158,11,0.3);
            border-radius: 50px;
            color: #f59e0b;
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 1px;
            text-transform: uppercase;
          }

          .section-title {
            font-size: 56px;
            font-weight: 800;
            background: linear-gradient(135deg, #f59e0b 0%, #f97316 50%, #ec4899 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 20px;
            line-height: 1.2;
          }

          .section-subtitle {
            font-size: 20px;
            color: #9ca3af;
            max-width: 600px;
            margin: 0 auto 40px;
            line-height: 1.6;
          }

          /* Filter Buttons */
          .filter-container {
            display: flex;
            justify-content: center;
            gap: 16px;
            flex-wrap: wrap;
          }

          .filter-btn {
            padding: 12px 32px;
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 50px;
            color: #fff;
            font-size: 15px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            backdrop-filter: blur(10px);
          }

          .filter-btn:hover {
            background: rgba(255,255,255,0.1);
            border-color: rgba(245,158,11,0.3);
            transform: translateY(-2px);
          }

          .filter-btn.active {
            background: linear-gradient(135deg, #f59e0b, #f97316);
            border-color: transparent;
            color: #000;
            box-shadow: 0 8px 32px rgba(245,158,11,0.4);
          }

          /* Projects Grid */
          .projects-grid {
            display: flex;
            flex-direction: column;
            gap: 60px;
          }

          .project-card {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: center;
            background: linear-gradient(135deg, rgba(17,24,39,0.5), rgba(31,41,55,0.3));
            border: 1px solid rgba(255,255,255,0.05);
            border-radius: 32px;
            padding: 40px;
            backdrop-filter: blur(20px);
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
          }

          .project-card::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 32px;
            padding: 1px;
            background: linear-gradient(135deg, rgba(245,158,11,0.1), transparent);
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            opacity: 0;
            transition: opacity 0.5s ease;
          }

          .project-card:hover {
            transform: translateY(-12px);
            box-shadow: 0 32px 64px rgba(0,0,0,0.6);
            border-color: rgba(245,158,11,0.2);
          }

          .project-card:hover::before {
            opacity: 1;
          }

          .project-card.reverse {
            grid-template-columns: 1fr 1fr;
          }

          .project-card.reverse .project-image-container {
            order: 2;
          }

          .project-card.reverse .project-content {
            order: 1;
          }

          /* Image Section */
          .project-image-container {
            position: relative;
          }

          .project-image-wrapper {
            position: relative;
            border-radius: 20px;
            overflow: hidden;
            cursor: pointer;
            aspect-ratio: 16/10;
          }

          .project-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .project-image-wrapper:hover .project-image {
            transform: scale(1.08);
          }

          .image-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.95), transparent 60%);
            display: flex;
            align-items: flex-end;
            justify-content: center;
            padding: 32px;
            opacity: 0;
            transition: opacity 0.4s ease;
          }

          .project-image-wrapper:hover .image-overlay {
            opacity: 1;
          }

          .overlay-content {
            display: flex;
            align-items: center;
            gap: 12px;
            color: #f59e0b;
            font-weight: 700;
            font-size: 18px;
          }

          .icon {
            width: 24px;
            height: 24px;
            stroke-width: 2.5px;
          }

          .image-glow {
            position: absolute;
            inset: -50%;
            background: radial-gradient(circle, rgba(245,158,11,0.3), transparent 70%);
            opacity: 0;
            transition: opacity 0.5s ease;
            pointer-events: none;
          }

          .project-image-wrapper:hover .image-glow {
            opacity: 1;
          }

          /* Content Section */
          .project-content {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .category-badge {
            display: inline-block;
            width: fit-content;
            padding: 8px 20px;
            background: linear-gradient(135deg, #f59e0b, #f97316);
            border-radius: 50px;
            color: #000;
            font-size: 13px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          .project-title {
            font-size: 36px;
            font-weight: 800;
            color: #fff;
            line-height: 1.2;
            transition: color 0.3s ease;
          }

          .project-card:hover .project-title {
            color: #f59e0b;
          }

          .project-description {
            font-size: 17px;
            color: #d1d5db;
            line-height: 1.7;
          }

          /* Tech Stack */
          .tech-stack {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
          }

          .tech-tag {
            padding: 8px 18px;
            background: rgba(139,92,246,0.1);
            border: 1px solid rgba(139,92,246,0.3);
            border-radius: 10px;
            color: #c4b5fd;
            font-size: 14px;
            font-weight: 600;
            transition: all 0.3s ease;
          }

          .tech-tag:hover {
            background: rgba(139,92,246,0.2);
            border-color: rgba(139,92,246,0.5);
            transform: translateY(-2px);
          }

          /* Action Buttons */
          .action-buttons {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
            margin-top: 8px;
          }

          .btn-primary,
          .btn-secondary {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 14px 28px;
            border-radius: 14px;
            font-size: 15px;
            font-weight: 700;
            text-decoration: none;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .btn-primary {
            background: linear-gradient(135deg, #f59e0b, #f97316);
            color: #000;
            box-shadow: 0 4px 20px rgba(245,158,11,0.3);
          }

          .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 30px rgba(245,158,11,0.5);
          }

          .btn-secondary {
            background: transparent;
            border: 2px solid rgba(255,255,255,0.2);
            color: #fff;
          }

          .btn-secondary:hover {
            border-color: #f59e0b;
            background: rgba(245,158,11,0.1);
            transform: translateY(-3px);
          }

          .btn-icon {
            width: 20px;
            height: 20px;
            stroke-width: 2.5px;
          }

          /* Modal */
          .modal-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.96);
            backdrop-filter: blur(20px);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            z-index: 9999;
            animation: fadeIn 0.3s ease-out;
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          .modal-container {
            background: linear-gradient(135deg, #1f2937, #111827);
            border-radius: 28px;
            border: 1px solid rgba(245,158,11,0.2);
            max-width: 1200px;
            width: 100%;
            overflow: hidden;
            box-shadow: 0 32px 64px rgba(0,0,0,0.8);
            animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }

          @keyframes slideUp {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }

          .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 24px 32px;
            border-bottom: 1px solid rgba(255,255,255,0.1);
          }

          .modal-title {
            font-size: 24px;
            font-weight: 700;
            color: #fff;
          }

          .modal-close {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            border: none;
            background: rgba(255,255,255,0.1);
            color: #fff;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
          }

          .modal-close svg {
            width: 24px;
            height: 24px;
            stroke-width: 2.5px;
          }

          .modal-close:hover {
            background: #ef4444;
            transform: rotate(90deg);
          }

          .modal-body {
            padding: 32px;
          }

          .modal-image {
            width: 100%;
            max-height: 70vh;
            object-fit: contain;
            border-radius: 16px;
          }

          .thumbnails {
            display: flex;
            justify-content: center;
            gap: 16px;
            margin-top: 24px;
            flex-wrap: wrap;
          }

          .thumbnail {
            width: 120px;
            height: 80px;
            object-fit: cover;
            border-radius: 12px;
            cursor: pointer;
            opacity: 0.5;
            border: 3px solid rgba(255,255,255,0.2);
            transition: all 0.3s ease;
          }

          .thumbnail.active {
            border-color: #f59e0b;
            opacity: 1;
            transform: scale(1.08);
          }

          .thumbnail:hover {
            opacity: 1;
            transform: scale(1.05);
          }

          .modal-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 24px 32px;
            border-top: 1px solid rgba(255,255,255,0.1);
          }

          .nav-btn {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 12px 24px;
            background: rgba(255,255,255,0.1);
            border: none;
            border-radius: 14px;
            color: #fff;
            font-size: 15px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .nav-btn svg {
            width: 20px;
            height: 20px;
            stroke-width: 2.5px;
          }

          .nav-btn:hover {
            background: rgba(245,158,11,0.2);
            transform: translateY(-2px);
          }

          .modal-counter {
            color: #9ca3af;
            font-size: 15px;
            font-weight: 600;
          }

          /* Responsive */
          @media (max-width: 968px) {
            .section-title {
              font-size: 42px;
            }

            .project-card {
              grid-template-columns: 1fr;
              gap: 32px;
              padding: 32px;
            }

            .project-card.reverse .project-image-container {
              order: 1;
            }

            .project-card.reverse .project-content {
              order: 2;
            }

            .project-title {
              font-size: 28px;
            }
          }

          @media (max-width: 640px) {
            .projects-section {
              padding: 60px 0;
            }

            .section-title {
              font-size: 32px;
            }

            .section-subtitle {
              font-size: 16px;
            }

            .project-card {
              padding: 24px;
            }

            .project-title {
              font-size: 24px;
            }

            .action-buttons {
              flex-direction: column;
            }

            .btn-primary,
            .btn-secondary {
              width: 100%;
              justify-content: center;
            }

            .modal-footer {
              flex-direction: column;
              gap: 16px;
            }

            .nav-btn {
              width: 100%;
              justify-content: center;
            }
          }
        `}</style>
      </section>

      <section style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            overflow: "hidden",
            lineHeight: 0,
            transform: "scaleY(-1)", // Flip upside down
          }}
        >
          <svg
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            style={{ display: "block", width: "100%", height: "100px" }}
          >
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#667eea", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#764ba2", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
            <path
              fill="url(#grad1)"
              d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7
           c75.8,32.2,133.7,44.5,192.6,49.7c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5
           c39.2-0.7,92.8-6.7,134-22.4c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
            />
          </svg>
        </div>
      </section>

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

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-black text-white">
        <div className="container">
          {/* Heading */}
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-4 text-warning">
              Get In Touch
            </h2>
            <p className="lead text-gray-300">
              Ready to start your next project? Let's discuss how I can help.
            </p>
          </div>

          <div className="row g-4">
            {/* Contact Form */}
            <div className="col-lg-6">
              <div
                className="contact-form bg-dark p-5 rounded-3 shadow-lg h-100"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        name="name"
                        className="form-control form-control-lg bg-secondary text-white border-0"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input
                        type="email"
                        name="email"
                        className="form-control form-control-lg bg-secondary text-white border-0"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <input
                      type="text"
                      name="subject"
                      className="form-control form-control-lg bg-secondary text-white border-0"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <textarea
                      name="message"
                      className="form-control form-control-lg bg-secondary text-white border-0"
                      rows="6"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-warning btn-lg px-5 py-3 rounded-pill shadow"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </div>

                  {status && (
                    <p className="text-center mt-3 fw-bold text-light">
                      {status}
                    </p>
                  )}
                </form>
              </div>
            </div>
            
            {/* Map */}
            <div className="col-lg-6">
              <div
                className="map-container rounded-3 shadow-lg overflow-hidden h-100"
                data-aos="fade-left"
                data-aos-delay="200"
                style={{ minHeight: "500px" }}
              >
                <iframe
                  src="https://maps.google.com/maps?q=Pabahay+2000+Elementary+School&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "500px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="row mt-5 g-4">
            {[
              {
                icon: "bi-geo-alt-fill",
                title: "Location",
                text: "Pabahay 2000 Elementary School",
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
                className="col-md-4 text-center"
                data-aos="fade-up"
                data-aos-delay={100 * (index + 1)}
              >
                <div className="card bg-dark text-white border-0 shadow-lg p-4 rounded-3 h-100 hover-lift transition">
                  <i className={`bi ${info.icon} text-warning fs-1 mb-3`}></i>
                  <h5 className="fw-bold">{info.title}</h5>
                  <p className="text-gray-400 mb-0">{info.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div
            className="text-center mt-5 pt-4 border-top "
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
                  style={{ transition: "color 0.3s ease" }}
                >
                  <i className={`bi ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Floating Resume Button */}
      <a
        href="/resume.pdf"
        download="Henry_Buena_Resume.pdf"
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
                    href="#projects-section"
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
                  <a href="#home" className="text-white text-decoration-none">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#home" className="text-white text-decoration-none">
                    Mobile Apps
                  </a>
                </li>
                <li>
                  <a href="#home" className="text-white text-decoration-none">
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a href="#home" className="text-white text-decoration-none">
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
                  Bulacan, Philippines
                </li>
                <li className="mb-2">
                  <i className="bi bi-envelope-fill me-2"></i>
                  Henrybuena052@gmail.com
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
      {/* Bootstrap JS */}
      {/* AOS JS */}
    </>
  );
}

export default App;
