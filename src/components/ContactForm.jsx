import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowUpRight, Check } from "lucide-react";

const initialFormData = {
  name: "",
  email: "",
  enquiryType: "",
  message: "",
};

function ContactForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
    if (status.message) setStatus({ type: "", message: "" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message: "The enquiry service is not configured yet. Please try again later or email us directly.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name.trim(),
          from_email: formData.email.trim(),
          reply_to: formData.email.trim(),
          enquiry_type: formData.enquiryType,
          message: formData.message.trim(),
        },
        { publicKey },
      );
      setStatus({
        type: "success",
        message: "Thank you for contacting Avante Tek! Your enquiry has been sent successfully.",
      });
      setFormData(initialFormData);
    } catch (error) {
      console.error("EmailJS submission failed:", error);
      setStatus({
        type: "error",
        message: "We couldn't send your enquiry. Please try again in a moment.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="enquiry-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>Your name<input name="name" value={formData.name} onChange={handleChange} required maxLength={100} autoComplete="name" placeholder="Jane Smith" /></label>
        <label>Work email<input name="email" type="email" value={formData.email} onChange={handleChange} required maxLength={254} autoComplete="email" placeholder="jane@company.com" /></label>
      </div>
      <label>What can we help with?<select name="enquiryType" value={formData.enquiryType} onChange={handleChange} required><option value="" disabled>Select an option</option><option value="Recruitment Services">Recruitment Services</option><option value="Staffing Solutions">Staffing Solutions</option><option value="Hiring">Hiring</option><option value="Job Opportunities">Job Opportunities</option><option value="Other Enquiry">Other Enquiry</option></select></label>
      <label>Tell us a little more<textarea name="message" value={formData.message} onChange={handleChange} rows="4" maxLength={5000} required placeholder="A few details about your goals..." /></label>
      <button className="button button-primary form-submit" type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending..." : <>Send enquiry <ArrowUpRight size={18} /></>}</button>
      {status.message && <p className={`form-status ${status.type}`} role="status" aria-live="polite">{status.type === "success" && <Check size={16} />}{status.message}</p>}
    </form>
  );
}

export default ContactForm;
