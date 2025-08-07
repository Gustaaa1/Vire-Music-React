import  { useRef, useEffect, useState } from "react";

const WIDTH = 920;
const HEIGHT = 200;
const NUM_ELLIPSES = 20;
const MIN_RADIUS = 8;
const MAX_RADIUS = 40;
const SPEED = 0.04;

const Linhas = () => {
  const [phase, setPhase] = useState(0);
  const phaseRef = useRef(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    let animationFrame: number;
    const animate = () => {
      phaseRef.current += SPEED;
      setPhase(phaseRef.current);
      animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const ellipses = [];
  for (let i = 0; i < NUM_ELLIPSES; i++) {
    const t = i / (NUM_ELLIPSES - 1);
    const x = 80 + t * (WIDTH - 160);
    const distToCenter = Math.abs(t - 0.5) * 2;
    const baseRadius = MIN_RADIUS + (1 - distToCenter) * (MAX_RADIUS - MIN_RADIUS);

    const amplitude = hoveredIndex === i ? 30 : 10;
    const dynamicRadius = baseRadius + Math.sin(phase + i * 0.4) * amplitude;

    // Ajuste para deixar as elipses mais pontudas para cima
    const rx = dynamicRadius * 0.6;
    const ry = dynamicRadius * 1.6 + Math.abs(Math.sin(phase + i * 0.4)) * 30;

    ellipses.push(
      <g key={i}>
        <ellipse
          cx={x}
          cy={HEIGHT / 2}
          rx={rx}
          ry={ry}
          stroke="#e94e77"
          strokeWidth="2"
          fill="none"
          opacity={0.7}
        />
        <rect
          x={x - 20}
          y={HEIGHT / 2 - 20}
          width={40}
          height={40}
          fill="transparent"
          cursor="pointer"
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
        />
      </g>
    );
  }

  return (
    <div
      style={{
        marginTop: "1660px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0,
      }}
    >
      <svg width={WIDTH} height={HEIGHT} style={{ display: "block" }}>
        {ellipses}
      </svg>
    </div>
  );
};

export default Linhas;