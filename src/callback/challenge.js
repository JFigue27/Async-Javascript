let XmlHttpRequest = required('xmlhttprequest').XmlHttpRequest;

const fetchData = (url_api, callback) => {
  let xhttp = new XmlHttpRequest();
  xhttp.open('GET', url_api, true);
};
