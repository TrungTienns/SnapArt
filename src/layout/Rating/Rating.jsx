import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useTranslation } from "react-i18next";
import "./Rating.scss";

const Rating = () => {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm("mkoojnlo");
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => setFadeOut(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <div className="rating-layout">
      {/* Heading */}
      <h1 className="rating-heading">
        {t("rating.heading")}
      </h1>

      <div className={`rating-form-layout ${fadeOut ? "fade-out" : ""}`}>
        <div className="rating-box">

          {/* LEFT: THANK YOU MESSAGE */}
          <div className="thank-you">
            <h2>{t("rating.thankTitle")}</h2>
            <p>{t("rating.thankDesc")}</p>
          </div>

          {/* RIGHT: FORM */}
          <div className="feedback-form">
            {state.succeeded ? (
              <div className="success-message">
                <p>{t("rating.success")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                
                <div className="form-group">
                  <label htmlFor="name">
                    {t("rating.name")} *
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder={t("rating.namePlaceholder")}
                    required
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    {t("rating.email")} *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder={t("rating.emailPlaceholder")}
                    required
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    {t("rating.message")} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder={t("rating.messagePlaceholder")}
                    required
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <button
                  type="submit"
                  className="send-btn"
                  disabled={state.submitting}
                >
                  {state.submitting
                    ? t("rating.sending")
                    : t("rating.send")}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Rating;