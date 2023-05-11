import Logo from 'images/Logo.png';
import mainPicture from 'images/main-picture.png';
import Line from 'images/Rectangle.png';
import { useState } from 'react';
import { useLocaleStorage } from 'hooks/localeStorage';
import css from './UserCard.module.css';

import axios from 'axios';

export const UserCard = ({ user }) => {
  const { id, tweets, followers, avatar } = user;
  //  const [isFollowing, setIsFollowing] = useState(false);

  const [isFollowing, setIsFollowing] = useLocaleStorage(
    `following${id}`,false);
  const [follower, setFollower] = useState(followers);

  const hendleOnFollowing = async () => {
    const followingUser = isFollowing ? follower - 1 : follower + 1;
    try {
      await axios.put(
        `https://64411770792fe886a89e1645.mockapi.io/user/${id}`,
        { followers: followingUser }
      );

      setFollower(followingUser);
      setIsFollowing(!isFollowing);
    } catch (error) {
      console.log(error);
    }
  };

  // const hendleOnIncriment = () => {
  //   setIsFollowing(true);
  //   setFollower(follower + 1);
  // };
  // const hendleOnDecriment = () => {
  //   setIsFollowing(false);
  //   setFollower(follower - 1);
  // };
  return (
    <li key={id} className={css.box}>
      <a href="./">
        <img
          className={css.logo}
          src={Logo}
          alt="logo"
          width="76"
          height="22"
        />
      </a>
      <img className={css.picture} src={mainPicture} alt="mainPicture" />

      <img src={Line} alt="line" />
      <div className={css.avatarBox}>
        <img className={css.image} src={avatar} alt="userPhoto" />
      </div>
      <div className={css.userInfo}>
        <p className={css.text}>{tweets} TWEETS</p>
        <p className={css.text}>{follower.toLocaleString('en-US')} FOLLOWERS</p>
        {!isFollowing ? (
         <button
            className={css.button}
            type="button"
            onClick={hendleOnFollowing}
          >
            FOLLOW
          </button>
        ) : (
          
           <button
            className={css.buttonFollowing}
            type="button"
            onClick={hendleOnFollowing}
          >
            FOLLOWING
          </button>
        )}
      </div>
    </li>
  );
};
