"use client"

import { useState, FormEventHandler } from "react";
import { ITask } from "@/types/tasks"
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { deleteTodo, editTodo } from "@/api";

interface TaskProps {
    task: ITask
}

const Task: React.FC<TaskProps> = ({task}) => {
  const router = useRouter()
  const [modalOpenEdit, setModalOpenEdit] = useState<boolean>(false)
  const [modalOpenDelete, setModalOpenDelete] = useState<boolean>(false)
  const [taskToEdit, setTaskToEdit] = useState<string>(task.text)

  const handleEditNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    await editTodo({
      id: task.id,
      text: taskToEdit
    })
    setModalOpenEdit(false)
    router.refresh()
  }

  const handleDeleteTask = async (id: string) => {
    await deleteTodo(id)
    setModalOpenDelete(false)
    router.refresh()
  }

  return (
    <tr key={task.id}>
        <td className="w-full">{task.text}</td>
        <td className="flex gap-5">
          <FiEdit onClick={() => setModalOpenEdit(true)} cursor="pointer" className="text-blue-500" size={20} />
          <Modal modalOpen={modalOpenEdit} setModalOpen={setModalOpenEdit}>
            <form onSubmit={handleEditNewTodo}>
              <h3 className="font-bold text-lg">Edit task</h3>
              <div className="modal-action">
                <input value={taskToEdit} onChange={e => setTaskToEdit(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full" />
                <button type="submit" className="btn">Submit</button>
              </div>
            </form>
          </Modal>

          <FiTrash2 onClick={() => setModalOpenDelete(true)} cursor="pointer" className="text-red-500" size={20} />
          <Modal modalOpen={modalOpenDelete} setModalOpen={setModalOpenDelete}>
            <h3 className="text-lg">Are you sure, you want to delete this task ?</h3>
            <div className="modal-action">
              <button onClick={() => handleDeleteTask(task.id)} className="btn btn-error">Yes</button>
            </div>
          </Modal>
        </td>
    </tr>
  )
}

export default Task