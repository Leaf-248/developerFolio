/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Leaf-248",
  title: "Hi all, I'm Lavinia",
  subTitle: emoji(
    "A passionate robotics software developer 🚀."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Leaf-248",
  linkedin: "https://www.linkedin.com/in/lavinia-k/",
  gmail: "wlavinial@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "ROBOTICS SOFTWARE DEVELOPER WITH A FOCUS ON AUTONOMOUS SYSTEMS, NAVIGATION, AND SENSOR INTEGRATION",
  skills: [
    emoji("⚡ Develop modular robotics software in C++ and Python for ROS1 and ROS2 environments"),
    emoji("⚡ Work with localization, motion planning, and mapping algorithms (SLAM, ICP, path planning)"),
    emoji("⚡ Build, test, and simulate robotics systems in Gazebo, Ignition, and RViz"),
    emoji("⚡ Integrate multi-sensor systems and implement real-time communication pipelines"),
    emoji("⚡ Debug, optimize, and test robotic behaviors using behavior trees and simulation tools")
  ],

  softwareSkills: [
    {
      skillName: "C++",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "ROS1 / ROS2",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "Gazebo / Ignition",
      fontAwesomeClassname: "fas fa-cube"
    },
    {
      skillName: "Git / GitHub",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Johns Hopkins University",
      logo: require("./assets/images/jhuLogo.png"),
      subHeader: "Master of Science in Engineering",
      duration: "August 2024 - May 2025",
      desc: "Combined Degree in Biomedical Engineering.",
      descBullets: [
        "Elected to take robotics software classes",
        "Notable coursework: Robot System Programming; Robot Devices, Kinematics, Dynamics, and Control; Computer Vision"
      ]
    },
    {
      schoolName: "Johns Hopkins University",
      logo: require("./assets/images/jhuLogo.png"),
      subHeader: "Bachelor of Science",
      duration: "August 2021 - May 2025",
      desc: "Double majors in Computer Science and Biomedical Engineering",
      // descBullets: [
      //   "Elected to take robotics software classes",
      //   "Notable coursework: Robot System Programming; Robot Devices, Kinematics, Dynamics, and Control; Computer Vision"
      // ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Robotics Software (ROS1/ROS2, Gazebo, Ignition)",
      progressPercentage: "85%"
    },
    {
      Stack: "Algorithm Development (SLAM, Localization, Path Planning)",
      progressPercentage: "75%"
    },
    {
      Stack: "Programming (C++, Python)",
      progressPercentage: "80%"
    },
    {
      Stack: "System Integration & Simulation (Sensors, TF, RViz)",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Student Research Assistant",
      company: "Johns Hopkins LCSR",
      companylogo: require("./assets/images/jhuLogo.png"),
      date: "September 2024 – May 2025",
      desc: "Collaborate with eye surgeon and engineers to develop robot platform that provides vitreoretinal surgery",
      descBullets: [
        "Developed C++ controller plugin for AMBF surgical robot simulation platform to synchronize real and simulated robots, enhancing autonomous system accuracy and increasing functionality.",
        "Improved and migrated Augmented Reality plugins from ROS1 to ROS2"
      ]
    },
    {
      role: "Product Quality Engineer Intern",
      company: "Noah Medical",
      companylogo: require("./assets/images/noahmedLogo.png"),
      date: "May 2024 – May 2025",
      descBullets: [
        "Achieved 100% of complaint investigation within company-set targets by automating data extraction, analysis and visualization from SQL databases and investigating root causes of navigation subsystem failures.",
        "Created C#-based analytical tests to assess hospital site compatibility with the EM navigation system, streamlining the pre-installation evaluation process and ensuring system readiness with higher deployment success rates.",
        "Restructured the design of the logging structure of EM navigation subsystem to increase clarity and facilitate more efficient complaint investigation."
      ]
    },
    {
      role: "R&D Engineering Intern",
      company: "Medtronic",
      companylogo: require("./assets/images/medtronicLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Improved patient safety and reduced complication rates by building and validating a 3D statistical shape model from 60 CT scans.",
      descBullets: [
        "Enhanced treatment planning by developing a more efficient image segmentation and modelling workflow and identifying 6 key clinical measurements that accurately predicted life-threatening adverse events.",
        "Organized social events for 180 interns by communicating with event venues and managing ticket distribution" 
      ]
      
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Significant projects that I worked on that are not open source",
  projects: [
    {
      image: require("./assets/images/x4Drone.png"),
      projectName: "X4 ROS2 package",
      projectDesc: "Collaborated in a team of five to develop realistic physics simulation, software, and hardware for an X4 Aurelia drone",
      projectBullets: [
        "Took ownership of evaluating and comparing drone control software platforms, implemented scripts for fundamental flight behaviors.",
        "Authored detailed technical documentation to support future development."
      ],
    },
    {
      image: require("./assets/images/papmate.png"),
      projectName: "PapMate",
      projectDesc: "Design team project with the Johns Hopkins BME Program",
      projectBullets: [
        "Developed a monitor to detect disconnections between neonates and the bCPAP circuit by CAD design, Arduino program, documentation, literature review, professional communication with clinical and technical mentors.",
        "Led the team to present at BMES 2024 conference.",
        "Won 1st place of RWJMS BEN Healthcare Innovation Summit Pitch Competition 2022.",
        "Co-First Author for manuscript titled Vibration Based Detection for the Monitoring of Neonatal bCPAP Respiratory Support to Minimize Duration of Disconnections to be published in ASME Medical Devices Journal"
      ],
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-0000000000",
  email_address: "wlavinial@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
