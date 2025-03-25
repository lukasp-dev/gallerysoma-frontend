type IMPRequestPayAdditionalParams = {
  /**
   * 디지털 구분자
   * - 휴대폰 결제수단인 경우 필수 항목입니다.
   * - 결제제품이 실물이 아닌 경우 true 로 설정합니다.
   *  - 실물/디지털 여부에 따라 수수료율이 상이하게 측정되니 유의하시기 바랍니다.
   */
  digital?: boolean;

  /**
   * 가상계좌 입금기한
   * - 결제수단이 가상계좌인 경우 입금기한을 설정할 수 있습니다.
   * - 다음과 같은 형식으로 설정이 가능합니다 :
   *  - `YYYY-MM-DD`
   *  - `YYYYMMDD`
   *  - `YYYY-MM-DD HH:mm:ss`
   *  - `YYYYMMDDHHmmss`
   */
  vbank_due?: string;

  /**
   * 결제완료이후 이동될 EndPoint URL 주소
   * - 결제창이 새로운 창으로 리다이렉트 되어 결제가 진행되는 결제 방식인 경우 필수 설정 항목 입니다.
   * - 대부분의 모바일 결제환경에서 결제창 호출시 필수 항목입니다.
   * - 리다이렉트 환경에서 해당 필드 누락시 결제 결과를 수신 받지 못합니다.
   */
  m_redirect_url?: string;

  /**
   * 모바일 앱 결제중 가맹점 앱복귀를 위한 URL scheme
   * - WebView 환경 결제시 필수설정 항목 입니다.
   * - ISP/앱카드 앱에서 결제정보인증 후 기존 앱으로 복귀할 때 사용합니다.
   */
  app_scheme?: string;

  /**
   * 사업자등록번호
   * - 다날-가상계좌 결제수단 사용시 필수 항목입니다.
   */
  biz_num?: string;
};

export default IMPRequestPayAdditionalParams;
