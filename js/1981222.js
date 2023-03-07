const API = "https://web1-api.vercel.app/api";

async function loadData(request, templateId, viewId) {
  const response = await fetch(`${API}/${request}`);

  const data = await response.json();
  var source = document.getElementById(templateId).innerHTML;
  var template = Handlebars.compile(source);
  var context = { data: data };
  var view = document.getElementById(viewId);
  view.innerHTML = template(context);
}
// async function loadBlogs(request, currentPage, templateId, viewId) {
//   const response = await fetch(`${API}/${request}?page=${currentPage}`);

//   const context = await response.json();

//   var source = document.getElementById(templateId).innerHTML;
//   var template = Handlebars.compile(source);
//   var view = document.getElementById(viewId);
//   view.innerHTML = template(context);
// }
