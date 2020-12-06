const ChangInforUser = async (Token, Name, Address, Phone, X, Y) => {
  var url = 'http://192.168.1.5:8001/ChangInfor';

  return await fetch(url, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      Token: Token,
      Name: Name,
      Address: Address,
      Phone: Phone,
      X: X,
      Y: Y,
    }),
  }).then((response) => response.json());
};

export default ChangInforUser;
