import { Enumerable } from "../base";

/**
 * PG사 구분코드
 */
class IMPPgProvider implements Enumerable<string> {
  readonly code: string;

  readonly name: string;

  constructor(code: string, name: string) {
    this.code = code;
    this.name = name;
  }

  public static HTML5_INICIS = new IMPPgProvider(
    "html5_inicis",
    "이니시스웹표준"
  );

  public static INICIS_UNIFIED = new IMPPgProvider(
    "inicis_unified",
    "이니시스 통합인증"
  );

  public static INICIS = new IMPPgProvider(
    "inicis",
    "이니시스ActiveX결제창 or API 방식 "
  );

  public static KCP = new IMPPgProvider(
    "kcp",
    "NHN KCP 일반결제창 or API 방식 정기결제"
  );

  public static KCP_BILLING = new IMPPgProvider(
    "kcp_billing(",
    "NHN KCP 정기결제"
  );

  public static UPLUS = new IMPPgProvider("uplus", "토스페이먼츠(구 LG U+)");

  public static TOSSPAYMENTS = new IMPPgProvider(
    "tosspayments",
    "(신)토스페이먼츠"
  );

  public static NICEPAY = new IMPPgProvider("nice", "나이스페이");

  public static NICEPAY_V2 = new IMPPgProvider("nice_v2", "(신)나이스페이");

  public static JTNET = new IMPPgProvider("jtnet", "JTNet");

  public static KICC = new IMPPgProvider("kicc", "한국정보통신");

  public static BLUEWALNUT = new IMPPgProvider("bluewalnut", "블루월넛");

  public static KAKAOPAY = new IMPPgProvider("kakaopay", "카카오페이");

  public static DANAL = new IMPPgProvider("danal", "다날휴대폰소액결제");

  public static DANAL_TPAY = new IMPPgProvider("danal_tpay", "다날일반결제");

  public static MOBILIANS = new IMPPgProvider(
    "mobilians",
    "모빌리언스 휴대폰소액결제"
  );

  public static CHAI = new IMPPgProvider("chai", "차이 간편결제");

  public static SYRUP = new IMPPgProvider("syrup", "시럽페이");

  public static PAYCO = new IMPPgProvider("payco", "페이코");

  public static PAYPAL = new IMPPgProvider("paypal", "페이팔");

  public static PAYPAL_V2 = new IMPPgProvider("paypal_v2", "(신)페이팔");

  public static EXIMBAY = new IMPPgProvider("eximbay", "엑심베이");

  public static NAVERPAY = new IMPPgProvider("naverpay", "네이버페이-결제형");

  public static NAVERCO = new IMPPgProvider("naverco", "네이버페이-주문형");

  public static SMILEPAY = new IMPPgProvider("smilepay", "스마일페이");

  public static DAOU = new IMPPgProvider("daou", "키움페이(구 페이조아)");

  public static PAYMENTWALL = new IMPPgProvider("paymentwall", "페이먼트월");

  public static TOSSPAY = new IMPPgProvider("tosspay", "토스간편결제");

  public static TOSS_BRANDPAY = new IMPPgProvider(
    "toss_brandpay",
    "토스페이먼츠 브랜드페이"
  );

  public static SMARTCO = new IMPPgProvider("smartro", "스마트로");

  public static SMARTCO_V2 = new IMPPgProvider("smartro_v2", "(신)스마트로");

  public static SETTLE = new IMPPgProvider("settle", "세틀뱅크");

  public static WELCOME = new IMPPgProvider("welcome", "웰컴페이먼츠");
}

export default IMPPgProvider;
