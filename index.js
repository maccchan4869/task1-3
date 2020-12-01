const tasks = [];

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
  tasks.forEach((value, index) => console.log(index + separation + value));
};

// タスクの追加処理
const addTask = () => {
  const inputTask = window.prompt(message.input);
  tasks.push(inputTask);
  dispTask();
  alert(message.success); 
};

// 初期表示
tasks.push('掃除');
tasks.push('買い物');
tasks.push('散歩');
dispTask();

// 追加表示
setTimeout(addTask, 5000);