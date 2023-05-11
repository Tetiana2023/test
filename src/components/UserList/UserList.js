import { UserCard } from 'components/UserCard/UserCard';
import css from './UserList.module.css';

export const UserList = ({ user }) => {
  // console.log(user)
  return (
    <ul  className={css.listBox}>
      {user.map(user => (
        <UserCard user={user}
       />
      ))}
    </ul>
  );
};
