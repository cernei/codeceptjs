
Feature('experts');

Scenario('click some buttons', (I) => {
	var timeout = 5;
	I.amOnPage('/#!/experts/search');
	I.click('Donors');
	I.see('Procurement Guidelines');
	I.fillField('donor-search-keywords', 'African Development Bank');
	I.seeElement('.search-bar [type="submit"]');
	I.click('.search-bar [type="submit"]');
	I.wait(timeout);
	I.see('2 results');
});
