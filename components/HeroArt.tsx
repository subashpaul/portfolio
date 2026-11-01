// Decorative illustration: a CI/CD pipeline under an orbit (nod to ISRO). Themed via CSS variables.
export default function HeroArt() {
  return (
    <figure className="hero-art" aria-hidden="true">
      <svg viewBox="0 0 320 190" role="presentation" focusable="false"><defs><pattern id="hd" width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".9" className="hdot"/></pattern></defs><rect className="bg" x=".5" y=".5" width="319" height="189" rx="6"/><rect x="1" y="1" width="318" height="188" rx="6" fill="url(#hd)"/><ellipse className="ak dash" cx="160" cy="66" rx="130" ry="38" transform="rotate(-12 160 66)"/><circle className="node" cx="160" cy="66" r="15"/><ellipse className="ln" cx="160" cy="66" rx="6" ry="15"/><line className="ln" x1="145" y1="66" x2="175" y2="66"/><circle className="ac" cx="252" cy="24" r="4"/><line className="ln flow" x1="56" y1="132" x2="100" y2="132"/><line className="ln flow" x1="128" y1="132" x2="172" y2="132"/><line className="ln flow" x1="200" y1="132" x2="244" y2="132"/><rect className="node" x="28" y="118" width="28" height="28" rx="5"/><rect className="node" x="100" y="118" width="28" height="28" rx="5"/><rect className="node" x="172" y="118" width="28" height="28" rx="5"/><rect className="ac" x="244" y="118" width="28" height="28" rx="5"/><text x="42" y="166">commit</text><text x="114" y="166">build</text><text x="186" y="166">test</text><text x="258" y="166">deploy</text></svg>
    </figure>
  );
}
