import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../redux/actions/languageActions";

const LanguageSelector = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector((state) => state.language.language);
  const [showModal, setShowModal] = useState(false);

  const languages = [
    { code: "eng", label: "English" },
    { code: "hi", label: "हिन्दी" },
    { code: "pt", label: "Português" },
    { code: "ru", label: "Русский" },
  ];

  const handleChange = (code) => {
    dispatch(setLanguage(code));
    setShowModal(false);
  };

  return (
    <>
      <button
        type="button"
        className="p-2 lang-btn"
        onClick={() => setShowModal(true)}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/128/484/484633.png"
          alt="language"
          style={{ width: "24px", height: "24px" }}
        />
      </button>

      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Choose Language</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`btn w-100 mb-2 ${
                      currentLanguage === lang.code ? "btn" : "btn-outline"
                    }`}
                    onClick={() => handleChange(lang.code)}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LanguageSelector;
