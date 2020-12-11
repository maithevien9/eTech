const CreateNotifyAPI = async (Name, Detail, token) => {
  var url = 'http://192.168.1.5:8001/CreateNotify';

  return await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      Name: Name,
      Detail: Detail,
      token: token,
    }),
  }).then((response) => response.json());
};

export default CreateNotifyAPI;
