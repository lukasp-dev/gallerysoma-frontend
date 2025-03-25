import PageableSort from "./PageableSort";

type Pageable = {
  sort: PageableSort;
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: Boolean;
  unpaged: Boolean;
};

export default Pageable;
