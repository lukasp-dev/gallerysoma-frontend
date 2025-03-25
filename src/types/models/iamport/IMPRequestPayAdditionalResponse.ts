/**
 * 추가속성
 */
type IMPRequestPayAdditionalResponse = {
  /**
   * 신용카드 승인번호
   */
  apply_num?: string;

  /**
   * 가상계좌 입금 계좌번호
   */
  vbank_num?: string;

  /**
   * 가상계좌 입금은행 명
   */
  vbank_name?: string;

  /**
   * 가상계좌 예금주
   */
  vbank_holder?: string | null;

  /**
   * 가상계좌 입금기한 (UNIX timestamp)
   */
  vbank_date?: number;
};

export default IMPRequestPayAdditionalResponse;
