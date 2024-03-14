import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodo } from './features/taskSlice';
import Button from './components/Button';
import Task from "./features/Task";

function App() {
  const taskRef = useRef()
  const todoList = useSelector(state => state.todo.list)
  const dispatch = useDispatch()
  const saveTask = e => {
    e.preventDefault()
    const text = taskRef.current.value.trim()
    taskRef.current.value = ''
    taskRef.current.focus()
    if (text) {
      dispatch(createTodo(text))
    }
  }

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden">
      <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 md:w-screen md:mx-auto md:max-w-3xl md:rounded-lg md:px-10">
        <div className="text-2xl">My Todos</div>
        <div className="py-8">
          <form onSubmit={saveTask} className="flex space-x-4">
            <input type="text" ref={taskRef} className="shadow border rounded w-full" placeholder="Enter what you want to do here" />
            <Button variant="emerald">save</Button>
          </form>
          {(todoList.length || '') && <>
            <hr className="mt-4" />
            <div className="overflow-y-auto max-h-[calc(100vh-20rem)] w-full pt-4">
              {todoList.map((task, i) => <div key={task.id}>
                {i > 0 && <hr className="my-4" />}
                <Task {...task} />
              </div>)}
            </div>
          </>}
        </div>
      </div>
    </div>
  );
}

export default App;
