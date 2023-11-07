import { useParams } from 'react-router-dom';

import useIssueComments from '../helpers/useIssueComments';
import useIssueData from '../helpers/useIssueData';
import Comment from './Comment';
import IssueHeader from './IssueHeader';

export default function IssueDetails() {
  const { number } = useParams();
  const issueQuery = useIssueData(number);
  const issueComments = useIssueComments(number);

  return (
    <div className="issue-details">
      {issueQuery.isError ? (
        <p>Error: {issueQuery.error.message}</p>
      ) : issueQuery.isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <IssueHeader {...issueQuery.data} />
          <main>
            <section>
              {issueComments.isLoading ? (
                <p>Loading...</p>
              ) : (
                issueComments.data?.map((comment) => (
                  <Comment key={comment.id} {...comment} />
                ))
              )}
            </section>
            <aside />
          </main>
        </>
      )}
    </div>
  );
}
