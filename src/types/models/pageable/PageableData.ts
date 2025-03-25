import Pageable from "./Pageable";
import PageableSort from "./PageableSort";

type PageableData<T> = {
  content: T;
  pageable: Pageable;
  last: Boolean;
  totalPages: number;
  totalElements: number;
  sort: PageableSort;
  number: number;
  first: Boolean;
  size: number;
  numberOfElements: number;
  empty: Boolean;
};

export default PageableData;
