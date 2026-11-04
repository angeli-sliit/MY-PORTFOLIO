import React from 'react';

const SCATTER_POINTS = [
  [60, 170], [84, 152], [104, 164], [128, 134], [150, 146], [170, 118], [186, 130], [208, 100],
  [226, 114], [246, 84], [268, 92], [288, 62], [312, 72], [336, 40], [352, 54]
];

const ROUTE_POINTS = [[52, 164], [120, 120], [110, 60], [210, 84], [262, 40], [300, 110]];

const ATTENDANCE_ROWS = [[118, 300], [126, 292], [112, 306], [122, 298], [116, 302]];

const REVENUE_BARS = [[40, 60], [90, 84], [140, 72], [190, 104], [240, 92], [290, 128], [340, 116]];

const BOOK_COLUMNS = [40, 106, 172, 238, 304];

const EMBEDDING_POINTS = [[186, 92], [204, 82], [224, 96], [192, 120], [230, 124], [204, 136]];

const EMOTION_BARS = [220, 60, 36, 130, 84, 44, 28];

// A small drawing of each project's method. Decorative, so the shapes do not plot real data.
const visuals = {
  signal: (
    <>
      <line x1="0" y1="150" x2="400" y2="150" stroke="#6E6078" />
      <polyline
        fill="none"
        stroke="var(--accent)"
        strokeWidth="2.5"
        points="0,92 30,86 60,96 90,84 120,92 150,82 180,94 210,76 240,104 262,58 284,122 306,46 328,140 350,170 375,176 400,174"
      />
      <circle cx="262" cy="58" r="6" fill="var(--accent)" />
    </>
  ),
  star: (
    <>
      <g stroke="#6E6078" strokeWidth="1.5">
        <line x1="200" y1="104" x2="70" y2="46" />
        <line x1="200" y1="104" x2="330" y2="46" />
        <line x1="200" y1="104" x2="52" y2="150" />
        <line x1="200" y1="104" x2="348" y2="150" />
        <line x1="200" y1="104" x2="200" y2="180" />
      </g>
      <rect x="160" y="78" width="80" height="52" rx="4" fill="var(--accent)" />
      <g fill="#1A0E22" stroke="#CFC6D6" strokeWidth="1.5">
        <rect x="44" y="28" width="52" height="34" rx="3" />
        <rect x="304" y="28" width="52" height="34" rx="3" />
        <rect x="26" y="134" width="52" height="34" rx="3" />
        <rect x="322" y="134" width="52" height="34" rx="3" />
        <rect x="174" y="166" width="52" height="30" rx="3" />
      </g>
    </>
  ),
  forecast: (
    <>
      <polygon fill="var(--accent-alt)" opacity="0.22" points="240,110 400,40 400,170" />
      <polyline fill="none" stroke="#CFC6D6" strokeWidth="2" points="0,140 40,128 80,136 120,108 160,118 200,96 240,110" />
      <polyline fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeDasharray="7 6" points="240,110 280,100 320,108 360,92 400,100" />
    </>
  ),
  scatter: (
    <>
      <line x1="30" y1="190" x2="370" y2="18" stroke="#6E6078" strokeWidth="1.5" strokeDasharray="6 6" />
      <g fill="var(--accent)">
        {SCATTER_POINTS.map(([x, y]) => <circle cx={x} cy={y} r="4" key={`${x}-${y}`} />)}
      </g>
    </>
  ),
  attendance: (
    <>
      {ATTENDANCE_ROWS.map(([checkIn, checkOut], index) => {
        const y = 52 + index * 28;
        return (
          <g key={y}>
            <line x1="40" y1={y} x2="360" y2={y} stroke="#3A2A46" />
            <circle cx={checkIn} cy={y} r="5" fill="#CFC6D6" />
            <circle cx={checkOut} cy={y} r="5" fill="#CFC6D6" />
          </g>
        );
      })}
      <circle cx="208" cy="108" r="11" fill="none" stroke="var(--accent)" strokeWidth="2" />
      <circle cx="208" cy="108" r="5" fill="var(--accent)" />
    </>
  ),
  revenue: (
    <>
      <g fill="#3A2A46">
        {REVENUE_BARS.map(([x, height]) => <rect x={x} y={180 - height} width="30" height={height} rx="2" key={x} />)}
      </g>
      <polyline fill="none" stroke="var(--accent)" strokeWidth="2.5" points="55,132 105,112 155,120 205,92 255,102 305,70 355,82" />
      <circle cx="355" cy="82" r="6" fill="var(--accent)" />
    </>
  ),
  library: (
    <g fill="#2A1C36" stroke="#6E6078" strokeWidth="1.5">
      {BOOK_COLUMNS.flatMap(x => [56, 126].map(y => <rect x={x} y={y} width="52" height="60" rx="3" key={`${x}-${y}`} />))}
      <rect x="172" y="126" width="52" height="60" rx="3" fill="var(--accent)" stroke="none" />
    </g>
  ),
  rag: (
    <>
      <g fill="#1A0E22" stroke="#CFC6D6" strokeWidth="1.5">
        <rect x="34" y="62" width="56" height="72" rx="4" />
        <rect x="46" y="74" width="56" height="72" rx="4" />
      </g>
      <g stroke="#6E6078" strokeWidth="1.5">
        <line x1="108" y1="108" x2="172" y2="108" />
        <line x1="242" y1="108" x2="296" y2="108" />
      </g>
      <g fill="#CFC6D6">
        {EMBEDDING_POINTS.map(([x, y]) => <circle cx={x} cy={y} r="4" key={`${x}-${y}`} />)}
      </g>
      <circle cx="212" cy="112" r="7" fill="var(--accent)" />
      <rect x="300" y="78" width="72" height="60" rx="8" fill="var(--accent)" />
    </>
  ),
  emotion: (
    <g fill="#3A2A46">
      {EMOTION_BARS.map((width, index) => (
        <rect x="40" y={34 + index * 24} width={width} height="14" rx="2" fill={index === 0 ? 'var(--accent)' : undefined} key={index} />
      ))}
    </g>
  ),
  report: (
    <>
      <rect x="36" y="28" width="84" height="40" rx="4" fill="var(--accent)" />
      <rect x="132" y="28" width="84" height="40" rx="4" fill="#2A1C36" stroke="#6E6078" />
      <polyline fill="none" stroke="#CFC6D6" strokeWidth="2" points="36,178 76,156 116,164 156,130 196,142 236,104" />
      <circle cx="316" cy="132" r="44" fill="none" stroke="#3A2A46" strokeWidth="18" />
      <circle cx="316" cy="132" r="44" fill="none" stroke="var(--accent)" strokeWidth="18" strokeDasharray="166 276" transform="rotate(-90 316 132)" />
    </>
  ),
  route: (
    <>
      <polyline
        fill="none"
        stroke="var(--accent)"
        strokeWidth="2.5"
        points={[...ROUTE_POINTS, [356, 92]].map(point => point.join(',')).join(' ')}
      />
      <g fill="#1A0E22" stroke="#F4EEF7" strokeWidth="2">
        {ROUTE_POINTS.map(([x, y]) => <circle cx={x} cy={y} r="8" key={`${x}-${y}`} />)}
      </g>
      <circle cx="356" cy="92" r="10" fill="var(--accent)" />
    </>
  )
};

const ProjectVisual = ({ type }) => (
  <svg viewBox="0 0 400 208" aria-hidden="true">
    {visuals[type]}
  </svg>
);

export default ProjectVisual;
