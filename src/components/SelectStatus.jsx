const possibleStatus = [
  { id: 'backlog', label: 'Backlog' },
  { id: 'todo', label: 'To-Do' },
  { id: 'inProgress', label: 'In Progress' },
  { id: 'done', label: 'Done' },
  { id: 'cancelled', label: 'Cancelled' },
];
const SelectStatus = ({ value, onChange }) => {
  return (
    <select value={value} onChange={onChange} className="status-select">
      <option value="" disabled={true}>
        Select a status filter
      </option>
      {possibleStatus.map((status) => (
        <option value={status.id} key={status.id}>
          {status.label}
        </option>
      ))}
    </select>
  );
};

export default SelectStatus;
