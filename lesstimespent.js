//----------------------------------------------------------------------------//
// CasperJS script to toggle a running timer in LessTimeSpent
// run from the command line like so:
//     $ casperjs lesstimespent.js
//     This will toggle the most recent project timer
// Copyright 2016 Matthew Petty @lodestone - matt@kizmeta.com
// LICENSE: MIT
// Date: 2016-03-16
//----------------------------------------------------------------------------//

LessSpiderTime = {

  login: "matt",
  password: "<<CHANGEME>>",

  go: function() {
    casper = require('casper').create(),
    casper.start('https://app.lesstimespent.com/login', function() {
      this.fill('form[action="/login"]',
                { login: LessSpiderTime.login,
                  password: LessSpiderTime.password }, true);
    });
    casper.then(function() {
      this.evaluate(function() {
        document.querySelector('#fixed_footer form').submit();
      });
    });
    casper.run();
  }

}

LessSpiderTime.go();
