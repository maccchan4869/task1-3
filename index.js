const taskArray = [];

const separation = ' ： ';

const message = {
  input: 'タスクを入力してください',
  success: '新しいタスクを追加しました'
};
 
const header = {
  text: '現在持っているタスク一覧\n',
  frame: '========================\n'
};

// タスクの表示処理
const dispTask = () => {
  console.log(header.frame + header.text + header.frame);
  taskArray.forEach((value, index) => console.log(index + separation + value));
};

// タスクの追加処理
const addTask = () => {
  const inputTask = window.prompt(message.input);
  taskArray.push(inputTask);
  dispTask();
  alert(message.success); 
};

// 初期表示
taskArray.push('掃除');
taskArray.push('買い物');
taskArray.push('散歩');
dispTask();

// 追加表示
setTimeout(addTask, 5000);