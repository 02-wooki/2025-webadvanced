const routes = {
  home: "<h2>home</h2><p>홈 페이지입니다.</p>",
  about: "<h2>About</h2><p>회사 소개 페이지입니다.</p>",
  contact: "<h2>Contact</h2><p>연락처 페이지입니다.</p>"
};

function navigate(page){
  document.getElementById("app").inerHTML = routes[page] || "<h2>404</h2><p>페이지를 찾을 수 없습니다.</p>";
  window.history.pushState({page},page, '#${page}');
}

window.onpopstate = function(event){
  if(event.state){
      navigate(event.state.page);
  }
};