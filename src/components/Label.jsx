import useLabelData from '../helpers/useLabelData';

const Label = ({ label }) => {
  const labels = useLabelData();
  if (labels.isLoading) return null;
  const labelObj = labels.data.find((queryLabel) => queryLabel.id === label);
  if (!labelObj) return null;

  return <span className={`label ${labelObj.color}`}>{labelObj.name}</span>;
};
export default Label;
