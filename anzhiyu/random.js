var posts=["2024/06/17/真·第一个博客/","2024/06/19/测试阿里云图床/","2024/06/18/test-2/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };