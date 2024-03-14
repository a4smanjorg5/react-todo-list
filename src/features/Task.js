import { useDispatch } from 'react-redux';
import Button from '../components/Button'
import { changeTodo, checkTodo, deleteTodo, uncheckTodo } from './taskSlice';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPenToSquare, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';

const Task = ({
  id, text, checked_at,
}) => {
  const dispatch = useDispatch()
  const [canEdit, setEdit] = useState(false)
  const editRef = useRef()

  useEffect(() => {
    editRef.current?.select()
  }, [canEdit])

  const handleSubmit = e => {
    e.preventDefault()
    setEdit(false)
    dispatch(changeTodo({ id, text: editRef.current.value }))
  }

  return <form className="flex space-x-4" onSubmit={handleSubmit}>
    {canEdit ? <>
      <input type="text" defaultValue={text} ref={editRef} className="shadow border rounded w-full" />
      <Button variant="emerald" handleClick={handleSubmit}><FontAwesomeIcon icon={faCheck} /></Button>
      <Button variant="rose" handleClick={() => setEdit(false)}><FontAwesomeIcon icon={faXmark} /></Button>
    </> : <>
      <span role="button" onClick={() => dispatch(checked_at ? uncheckTodo(id) : checkTodo(id))} className={'ml-2 w-full ' + (checked_at ? 'line-through' : '')}>{text}</span>
      <Button variant="indigo" handleClick={() => setEdit(!0)}><FontAwesomeIcon icon={faPenToSquare} /></Button>
      <Button variant="rose" handleClick={() => dispatch(deleteTodo(id))}><FontAwesomeIcon icon={faTrash} /></Button>
    </>}
  </form>
}

export default Task;
