import { useState } from 'react';

export const usePressClock = () => {
  const [pressCloak, setPressCloak] = useState<boolean>(false);

  const onPressClock = (visibility: boolean) => () => {
    setPressCloak(visibility);
  };
  return {
    pressCloak,
    onPressClock,
  };
};

export default usePressClock;
