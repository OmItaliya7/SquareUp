import { useState, useCallback } from "react";
import { validateContactForm } from "../utils/validateContactForm";
import api from "../services/api";
import toast from "react-hot-toast";

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
        const payload = {
          ...formData,
          budget: isFlexible ? "Flexible" : formData.budget,
        }
        const res = await api.post("/contact", payload);
        // console.log("Form Data Submitted:", res.data);

      // RESET FORM
      setFormData({
        name: "",
        email: "",
        message: "",
        services: [],
        budget: 0,
      });

      setIsFlexible(false);
      toast.success("Message sent successfully!");

    } catch (err) {
      console.log(err);
      if(err.response?.status === 429){
        toast.error("Too many requests. Please wait 15 minutes and try again.");
      }else{
        toast.error("Something went wrong. Please try again.");
      } 
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