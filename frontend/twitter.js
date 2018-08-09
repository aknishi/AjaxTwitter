const FollowToggle = require('./follow_toggle.js');
const UsersSearch = require('./users_search.js');

$(function () {
  $('button.follow-toggle').each( (index, btn) => new FollowToggle(btn, {}) );
  $('.users-search').each( (index, search) => new UsersSearch(search) );
});
