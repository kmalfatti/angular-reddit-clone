var app = angular.module("redditApp", ['ngAnimate']);

app.controller("MainController", function($scope){
  $scope.view = {};
  $scope.required = true;

  $scope.view.votes = 0;

  $scope.view.show = false;
  $scope.toggleShow = function(){
    $scope.show = !$scope.show;
  }

  $scope.view.posts = [{
    votes: 5,
    title: 'Initial Sample Post',
    author: 'Kool Kyle',
    image: 'https://pbs.twimg.com/profile_images/667516091330002944/wOaS8FKS.png',
    description: 'This is sample text for the reddit cline. Thanks for reading!',
    date: moment().subtract(30, 'hours').calendar(null, {
      sameDay: '[Today at] h:mm a',
      lastDay: '[Yesterday at] h:mm a',
      lastWeek: '[Last] dddd [at] h:mm a',
      sameElse: 'DD/MM/YYYY [at] h:mm a'
    }),
    comments:[{
      username: 'Random guy',
      text: 'Kool story bro!'
    },{
      username: 'Bob',
      text: 'Epic'
    }],
    sortDate: moment().subtract(30, 'hours')

  }, {
    votes: -5,
    title: 'How to Ipsum',
    author: 'Lorie Ipsum',
    image: 'http://stephboreldesign.com/wp-content/uploads/2012/03/lorem-ipsum-logo.jpg',
    description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel deserunt, unde maxime velit odio inventore tempora cum quod odit corrupti! Consequuntur, numquam incidunt quisquam quod voluptatum maxime nulla temporibus iusto. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem libero ex aperiam distinctio repudiandae, deleniti architecto facilis veritatis, dolor numquam, maiores alias sunt. Aliquam, voluptate quos, recusandae cumque modi praesentium.',
    date: moment().subtract(4, 'day').calendar(null, {
      sameDay: '[Today at] h:mm a',
      lastDay: '[Yesterday at] h:mm a',
      lastWeek: '[Last] dddd [at] h:mm a',
      sameElse: 'DD/MM/YYYY [at] h:mm a'
    }),
    comments:[],
    sortDate: moment().subtract(4, 'days')
  }];

  $scope.addPost = function(postForm){
      $scope.view.date = moment().calendar(null, {
        sameDay: '[Today at] h:mm a',
        nextDay: '[Tomorrow]',
        nextWeek: 'dddd',
        lastDay: '[Yesterday at] h:mm a',
        lastWeek: '[Last] dddd [at] h:mm a',
        sameElse: 'DD/MM/YYYY [at] h:mm a'
      });

      $scope.view.sortDate = moment();

      $scope.view.posts.push({
        votes: $scope.view.votes,
        title: $scope.view.title,
        author: $scope.view.author,
        image: $scope.view.image,
        description: $scope.view.description,
        date: $scope.view.date,
        sortDate: $scope.view.sortDate,
        comments: [],
        newComment: {},
      })

        $scope.view.votes = 0;
        $scope.view.title = '';
        $scope.view.author = '';
        $scope.view.image = '';
        $scope.view.description = '';
      
        postForm.$invalid = false;
        postForm.$submitted = false;
  };
    
   $scope.addComment = function(post){
    var finalComment = {
      text: post.newComment.text,
      username: post.newComment.username
    }
    post.comments.push(finalComment)
    post.showAllComments = true;
    post.showCommentForm = false;
    post.newComment.username = '';
    post.newComment.text = '';
  }
window.scope = $scope
});