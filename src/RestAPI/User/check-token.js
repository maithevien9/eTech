const CheckToken = async (Token) => {
  var url = `http://192.168.1.2:8001/CheckLogin`;
  return await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `bearer ${Token}`,
    },
  }).then((response) => response.json());
};

export default CheckToken;
