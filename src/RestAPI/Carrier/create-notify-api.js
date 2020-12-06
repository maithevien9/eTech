const CreateNotifyADAPI = async (token, Name, IDUser) => {
  var url = 'http://192.168.1.5:8001/CreateNotifyAD';

  return await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      Name: Name,
      Detail: '',
      token: token,
      IDUser: IDUser,
    }),
  }).then((response) => response.json());
};

export default CreateNotifyADAPI;
