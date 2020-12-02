const GetInforUser = async (Token) => {
  var url = `http://192.168.1.2:8001/GetInfor/${Token}`;
  return await fetch(url).then((response) => response.json());
};

export default GetInforUser;
