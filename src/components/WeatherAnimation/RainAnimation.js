import React, { useRef, useEffect, useState } from 'react';
import { animated, useSpring } from '@react-spring/web';

const RainDrop = ({ delay, position, height }) => {
  const rainProps = useSpring({
    from: { transform: `translate(${position-40}%, -100%)`, opacity: 1 },
    to: { transform: `translate(${position - 50}%, ${height - 100}%)`, opacity: 0 },
    loop: true,
    config: { duration: 5000 },
    delay: delay,
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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 20C7.76142 20 10 15.3137 10 10C10 4.68629 7.76142 0 5 0C2.23858 0 0 4.68629 0 10C0 15.3137 2.23858 20 5 20Z" fill="blue" />
      </svg>
    </animated.div>
  );
};

const RainAnimation = () => {
  const numberOfRainDrops = 5;
  const rainDrops = [];
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setHeight(containerRef.current.offsetHeight);
    }
  }, [containerRef]);

  for (let i = 0; i < numberOfRainDrops; i++) {
    const position = (i * 100) / (numberOfRainDrops - 1);
    rainDrops.push(<RainDrop key={i} delay={i * 1000} position={position} height={height} />);
  }

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        width: '100%',
        height: '300px',
        backgroundColor: 'lightgray',
        overflow: 'hidden',
        backgroundColor: '#38B6FX',
      }}
    >
      {rainDrops}
    </div>
  );
};

export default RainAnimation;
