const GetNotify = async (Token) => {
  var url = `http://192.168.1.5:8001/GetNotify/${Token}`;
  return await fetch(url).then((response) => response.json());
};

export default GetNotify;
