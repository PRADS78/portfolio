// import anjal from "./assets/images/anjal.jpg";
import design from "./assets/images/icon-design.svg";
import backend from "./assets/images/icon-dev.svg";
import sass from "./assets/images/sass.svg";
import typeScript from "./assets/images/typescript.svg";
import dotnet from "./assets/images/dotnet.png";
import hello from "./assets/images/Social/send.svg";
import file from "./assets/images/Social/files.svg";
import scheduler from "./assets/images/scheduler.png";
import restApi from "./assets/images/restAPI.jpg";
import anjal2 from "./assets/images/my-avatar.png";

export const testimonialData = [
    {
      id: 1,
      name: "Anjal Khan",
      desc: `I have the pleasure of continuing to work closely with Pradeep at Disprz, and his contributions continue to impress me. Pradeep's exceptional skills as a developer are evident in his promptness, quick understanding of project requirements, and ability to offer innovative solutions. His communication skills are remarkable, which is a rare and valuable asset, especially at his level of experience. He consistently demonstrates his commitment to excellence by understanding complex requirements and proposing alternative solutions that streamline our workflow. Pradeep's dedication and proficiency make him an invaluable asset to our team, and I look forward to continuing our collaboration. I wholeheartedly recommend Pradeep to any team seeking a talented, proactive, and communicative developer who consistently delivers outstanding results. I'm grateful for the opportunity to work with him and eagerly anticipate our future collaborations.`,
      icon: anjal2,
      time: "May 24, 2024"
    }
  ]

export const NavItems = {
    about: "About",
    skills: "Skills & Experience",
    projects: "Projects",
    contact: "Contact"
}


export const navLinks = [
    {
        name: NavItems.about
    },
    {
        name: NavItems.skills
    },
    {
        name: NavItems.projects
    },
    {
        name: NavItems.contact
    },
  ]

export const resumeData = [{
    name:"Experience",
    icon:"briefcase-outline",
    list:[
        {
            company: "Software Engineer (Disprz - Chennai)",
            desc: `As a full stack developer with ".Net and ReactJs" at Disprz for 2 years, contributing to the development and improvement of various features and functionalities of the platform. Primarily concentrating on backend development using .NET Core/Framework, applying Test-Driven Development (TDD) principles, creating unit tests, and conducting integration testing`,
            span: "2022 - Present",
        }
    ]
    // role: "Software Engineer - Fullstack (C# .Net and ReactJs)"
  },
  {
    name:"Education",
    icon:"book-outline",
    list:[
        {
            company: "B.E (Madras Institute Of Technology, Anna University - Chennai)",
            desc: "Completed a Bachelor of Engineering degree in Electronics and Communication Engineering.",
            span: "2018 - 2022"
        }
    ]
  }
]
export const aboutButtons =[
    {
        id:1,
        text: "Say Hello!",
        icon: hello,
        to: NavItems.contact
    },
    {
        id: 2,
        text: "Check Resume",
        icon: file,
        to:"https://drive.google.com/file/d/1SwRdnj2OsYD4ooZeEiUh5dXbxYYLBCEI/view?usp=sharing"
    }
]


export const services = [
    {
      name: "Web development",
      icon: design,
      desc: "Creating high-quality websites with professional expertise.",
    },
    {
      name: "Backend development",
      icon: backend,
      desc: "Crafting robust, secure, and scalable backend systems for seamless application performance.",
    }
    // {
    //   name:"Responsive Design",
    //   icon: responsive,
    //   desc:"Creating adaptive and flexible websites that provide a seamless user experience across all devices"
    // }
  ];

  export const skillList = [
    {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Redux",
        image:
          "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
          name: "TypeScript",
          image: typeScript,
      },
      {
        name: "SCSS",
        image: sass,
      },
      {
        name: "Java",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
    },
    {
      name: "MS SQL",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
    },
    {
      name: "Postgresql",
      image: "https://www.postgresql.org/media/img/about/press/elephant.png",
    },
    {
      name: "C# .Net",
      image: dotnet,
    },
    {
        name: "Git",
        image:
          "https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image:
          "https://static-00.iconduck.com/assets.00/postman-icon-497x512-beb7sy75.png",
      },
      {
        name: "Figma",
        image:
          "https://s3-alpha.figma.com/hub/file/1481185752/fa4cd070-6a79-4e1b-b079-8b9b76408595-cover.png",
      }
  ]


export const projectsData = [
    {
      id: 1,
      imgSrc: scheduler,
      imgAlt: "calender",
      title: "Appointments Scheduler",
      category: "Web development",
      desc: "Developed an Appointment Scheduler with ReactJS and SCSS, enabling CRUD operations and calendar views. Users can search appointments and view analytics. State management is handled with the Context API.",
      link: "https://github.com/PRADS78/Calendar_UI/tree/Calendar-UI-dis-467"
    },
    {
      id: 2,
      imgSrc: restApi,
      imgAlt: "restAPI",
      title: "Appointments CRUD API",
      category: "Web development",
      desc: "Implemented the backend for the Appointment Scheduler using C#, ASP.NET Web API featuring five endpoints for Appointment management. Achieved 100% code coverage using xUnit to ensure robust and reliable APIs.",
      link: "https://github.com/PRADS78/Calenda_API/tree/calendar-API-dis-467"
    },
  ];
  