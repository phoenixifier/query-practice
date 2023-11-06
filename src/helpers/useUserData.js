import { useQuery } from 'react-query';

const useUserData = (userId) => {
  return useQuery(['users', userId], () =>
    fetch(`/api/users/${userId}`).then((res) => res.json()),
  );
};

export default useUserData;
