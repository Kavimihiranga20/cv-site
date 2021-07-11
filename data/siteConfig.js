module.exports = {
  siteTitle: 'Hi! I\'m Kavindu!',
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Kavindu Mihiranga',
  githubUsername: 'Kavimihiranga20',
  authorAvatar: '/images/me.jpg',
  authorDescription: `I am an ambitious and positive person who enjoys taking up challenges in the field of Software Engineering. I am passionate about combining the knowledge of programming with my analytical skills. I always commit myself to continuous improvement and believe in endless opportunities. I am also a friendly and a polite person who enjoys team working.`,
  skills: [
    {
      name: 'JAVA',
      level: 60
    },
    
    {
      name: 'HTML',
      level: 70
    },
    {
      name: 'CSS',
      level: 60
    },
    {
      name: 'Javascript',
      level: 50
    },
    {
      name: 'NodeJs',
      level: 40
    },
    {
      name: 'React',
      level: 45
    },
    {
      name: 'Git',
      level: 70
    },
    /* more skills here */
  ],
  jobs: [
    /* more jobs here */
    {
      company: "Axcer",
      begin: {
        month: 'May',
        year: '2021'
      },
      duration: null,
      occupation: " Developer",
      description: "Doing my internship"
  
    },  
  ],
  portifolio: [
    {
      image: "/images/gatsby-starter-cv.png",
      description: "Gatsby starter CV template",
      url: "https://www.gatsbyjs.org/starters/santosfrancisco/gatsby-starter-cv/"
    },
    {
      image: "/images/awesome-grid.png",
      description: "Responsive grid for ReactJS",
      url: "https://github.com/santosfrancisco/react-awesome-styled-grid"
    },
    /* more portifolio items here */
  ],
  social: {
    StackOverflow:"https://stackoverflow.com/users/16173690/kavindu-mihiranga",
    linkedin: "https://www.linkedin.com/in/kavindu-mihiranga-1600a01b6",
    github: "https://github.com/Kavimihiranga20",
    email: "kmvithanage48@gmail.com"
  },
  
  pathPrefix: '/cv-site', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: "#000000cc",
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portifolio',
      url: '/portifolio',
    }
  ]
}