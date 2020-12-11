const CreateHistoryScore = async (token, IDGift, PriceGift) => {
  var url = 'http://192.168.1.5:8001/CreateHistory';

  return await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: token,
      IDGift: IDGift,
      PriceGift: PriceGift,
    }),
  }).then((response) => response.json());
};

export default CreateHistoryScore;
