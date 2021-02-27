const GetRecyclablesDetailAPI = async (ID) => {
  var url = `http://192.168.1.157:8001/GetRycyclableDetail/${ID}`;
  return await fetch(url).then((response) => response.json());
};

export default GetRecyclablesDetailAPI;
