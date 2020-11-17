document.addEventListener('DOMContentLoaded', function() {
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

  const AddTask = function () {
    let input = window.prompt(MESSAGE.INPUT);
    taskArray.push(input);
    DispTask();
    alert(MESSAGE.SUCCESS); 
  };
  
  let taskArray = [];
  
  // 初期表示
  taskArray.push("掃除");
  taskArray.push("買い物");
  taskArray.push("散歩");
  DispTask();
  
  // タスクの追加処理
  setTimeout(AddTask, 5000);
});