import useLabelData from '../helpers/useLabelData';

export default function LabelList() {
  const queryLabel = useLabelData();
  return (
    <div>
      <h3>Labels</h3>
      {queryLabel.isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {queryLabel.data.map((label) => (
            <li key={label.id}>
              <button className={`${label.color}`}>{label.name}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
