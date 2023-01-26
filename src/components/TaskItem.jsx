import { MdDeleteForever } from 'react-icons/md'
import { useAlert } from 'react-alert'
import axios from 'axios'

import './TaskItem.scss';

const TaskItem = ({ task, fetchTasks }) => {

    const alert = useAlert()

    const handleTaskDeletion = async () => {
        try {
            await axios.delete(`https://fsc-task-manager-backend.herokuapp.com/tasks/${task._id}`)

            await fetchTasks() 

            alert.success('A tarefa foi removida com sucesso!')

        } catch (_error) {
            alert.error('Algo deu errado!')
        }
    }

    const handleTaskCompletionChange =  async (e) => {
        try {
            await axios.patch(`https://fsc-task-manager-backend.herokuapp.com/tasks/${task._id}`, {
                isCompleted: e.target.checked
            })

            await fetchTasks()

            alert.success('A tarefa foi modificada com sucesso!')

        } catch (_error) {
            alert.error('Algo deu errado!')
        }
    }

    return (
        <>
            <div className="task-item-container">
                <div className="task-description">
                    <label
                        className={
                            task.isCompleted
                                ? 'checkbox-container-completed'
                                : 'checkbox-container'
                        }
                    >
                        {task.description}
                        <input
                            type="checkbox"
                            defaultChecked={task.isCompleted}
                            onChange={(e) => handleTaskCompletionChange(e)}
                        />
                        <span
                            className={
                                task.isCompleted
                                    ? 'checkmark completed'
                                    : 'checkmark'
                            }
                        ></span>
                    </label>
                </div>

                <div
                    className="delete">
                    <MdDeleteForever
                        size={18}
                        color='#f97474'
                        onClick={handleTaskDeletion}
                    />
                </div>
            </div>
        </>
    )
}

export default TaskItem;