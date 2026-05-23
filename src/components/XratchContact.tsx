'use client';

import { useState } from 'react';

export default function XratchContact() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    brand: '',
    budget: '',
    message: ''
  });
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([]);

  const needsList = [
    'Website',
    'Mobile App',
    'AI Chatbot',
    'Automation',
    'Logo / Brand',
    'AI Prompts',
    'Documentation'
  ];

  const toggleNeed = (need: string) => {
    setSelectedNeeds(prev =>
      prev.includes(need) ? prev.filter(n => n !== need) : [...prev, need]
    );
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const f = formData.fname.trim();
    const eMail = formData.email.trim();

    if (!f || !eMail) {
      alert('Please enter your name and email.');
      return;
    }

    const payload = {
      Name: `${f} ${formData.lname}`,
      Email: eMail,
      Brand: formData.brand || 'Not specified',
      Needs: selectedNeeds.join(', ') || 'None specified',
      Budget: formData.budget || 'Not specified',
      Message: formData.message || 'No description provided.',
      _subject: `New Project Brief from ${f} ${formData.lname}`,
      _template: 'box'
    };

    try {
      const res = await fetch("https://formsubmit.co/ajax/xratch.admin@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      
      if (res.ok) {
        setIsSuccess(true);
      } else {
        alert('There was a problem sending your brief. Please try again.');
      }
    } catch (err) {
      alert('Network error. Please try again later.');
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-wrap">
        
        {/* Left Info Panel */}
        <div className="contact-left">
          <div className="cl-top">
            <div className="lbl">Get In Touch</div>
            <div className="cl-h2">
              Tell us what<br />you want to <em>build</em>
            </div>
            <div className="cl-sub">
              Whether you have a detailed brief or just a spark of an idea — fill the form and we&apos;ll respond within 24 hours.
            </div>
            <div className="cl-details">
              <div className="cl-det">
                <div className="cl-det-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="cl-det-text">xratch.admin@gmail.com</div>
              </div>
              <div className="cl-det">
                <div className="cl-det-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="cl-det-text">New Delhi, India — Working Worldwide</div>
              </div>
            </div>
            <div className="cl-dec-line"></div>
            <div className="cl-badges">
              <div className="cl-badge">
                <svg viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span>NDA Friendly</span>
              </div>
              <div className="cl-badge">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <span>24hr Response</span>
              </div>
              <div className="cl-badge">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span>5-Star Rated</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="contact-right">
          {!isSuccess ? (
            <div id="formContent">
              <div className="form-heading">Start a Project</div>
              <div className="form-sub">
                The more you share, the better we can help. Every enquiry answered within 24 hours.
              </div>
              <form onSubmit={handleSubmit}>
                <div className="frow2">
                  <div className="fld">
                    <label>First Name</label>
                    <input
                      type="text"
                      placeholder="Arjun"
                      id="fn"
                      name="fname"
                      value={formData.fname}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="fld">
                    <label>Last Name</label>
                    <input
                      type="text"
                      placeholder="Kapoor"
                      id="ln"
                      name="lname"
                      value={formData.lname}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="fld">
                  <label>Email Address</label>
                  <input
                    type="email"
                    placeholder="you@yourbrand.com"
                    id="em"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="fld">
                  <label>Business / Brand Name</label>
                  <input
                    type="text"
                    placeholder="Your shop or company"
                    name="brand"
                    value={formData.brand}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="fld">
                  <label>What do you need?</label>
                  <div className="fcb-group">
                    {needsList.map(need => {
                      const isSelected = selectedNeeds.includes(need);
                      return (
                        <div
                          key={need}
                          className={`fcb ${isSelected ? 'on' : ''}`}
                          onClick={() => toggleNeed(need)}
                        >
                          {need}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="fld">
                  <label>Approximate Budget</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                  >
                    <option value="">Select a range…</option>
                    <option>Under $1,000</option>
                    <option>$1,000 – $3,000</option>
                    <option>$3,000 – $10,000</option>
                    <option>$10,000+</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div className="fld">
                  <label>Tell us about your project</label>
                  <textarea
                    placeholder="Describe what you want to build — goals, customers, any inspiration…"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <button type="submit" className="form-btn">
                  Send My Brief →
                </button>
              </form>
            </div>
          ) : (
            <div className="form-ok" id="formOk" style={{ display: 'block' }}>
              <svg viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <h3>Brief received.</h3>
              <p>
                We&apos;ll be in touch within 24 hours.
                <br />
                Already excited about this one.
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
