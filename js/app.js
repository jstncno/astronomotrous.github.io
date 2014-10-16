(function(){
  var app = angular.module('homePage', []);

  app.controller("HeaderController", function() {
    this.blocks = headerBlocks;
  });

  app.controller("ProjectsController", function() {
    this.projects = projects;
  });

  var headerBlocks = ["Hello, world! My name is Justin Cano.",
                      "I'm a recent graduate of the University of California, Riverside. I've obtained my BS Degree in Computer Engineering in the Spring of 2014.",
                      "I like to solve puzzles, do coding challenges, and learn new technologies. I am seeking an intensive software engineering position in the SF Bay Area, CA that will challenge me to put my skills to the test and provide me with the guidance to develop best software engineering practices."
                          ];

  var projects = [{
                "name" : "Silver Cloud",
                "date" : "Sep 2014",
                "description" : "An enterprise solution for prospecting local clients using the Force.com API and Heroku for the 2014 Salesforce $1 Million Hackathon.",
                imgURL : "http://res.cloudinary.com/hzxejch6p/image/upload/c_scale,w_250/v1384290617/2013hackathon_f2dtaj.png",
                link : "http://challengepost.com/software/silver-cloud?ref_content=like-email&ref_feature=portfolio&ref_medium=email&utm_campaign=software&utm_content=user_software_likes_digest&utm_medium=email&utm_source=transactional"
  }, {
                "name" : "Blitz, PoweredbySpritz\u2122",
                "date" : "Aug 2014",
                "description" : "An online eBook to plain text renderer integrated with Spritz reading technology.",
                imgURL : "https://portfolium.com/images/portfolio_entries/screenshot1_2.jpg",
                link : "http://www.blitz.pw"
  }, {
                "name" : "Projects Blog",
                "date" : "Aug 2014",
                "description" : "A blog app developed using Ruby on Rails to showcase my projects.",
                imgURL : "https://portfolium.com/images/portfolio_entries/blog_2.jpg",
                link : "http://blog.jcano.me"
  }, {
                "name" : "Rasperry Pi Camcorder",
                "date" : "Jul 2014",
                "description" : "Developed a Raspberry Pi camcorder for the UCR Entomology Department in order to successfully capture footage of insect eggs in remote urban and agriculture environments to look for natural predators of the Brown Marmorated Stink Bug.",
                imgURL : "https://portfolium.com/images/portfolio_entries/Raspi_Colour_R.jpg",
                link : "https://portfolium.com/portfolium/2014/8/21/Justin-Cano/RASPBERRY-PI-CAMCORDERUCR-ENTOMOLOGY-RESEARCH"
  }, {
                "name" : "To the Top",
                "date" : "Apr 2014 - Jun 2014",
                "description" : "A mobile 3D game developed with the Unity3D game engine. Recently released rights to a private game studio for further development and production.",
                imgURL : "https://portfolium.com/images/portfolio_entries/TTTIcon.jpg",
                link : "https://portfolium.com/portfolium/2014/8/21/Justin-Cano/TO-THE-TOP"
  }, {
                "name" : "Learning Thermostat",
                "date" : "Aug 2014",
                "description" : "Our own version of the Nest Learning Thermostat using a Raspberry Pi and an Arduino Uno implemented with a multithreaded Python program",
                imgURL : "https://portfolium.com/images/portfolio_entries/ee175-senior-design.jpg",
                link : "https://portfolium.com/portfolium/2014/8/22/Justin-Cano/Learning-Thermostat"
  }];

})();
