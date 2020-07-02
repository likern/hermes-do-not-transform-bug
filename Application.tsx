import 'styled-components/macro';

import React from 'react';
import { Svg, Circle } from 'react-native-svg';

const SvgCircle = () => {
  return (
    <Svg
      width={8}
      height={8}
      viewBox='0 0 8 8'
      fill='none'
      style={[{ marginRight: 0 }]}
    >
      <Circle cx={4} cy={4} r={4} fill={'#E0E6EB'} />
    </Svg>
  );
};

export const Application = () => {
  return <SvgCircle />;
};
