const SearchRecyclablesAPI = async (keyWord) => {
  var url = `http://192.168.1.5:8001/SearchRecycalbles/${keyWord}`;
  return await fetch(url).then((response) => response.json());
};

export default SearchRecyclablesAPI;
