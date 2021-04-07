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
      list = list + `<li><a href="/?id=${topics[i].id}">${topics[i].title}</a></li>`; // 식별자인 id값을 넣음 / title을 넣어서 title 프로퍼티를 가리키게 함
      i = i + 1;
    }
    list = list+'</ul>';
    return list;
  },authorSelect:function (authors){
    var tag = '';
    var i =0;
    while (i<authors.length){
      tag += `<option value="${authors[i].id}">${authors[i].name}</option>`;
      i++;
    }
    return `<select name="author">${tag}</select>`;
  } //이전에 main에 작성했던 코드를 템플릿에 옮김으로 정돈한 것
}