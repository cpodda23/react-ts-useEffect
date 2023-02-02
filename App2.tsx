import * as React from 'react';
import './style.css';

const User = ({ username }) => {
  const [render, setRender] = React.useState(1);
  console.log('User');

  React.useEffect(() => {
    console.log('Effect User');
  });

  return (
    <div>
      <button onClick={() => setRender(render + 1)}>Render User</button>
      <p>{username}</p>
      <MemoTasks />
    </div>
  );
};

const MemoUser = React.memo(User);

const Tasks = () => {
  console.log('Tasks');

  React.useEffect(() => {
    console.log('Effect Tasks');
  });

  return (
    <div>
      <p>TASK 1</p>
      <p>TASK 2</p>
      <p>TASK 3</p>
      <p>TASK 4</p>
    </div>
  );
};

const MemoTasks = React.memo(Tasks);

export default function App() {
  const [render, setRender] = React.useState(1);
  console.log('App1');

  React.useEffect(() => {
    console.log('Effect App');
  }, []);

  console.log('App2');

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <button onClick={() => setRender(render + 1)}>Render App</button>
      <p>Start editing to see some magic happen :)</p>
      <MemoUser username={'Camilla'} />
    </div>
  );
}
