import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Calendar, 
  Clock, 
  Copy, 
  Check, 
  Send, 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';

interface ContactSectionProps {
  onCopyEmail: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onCopyEmail }) => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState<string>('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'contract',
    timeline: 'immediate',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'America/Los_Angeles',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = () => {
    onCopyEmail();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const validateForm = () => {
    const errors: { name?: string; email?: string; message?: string } = {};
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    // Name validation
    if (!trimmedName) {
      errors.name = 'Full name is required.';
    } else if (trimmedName.length < 2) {
      errors.name = 'Name must be at least 2 characters.';
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail) {
      errors.email = 'Work email address is required.';
    } else if (!emailRegex.test(trimmedEmail)) {
      errors.email = 'Please enter a valid email address (e.g. name@company.com).';
    }

    // Message validation
    if (!trimmedMessage) {
      errors.message = 'Please provide details about your project or scope.';
    } else if (trimmedMessage.length < 10) {
      errors.message = 'Message must be at least 10 characters long.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    // Simulate instantaneous, reliable network transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormErrors({});
    }, 400);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      inquiryType: 'contract',
      timeline: 'immediate',
      message: ''
    });
    setFormErrors({});
    setFormSubmitted(false);
  };

  const bookingSlots = [
    { day: 'Tue', time: '10:00 AM PST' },
    { day: 'Tue', time: '02:30 PM PST' },
    { day: 'Wed', time: '11:00 AM PST' },
    { day: 'Thu', time: '03:00 PM PST' }
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-slate-800/80">
      {/* Header */}
      <div className="mb-12">
        <div className="text-indigo-400 text-xs font-mono font-medium mb-2">
          // CONVERSION & INITIATION
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
          Let’s Build Something Remarkable
        </h2>
        <p className="mt-3 text-slate-400 text-base max-w-xl">
          Currently evaluating high-impact engineering contracts, staff roles, and advisory engagements for Q3/Q4.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Instant Contact, Calendar Booking & Timezone */}
        <div className="lg:col-span-5 space-y-6">
          {/* Direct Email Card */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">Direct Inquiries</span>
              <span className="text-emerald-400 text-xs font-mono flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Replies within 4h
              </span>
            </div>

            <div>
              <div className="text-lg sm:text-xl font-bold font-mono text-slate-100">
                alex@rivera-engineering.dev
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Preferred for high-urgency outreach and technical recruiter intros.
              </p>
            </div>

            <div className="pt-1 flex gap-2">
              <button
                id="contact-copy-email-btn"
                onClick={handleCopy}
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-all shadow-md active:translate-y-px"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-white" />
                    <span>Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Direct Email</span>
                  </>
                )}
              </button>

              <a
                href="mailto:alex@rivera-engineering.dev"
                className="inline-flex items-center justify-center p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs transition-colors"
                title="Open Mail Client"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Intro Call Booking Sandbox */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-indigo-400">
                <Calendar className="w-4 h-4" />
                <span>15-Minute Intro Video Call</span>
              </div>
              <span className="text-xs text-slate-400 font-mono">No Sales Fluff</span>
            </div>

            <p className="text-xs text-slate-300">
              Select a preliminary time slot to discuss technical scope, team fit, or system architecture:
            </p>

            <div className="grid grid-cols-2 gap-2">
              {bookingSlots.map((slot, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedSlot(`${slot.day} ${slot.time}`)}
                  className={`p-2.5 rounded-lg border text-xs font-mono text-left transition-all ${
                    selectedSlot === `${slot.day} ${slot.time}`
                      ? 'bg-indigo-600 text-white border-indigo-400 shadow-sm'
                      : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div className="font-semibold">{slot.day}</div>
                  <div className="text-[11px] opacity-80">{slot.time}</div>
                </button>
              ))}
            </div>

            {selectedSlot && (
              <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 text-xs flex items-center justify-between">
                <span>Selected: {selectedSlot}</span>
                <span className="text-[10px] font-mono">Ready to confirm</span>
              </div>
            )}
          </div>

          {/* Timezone & Location Status */}
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-indigo-400" />
              <span>San Francisco (PST): {currentTime || '09:30 AM'}</span>
            </span>
            <span className="text-slate-300">Remote • Worldwide</span>
          </div>
        </div>

        {/* Right Column: High-Converting Project Brief Form */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-xl">
            <h3 className="text-xl font-bold text-slate-100 mb-1">
              Send Direct Message
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Fill out this quick briefing form to receive a structured reply within 4 hours.
            </p>

            {formSubmitted ? (
              <div className="py-12 px-6 text-center space-y-4 rounded-xl bg-slate-950/60 border border-emerald-500/30">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-100">
                  Message Dispatched Successfully
                </h4>
                <p className="text-sm text-slate-400 max-w-md mx-auto">
                  Thank you, <strong className="text-slate-200">{formData.name || 'Friend'}</strong>. Your brief has been sent to Alex's prioritized inbox. Expect a response before the end of the day.
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleResetForm}
                    className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="e.g. Sarah Connor"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (formErrors.name) setFormErrors({ ...formErrors, name: undefined });
                      }}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border text-slate-100 text-sm focus:outline-none transition-colors ${
                        formErrors.name 
                          ? 'border-rose-500/80 focus:border-rose-500 bg-rose-950/10' 
                          : 'border-slate-700 focus:border-indigo-500'
                      }`}
                    />
                    {formErrors.name && (
                      <p className="text-xs text-rose-400 mt-1 font-mono">{formErrors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">
                      Work Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="e.g. sarah@startup.io"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (formErrors.email) setFormErrors({ ...formErrors, email: undefined });
                      }}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border text-slate-100 text-sm focus:outline-none transition-colors ${
                        formErrors.email 
                          ? 'border-rose-500/80 focus:border-rose-500 bg-rose-950/10' 
                          : 'border-slate-700 focus:border-indigo-500'
                      }`}
                    />
                    {formErrors.email && (
                      <p className="text-xs text-rose-400 mt-1 font-mono">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-inquiry-type" className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">
                      Inquiry Category
                    </label>
                    <select
                      id="contact-inquiry-type"
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-slate-100 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                    >
                      <option value="contract">Q3/Q4 Engineering Contract</option>
                      <option value="fulltime">Staff / Tech Lead Full-Time Role</option>
                      <option value="advisory">Architecture Advisory / Code Audit</option>
                      <option value="other">Other / Quick Intro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-timeline" className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">
                      Target Timeline
                    </label>
                    <select
                      id="contact-timeline"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-slate-100 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                    >
                      <option value="immediate">Immediate (Next 1-2 Weeks)</option>
                      <option value="q3">This Quarter (Next 30 Days)</option>
                      <option value="exploratory">Exploratory / Future Pipeline</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">
                    Project Goals or Role Scope <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Briefly describe what you're building, the engineering challenge, or the team context (minimum 10 characters)..."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (formErrors.message) setFormErrors({ ...formErrors, message: undefined });
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border text-slate-100 text-sm focus:outline-none transition-colors resize-none ${
                      formErrors.message 
                        ? 'border-rose-500/80 focus:border-rose-500 bg-rose-950/10' 
                        : 'border-slate-700 focus:border-indigo-500'
                    }`}
                  />
                  {formErrors.message && (
                    <p className="text-xs text-rose-400 mt-1 font-mono">{formErrors.message}</p>
                  )}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-[11px] text-slate-400 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    Zero spam. Direct engineer-to-client channel.
                  </span>
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-800 text-white font-medium text-sm transition-all shadow-md active:translate-y-px"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Validating...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
