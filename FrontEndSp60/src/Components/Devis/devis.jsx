/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import contactImage from "../../assets/images/devisImg.jpg";
import "./style.scss";

export default function DevisForm() {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    projectType: "",
    region: "",
    details: "",
    planFile: null
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Gestion des changements dans les champs du formulaire
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Gestion de la sélection de fichier PDF
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setFormData({ ...formData, planFile: file });
    } else {
      alert("Veuillez sélectionner un fichier PDF.");
    }
  };

  // Envoi des données du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation des champs requis
    if (!formData.name || !formData.email || !formData.phone || !formData.projectType || !formData.region || !formData.planFile) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    // Préparer les données du formulaire pour l'envoi
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("companyName", formData.companyName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("projectType", formData.projectType);
    formDataToSend.append("region", formData.region);
    formDataToSend.append("details", formData.details);
    formDataToSend.append("planFile", formData.planFile);

    try {
      const response = await fetch("http://localhost:3000/api/send-devis", {
        method: "POST",
        body: formDataToSend
      });

      if (response.ok) {
        setFormSubmitted(true);
      } else {
        alert("Une erreur est survenue lors de l'envoi du devis.");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du devis:", error);
      alert("Erreur lors de la connexion au serveur.");
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-10 lg:py-20">
      <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-full lg:w-1/2 p-8 bg-orange-100">
          {formSubmitted ? (
            <div className="text-center">
              <h3 className="text-green-600 text-xl font-semibold">Merci pour votre demande de devis !</h3>
              <p>Nous vous contacterons bientôt pour discuter de votre projet.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Demandez un devis</h3>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom complet</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Ex: Jean Dupont"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                />
              </div>
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Nom de l'entreprise</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  placeholder="Ex: Dupont Énergies"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="input-field"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Adresse e-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Ex: jean.dupont@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                />
              </div>
              <div className="styleDiv">
                <div className="styleDivPhone">
                  <label className="block text-sm font-medium text-gray-700">Numéro de téléphone</label>
                  <PhoneInput
                    country="fr"
                    placeholder="Ex: +33 612345678"
                    value={formData.phone}
                    onChange={(phone) => setFormData({ ...formData, phone })}
                    dropdownClass="custom-phone-dropdown"
                  />
                </div>
                <div className="styleDivType">
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mt-4">Type de projet</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="input-field"
                    required
                  >
                    <option value="">Sélectionnez un projet</option>
                    <option value="Fibre">Fibre</option>
                    <option value="Installations Électriques">Installations Électriques</option>
                    <option value="Caméras de Surveillance">Caméras de Surveillance</option>
                    <option value="Études Techniques">Études Techniques</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="region" className="block text-sm font-medium text-gray-700">Région</label>
                <input
                  type="text"
                  id="region"
                  name="region"
                  placeholder="Ex: Île-de-France"
                  value={formData.region}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                />
              </div>
              <div>
                <label htmlFor="details" className="block text-sm font-medium text-gray-700">Détails supplémentaires</label>
                <textarea
                  id="details"
                  name="details"
                  placeholder="Ajoutez des détails supplémentaires sur votre projet (ex: durée, taille du projet, etc.)"
                  value={formData.details}
                  onChange={handleInputChange}
                  className="input-field"
                  rows="4"
                ></textarea>
              </div>
              <div>
                <label htmlFor="planFile" className="block text-sm font-medium text-gray-700">Plan d'étude (PDF)</label>
                <input
                  type="file"
                  id="planFile"
                  name="planFile"
                  accept="application/pdf"
                  onChange={handleFileChange}
                  className="input-field bg-white"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 font-semibold rounded-lg shadow-sm hover:bg-orange-600 transition duration-300"
              >
                Soumettre
              </button>
            </form>
          )}
        </div>

        {/* Image sur le côté */}
        <div className="hidden lg:block lg:w-1/2">
          <img
            src={contactImage}
            alt="Illustration de contact"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
