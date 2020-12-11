const NewRecyclablesAPI = async (Token, ScheduleTime, InforRecyclable) => {
  var url = 'http://192.168.1.5:8001/NewRecyclables';

  return await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: Token,
      ScheduleTime: ScheduleTime,
      InforRecyclable: InforRecyclable,
    }),
  }).then((response) => response.json());
};

export default NewRecyclablesAPI;
