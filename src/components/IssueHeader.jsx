import { GoIssueClosed, GoIssueOpened } from 'react-icons/go';

import { possibleStatus } from '../helpers/defaultData';
import { relativeDate } from '../helpers/relativeDate';
import useUserData from '../helpers/useUserData';

const IssueHeader = ({
  title,
  number,
  status = 'todo',
  createdBy,
  createdDate,
  comments,
}) => {
  const statusObj = possibleStatus.find((pstatus) => pstatus.id === status);
  const createdUser = useUserData(createdBy);
  return (
    <header>
      <h2>
        {title} <span>#{number}</span>
      </h2>
      <div>
        <span className={status === 'done' || status === 'closed' ? 'closed' : 'open'}>
          {status === 'done' || status === 'closed' ? (
            <GoIssueClosed />
          ) : (
            <GoIssueOpened />
          )}
          {statusObj.label}
        </span>
        <span className="created-by">
          {createdUser.isLoading ? '...' : createdUser.data?.name}
        </span>{' '}
        opened this issue {relativeDate(createdDate)} | {comments.length} comments
      </div>
    </header>
  );
};

export default IssueHeader;
