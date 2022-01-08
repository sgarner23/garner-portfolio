export const aboutMe = {
  title: "About Me",
  description:
    "I'm a full stack web developer looking for a new role with an exciting company. I'm committed to developing applications with clean modular code and learning as much as I can. When building applications in JavaScript, I frequently use React and Node, and I can adapt to whatever tools are required. I'm based in SLC, Utah, but I'm happy working remotely or relocating for the right opportunity. I have a B.S. degree from Weber State University and Web Development training from DevMountain. When I'm not coding, you'll usually find me running around with my three year old daughter. I'd love for you to check out some of my work!",

  buttonText: "GO TO PORTFOLIO",
};

export const projects = [
  {
    projectName: "IOU Tracker",
    projectDescription:
      "IOU Tracker is a fullstack, CRUD, small business invoicing app. This project gave me practice with managing global state, React-Hooks, Context API, reducers, user authentication with JWT, building out REST APIs, database design, MassiveJS, protected routes with React-Router, and mobile first responsive web design.",
    buttonText: "VIEW PROJECT",
    macImage: "/img/iouMac.png",
    mobileImage: "/img/iouMobile.png",
    URL: "iou",
    techUsed:
      "React, React-Router-Dom, Context API, React Hooks, Reusable Components, Responsive Design, NodeJS, JWT, Bcrypt, PostreSQL, Relational DB Design, MassiveJS, Node Router",
    backgroundDescription:
      "This project was part of my capstone while studying web development at Devmountain. I was inspired to build this after watching a family member trying to manage all of their invoices via paper. I wanted to see if I could find a way to digitalize the entire process with software.",
  },
  {
    projectName: "Random User API",
    projectDescription:
      "Random User Generator leverages the random user API to generate 50 random user profile cards. Web page is responsive and I used Material UI for the components and grid layout. You can view more details on each user, add tags, and search for users by name, tags, or both.",
    buttonText: "VIEW PROJECT",
    macImage: "/img/randomUserGeneratorMac.png",
    mobileImage: "/img/randomUserGeneratorMobile.png",
    URL: "random-user",
    techUsed:
      "React, Material UI, Context API, React Hooks, Reusable Components, Responsive Design, REST API, search and filter logic.",
  },
  {
    projectName: "Dev Finder",
    projectDescription:
      "Dev Finder is a front end React project. Practiced working with public API's by pulling profile data from GitHub's REST API. User can search any GitHub username and see their profile information displayed on the card. Worked with media queries to set up desktop, tablet, and mobile views.",
    buttonText: "VIEW PROJECT",
    macImage: "/img/devFinderMac.png",
    mobileImage: "/img/devFinderMobile.png",
    URL: "dev-finder",
  },
  {
    projectName: "Webscraper",
    projectDescription:
      "This webscraper uses NodeJS and Puppeteer to hava a bot scrape Craigslist and return an array of objects with all of the newly posted apartments of that day that match certain criteria. Gave me a lot of practice with the DOM and learning an automation library.",
    buttonText: "VIEW PROJECT",
    macImage: "/img/puppeteer.webp",
    URL: "webscraper",
  },
  {
    projectName: "JavaScript Calculator",
    projectDescription:
      "I wanted to put my JS logic skills to the test and build a calculator app. Users can perform mathmatical operations, clear the screen, and continue equations based on previous answers.",
    buttonText: "VIEW PROJECT",
    macImage: "/img/calculator.png",
    URL: "calculator",
  },
];
