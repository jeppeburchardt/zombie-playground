var Browser = require("zombie");
var assert = require("assert");

var browser = new Browser({ debug: true });

describe('Frontpage', function(){

	describe('first paragraph', function(){

		it('should be changed by jquery', function(done){
			browser.visit("http://localhost:8080/zombie-test-website/", function () {
				assert.ok(browser.success);
				assert.equal(browser.text("p.replace-me"), "This text was replaced by js");
				done();
			});
		});

		it('should be changed when the button is clicked', function(done){
			browser.visit("http://localhost:8080/zombie-test-website/", function () {
				assert.ok(browser.success);
				browser.pressButton("#push");
				assert.equal(browser.text("p.replace-me"), "You pushed the button!");
				done();
			});
		});
	});
});



