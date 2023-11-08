import React from 'react';
import { GoComment, GoIssueClosed, GoIssueOpened } from 'react-icons/go';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import IssueItem from './IssueItem';

export default function IssuesList({ labels, status }) {
  const queryIssues = useQuery(['issues', { labels, status }], () => {
    const statusStr = status ? `&status=${status}` : '';
    const labelStr = labels.map((label) => `labels[]=${label}`).join('&');
    return fetch(`/api/issues?${labelStr}${statusStr}`).then((res) => res.json());
  });
  const [search, setSearch] = React.useState('');
  const searchQuery = useQuery(
    ['issues', 'search', search],
    () => fetch(`/api/search/issues?q=${search}`).then((res) => res.json()),
    { enabled: search.length > 0 },
  );

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSearch(e.target.elements.search.value);
        }}
      >
        <label htmlFor="search">Search Issues</label>
        <input
          onChange={(e) => {
            if (e.target.value.length === 0) {
              setSearch('');
            }
          }}
          type="search"
          name="seatch"
          id="search"
          placeholder="Search"
        ></input>
      </form>
      <h2>Issues List</h2>
      {queryIssues.isLoading ? (
        <p>Loading...</p>
      ) : searchQuery.fetchStatus === 'idle' && searchQuery.isLoading === true ? (
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
      ) : (
        <>
          <h2>Search Results</h2>
          {searchQuery.isLoading ? (
            <p>Loading results...</p>
          ) : (
            <>
              <p>{searchQuery.data.count} Results</p>
              <ul className="issues-list">
                {searchQuery.data.items.map((issue) => (
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
            </>
          )}
        </>
      )}
      <ul>
        <li>
          <Link to="/issue/1">Issue 1</Link>
        </li>
      </ul>
    </div>
  );
}
