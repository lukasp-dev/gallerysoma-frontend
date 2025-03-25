import { Enumerable } from "../base";

/**
 * 결제수단 구분코드
 */
class IMPPaymentMethod implements Enumerable<string> {
  readonly code: string;

  readonly name: string;

  constructor(code: string, name: string) {
    this.code = code;
    this.name = name;
  }

  public static CREDIT_CARD = new IMPPaymentMethod("card", "신용카드)");

  public static TRANS = new IMPPaymentMethod("trans", "실시간 계좌이체");

  public static VBANK = new IMPPaymentMethod("vbank", "가상계좌");

  public static PHONE = new IMPPaymentMethod("phone", "휴대폰 소액결제");

  public static CULTURELAND = new IMPPaymentMethod(
    "cultureland",
    "컬쳐랜드 상품권 (구.문화상품권)"
  );

  public static SMARTCULTURE = new IMPPaymentMethod(
    "smartculture",
    "휴대폰 소액결제"
  );
}

export default IMPPaymentMethod;
