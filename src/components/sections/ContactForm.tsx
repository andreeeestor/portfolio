"use client";
import { PhoneCall } from "@phosphor-icons/react/dist/ssr";
import BubbleText from "../animations/BubbleText";
import ScrollVelocity from "../animations/ScrollVelocity";
import StarBorder from "../ui/StarBorder";
import { useForm } from "@formspree/react";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
interface ContactProps {
  id: string;
}

export default function Contact(props: ContactProps) {
  const t = useTranslations("contact");
  const [state, handleSubmit] = useForm("xvgapzwl");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formLoadTime, setFormLoadTime] = useState(Date.now());
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "",
  });

  useEffect(() => {
    setFormLoadTime(Date.now());
  }, []);

  useEffect(() => {
    if (state.succeeded) {
      toast.success(t("success"));
      setFormData({
        name: "",
        email: "",
        message: "",
        honeypot: "",
      });
    }
  }, [state.succeeded, t]);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      toast.error(t("errorRegex"));
      return false;
    }

    const suspiciousDomains = [
      "tempmail.com",
      "temp-mail.org",
      "fakeinbox.com",
      "guerrillamail.com",
      "yopmail.com",
      "mailinator.com",
    ];

    const domain = email.split("@")[1];
    if (suspiciousDomains.includes(domain?.toLowerCase())) {
      toast.error(t("errorSuspicious"));
      return false;
    }

    return true;
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const submissionTime = Date.now();
    const timeTaken = submissionTime - formLoadTime;

    if (timeTaken < 2000) {
      toast.error(t("errorTimeTaken"));
      return;
    }

    if (formData.honeypot) {
      console.log("Honeypot detectado");
      toast.success(t("success"));
      return;
    }

    if (!validateEmail(formData.email)) {
      return;
    }

    if (formData.message.trim().length < 10) {
      toast.error(t("errorMessage"));
      return;
    }

    setIsSubmitting(true);

    try {
      await handleSubmit(e);
      if (state.succeeded) {
        toast.success(t("success"));
      }
    } catch (error) {
      toast.error(t("error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <StarBorder id={props.id} className="w-full mt-24" color="cyan" speed="5s">
      <ScrollVelocity
        texts={[`${t("title")}`, `${t("title")}`]}
        velocity={60}
        className="font-sequel uppercase text-gray-200 pt-4"
      />
      <form
        onSubmit={onSubmit}
        className="backdrop-blur-md bg-white/5 border border-white/20 z-50 rounded-xl flex flex-col p-6 my-8 shadow-lg mx-6"
      >
        <input
          type="text"
          name="honeypot"
          id="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
        />

        <div className="flex flex-col md:flex-row items-center">
          <input
            title="Nome:"
            className="w-full bg-transparent backdrop-blur-sm border border-white/10 text-white placeholder-white/50 text-sm rounded-xl px-3 py-4 mb-4 outline-none"
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={`${t("name")}`}
            required
          />
          <div className="hidden md:w-12 md:block" />
          <input
            title="Email:"
            className="w-full bg-transparent backdrop-blur-sm border border-white/10 text-white placeholder-white/50 text-sm rounded-xl px-3 py-4 mb-4 outline-none"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email:"
            required
          />
        </div>
        <textarea
          className="bg-transparent backdrop-blur-sm border border-white/10 text-white placeholder-white/50 resize-none text-sm rounded-lg p-3 mb-4 outline-none"
          placeholder={`${t("message")}`}
          rows={10}
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          minLength={10}
        />

        <button
          className={`text-black bg-white w-full py-4 tracking-wider transition-all hover:tracking-widest rounded-3xl hover:opacity-90 ${
            isSubmitting ? "opacity-70 cursor-not-allowed" : ""
          }`}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? t("sending") : t("send")}
        </button>
      </form>

      <h6 className="text-indigo-300 font-semibold tracking-widest pb-4">
        {t("or")}
      </h6>
      <div className="flex sm:flex-row flex-col items-center justify-center gap-y-4 sm:gap-x-4 text-3xl sm:text-5xl text-indigo-300 pb-8">
        <PhoneCall />
        <span>{`//`}</span>
        <BubbleText />
      </div>
    </StarBorder>
  );
}
