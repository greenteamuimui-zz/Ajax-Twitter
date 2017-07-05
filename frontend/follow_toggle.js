const APIUtil = require('./api_util.js');

class FollowToggle {
  constructor(el, options) {
    this.$el = $(el);
    this.userId = this.$el.data("user-id") || options.userId;
    this.followState = this.$el.data("initial-follow-state") || options.initialFollowState;

    this.render();
    this.$el.on("click", event => this.handleClick(event));
  }

  render () {
    switch (this.followState) {
      case "unfollowed":
        this.$el.html("Follow!");
        break;
      case "followed":
        this.$el.html("Unfollow!");
        break;
    }

    this.$el.prop("disabled", false);
  }

  toggleFollowedAndRender () {
    if (this.followState === "unfollowed") {
      this.followState = "followed";
    } else {
      this.followState = "unfollowed";
    }
    this.render();
  }

  handleClick (event) {
    event.preventDefault();

    this.$el.prop("disabled", true);
    this.$el.html("Please Wait");

    if (this.followState === "unfollowed") {
      APIUtil.followUser(this.userId).then(() => {
        this.toggleFollowedAndRender();
      });
    } else {
      APIUtil.unfollowUser(this.userId).then(() => {
        this.toggleFollowedAndRender();
      });
    }
    // $.ajax ({
    //   url: `/users/${this.userId}/follow`,
    //   method: method,
    //   dataType: "json",
    //   success: () => {
    //     this.toggleFollowed();
    //     this.render();
    //   }
    // });
  }


}

module.exports = FollowToggle;
