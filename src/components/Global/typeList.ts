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
  export interface TypePostData {
    body: string;
    id: number;
    title: string;
    userId: number;
  }

  export interface TypePostAPI {
    status: string;
    data: TypePostData[];
  }
}

export default TypeList;
