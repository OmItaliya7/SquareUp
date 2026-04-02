import { useState, useCallback } from "react";
import { validateContactForm } from "../utils/validateContactForm";
import api from "../services/api";


export const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    services: [],
    budget: 0, 
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFlexible, setIsFlexible] = useState(false);

  // INPUT CHANGE
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  // CHECKBOX
  const handleCheckbox = useCallback((value) => {
    setFormData((prev) => {
      const exists = prev.services.includes(value);

      return {
        ...prev,
        services: exists
          ? prev.services.filter((item) => item !== value)
          : [...prev.services, value],
      };
    });
  }, []);

  // BUDGET
  const handleBudgetChange = useCallback((e) => {
    const value = Number(e.target.value);

    setFormData((prev) => ({
      ...prev,
      budget: value,
    }));
  }, []);

  const handleFlexibleToggle = useCallback(() => {
  setIsFlexible((prev) => {
    const newValue = !prev;

    // 👉 If turning ON flexible → reset budget
    if (newValue) {
      setFormData((prevData) => ({
        ...prevData,
        budget: 0,
      }));
    }

    return newValue;
  });
}, []);

  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    // Honeypot (spam protection)
    const honeypot = e.target.company?.value;
    if (honeypot) return;

    const validationErrors = validateContactForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
     const res = await api.post("/contact", formData);
    // const res = await axios.post("http://localhost:5000/contact", formData);
     console.log("Server Response:", res.data);

      // RESET FORM
      setFormData({
        name: "",
        email: "",
        message: "",
        services: [],
        budget: 0,
      });

      setIsFlexible(false);
      alert("Message sent successfully!");

    } catch (err) {
      console.log(err);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    errors,
    isSubmitting,
    isFlexible,
    setIsFlexible,
    handleChange,
    handleCheckbox,
    handleBudgetChange,
    handleSubmit,
    handleFlexibleToggle,
  };
};