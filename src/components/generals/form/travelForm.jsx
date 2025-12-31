// TravelForm.jsx
import { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from 'emailjs-com';
import swal from 'sweetalert';
import "./travelForm.css";

const estadosMexico = [
    "Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas", "Chihuahua", "Coahuila", "Colima", "Durango", "Estado de México", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "Michoacán", "Morelos", "Nayarit", "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"
];

const TravelForm = () => {
    const [isOpen, setIsOpen] = useState(true);
    const { t } = useTranslation();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [focusedField, setFocusedField] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

            emailjs.sendForm('service_zmd74hu', 'template_nkyigza', e.target, 'API_KEY_CORREOS')
            .then((result) => {
                console.log("Success:", result.text);
                setIsSubmitting(false);
                swal({
                    title: t('sweetAlert.successTitle'),
                    text: t('sweetAlert.successText'),
                    icon: 'success',
                    button: {
                        text: "OK",
                        closeModal: true,
                        className: "swal-button--success"
                    },
                    className: "swal-overlay--success"
                }).then(() => {
                    setIsOpen(false);
                });
            }, (error) => {
                console.log("Error:", error.text);
                setIsSubmitting(false);
                swal({
                    title: t('sweetAlert.errorTitle'),
                    text: t('sweetAlert.errorText'),
                    icon: 'error',
                    button: {
                        text: "OK",
                        closeModal: true,
                        className: "swal-button--error"
                    },
                    className: "swal-overlay--error"
                });
            });
    };

    if (!isOpen) return null;

    return (
        <div className="overlayForm">
            <div className="form-container">
                <div className="form-decoration">
                    <div className="decoration-circle"></div>
                    <div className="decoration-circle"></div>
                    <div className="decoration-circle"></div>
                </div>
                <h2 className="title">{t('travelForm.title')}</h2>
                <h3 className="subtitle">{t('travelForm.description')}</h3>
                <button
                    className="close-button"
                    onClick={() => setIsOpen(false)}
                    aria-label="Cerrar formulario"
                >
                    <span>&times;</span>
                </button>
                <form onSubmit={sendEmail} className="travel-form">
                    <div className="input-group">
                        <div className={`input-field ${focusedField === 'firstName' ? 'focused' : ''}`}>
                            <input
                                type="text"
                                name="firstName"
                                placeholder={t('travelForm.firstName')}
                                required
                                onFocus={() => setFocusedField('firstName')}
                                onBlur={() => setFocusedField(null)}
                            />
                        </div>
                        <div className={`input-field ${focusedField === 'lastName' ? 'focused' : ''}`}>
                            <input
                                type="text"
                                name="lastName"
                                placeholder={t('travelForm.lastName')}
                                required
                                onFocus={() => setFocusedField('lastName')}
                                onBlur={() => setFocusedField(null)}
                            />
                        </div>
                    </div>
                    <div className="input-group">
                        <div className={`input-field ${focusedField === 'phoneNumber' ? 'focused' : ''}`}>
                            <input
                                type="text"
                                name="phoneNumber"
                                placeholder={t('travelForm.phoneNumber')}
                                maxLength="11"
                                onFocus={() => setFocusedField('phoneNumber')}
                                onBlur={() => setFocusedField(null)}
                            />
                        </div>
                        <div className={`input-field ${focusedField === 'whatsappNumber' ? 'focused' : ''}`}>
                            <input
                                type="text"
                                name="whatsappNumber"
                                placeholder={t('travelForm.whatsappNumber')}
                                maxLength="11"
                                onFocus={() => setFocusedField('whatsappNumber')}
                                onBlur={() => setFocusedField(null)}
                            />
                        </div>
                    </div>
                    <div className="input-group">
                        <div className={`input-field select-field ${focusedField === 'estado' ? 'focused' : ''}`}>
                            <select
                                name="estado"
                                required
                                onFocus={() => setFocusedField('estado')}
                                onBlur={() => setFocusedField(null)}
                            >
                                <option value="">{t('travelForm.selectState')}</option>
                                {estadosMexico.map((estado, index) => (
                                    <option key={index} value={estado}>{estado}</option>
                                ))}
                            </select>
                            <span className="select-arrow">▼</span>
                        </div>
                    </div>
                    <div className="input-group">
                        <div className={`input-field ${focusedField === 'comments' ? 'focused' : ''}`}>
                            <textarea
                                name="comments"
                                placeholder={t('travelForm.message')}
                                required
                                onFocus={() => setFocusedField('comments')}
                                onBlur={() => setFocusedField(null)}
                            ></textarea>
                        </div>
                    </div>
                    <div className="submit-container">
                        <button
                            type="submit"
                            className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                            disabled={isSubmitting}
                        >
                            <span className="button-text">{isSubmitting ? t('travelForm.sending') || 'Enviando...' : t('travelForm.submit')}</span>
                            <span className="button-icon">{isSubmitting ? '⟳' : '✓'}</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TravelForm;
