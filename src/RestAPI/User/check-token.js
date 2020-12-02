const CheckToken = async (Token) => {
  var url = `http://192.168.1.2:8001/CheckLogin/${Token}`;
  return await fetch(url).then((response) => response.json());
};

export default CheckToken;
