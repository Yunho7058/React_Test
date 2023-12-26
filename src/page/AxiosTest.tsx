import axios from 'axios';
axios.defaults.withCredentials = true;

const AxiosTest = () => {
  const HandleClick = () => {
    console.log('서버 통신11');
    axios
      .get(
        'https://api.steampowered.com/ISteamApps/GetAppList/v2/?format=json',
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'x-webapi-key': '0324FF66AD652FE45FAE7302C8D1E24C',
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        console.log('성공');
      })
      .catch((err) => console.log('실패', err));
  };

  return (
    <>
      <button onClick={() => HandleClick()}>요청 보내기</button>
    </>
  );
};

export default AxiosTest;

/*
참고 사이트

1. ajax, fetch, axios
https://velog.io/@devstone/React%EC%97%90%EC%84%9C-Axios%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%B4-API-%ED%98%B8%EC%B6%9C%ED%95%98%EA%B8%B0-feat.-fetch-ajax
*/
