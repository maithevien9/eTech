const registerAPI = async (User, PassWord) => {
  var url = 'http://192.168.1.5:8001/Register';
  return await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      User: User,
      PassWord: PassWord,
    }),
  }).then((response) => response.json());
};

export default registerAPI;
