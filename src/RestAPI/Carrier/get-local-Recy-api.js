const GetLocalRecy = async (TimeLine) => {
  console.log(TimeLine + '/');
  console.log(TimeLine + '/');
  var url = `http://192.168.1.2:8001/GetLocalRecy/${TimeLine}`;
  return await fetch(url).then((response) => response.json());
};

export default GetLocalRecy;
