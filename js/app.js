(function(){
  var app = angular.module('homePage', []);

  app.controller("HeaderController", function() {
    this.blocks = headerBlocks;
  });

  var headerBlocks = ["Hello, world! My name is Justin Cano.",
                      "I'm a recent graduate of the University of California, Riverside. I've obtained my BS Degree in Computer Engineering in the Spring of 2014.",
                      "I like to solve puzzles, do coding challenges, and learn new technologies. I am seeking an intensive software engineering position in the SF Bay Area, CA that will challenge me to put my skills to the test and provide me with the guidance to develop best software engineering practices."
                          ];

})();
