module.exports = {
  "portfolio": [
    {
      title: "mentionify.js",
      type: "personal",
      date: "Aug 2015 - Present",
      text: "A tiny JS library that renders @'s in the DOM's text to social media profile links",
      links: [
        {text: "Demo", url: "http://www.jcano.me/mentionify.js/"},
      ]
    },
    {
      title: "Meshwork",
      type: "school",
      date: "Jun 2015 - Jul 2015",
      imgUrl : "https://github.com/earthican/meshwork/raw/master/github/images/meshgraph.png",
      text: "Built a data pipeline that runs a distributed process to create a hyperlink graph from Common Crawl's April 2015 web corpus and finds the page rank and reach of each vertex.",
      links: [
        {text: "Demo", url: "http://jcano.me/meshwork"},
        {text: "Source", url: "https://github.com/earthican/meshwork"},
        {text: "Slides", url: "http://www.slideshare.net/JustinCano/justin-cano-demo-50074846"}
      ]
    },
    {
      title: "Silver Cloud",
      type: "hackathon",
      date: "Sep 2014",
      imgUrl : "http://res.cloudinary.com/hzxejch6p/image/upload/v1410983669/2014-200x200-Hackathon-social_afqeb2.png",
      text: "An app designed for prospecting local clients using the Force.com API and Heroku, developed during the 2014 Salesforce $1 Million Hackathon. I worked on the backend in Ruby, interacting with the Force.com API.",
      links: [
        {text: "Hackathon Submission", url: "http://devpost.com/software/silver-cloud?ref_content=like-email&ref_feature=portfolio&ref_medium=email&utm_campaign=software&utm_content=user_software_likes_digest&utm_medium=email&utm_source=transactional"}
      ]
    },
    {
      title: "Rasperry Pi Camcorder",
      type: "work",
      date: "Jun 2014 - Jul 2014",
      imgUrl : "https://33463d8ba37cd0a930f1-eb07ed6f28ab61e35047cec42359baf1.ssl.cf5.rackcdn.com/ugc/entry/54485ee7e442d-Raspi_Colour_R.jpg",
      text: "Developed a Raspberry Pi camcorder for the University of California, Riverside Entomology Department in order to capture footage of insect eggs in remote urban and agriculture environments for research.",
      links: [
        {text: "Source", url: "https://github.com/earthican/raspberry-pi-camcorder"},
        {text: "Wiki", url: "https://github.com/earthican/raspberry-pi-camcorder/wiki"},
        {text: "Kistner et al.", url: "dl/Kistner-et-al.pdf"}
      ]
    },
    {
      title: "To the Top",
      type: "school",
      date : "Apr 2014 - Jun 2014",
      imgUrl : "https://33463d8ba37cd0a930f1-eb07ed6f28ab61e35047cec42359baf1.ssl.cf5.rackcdn.com/ugc/entry/54485ee79e4b9-TTTIcon.jpg",
      text: "A mobile 3D game developed with the Unity3D game engine. Developed for my Senior Design Project in Computer Science (Graphics and Electronic Games) at the University of California, Riverside. Licensed rights to a private game studio for future development and commercial release.",
      links: [
        {text: "Video", url: "https://youtu.be/m5wFy7tHfzw"}
      ]
    },
    {
      title: "Learning Thermostat",
      type: "school",
      date : "Sep 2013 - Jun 2014",
      imgUrl : "https://33463d8ba37cd0a930f1-eb07ed6f28ab61e35047cec42359baf1.ssl.cf5.rackcdn.com/ugc/entry/54485ee572629-ee175-senior-design.jpg",
      text: "Our own version of the Nest Learning Thermostat, implemented using a Raspberry Pi and an Arduino Uno and programmed with a multithreaded Python program. Developed for my Senior Design Project in Electrical Engineering (Embedded Systems) at the University of California, Riverside.",
      links: [
        {text: "Source", url: "https://bitbucket.org/akambastha/ee-175-building-a-better-nest/src"},
        {text: "Wiki", url: "https://bitbucket.org/akambastha/ee-175-building-a-better-nest/wiki/Home"},
        {text: "Video", url: "https://youtu.be/2TnUDQ8yI0E"}
      ]
    }
  ],
  "experience": [
    {
      employer: "Rally Health",
      title: "Software Data Engineer",
      date: "Oct 2015 - Present",
      responsibilities: [
        {text: "Software Data Engineer on the Data Team, working on back-end data pipeline infrastructure and analytics"}
      ],
      links: []
    },
    {
      employer: "Insight Data Science",
      title: "Data Engineering Fellow",
      date: "Jun 2015 - Jul 2015",
      responsibilities: [
        {text: "Selected as 1 of 21 individuals to participate in a Data Engineering Fellowship to learn how to use and implement industry standard Big Data tools, such as Hadoop and Spark"},
        {text: "Built a data pipeline that runs a distributed process to create a hyperlink graph from Common Crawl's April 2015 web corpus and finds the page rank and reach of each vertex."},
        {text: "Hyperlink graph created through batch graph processing using Spark and GraphX with resulting data saved to HBase in the serving layer for low-latency queries"}
      ],
      links: [
        {
          text: "Demo",
          link: "http://jcano.me/meshwork"
        },
        {
          text: "Source",
          link: "https://github.com/bumrush/meshwork"
        }
      ]
    },
    {
      employer: "GBG Loqate",
      title: "Software Engineer (Support Team)",
      date: "Nov 2014 - May 2015",
      responsibilities: [
        {text: "Worked a customer-facing role as a Software Engineer at GBG Loqate on the Support Team to communicate effectively with clients and customers and resolve their issues."},
        {text: "Consult and support customers with API implementation and installation and general questions about the proprietary software"},
        {text: "Designed and developed the first Unit Tests for the official release process using the googletest C++ Testing Framework"},
        {text: "Implemented a simple regular expression matcher in C++ to improve country output formatting"}
      ],
      links: []
    },
    {
      employer: "University of California, Riverside",
      title: "Embedded Systems Developer",
      date: "Jun 2014 - Jul 2014",
      responsibilities: [
        {text: "Developed a Raspberry Pi camcorder for the University of California, Riverside Entomology Department in order to capture footage of insect eggs in to look for natural predators of the Brown Marmorated Stink Bug."},
        {text: "Worked closely and diligently with a UCR Entomologist to create a low-powered dedicated device to meet the needs of his product specifications"},
        {text: "Specifications include programming a Raspberry Pi to record HD video clips at certain times of the day and save recordings to an external mounted hard drive"}
      ],
      links: []
    },
    {
      employer: "JetHead Development",
      title: "Software Engineer Intern",
      date : "Jun 2013 - Sep 2013",
      responsibilities: [
        {text: "Software Development in C++ for Set-Top-Box integration services involving sophisticated middleware solutions"},
        {text: "Debugging of the company's RVU client application; Issue tracking communication through JIRA"},
        {text: "Worked with Broadcom embedded systems"},
        {text: "Facilitated 'Board Bring Up', including powering up, mounting, and flashing the board using SSH and/or serial communication"}
      ],
      links: []
    }
  ]
};
