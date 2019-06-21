Feature('devaid');

Scenario('login', (I) => {
    I.amOnPage('/');

    I.see('Expert', '.registration-options');
    I.click('Expert', '.registration-options');

    I.saveScreenshot('screen.jpg');
    I.seeElement('form[name="expertFormStep1"]');
    // I.click('Continue');
    //
    // I.dontSee('Complete all the 2required fields');



});

