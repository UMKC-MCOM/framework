export function loadScript(url, async = true, callback) {
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;
  script.async = async;
  script.onreadystatechange = callback;
  script.onload = callback;

  head.appendChild(script);
}
