
Feature('switching tabs');

Scenario('try to switch tabs', (I) => {
	var timeout = 5;
	I.amOnPage('http://localhost/utils/test.html');
	I.click('click');
	I.see('1');
    I.openNewTab();
    I.amOnPage('http://localhost/utils/test.html');
    I.click('click');
    I.see('1');

});
