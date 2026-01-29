import "./CTA.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const CTA = () => {
  const form = useRef<HTMLFormElement>(null);
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: "success" | "error";
    message: string;
  }>({
    isOpen: false,
    type: "success",
    message: "",
  });

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          {
            publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
          }
        )
        .then(
          () => {
            console.log("SUCCESS!");
            setModalState({
              isOpen: true,
              type: "success",
              message: "Message sent successfully! We will contact you soon.",
            });
            form.current?.reset();
          },
          (error) => {
            console.log("FAILED...", error.text);
            setModalState({
              isOpen: true,
              type: "error",
              message:
                "There was an error sending the message. Please try again.",
            });
          }
        );
    } else {
      console.error("Form reference is null.");
      setModalState({
        isOpen: true,
        type: "error",
        message: "Internal error. Please reload the page and try again.",
      });
    }
  };

  const closeModal = () => {
    setModalState({
      isOpen: false,
      type: "success",
      message: "",
    });
  };
  return (
    <>
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Transform Your Project?</h2>
          <p>Let's discuss how we can help you achieve your technical goals.</p>
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" required />
            <label>Email</label>
            <input type="email" name="user_email" required />
            <label>Message</label>
            <textarea name="message" required />
            <div className="cta-btn-wrapper">
              <input className="btn-primary" type="submit" value="Send" />
            </div>
          </form>
        </div>
      </section>

      {/* Modal */}
      {modalState.isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className={`modal-header ${modalState.type}`}>
              <h3>
                {modalState.type === "success" ? (
                  <span className="modal-icon">✓</span>
                ) : (
                  <span className="modal-icon">✗</span>
                )}
                {modalState.type === "success" ? "Mensaje Enviado" : "Error"}
              </h3>
              <button className="modal-close" onClick={closeModal}>
                ×
              </button>
            </div>
            <div className="modal-body">
              <p>{modalState.message}</p>
            </div>
            <div className="modal-footer">
              <button className="btn-modal" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CTA;
