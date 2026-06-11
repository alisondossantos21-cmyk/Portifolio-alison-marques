import { useState } from 'react';
import { toast } from 'sonner';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function useContactForm() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('Por favor, preencha todos os campos');
      return;
    }

    setIsLoading(true);

    try {
      // Using Formspree API for free email submission
      const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
      
      if (!formspreeEndpoint) {
        // Fallback to direct mailto if formspree not configured
        console.log('Form submitted:', formData);
        toast.success('Mensagem preparada! Abrindo seu cliente de email...');
        const mailtoLink = `mailto:alisondossantos21@gmail.com?subject=Contato: ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`)}`;
        window.location.href = mailtoLink;
        setFormData({ name: '', email: '', message: '' });
        return;
      }

      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Mensagem enviada com sucesso! Obrigado pelo contato.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error('Erro ao enviar mensagem. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    isLoading,
    handleFormChange,
    handleFormSubmit,
  };
}
