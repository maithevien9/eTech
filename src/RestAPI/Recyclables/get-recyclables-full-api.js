const GetRecyclablesFullAPI = async (Token, status) => {
  var url = `http://192.168.43.72:8001/GetRycyclablefull`;
  return await fetch(url).then((response) => response.json());
};

export default GetRecyclablesFullAPI;
