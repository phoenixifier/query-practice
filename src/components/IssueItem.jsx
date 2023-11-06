import { GoComment, GoIssueClosed, GoIssueOpened } from 'react-icons/go';
import { Link } from 'react-router-dom';

import { relativeDate } from '../helpers/relativeDate';
import useLabelData from '../helpers/useLabelData';
import useUserData from '../helpers/useUserData';
import Label from './Label';

export default function IssueItem({
  title,
  number,
  assignee,
  commentCount,
  createdBy,
  createdDate,
  labels,
  status,
}) {
  const assigneeUser = useUserData(assignee);
  const createdByUser = useUserData(createdBy);

  return (
    <li>
      <div>
        {status === 'done' || status === 'closed' ? (
          <GoIssueClosed color="red" />
        ) : (
          <GoIssueOpened color="green" />
        )}
      </div>
      <div className="issue-content">
        <span>
          <Link to={`/issue/${number}`}>{title}</Link>
          {labels.map((label) => (
            <Label key={label} label={label} />
          ))}
        </span>
        <small>
          {number} opened {relativeDate(createdDate)}{' '}
          {`by ${createdByUser.isSuccess ? createdByUser.data.name : ''}`}
        </small>
      </div>
      {assignee ? (
        <img
          src={assigneeUser.isSuccess ? assigneeUser.data.profilePictureUrl : ''}
          className="assigned-to"
          alt={`Assigned to ${assigneeUser.isSuccess ? assigneeUser.data.name : 'null'}`}
        />
      ) : null}
      <span className="comment-count">
        {commentCount > 0 ? (
          <>
            <GoComment />
            {commentCount}
          </>
        ) : null}
      </span>
    </li>
  );
}