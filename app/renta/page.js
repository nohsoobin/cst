const menu = [
  {
    id: 1,
    item: "LG Gram",
    num: 0,
  },
  {
    id: 2,
    item: "SAMSUNG",
    num: 0,
  },
  {
    id: 3,
    item: "Macbook",
    num: 0,
  },
];

function select(item) {
  if (menu[item - 1].num < 5) {
    // 최대값인 5보다 작을 경우에만 수량 증가
    menu[item - 1].num += 1;
    generateTable();
    calcSum();
  } else {
    alert("최대 5개까지 선택할 수 있습니다."); // 알림 메시지 출력
  }
}

function unselect(item) {
  if (menu[item - 1].num > 0) {
    // 최소값인 0보다 클 경우에만 수량 감소
    menu[item - 1].num -= 1;
    generateTable();
    calcSum();
  } else {
    alert("수량을 선택해주세요."); // 알림 메시지 출력
  }
}
