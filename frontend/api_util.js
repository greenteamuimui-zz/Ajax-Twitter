
const APIUtil = {
  followUser: id => {
    return $.ajax ({
      url: `/users/${id}/follow`,
      method: "POST",
      dataType: "json"
    });

  },

  unfollowUser: id => {
    return $.ajax ({
      url: `/users/${id}/follow`,
      method: "DELETE",
      dataType: "json"
    });
  },

  searchUsers: (queryVal, success) => {
    return $.ajax ({
      url: `/users/search`,
      data: { query: queryVal },
      dataType: "json",
      success: function (data) {
        success(data);
      }
    });
  },

  createTweet: (tweetData) => {
    return $.ajax ({
      url: "/tweets",
      method: "POST",
      data: tweetData,
      dataType: "json"
    });
  },
};





module.exports = APIUtil;
