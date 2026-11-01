// Original abstract illustrations (not screenshots), themed via CSS variables.
const cols = [5, 3, 2, 3, 5];
const xs = [28, 60, 96, 132, 164];
const pos = (c: number, i: number) => ({ x: xs[c], y: 60 + (i - (cols[c] - 1) / 2) * 18 });

function Autoencoder() {
  const edges: React.ReactNode[] = [];
  for (let c = 0; c < cols.length - 1; c++)
    for (let i = 0; i < cols[c]; i++)
      for (let j = 0; j < cols[c + 1]; j++) {
        const a = pos(c, i), b = pos(c + 1, j);
        edges.push(<line key={`${c}-${i}-${j}`} className="ln faint" x1={a.x} y1={a.y} x2={b.x} y2={b.y} />);
      }
  return (
    <>
      {edges}
      {cols.map((n, c) => Array.from({ length: n }, (_, i) => {
        const p = pos(c, i), hot = c === 0 && i === 0;
        return <circle key={`${c}-${i}`} className={hot ? "ac" : "node"} cx={p.x} cy={p.y} r={hot ? 4.5 : 3.5} />;
      }))}
    </>
  );
}

function Bank() {
  return (
    <>
      <rect className="node" x="18" y="28" width="92" height="58" rx="7" />
      <rect className="ac" x="28" y="38" width="16" height="11" rx="2" />
      <line className="ln" x1="28" y1="64" x2="86" y2="64" />
      <line className="ln faint" x1="28" y1="74" x2="62" y2="74" />
      {[22, 38, 30].map((h, i) => <rect key={i} className={i === 1 ? "ac" : "node"} x={124 + i * 20} y={86 - h} width="12" height={h} rx="2" />)}
    </>
  );
}

function Geo() {
  return (
    <>
      {[48, 96, 144].map((x) => <line key={x} className="ln faint" x1={x} y1="12" x2={x} y2="108" />)}
      {[40, 70, 96].map((y) => <line key={y} className="ln faint" x1="12" y1={y} x2="180" y2={y} />)}
      {[16, 30, 46].map((r) => <circle key={r} className="ak" cx="96" cy="66" r={r} />)}
      <path className="ac" d="M96 38c-7 0-12 5-12 12 0 9 12 22 12 22s12-13 12-22c0-7-5-12-12-12z" />
      <circle className="dot" cx="96" cy="50" r="4" />
    </>
  );
}

function Steps() {
  return (
    <>
      <line className="ln" x1="40" y1="26" x2="152" y2="26" />
      {[40, 96, 152].map((x, i) => <circle key={x} className={i === 0 ? "ac" : "node"} cx={x} cy="26" r="7" />)}
      <rect className="node" x="28" y="48" width="136" height="12" rx="3" />
      <rect className="node" x="28" y="68" width="136" height="12" rx="3" />
      <rect className="ac" x="116" y="90" width="48" height="14" rx="3" />
    </>
  );
}

const art: Record<string, () => React.ReactElement> = {
  "Anomaly Detection in Cognitive Radio Networks": Autoencoder,
  BankUI: Bank,
  "Geo-Location App": Geo,
  "Multi-Step Form": Steps,
};

export default function ProjectArt({ name }: { name: string }) {
  const Art = art[name];
  if (!Art) return null;
  return (
    <figure className="art" aria-hidden="true">
      <svg viewBox="0 0 192 120" role="presentation" focusable="false">
        <rect className="bg" x="0.5" y="0.5" width="191" height="119" rx="6" />
        <Art />
      </svg>
    </figure>
  );
}
