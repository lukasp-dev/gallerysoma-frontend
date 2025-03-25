import IMPDisplay from "./IMPDisplay";
import IMPRequestPayAdditionalParams from "./IMPRequestPayAdditionalParams";

type IMPRequestPayParams = {
  /**
   * PG사 구분 코드
   * PG사 코드.{상점 ID}`
   */
  pg?: string;

  /**
   * 결제 수단 구분 코드
   */
  pay_method: string;

  /**
   * 에스크로 결제창 활성화 여부
   */
  escrow?: boolean;

  /**
   * 주문번호
   * - 주문번호는 매 결제 요청시 고유하게 채번 되어야 합니다.
   * - 40Byte 이내로 작성해주세요
   * - 결제 승인완료 처리된 주문번호를 동일하게 재 설정시 사전거절 처리 됩니다.
   */
  merchant_uid: string;

  /**
   * 결제대상 제품명
   * - 16byte 이내로 작성해주세요
   */
  name?: string;

  /**
   * 결제금액
   */
  amount: number;

  /**
   * 사용자 정의 데이타
   * - 결제 응답시 echo 로 받아 보실 수 있는 필드 입니다.
   * - JSON notation(string)으로 저장됩니다.
   * - 주문 건에 대해 부가정보를 저장할 공간이 필요할 때 사용합니다.
   */
  custom_data?: unknown;

  /**
   * 면세금액
   * - 결제 금액 중 면세금액에 해당하는 금액을 입력합니다.
   */
  tax_free?: number;

  /**
   * 부가세
   */
  vat_amount?: number;

  /**
   * 결제통화 구분코드
   * - PayPal은 원화(KRW) 미 지원으로 USD가 기본
   * - PayPal에서 지원하는 통화는 PayPal 지원 통화 참조
   */
  currency?: string;

  /**
   * 결제창 언어 설정
   */
  language?: string;

  /**
   * 주문자명
   */
  buyer_name?: string;

  /**
   * 주문자 연락처
   * - 일부 PG사에서 해당 필드 누락시 오류 발생
   */
  buyer_tel: string;

  /**
   * 주문자 이메일
   * - 일부 PG사에서 해당 필드 누락시 오류 발생(페이먼트월)
   */
  buyer_email?: string;

  /**
   * 주문자 주소
   */
  buyer_addr?: string;

  /**
   * 주문자 우편번호
   */
  buyer_postcode?: string;
  confirm_url?: string;
  /**
   * 웹훅(Webhook) 수신 주소
   * - 포트원 관리자 콘솔에 설정한 웹훅 주소대신 사용할 웹훅 주소를 결제시마다 설정할 수 있습니다.
   * - 해당 값 설정시 관리자 콘솔에 설정한 주소로는 웹훅발송이 되지 않는점 유의하시기 바랍니다.
   */
  notice_url?: string | string[];

  /**
   * 가맹점 정의 빌링키
   * - 비인증 결제 이용시 빌링키와 1:1로 맵핑되는 가맹점 정의 고객 빌링키입니다.
   */
  display?: IMPDisplay;
} & IMPRequestPayAdditionalParams;

export default IMPRequestPayParams;
