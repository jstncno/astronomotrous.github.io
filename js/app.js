(function(){
  var app = angular.module('homePage', []);

  app.controller("HeaderController", function() {
    this.blocks = headerBlocks;
  });

  app.controller("ProjectsController", function() {
    this.projects = projects;
  });

  app.controller("ContactsController", function() {
    this.buttons = contactButtons;
  });

  var headerBlocks = ["Hello, world! My name is Justin Cano.",
                      "I'm a recent graduate of the University of California, Riverside. I've obtained my BS Degree in Computer Engineering in the Spring of 2014.",
                      "I like to solve puzzles, do coding challenges, and learn new technologies. I am currently seeking an intensive software or data engineering position in the SF Bay Area, CA that will challenge me to put my skills to the test and provide me with the guidance to develop best software engineering practices."
                      ];

  var projects = [{
                "name" : "Data Engineering Fellow @ Insight Data Science",
                "date" : "Jun 2015 - Jul 2015",
                "description" : "Built a data pipeline that runs a distributed process to create a hyperlink graph from Common Crawl's April 2015 web corpus and finds the page rank and reach of each vertex.",
                imgURL : "https://github.com/bumrush/meshwork/raw/master/github/images/meshgraph.png",
                link : "http://jcano.me/meshwork"
  },
  {
                "name" : "Software Engineer @ GBG Loqate",
                "date" : "Nov 2014 - May 2015",
                "description" : "Worked a customer-facing role as a Software Engineer on the Support Team to communicate effectively with prospects, partners, and customers.",
                imgURL : "http://www.loqate.com/wp-content/themes/loqate/images/gbgloqate-logo-web-15.png",
                link : "http://www.loqate.com"
  },
  {
                "name" : "Silver Cloud",
                "date" : "Sep 2014",
                "description" : "An enterprise solution for prospecting local clients using the Force.com API and Heroku for the 2014 Salesforce $1 Million Hackathon.",
                imgURL : "http://res.cloudinary.com/hzxejch6p/image/upload/c_scale,w_250/v1384290617/2013hackathon_f2dtaj.png",
                link : "http://challengepost.com/software/silver-cloud?ref_content=like-email&ref_feature=portfolio&ref_medium=email&utm_campaign=software&utm_content=user_software_likes_digest&utm_medium=email&utm_source=transactional"
  },
  {
                "name" : "Blitz, PoweredbySpritz\u2122",
                "date" : "Aug 2014",
                "description" : "An online eBook to plain text renderer integrated with Spritz reading technology.",
                imgURL : "https://33463d8ba37cd0a930f1-eb07ed6f28ab61e35047cec42359baf1.ssl.cf5.rackcdn.com/ugc/entry/54485ea6eb907-screenshot1_2.jpg",
                link : "http://www.blitz.pw"
  },
  {
                "name" : "Projects Blog",
                "date" : "Aug 2014",
                "description" : "A blog app developed using Ruby on Rails to showcase my projects.",
                imgURL : "https://33463d8ba37cd0a930f1-eb07ed6f28ab61e35047cec42359baf1.ssl.cf5.rackcdn.com/ugc/entry/54485f136a804-blog_2.jpg",
                link : "http://blog.jcano.me"
  },
  {
                "name" : "Rasperry Pi Camcorder",
                "date" : "Jul 2014",
                "description" : "Developed a Raspberry Pi camcorder for the UCR Entomology Department in order to successfully capture footage of insect eggs in remote urban and agriculture environments to look for natural predators of the Brown Marmorated Stink Bug.",
                imgURL : "https://33463d8ba37cd0a930f1-eb07ed6f28ab61e35047cec42359baf1.ssl.cf5.rackcdn.com/ugc/entry/54485ee7e442d-Raspi_Colour_R.jpg",
                link : "https://portfolium.com/portfolium/2014/8/21/Justin-Cano/RASPBERRY-PI-CAMCORDERUCR-ENTOMOLOGY-RESEARCH"
  },
  {
                "name" : "To the Top",
                "date" : "Apr 2014 - Jun 2014",
                "description" : "A mobile 3D game developed with the Unity3D game engine. Recently released rights to a private game studio for further development and production.",
                imgURL : "https://33463d8ba37cd0a930f1-eb07ed6f28ab61e35047cec42359baf1.ssl.cf5.rackcdn.com/ugc/entry/54485ee79e4b9-TTTIcon.jpg",
                link : "https://portfolium.com/portfolium/2014/8/21/Justin-Cano/TO-THE-TOP"
  },
  {
                "name" : "Learning Thermostat",
                "date" : "Sep 2013 - Jun 2014",
                "description" : "Our own version of the Nest Learning Thermostat using a Raspberry Pi and an Arduino Uno implemented with a multithreaded Python program",
                imgURL : "https://33463d8ba37cd0a930f1-eb07ed6f28ab61e35047cec42359baf1.ssl.cf5.rackcdn.com/ugc/entry/54485ee572629-ee175-senior-design.jpg",
                link : "https://portfolium.com/portfolium/2014/8/22/Justin-Cano/Learning-Thermostat"
  }];

  var contactButtons = [{
    "name" : "email",
    "fontAwesomeName" : "fa-envelope",
    "link" : "mailto:jcano001@ucr.edu"
  },
  {
    "name" : "linkedin",
    "fontAwesomeName" : "fa-linkedin-square",
    "link" : "http://linkedin.com/in/justincano"
  },
  {
    "name" : "github",
    "fontAwesomeName" : "fa-github-square",
    "link" : "http://github.com/crashphoenix"
  },
  {
    "name" : "location",
    "fontAwesomeName" : "fa-location-arrow",
    "link" : "https://www.google.com/maps/place/San+Francisco+Bay+Area,+CA/@37.8791999,-122.4203375,8z/data=!3m1!4b1!4m2!3m1!1s0x808583a3a688d7b5:0x8c891b8457461fa9"
  }]

})();
