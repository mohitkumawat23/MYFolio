
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Mohit Kumawat",
  title: "Hi all, I'm Mohit",
  subTitle: emoji("A passionate Software Developer 🚀 having an experience of building Web and Mobile applications and  USE some other cool libraries and frameworks."),
  resumeLink: "https://drive.google.com/file/d/1te1719rJibY1mc-MsORb_z-L5-MeQIye/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/mohitkumawat23",
  linkedin: "https://www.linkedin.com/in/mohit-kumawat000/",
  gmail: "kmohitkumawat@gmail.com",
  gitlab: "https://gitlab.com/Mohitkumawat",
  facebook: "https://www.facebook.com/mohit.23kumawat"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY SOFTWARE DEVELOPER WHO WANTS TO EXPLORE EVERY  NEW TECH ",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ UI/UX Design and Implement various Layout designing"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS / My-SQL")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "80%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "50%"
    },
    {
      Stack: "Programming",
      progressPercentage: "40%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Campus Ambassador",  
      company: "Abhyuday IIT Bombay",
      companylogo: require("./assets/images/AbhyudayIITBombay.png"),
      date: "June 2018 – August 2018",
      desc: "I have successfully secured a Campus Ambassador internship at Abhyuday IIT Bombay 2019, IIT Bombay through Internshala, and loved to work with IIT Bombay.",
      
    },
    {
      role: "Intern",   
      company: "CDAC ATC Jaipur",
      companylogo: require("./assets/images/CDACATCJaipur.png"),
      date: "May 2019 – August 2019",
      desc: "During this period, I worked on App development And Design. I started working by understanding UI/UX Design and Implement various Layout designing. I have learned Many Things Like File Handling, Fragments, Menus, Widgets in Android. I have worked on Room Database Using Room Persistence Library and Firebase Database. I worked on REST APIs & SOAP APIs."
    },
    {
      role: "Campus Ambassador",  
      company: "TRYST, IIT Delhi",
      companylogo: require("./assets/images/TRYSTIITDelhi.jpg"),
      date: "Jan 2019 – May 2019",
      desc: "I have successfully secured a Campus Ambassador internship at TRYST, IIT Delhi 2019, IIT Delhi through Internshala, and loved to work with IIT Delhi."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "mohitkumawat23", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};




// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "CodeVita Season 8",
      subtitle: "for qualifying in Round 1 of CodeVita Season 8 held on 28th June, 2019 - 13th July, 2019 and securing Rank 5409 from total participation of 55,654 .",
      image:
        "https://1.bp.blogspot.com/-tAGhczOh1uA/XSn4AmDxYQI/AAAAAAAACkg/mPFSQTxonH8XFYVZUWcMJk-rj-EJf_F9wCPcBGAYYCw/s1600/CodeVita8-CCBanner-700x200.jpg",

    },
    {
      title: "Database Management Essentials",
      subtitle: "Developed a Database that is available on 2 Billion devices world wide.",
      image: "https://www.insidehighered.com/sites/default/server_files/styles/large/public/media/coursera.png?itok=Y98JDeq-",
      footerLink: [
        { name: "Certification", url: "coursera.org/verify/ACA9LZRLAEL5" },
      ]
    }
  ]
};

// Blogs Section

// Talks Sections

// Podcast Section

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-6378581466",
  email_address: "kmohitkumawat@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "mohit__kumawat"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, achievementSection, contactInfo , twitterDetails};
