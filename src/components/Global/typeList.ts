declare global {
  interface Window {
    kakao: any;
  }
}
namespace TypeList {
  export interface TypeItem {
    id: number;
    name: string;
    count: number;
  }
}

export default TypeList;
