const MESSAGE = {
  INPUT: "タスクを入力してください",
  SUCCESS: "新しいタスクを追加しました"
};

const HEADER = {
  TEXT: "現在持っているタスク一覧\n",
  FRAME: "========================\n"
};

const SEPARATION = " ： ";

// タスクの表示処理
const DispTask = function () {
  console.log(HEADER.FRAME + HEADER.TEXT + HEADER.FRAME);
  for (let i = 0; i < taskArray.length; i++) {
    console.log(i + SEPARATION + taskArray[i]);
  }
};

let taskArray = [];

// 初期表示
taskArray.push("掃除");
taskArray.push("買い物");
taskArray.push("散歩");
DispTask();

// タスク追加表示
let input = prompt(MESSAGE.INPUT);
taskArray.push(input);
DispTask();
alert(MESSAGE.SUCCESS);
