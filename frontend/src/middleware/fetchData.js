import taskSlice from "../redux/taskSlice";
import axios from 'axios';

const action = taskSlice.actions;

export const fetchTaskData = async(dispatch) => {
    try{
        dispatch(action.tasksLoading());
        const res = await axios.get('http://localhost:5000/tasks')
        dispatch(action.gettingTaskData(res.data))
    }
    catch(e){
        console.log(e)
        dispatch(action.tasksError(e));
        }
};

export const deleteTask = (id) => async (dispatch) => {
    try {
        await axios.delete(`http://localhost:5000/tasks/${id}`);
        dispatch(action.taskDeleted(id)); // This action should update the state
        alert('Task Deleted');
    } catch (err) {
        console.error(err);
        dispatch(action.tasksError(err));
    }
};

export const statusChange = (task) => async (dispatch) => {
    try{
        const newStatus = task.status === 'Pending' ? 'Completed' : 'Pending';
        await axios.put(`http://localhost:5000/tasks/${task._id}`, { status: newStatus });
        dispatch(action.taskStatusUpdated({id: task._id, status: newStatus}));
        alert('Task Updated');
    }catch(err) {
        console.log(err);
        dispatch(action.tasksError(err))
    }
};

export const createTask = (taskData) => async (dispatch) => {
    try {
        const response = await axios.post('http://localhost:5000/tasks', taskData);

        dispatch(action.taskCreated(response.data)); // Add new task to the Redux store
        alert('Task Created');
    } catch (err) {
        console.error(err);
        dispatch(action.tasksError(err));
    }
};

