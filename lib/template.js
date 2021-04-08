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
      <a href="/author">저자 목록</a>
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
      if (authors[i].id === author_id){
          selected = 'selected';
      }
      tag += `<option value="${authors[i].id}"${selected}>${authors[i].name}</option>`;
      i++;
    }
    return `<select name="author">${tag}</select>`;
  }, authorTable:function (authors){
    var tag = '<table>';
    var i = 0 ;
    while (i<authors.length){
      tag += `
                    <tr xmlns="http://www.w3.org/1999/html">
                    <td>${authors[i].name}</td>
                    <td>${authors[i].profile}</td>
                    <td><a href="/author/update?id=${authors[i].id}">편집</a></td>
                    <td><form action="/author/delete_process" method="post">
                    <input type="hidden" name="id" value="${authors[i].id}">
                    <input type="submit" value="삭제"></td>
                    </form>
                    </tr>`
      i++;
    }
    tag += `</table>`;
    return tag;
  }
}