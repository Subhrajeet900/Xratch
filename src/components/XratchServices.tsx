'use client';

import { useState } from 'react';

interface ChatMessage {
  id: number;
  sender: 'bot' | 'usr';
  text: React.ReactNode;
}

interface Suggestion {
  q: string;
  a: React.ReactNode;
}

export default function XratchServices() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 1, sender: 'bot', text: <span>Hi! I&apos;m your <strong>Xratch AI assistant</strong>. How can I help your customers today?</span> },
    { id: 2, sender: 'usr', text: <span>What are your store hours?</span> },
    { id: 3, sender: 'bot', text: <span>We&apos;re open <strong>Mon–Sat, 10am–8pm</strong>. Need directions or want to book an appointment?</span> }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([
    { q: 'Pricing?', a: <span>We offer fixed custom project-based pricing starting from <strong>$1,000</strong>. Simple and transparent.</span> },
    { q: 'Timelines?', a: <span>Most websites take <strong>2–4 weeks</strong>, while custom web applications or mobile apps take <strong>6–8 weeks</strong>.</span> },
    { q: 'Custom work?', a: <span>Yes! We build fully custom dashboards, workflow automations, and native iOS &amp; Android apps.</span> }
  ]);

  const handleSuggestionClick = (sug: Suggestion) => {
    if (isTyping) return;

    // Remove the selected suggestion to keep suggestions dynamic
    setSuggestions(prev => prev.filter(item => item.q !== sug.q));

    // Append user message
    setMessages(prev => [...prev, { id: Date.now(), sender: 'usr', text: sug.q }]);

    // Trigger AI typing simulation
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { id: Date.now() + 1, sender: 'bot', text: sug.a }]);
    }, 1200);
  };

  return (
    <section className="services" id="services">
      <div className="svc-intro">
        <div>
          <div className="lbl">What We Do</div>
          <h2 className="h2">Crafted services for<br />every stage of your <em>brand</em></h2>
        </div>
        <p>From your first logo to a full product launch — we cover every digital touchpoint that makes a brand feel truly complete.</p>
      </div>

      <div className="bento">

        {/* Card 1: Website Design & Dev (span4) */}
        <div className="bcard bc1 span4">
          <div className="bc1-top">
            <div className="browser-bar">
              <div className="bdot" style={{ background: '#FF5F57' }}></div>
              <div className="bdot" style={{ background: '#FEBC2E' }}></div>
              <div className="bdot" style={{ background: '#28C840' }}></div>
              <div className="burl"><div className="burl-text">xratch.com/your-store</div></div>
            </div>
            <div className="browser-body">
              <div className="browser-hero-block">
                <div className="bh-title"></div>
                <div className="bh-sub"></div>
                <div className="bh-sub2"></div>
                <div className="bh-btn"><span className="bh-btn-t">Shop Now</span></div>
              </div>
              <div className="browser-cards">
                <div className="mini-card"><div className="mc-img"></div><div className="mc-line"></div><div className="mc-line2"></div></div>
                <div className="mini-card"><div className="mc-img"></div><div className="mc-line"></div><div className="mc-line2"></div></div>
                <div className="mini-card"><div className="mc-img"></div><div className="mc-line"></div><div className="mc-line2"></div></div>
              </div>
            </div>
          </div>
          <div className="bc1-bottom">
            <div className="svc-label">01 — Website</div>
            <div className="svc-title">Website Design &amp; Dev</div>
            <div className="svc-desc">Beautiful, fast, conversion-focused websites — from portfolios to full e-commerce stores that actually sell.</div>
          </div>
        </div>

        {/* Card 2: Mobile App (span2) */}
        <div className="bcard bc2 span2">
          <div className="bc2-top">
            <div className="mini-phone">
              <div className="mp-screen">
                <div className="mp-di"></div>
                <div className="mp-content">
                  <div className="mp-nav"></div>
                  <div className="mp-card-big"></div>
                  <div className="mp-row"><div className="mp-sm"></div><div className="mp-sm"></div><div className="mp-sm2"></div></div>
                  <div className="mp-line"></div>
                  <div className="mp-dots"><div className="mp-dot a"></div><div className="mp-dot"></div><div className="mp-dot"></div></div>
                </div>
              </div>
            </div>
          </div>
          <div className="bc2-bottom">
            <div className="svc-label">02 — Apps</div>
            <div className="svc-title">Mobile Applications</div>
            <div className="svc-desc">iOS &amp; Android apps that feel native, fast, and delightful.</div>
          </div>
        </div>

        {/* Card 3: Chatbot (span3) */}
        <div className="bcard bc3 span3">
          <div className="bc3-top">
            <div className="chat-win">
              {messages.map(msg => (
                <div key={msg.id} className={`chat-row ${msg.sender === 'usr' ? 'right' : ''}`}>
                  <div className={`chat-av ${msg.sender === 'bot' ? 'bot' : 'usr'}`}>
                    {msg.sender === 'bot' ? 'AI' : 'U'}
                  </div>
                  <div className={`bubble ${msg.sender === 'bot' ? 'bot' : 'usr'}`}>
                    <div className="bubble-text">{msg.text}</div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="chat-row">
                  <div className="chat-av bot">AI</div>
                  <div className="typing">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              )}
            </div>

            {/* Suggestions buttons */}
            {suggestions.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-3 justify-center">
                {suggestions.map(sug => (
                  <button
                    key={sug.q}
                    onClick={() => handleSuggestionClick(sug)}
                    className="text-[9px] font-semibold tracking-wider uppercase border border-[rgba(196,169,106,0.3)] bg-transparent hover:bg-[rgba(196,169,106,0.1)] hover:border-var(--gold) text-var(--gold) px-2 py-1 rounded cursor-pointer transition-all duration-200"
                  >
                    {sug.q}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="bc3-bottom">
            <div className="svc-label">03 — AI</div>
            <div className="svc-title">AI Chatbots</div>
            <div className="svc-desc">Smart bots that handle support, leads &amp; FAQs 24/7 on autopilot.</div>
          </div>
        </div>

        {/* Card 4: Automation (span3) */}
        <div className="bcard bc4 span3">
          <div className="bc4-top">
            <div className="flow-wrap">
              <div className="flow-row">
                <div className="flow-node fn-trigger"><div className="fn-icon">⚡</div><div className="fn-label">Trigger</div><div className="fn-sub">New Order</div></div>
                <div className="flow-arrow">→</div>
                <div className="flow-node fn-action"><div className="fn-icon">📧</div><div className="fn-label">Email</div><div className="fn-sub">Customer</div></div>
                <div className="flow-arrow">→</div>
                <div className="flow-node fn-action"><div className="fn-icon">📦</div><div className="fn-label">Update</div><div className="fn-sub">Inventory</div></div>
              </div>
              <div className="flow-down">↓</div>
              <div className="flow-split">
                <div className="flow-node fn-action" style={{ flex: 1 }}><div className="fn-icon">📊</div><div className="fn-label">Dashboard</div><div className="fn-sub">Update</div></div>
                <div className="flow-arrow">·</div>
                <div className="flow-node fn-end" style={{ flex: 1 }}><div className="fn-icon">✅</div><div className="fn-label">Done</div><div className="fn-sub">Fulfilled</div></div>
              </div>
            </div>
          </div>
          <div className="bc4-bottom">
            <div className="svc-label">04 — Automation</div>
            <div className="svc-title">Automation Tools</div>
            <div className="svc-desc">Custom workflows that eliminate repetitive work — saving hours every single day.</div>
          </div>
        </div>

        {/* Card 5: Logo (span2) */}
        <div className="bcard bc5 span2">
          <div className="bc5-top">
            <div className="logo-canvas">
              <div className="logo-sample">
                <div className="logo-ring-wrap">
                  <div className="logo-ring-outer"></div>
                  <div className="logo-ring-inner"></div>
                  <div className="logo-hex">X</div>
                </div>
                <div className="logo-wordmark">Xratch</div>
                <div className="color-swatches">
                  <div className="sw" style={{ background: '#C4A96A' }}></div>
                  <div className="sw" style={{ background: '#2E2B27' }}></div>
                  <div className="sw" style={{ background: '#D8D3CC' }}></div>
                  <div className="sw" style={{ background: '#0F0E0C' }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="bc5-bottom">
            <div className="svc-label">05 — Branding</div>
            <div className="svc-title">Logo &amp; Brand Identity</div>
            <div className="svc-desc">Logos, palettes, type — a visual identity impossible to ignore.</div>
          </div>
        </div>

        {/* Card 6: AI Prompts (span4) */}
        <div className="bcard bc6 span4">
          <div className="bc6-top">
            <div className="prompt-panel">
              <div className="prompt-header">Prompt Input</div>
              <div className="prompt-line gold full"></div>
              <div className="prompt-line med"></div>
              <div className="prompt-line full"></div>
              <div className="prompt-line short"></div>
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '4px' }}>
                <div className="prompt-line" style={{ width: '40%', background: 'rgba(196,169,106,0.15)' }}></div>
                <div className="prompt-cursor"></div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', color: 'rgba(196,169,106,0.3)', fontSize: '20px', padding: '0 8px' }}>→</div>
            <div className="output-panel">
              <div className="prompt-header" style={{ color: 'rgba(255,255,255,0.25)' }}>AI Output</div>
              <div className="out-chip">On-Brand ✓</div>
              <div className="out-line full" style={{ marginTop: '8px' }}></div>
              <div className="out-line med"></div>
              <div className="out-line full"></div>
              <div className="out-line short"></div>
            </div>
          </div>
          <div className="bc6-bottom">
            <div className="svc-label">06 — AI Prompts</div>
            <div className="svc-title">AI Prompt Design</div>
            <div className="svc-desc">Expert-engineered prompts that make your AI tools smarter, faster, and perfectly on-brand — every time.</div>
          </div>
        </div>

        {/* Card 7: Project Documentation (span6) */}
        <div className="bcard bc7 span6">
          <div className="bc7-top">
            <div className="doc-panel">
              <div className="doc-file" style={{ transform: 'rotate(-4deg) translateY(10px)' }}>
                <div className="doc-line gold"></div>
                <div className="doc-line" style={{ width: '100%' }}></div>
                <div className="doc-line" style={{ width: '85%' }}></div>
                <div className="doc-line" style={{ width: '60%' }}></div>
              </div>
              <div className="doc-file" style={{ zIndex: 2, transform: 'translateY(-5px)' }}>
                <div className="doc-line gold"></div>
                <div className="doc-line" style={{ width: '100%' }}></div>
                <div className="doc-line" style={{ width: '90%' }}></div>
                <div className="doc-line" style={{ width: '75%' }}></div>
                <div className="doc-line" style={{ width: '40%' }}></div>
              </div>
              <div className="doc-file" style={{ transform: 'rotate(4deg) translateY(10px)' }}>
                <div className="doc-line gold"></div>
                <div className="doc-line" style={{ width: '100%' }}></div>
                <div className="doc-line" style={{ width: '80%' }}></div>
                <div className="doc-line" style={{ width: '95%' }}></div>
              </div>
            </div>
          </div>
          <div className="bc7-bottom">
            <div className="svc-label">07 — Documentation</div>
            <div className="svc-title">Project Documentation</div>
            <div className="svc-desc">Comprehensive documentation papers, structured lists, and technical guides tailored for any particular subject or complex project.</div>
          </div>
        </div>

      </div>
    </section>
  );
}

