import IMPRequestPayAdditionalResponse from "./IMPRequestPayAdditionalResponse";

type IMPRequestPayResponse = {
  /**
   * 결제 실패코드
   * - 결제가 실패하는 경우 PG사 원천코드가 내려갑니다.
   */
  error_code: string;

  /**
   * 결제 실패메세지
   * - 결제가 실패하는 경우 PG사 원천메세지가 내려갑니다.
   */
  error_msg: string;

  /**
   * 포트원 고유 결제번호
   * - success가 false이고 사전 validation에 실패한 경우, imp_uid는 null일 수 있음
   */
  imp_uid: string | null;

  /**
   * 주문번호
   */
  merchant_uid: string;

  /**
   * 결제수단 구분코드
   */
  pay_method?: string;

  /**
   * 결제금액
   */
  paid_amount?: number;

  /**
   * 결제상태
   * - ready: (브라우저 창 이탈, 가상계좌 발급 완료 등 미결제 상태)
   * - paid: (결제완료)
   * - failed: (신용카드 한도 초과, 체크카드 잔액 부족, 브라우저 창 종료 또는 취소 버튼 클릭 등 결제실패 상태)
   */
  status?: string;

  /**
   * 주문자명
   */
  name?: string;

  /**
   * PG사 구분코드
   */
  pg_provider?: string;

  /**
   * PG사 거래번호
   * - PG사에서 거래당 고유하게 부여하는 거래번호입니다.
   */
  pg_tid?: string;

  /**
   * 주문자명
   */
  buyer_name?: string;

  /**
   * 주문자 Email
   */
  buyer_email?: string;

  /**
   * 주문자 연락처
   */
  buyer_tel?: string;

  /**
   * 주문자 주소
   */
  buyer_addr?: string;

  /**
   * 주문자 우편번호
   */
  buyer_postcode?: string;

  /**
   * 가맹점 임의 지정 데이터
   */
  custom_data?: unknown;

  /**
   * paid_at
   */
  paid_at?: number;

  /**
   * 거래 매출전표 URL
   */
  receipt_url?: string;
} & IMPRequestPayAdditionalResponse;

export default IMPRequestPayResponse;
