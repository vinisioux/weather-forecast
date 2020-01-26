function replaceChar(str) {
  if (typeof str !== "string") return;

  let response = str;
  response = response.toLowerCase();
  response = response.replace("á", "%C3%A1");
  response = response.replace("é", "%C3%89");
  response = response.replace("í", "%C3%AD");
  response = response.replace("ó", "%C3%93");
  response = response.replace("ú", "%C3%9A");
  response = response.replace("â", "%C3%82");
  response = response.replace("ê", "%C3%8A");
  response = response.replace("î", "%C3%8E");
  response = response.replace("ô", "%C3%94");
  response = response.replace("û", "%C3%9B");
  response = response.replace("à", "%C3%80");
  response = response.replace("è", "%C3%88");
  response = response.replace("ì", "%C3%8C");
  response = response.replace("ò", "%C3%92");
  response = response.replace("ù", "%C3%99");
  response = response.replace("ç", "%C3%A7");
  response = response.replace("ã", "%C3%A3");
  response = response.replace("õ", "%C3%B5");
  response = response.replace("ü", "%C3%BC");
  response = response.replace(" ", "%20");

  return response;
}
module.exports = replaceChar;
