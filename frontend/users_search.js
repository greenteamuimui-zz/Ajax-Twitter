const APIUtil = require('./api_util.js');
const FollowToggle = require('./follow_toggle.js');

class UsersSearch {
  constructor(el){
    this.$el = $(el);
    this.$input = this.$el.find('input');
    this.$ul = this.$el.find('ul');
    this.$input.on("keyup", () => this.handleInput());
  }

  handleInput(event) {
    console.log("Fired");
    APIUtil.searchUsers(this.$input.val(), (users) => this.renderResults(users));
  }

  renderResults(users) {
    console.log("Users: " + users);
    this.$ul.html("");
    users.forEach((user) => {
      console.log(user);
      let $anchor = $("<a>").attr("href", `/users/${user.id}`).html(user.username);
      let $li = $("<li>").append($anchor);

      let followstate = user.followed ? "followed" : "unfollowed";
      let $button = $("<button>").addClass("follow_toggle");

      new FollowToggle($button, {userId: user.id, initialFollowState: followstate });

      $li.append($button);

      this.$ul.append($li);
    });
  }
}


module.exports = UsersSearch;
