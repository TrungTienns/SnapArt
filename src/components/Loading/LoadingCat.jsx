import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import loadingCat from '../../assets/animation/LoadingCat.json';

function LoadingCat({ width = 300, height = 300, onComplete }) {
  const lottieRef = useRef();

  useEffect(() => {
    const anim = lottieRef.current;
    if (anim) {
      const handleComplete = () => {
        onComplete && onComplete();
      };
      anim.addEventListener('complete', handleComplete);

      return () => anim.removeEventListener('complete', handleComplete);
    }
  }, [onComplete]);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw',
      height: '100vh',
      backgroundColor: '#fff'
    }}>
      <Lottie
        lottieRef={lottieRef}
        animationData={loadingCat}
        loop={false} // chạy 1 lần
        style={{ width, height }}
      />
    </div>
  );
}

export default LoadingCat;