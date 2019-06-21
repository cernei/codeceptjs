
// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({
        login: function(url, username, password) {
            this.amOnPage(url);
            this.fillField('login', username);
            this.fillField('password', password);
            this.click('Login');
        }
    });
}
