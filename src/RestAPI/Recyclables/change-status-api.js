const ChangeStatusRecyAPI = async (IDRece, IDstatus) => {
  var url = 'http://192.168.1.5:8001/ChangeStatusRece';

  return await fetch(url, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      IDRece: IDRece,
      Status: '3',
    }),
  }).then((response) => response.json());
};

export default ChangeStatusRecyAPI;
