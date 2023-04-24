import React from 'react';
import { animated, useSpring } from '@react-spring/web';

const RainAnimation = () => {
  const rainProps = useSpring({
    from: { transform: 'translate(-100%, 0)' },
    to: { transform: 'translate(100%, 0)' },
    loop: { reverse: true },
    config: { duration: 5000 },
  });

  return (
    <animated.div
      style={{
        ...rainProps,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'url(/path/to/rain-image.png) repeat-x',
      }}
    ></animated.div>
  );
};

export default RainAnimation;
