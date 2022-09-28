import { useState, useEffect } from 'react';
import { dumy } from '../components/dumy';
const { kakao } = window;

const Map = () => {
  const [currentBoundLocation, setCurrentBoundLocation] = useState<number[]>(
    []
  );
  const [filteredAllPost, setFilteredAllPost] = useState<TypeDumy[]>([]);

  interface TypeDumy {
    address: string;
    latitude: number;
    longitude: number;
  }

  useEffect(() => {
    let container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    let options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    let map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    let geocoder = new kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색합니다   '제주특별자치도 제주시 첨단로 242' 요 부분에 내가 검색하고 싶은 주소 넣기
    dumy.forEach((el) => {
      geocoder.addressSearch(
        el.address,
        function (result: { x: number; y: number }[], status: number) {
          // 정상적으로 검색이 완료됐으면
          if (status === kakao.maps.services.Status.OK) {
            //좌표값
            let coords = new kakao.maps.LatLng(result[0].y, result[0].x);

            // 결과값으로 받은 위치를 마커로 표시합니다
            let marker = new kakao.maps.Marker({
              map: map,
              position: coords,
            });

            //좌표값 대입
            el.latitude = result[0].x;
            el.longitude = result[0].y;
            // 마커가 지도 위에 표시되도록 설정합니다
            marker.setMap(map);
            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
          }
        }
      );
    });
    console.log(dumy);
    // 지도 이동할때마다 현재 좌표, 레벨 구하기
    kakao.maps.event.addListener(map, 'bounds_changed', function () {
      // 지도 영역정보를 얻어옵니다
      var bounds = map.getBounds();
      // 영역정보의 남서쪽 정보를 얻어옵니다
      var swLatlng = bounds.getSouthWest();
      // 영역정보의 북동쪽 정보를 얻어옵니다
      var neLatlng = bounds.getNorthEast();

      setCurrentBoundLocation([
        swLatlng.La,
        swLatlng.Ma,
        neLatlng.La,
        neLatlng.Ma,
      ]);
    });
  }, []);

  // 화면 영역 안에 존재하는 마커 필터링하는 함수
  const filterPost = (list: TypeDumy[]) => {
    return list.filter((post) => {
      return (
        post.latitude >= currentBoundLocation[0] && //서
        post.latitude <= currentBoundLocation[2] && //동
        post.longitude >= currentBoundLocation[1] && //남
        post.longitude <= currentBoundLocation[3] //북
      );
    });
  };

  useEffect(() => {
    setFilteredAllPost(filterPost(dumy));
  }, [currentBoundLocation]);
  return (
    <div>
      <div style={{ width: '100vw', height: '500px' }}>
        <div id="map" style={{ width: '100%', height: '100%' }}></div>
      </div>
      <div>
        <div style={{ fontSize: '20px' }}>현제 보이는 위치</div>
        {filteredAllPost.map((el) => (
          <div key={el.address}>{el.address}</div>
        ))}
      </div>
    </div>
  );
};

export default Map;
