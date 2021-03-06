import Tasks from './components/Tasks/Tasks';
import AddTask from './components/AddTask/AddTask';
import Header from './components/Header/Header';
import { TaskProvider } from './components/context/TaskContext';
import PopUp from './components/PopUp/PopUp';
import MyNav from '../nav';
import OverLay from './components/OverLay/OverLay';


const Post = () => {
  return (
    
    <TaskProvider>
      <MyNav />
      <PopUp />
      <OverLay />
      <Header />
      <div className='container'>
      
        <AddTask />
        <Tasks />
      </div>
    </TaskProvider>
  );
};
export default Post;
