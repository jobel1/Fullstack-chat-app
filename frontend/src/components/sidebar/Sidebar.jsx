import Conversations from "./Conversations";
import SearchInput from "./SearchInput";
import Logoutbutton from './Logoutbutton';
const Sidebar = () => {
  return (
    <div className='Border-r border-slate-500 p-4 flex flex-col'>
        <SearchInput />
        <div className='divider px-3'></div>
        <Conversations />
         <Logoutbutton/>   
    </div>
  );
};
export default Sidebar;
 