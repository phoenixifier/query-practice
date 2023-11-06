import { useQuery } from 'react-query';

const useLabelData = () => {
  return useQuery(['labels'], () => fetch('api/labels').then((res) => res.json()));
};

export default useLabelData;
