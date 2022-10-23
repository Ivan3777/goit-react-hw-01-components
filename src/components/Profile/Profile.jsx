import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div class={css.profile}>
      <div class={css.description}>
        <img src={avatar} alt="User avatar" class={css.avatar} />
        <p class={css.profileName}>{username}</p>
        <p class={css.profileTag}>@{tag}</p>
        <p class={css.profileLocation}>{location}</p>
      </div>

      <ul class={css.stats}>
        <li class={css.followersList}>
          <span class={css.label}>Followers</span>
          <span class={css.quantity}>{followers}</span>
        </li>
        <li class={css.viewsList}>
          <span class={css.label}>Views</span>
          <span class={css.quantity}>{views}</span>
        </li>
        <li class={css.likesList}>
          <span class={css.label}>Likes</span>
          <span class={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
