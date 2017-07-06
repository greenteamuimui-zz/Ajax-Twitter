const APIUtil = require('./api_util.js');

class TweetCompose {
  constructor (form) {
    this.$form = $(form);
    this.$form.on("submit", (event)=> {
      this.submit(event);
    });

    this.$textarea = this.$form.find('textarea');
    this.$charsLeft = this.$form.find('.chars-left');
    this.selector = this.$form.data("tweets-ul");

    this.$textarea.on("keyup", () => this.updateCharsLeft());
  }

  updateCharsLeft() {
    console.log("Chars left");
    this.$charsLeft.text(140 - this.$textarea.val().length);
  }

  submit(event) {
    event.preventDefault();
    let formData = this.$form.serializeJSON();
    let $inputs = this.$form.find(':input');

    $inputs.each((_, el) => {
      $(el).prop('disabled', true);
    });

    APIUtil.createTweet(formData).then((data) => this.handleSuccess(data));
  }

  clearInput() {
    let $inputs = this.$form.find(':input');
    $inputs.each((_, el) => {
      $(el).prop('disabled', false);
    });
    this.$form[0].reset();
  }

  handleSuccess(data) {
    console.log(data);
    this.clearInput();
    let $ul = $(`${this.selector}`);
    let $li = $('<li>').html(JSON.stringify(data));
    $ul.prepend($li);
  }

}

module.exports = TweetCompose;
