const FollowToggle = require('./follow_toggle.js');

$(() => {
  let $buttons = $('button.follow_toggle');
  $buttons.each((_, button) => {
    new FollowToggle(button);
  });
});
