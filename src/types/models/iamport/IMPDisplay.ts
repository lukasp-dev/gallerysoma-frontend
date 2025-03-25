type IMPDisplay = {
  /**
   * 할부개월
   * - []: 일시불만 결제 가능
   * - 2,3,4,5,6: 일시불을 포함한 2,3,4,5,6 개월까지 할부개월 선택 가능
   */
  card_quota?: number[];
};

export default IMPDisplay;
