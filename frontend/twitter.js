const FollowToggle = require('./follow_toggle.js');
const UsersSearch = require('./users_search.js');
const TweetCompose = require('./tweet_compose.js');

$(() => {
  let $buttons = $('button.follow_toggle');
  $buttons.each((_, button) => {
    new FollowToggle(button);
  });
  let $searches = $('nav.users-search');
  $searches.each((_, search ) => {
    new UsersSearch(search);
  });
  let $tweetcomposes = $('form.tweet-compose');
  $tweetcomposes.each((_, tweetcompose ) => {
    new TweetCompose(tweetcompose);
  });

});
