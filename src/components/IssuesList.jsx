import { GoComment, GoIssueClosed, GoIssueOpened } from 'react-icons/go';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import IssueItem from './IssueItem';

export default function IssuesList() {
  const queryIssues = useQuery(['issues'], () =>
    fetch('/api/issues').then((res) => res.json()),
  );
  console.log(queryIssues.data);

  return (
    <div>
      <h1>Issues List</h1>
      {queryIssues.isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className="issues-list">
          {queryIssues.data.map((issue) => (
            <IssueItem
              key={issue.id}
              title={issue.title}
              number={issue.number}
              assignee={issue.assignee}
              commentCount={issue.comments.length}
              createdBy={issue.createdBy}
              createdDate={issue.createdDate}
              labels={issue.labels}
              status={issue.status}
            />
          ))}
        </ul>
      )}
      <ul>
        <li>
          <Link to="/issue/1">Issue 1</Link>
        </li>
      </ul>
    </div>
  );
}
