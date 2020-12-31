import { useEffect } from 'react';


function useOnMount(mountingFunction) {
  return useEffect(mountingFunction, []);
}

export default useOnMount;