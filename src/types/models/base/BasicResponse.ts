import BasicResponseStatus from "./BasicResponseStatus";

type BasicResponse<T> = {
  data: T;
  status: BasicResponseStatus;
};

export default BasicResponse;
