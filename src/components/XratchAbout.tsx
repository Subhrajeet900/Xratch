export default function XratchAbout() {
  return (
    <section className="about" id="about">
      <div className="about-vis">
        <div className="about-rings-c">
          <div className="ring"></div>
          <div className="ring"></div>
          <div className="ring"></div>
          <div className="ring-c">
            <svg viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
        </div>
        <div className="about-cap">
          <p>
            <strong>Crafted with intent.</strong> Every pixel, every line of code, every interaction considered — because your product deserves nothing less.
          </p>
        </div>
      </div>
      <div>
        <div className="lbl">Who We Are</div>
        <h2 className="h2">
          The studio behind<br />your next <em>great product</em>
        </h2>
        <p className="about-body">
          Xratch is a boutique digital studio. We work with shop owners, startups, and brands who refuse to settle for ordinary — people who understand that how something looks and feels is just as important as what it does.
        </p>
        <div className="pillars">
          <div className="pill">
            <div className="pill-num">I</div>
            <div className="pill-text">
              <h4>Quality over quantity</h4>
              <p>We take on selective projects and give each one our complete focus.</p>
            </div>
          </div>
          <div className="pill">
            <div className="pill-num">II</div>
            <div className="pill-text">
              <h4>You&apos;re involved at every step</h4>
              <p>Regular check-ins, clear milestones, zero surprises.</p>
            </div>
          </div>
          <div className="pill">
            <div className="pill-num">III</div>
            <div className="pill-text">
              <h4>Built to last</h4>
              <p>We build for performance and longevity — never shortcuts.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
