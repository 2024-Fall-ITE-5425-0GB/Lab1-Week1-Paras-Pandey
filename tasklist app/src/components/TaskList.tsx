type TaskListProps = {
    title: string;
    tasks: string[];
  };
  
  function TaskList({ title, tasks }: TaskListProps) {
    return (
      <div className='tasklist'>
        <h2>{title}</h2>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default TaskList;
  