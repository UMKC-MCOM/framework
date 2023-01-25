// $.ajax({
//   url: "https://www.getrave.com/rss/xavier/channel1",
//   cache: false
// }).done(function(d){
//   console.log(d);
//   $(d).find("item").each(function(){
//     var item = $(this);
//     var title = item.find("title").text();
//     var desc  = item.find("description").text();
//     var pubDate = item.find("pubDate").text();
//     var myDate = new Date(pubDate);
//     var expDate = new Date(pubDate);
//     var exp  = expDate.setDate(expDate.getDate() + 2);
//     var xDate = new Date(exp)
//     var html;
//     if ( new Date() <= exp ){
//       html = "<div class='alert alert--danger' role='alert' aria-atomic='true'><div class='alert--danger__icon'><span class='fa' aria-hidden='true'></span></div><div class='alert__content'>";
//       html += "<p><strong>"+title+"</strong><br />"+ desc +"<br/>Posted: " +  myDate.toLocaleDateString() + "</p>";
//       html += "</div></div>";
//     }
//     $('.alertme').append(html);
//   });
// });
//
// $.ajax({
//   url: "https://www.getrave.com/rss/xavier/channel2",
//   cache: false
// }).done(function(d){
//   console.log(d);
//   $(d).find("item").each(function(){
//     var item = $(this);
//     var title = item.find("title").text();
//     var desc  = item.find("description").text();
//     var pubDate = item.find("pubDate").text();
//     var myDate = new Date(pubDate);
//     var expDate = new Date(pubDate);
//     var exp  = expDate.setDate(expDate.getDate() + 45);
//     var xDate = new Date(exp)
//     var html;
//     if ( new Date() <= exp ){
//       html = "<div class='alert alert--warning' role='alert' aria-atomic='true'><div class='alert--warning__icon'><span class='fa' aria-hidden='true'></span></div><div class='alert__content'>";
//       html += "<p><strong>"+title+"</strong><br />"+ desc +"<br/>Posted: " +  myDate.toLocaleDateString() + "</p>";
//       html += "</div></div>";
//     }
//     $('.twn-alert').append(html);
//   });
// });
//
// $.ajax({
//   url: "https://www.getrave.com/rss/xavier/channel3",
//   cache: false
// }).done(function(d){
//   console.log(d);
//   $(d).find("item").each(function(){
//     var item = $(this);
//     var title = item.find("title").text();
//     var desc  = item.find("description").text();
//     var pubDate = item.find("pubDate").text();
//     var myDate = new Date(pubDate);
//     var expDate = new Date(pubDate);
//     var exp  = expDate.setDate(expDate.getDate() + 45);
//     var xDate = new Date(exp)
//     var html;
//     if ( new Date() <= exp ){
//       html = "<div class='alert alert--info' role='alert' aria-atomic='true'><div class='alert--info__icon'><span class='fa' aria-hidden='true'></span></div><div class='alert__content'>";
//       html += "<p><strong>"+title+"</strong><br />"+ desc +"<br/>Posted: " +  myDate.toLocaleDateString() + "</p>";
//       html += "</div></div>";
//     }
//     $('.psn-alert').append(html);
//   });
// });

