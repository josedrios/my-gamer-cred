import { useRef, useEffect, useState } from 'react';
import titan from '@/assets/images/game_cover3.jpg';
import lbp from '@/assets/images/game_cover4.jpg';
import mgs from '@/assets/images/game_cover5.jpg';
import re from '@/assets/images/game_cover6.jpg';
import { MetricChip } from '@/components/ui/chips';

export default function PosterSpread({ className, metric }) {
  const posters = [titan, lbp, mgs, re];
  const bodyWidth = useRef(null);
  const [width, setWidth] = useState(0);

  // used AI to constantly update list poster spread width
  useEffect(() => {
    const handleResize = () => {
      // 3. Update state only if the ref is connected to the DOM element
      if (bodyWidth.current) {
        setWidth(bodyWidth.current.offsetWidth);
      }
    };

    // 2. Initial measurement when the component mounts
    handleResize();

    // 4. Set up the event listener for window resizing
    window.addEventListener('resize', handleResize);

    // 5. Cleanup function: runs when the component unmounts
    //    or before the next useEffect run. This is crucial
    //    to prevent memory leaks.
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`poster-spread ${className}`} ref={bodyWidth}>
      {posters.map((poster, i) => (
        <img
          src={poster}
          alt=""
          key={i}
          style={{
            left: `${((width - 75) / 3) * i}px`,
            zIndex: 1000 - i,
          }}
        />
      ))}
      {metric ? (
        <MetricChip style={{ zIndex: 1001 }} value={metric} logo={false} />
      ) : (
        ''
      )}
    </div>
  );
}
