import GlobalAddressRecord from "./GlobalAddressRecord";

type GlobalAddress = {
  Version: string;
  TransmissionReference: string;
  TransmissionResults: string;
  TotalRecords: string;
  Records: GlobalAddressRecord[];
};

export default GlobalAddress;
