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
  }];

})();
