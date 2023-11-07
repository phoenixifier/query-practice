import { relativeDate } from '../helpers/relativeDate';
import useUserData from '../helpers/useUserData';

const Comment = ({ comment, createdBy, createdDate }) => {
  const userQuery = useUserData(createdBy);
  console.log(comment);
  if (userQuery.isLoading)
    return (
      <div className="comment">
        <div>
          <div className="comment-header">Loading...</div>
        </div>
      </div>
    );
  return (
    <div className="comment">
      <img src={userQuery.data.profilePictureUrl} alt="Comment" />
      <div>
        <div className="comment-header">
          <span>{userQuery.data.name}</span> commented{' '}
          <span>{relativeDate(createdDate)}</span>
        </div>
        <div className="comment-body">{comment}</div>
      </div>
    </div>
  );
};

export default Comment;
