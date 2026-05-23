'use client';

export default function XratchHero() {

  return (
    <section className="hero" id="home">
      <div className="hero-bg"></div>
      <div className="hero-vline" style={{ left: '50%' }}></div>
      <div className="hero-vline" style={{ left: '65%' }}></div>
      
      <div className="hero-left">
        <div className="eyebrow">
          <div className="eyebrow-dot"></div>
          <div className="eyebrow-tag">Digital Craft Studio</div>
        </div>
        <h1>
          We Build Things<br />
          That <em>Work</em> &amp;<br />
          Look <em>Exceptional</em>
        </h1>
        <p className="hero-sub">
          Websites, apps, chatbots, automations, logos — everything your brand needs, built with precision and soul.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn-gold text-center block" style={{ textDecoration: 'none' }}>
            Start Your Project
          </a>
          <a href="#services" className="btn-ghost text-center block" style={{ textDecoration: 'none' }}>
            Explore Services
          </a>
        </div>
        <div className="hero-stats">
          <div>
            <div className="stat-num">120<span>+</span></div>
            <div className="stat-label">Projects Delivered</div>
          </div>
          <div>
            <div className="stat-num">98<span>%</span></div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
          <div>
            <div className="stat-num">6<span>yrs</span></div>
            <div className="stat-label">In the Craft</div>
          </div>
        </div>
      </div>

      <div className="hero-right">
        {/* Phone 1 */}
        <div className="phone-outer t1">
          <div className="sb sl"></div>
          <div className="sb vu"></div>
          <div className="sb vd"></div>
          <div className="sb pw"></div>
          <div className="phone-frame lg">
            <div className="pscr">
              <div className="pscr-b"></div>
              <div className="di"></div>
              <div className="pst">
                <div className="pt">9:41</div>
                <div className="pi">
                  <div className="sbar">
                    <b></b>
                    <b></b>
                    <b></b>
                    <b></b>
                  </div>
                  <div className="pwifi">▲</div>
                  <div className="pbatt">
                    <div className="pbf"></div>
                  </div>
                </div>
              </div>
              <div className="pglow"></div>
              <div className="plc">
                <div className="plm">
                  <span className="plx">X</span>
                </div>
                <div className="pln">Xr<span>a</span>tch</div>
                <div className="pdiv"></div>
                <div className="ptag">
                  Digital Craft Studio
                  <strong>Build beautifully. Launch boldly.</strong>
                </div>
              </div>
              <div className="phome"></div>
            </div>
          </div>
        </div>

        {/* Phone 2 */}
        <div className="phone-outer t2">
          <div className="sb sl"></div>
          <div className="sb vu"></div>
          <div className="sb vd"></div>
          <div className="sb pw"></div>
          <div className="phone-frame">
            <div className="pscr">
              <div className="pscr-b"></div>
              <div className="di"></div>
              <div className="pst">
                <div className="pt">9:41</div>
                <div className="pi">
                  <div className="sbar">
                    <b></b>
                    <b></b>
                    <b></b>
                    <b></b>
                  </div>
                  <div className="pwifi">▲</div>
                  <div className="pbatt">
                    <div className="pbf"></div>
                  </div>
                </div>
              </div>
              <div className="pglow"></div>
              <div className="pqc">
                <div className="pqm">&quot;</div>
                <div className="pqt">
                  Great design is not just what it looks like — it&apos;s how it works for the people who need it most.
                </div>
                <div className="pql"></div>
                <div className="pqa">Xratch Studio</div>
                <div className="pqr">Our Design Philosophy</div>
              </div>
              <div className="phome"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

