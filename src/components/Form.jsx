import React, { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://dev.digital-echoes.binary-group.com/admin/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      const data = await response.json();
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="dsn-form form-box d-flex flex-column p-relative">
        <form
          className="form w-100"
          onSubmit={handleSubmit}
          noValidate
        >
          {submitStatus === 'success' && (
            <div className="messages success">
              Message sent successfully!
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="messages error">
              There was an error submitting your message. Please try again.
            </div>
          )}
          
          <div className="input__wrap controls">
            <div
              className="d-grid"
              style={{
                "--grid-gap": "0px 30px",
                gap: "0px 30px",
              }}>
              <div
                className="form-group"
                style={{
                  opacity: "1",
                  visibility: "inherit",
                  willChange: "auto",
                }}>
                <div className="entry-box">
                  <input
                    id="form_name"
                    name="name"
                    placeholder="Type your name"
                    required
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                {errors.name && (
                  <div className="help-block with-errors">{errors.name}</div>
                )}
              </div>
              <div
                className="form-group"
                style={{
                  opacity: "1",
                  visibility: "inherit",
                  willChange: "auto",
                }}>
                <div className="entry-box">
                  <input
                    id="form_email"
                    name="email"
                    placeholder="Type your Email Address"
                    required
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                {errors.email && (
                  <div className="help-block with-errors">{errors.email}</div>
                )}
              </div>
            </div>
            <div
              className="form-group"
              style={{
                opacity: "1",
                visibility: "inherit",
                willChange: "auto",
              }}>
              <div className="entry-box">
                <textarea
                  className="form-control"
                  id="form_message"
                  name="message"
                  placeholder="Tell us about you and the world"
                  required
                  rows="7"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              {errors.message && (
                <div className="help-block with-errors">{errors.message}</div>
              )}
            </div>
            <div
              className="d-flex w-100"
              style={{
                opacity: "1",
                visibility: "inherit",
                willChange: "auto",
              }}>
              <div
                className="image-zoom move-circle w-100 dsn-parallax-hover"
                style={{
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px, 0px)",
                  translate: "none",
                }}>
                <button
                  type="submit"
                  className="background-theme w-100"
                  disabled={isSubmitting}
                  style={{padding:"20px 0"}}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                <div
                  className="icon-circle"
                  style={{
                    minWidth: "1px",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    translate: "none",
                  }}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}