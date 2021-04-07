module.exports = {
  HTML:function(title, list, body, control){
    return `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      ${list}
      ${control}
      ${body}
    </body>
    </html>
    `;
  },list:function(topics){
    var list = '<ul>';
    var i = 0;
    while(i < topics.length){
      list = list + `<li><a href="/?id=${topics[i].id}">${topics[i].title}</a></li>`;
      i = i + 1;
    }
    list = list+'</ul>';
    return list;
  },authorSelect:function (authors, author_id){
    var tag = '';
    var i =0;
    while (i<authors.length){
      var selected = '';
      if (authors[i].id === author_id){ //author_id는 현재의 값, authors[i].id는 while문 루프 안에서 현재 순번의 값
          selected = 'selected';
      }
      tag += `<option value="${authors[i].id}"${selected}>${authors[i].name}</option>`; //selected 속성을 주어 기본으로 선택되게 설정
      i++;
    }
    return `<select name="author">${tag}</select>`;
  }
}