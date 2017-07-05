class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data("user-id");
    this.followState = this.$el.data("initial-follow-state");

    this.render();
    this.$el.on("click", event => this.handleClick(event));
  }

  render () {
    if (this.followState === "unfollowed") {
      this.$el.html("Follow!");
    } else {
      this.$el.html("Unfollow!");
    }
  }

  handleClick (event) {
    event.preventDefault();

    let method;
    if (this.followState === "unfollowed") {
      method = "POST";
    } else {
      method = "DELETE";
    }

    console.log(method);

    $.ajax ({
      url: `/users/${this.userId}/follow`,
      method: method,
      // dataType: "json",
      success: () => {
        if (this.followState === "unfollowed") {
          this.followState = "followed";
        } else {
          this.followState = "unfollowed";
        }
        this.render();
      }
    });

  }


}

module.exports = FollowToggle;
