const ConfirmRecyAPI = async (token, IDRecy, IDUser) => {
  var url = 'http://192.168.1.5:8001/ConfirmRecy';

  return await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: token,
      IDRecy: IDRecy,
      IDUser: IDUser,
    }),
  }).then((response) => response.json());
};

export default ConfirmRecyAPI;
