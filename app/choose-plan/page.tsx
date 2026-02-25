"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoDocumentTextOutline } from "react-icons/io5";
import { GiPlantSeed } from "react-icons/gi";
import { RiHandHeartLine } from "react-icons/ri";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";

const plans = [
  {
    id: "yearly",
    name: "Premium Plus Yearly",
    price: "$99.99/year",
    note: "7-day free trial included",
    hasTrial: true,
  },
  {
    id: "monthly",
    name: "Premium Monthly",
    price: "$9.99/month",
    note: "No trial included",
    hasTrial: false,
  },
];

const faqs = [
  {
    question: "How does the free 7-day trial work?",
    answer:
      "Begin your complimentary 7-day trial with a Summarist annual membership. You are under no obligation to continue your subscription, and you will only be billed when the trial period expires. With Premium access, you can learn at your own pace and as frequently as you desire, and you may terminate your subscription prior to the conclusion of the 7-day free trial.",
  },
  {
    question: "Can I switch subscriptions from monthly to yearly, or yearly to monthly?",
    answer:
      "While an annual plan is active, it is not feasible to switch to a monthly plan. However, once the current month ends, transitioning from a monthly plan to an annual plan is an option.",
  },
  {
    question: "What's included in the Premium plan?",
    answer:
      "Premium membership provides you with the ultimate Summarist experience, including unrestricted entry to many best-selling books high-quality audio, the ability to download titles for offline reading, and the option to send your reads to your Kindle.",
  },
  {
    question: "Can I cancel during my trial or subscription?",
    answer:
      "You will not be charged if you cancel your trial before its conclusion. While you will not have complete access to the entire Summarist library, you can still expand your knowledge with one curated book per day.",
  },
];

const footerColumns = [
  {
    title: "Actions",
    links: ["Summarist Magazine", "Cancel Subscription", "Help", "Contact us"],
  },
  {
    title: "Useful Links",
    links: ["Pricing", "Summarist Business", "Gift Cards", "Authors & Publishers"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Partners", "Code of Conduct"],
  },
  {
    title: "Other",
    links: ["Sitemap", "Legal Notice", "Terms of Service", "Privacy Policies"],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(question.includes("7-day trial work"));

  return (
    <div style={{ borderBottom: "1px solid #e8e8e8" }}>
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          width: "100%", display: "flex", justifyContent: "space-between",
          alignItems: "center", padding: "20px 0",
          background: "none", border: "none", cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span style={{ fontSize: 16, fontWeight: 600, color: "#032b41" }}>{question}</span>
        {open
          ? <AiOutlineUp size={18} color="#032b41" />
          : <AiOutlineDown size={18} color="#032b41" />
        }
      </button>
      {open && (
        <p style={{ fontSize: 14, color: "#394547", lineHeight: 1.7, paddingBottom: 20 }}>
          {answer}
        </p>
      )}
    </div>
  );
}

export default function ChoosePlanPage() {
  const [selectedPlan, setSelectedPlan] = useState("yearly");

  return (
    <div style={{ fontFamily: "Roboto, sans-serif", minHeight: "100vh", backgroundColor: "#fff" }}>

      {/* ── Hero ── */}
      <div style={{
        backgroundColor: "#032b41",
        textAlign: "center",
        padding: "60px 24px 0",
        borderRadius: "0 0 16rem 16rem",
      }}>
        <h1 style={{
            color: "#fff", fontSize: 40, fontWeight: 700,
            maxWidth: 700, margin: "0 auto 16px", lineHeight: 1.25,
        }}>
          Get unlimited access to many amazing books to read
        </h1>
        <p style={{ color: "#fff", fontSize: 16, opacity: 0.85, marginBottom: 40 }}>
          Turn ordinary moments into amazing learning opportunities
        </p>

        {/* Arch + image */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{
            width: 280, height: 260,
            backgroundColor: "#fff",
            borderRadius: "140px 140px 0 0",
            display: "flex", alignItems: "flex-end", justifyContent: "center",
            overflow: "hidden",
          }}>
            <Image
              src="/assets/pricing-top.png"
              alt="pricing"
              width={300}
              height={300}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>

      {/* ── Features row ── */}
      <div style={{
        maxWidth: 800, margin: "0 auto",
        padding: "48px 24px 40px",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 32,
        textAlign: "center",
      }}>
        {[
          {
            icon: <IoDocumentTextOutline size={48} color="#032b41" />,
            bold: "Key ideas in few min",
            text: " with many books to read",
          },
          {
            icon: <GiPlantSeed size={48} color="#032b41" />,
            bold: "3 million",
            text: " people growing with Summarist everyday",
          },
          {
            icon: <RiHandHeartLine size={48} color="#032b41" />,
            bold: "Precise recommendations",
            text: " collections curated by experts",
          },
        ].map((f, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
            {f.icon}
            <p style={{ fontSize: 14, color: "#394547", lineHeight: 1.5 }}>
              <strong style={{ color: "#032b41" }}>{f.bold}</strong>{f.text}
            </p>
          </div>
        ))}
      </div>

      {/* ── Plan selector ── */}
      <div style={{ maxWidth: 600, margin: "0 auto", padding: "0 24px" }}>
        <h2 style={{
          fontSize: 24, fontWeight: 700, color: "#032b41",
          textAlign: "center", marginBottom: 32,
        }}>
          Choose the plan that fits you
        </h2>

        {plans.map((plan, i) => (
          <div key={plan.id}>
            <div
              onClick={() => setSelectedPlan(plan.id)}
              style={{
                border: selectedPlan === plan.id ? "2px solid #2bd97c" : "2px solid #e8e8e8",
                borderRadius: 8, padding: "20px 24px",
                display: "flex", alignItems: "center", gap: 16,
                cursor: "pointer", backgroundColor: "#f8faf9",
                transition: "border-color 150ms",
              }}
            >
              <div style={{
                width: 22, height: 22, borderRadius: "50%",
                border: selectedPlan === plan.id ? "6px solid #032b41" : "2px solid #aaa",
                flexShrink: 0, transition: "border 150ms",
              }} />
              <div>
                <p style={{ fontWeight: 700, color: "#032b41", fontSize: 16, marginBottom: 4 }}>{plan.name}</p>
                <p style={{ fontWeight: 700, color: "#032b41", fontSize: 20, marginBottom: 2 }}>{plan.price}</p>
                <p style={{ fontSize: 13, color: "#6b757b" }}>{plan.note}</p>
              </div>
            </div>

            {i < plans.length - 1 && (
              <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "16px 0" }}>
                <div style={{ flex: 1, height: 1, backgroundColor: "#e8e8e8" }} />
                <span style={{ color: "#6b757b", fontSize: 13 }}>or</span>
                <div style={{ flex: 1, height: 1, backgroundColor: "#e8e8e8" }} />
              </div>
            )}
          </div>
        ))}

        {/* ── Sticky CTA ── */}
        <div style={{
          position: "sticky",
          bottom: 0,
          backgroundColor: "#fff",
          padding: "16px 0 20px",
          textAlign: "center",
          zIndex: 10,
        }}>
          <button style={{
            backgroundColor: "#2bd97c", color: "#032b41",
            border: "none", borderRadius: 4,
            padding: "14px 40px", fontSize: 16, fontWeight: 600,
            cursor: "pointer", width: "100%", maxWidth: 340,
          }}>
            Start your free 7-day trial
          </button>
          <p style={{ fontSize: 12, color: "#6b757b", marginTop: 10 }}>
            Cancel your trial at any time before it ends, and you won&apos;t be charged.
          </p>
        </div>
      </div>

      {/* ── FAQ ── */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px 64px" }}>
        {faqs.map((faq, i) => (
          <FAQItem key={i} question={faq.question} answer={faq.answer} />
        ))}
      </div>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: "#f1f6f4", padding: "48px 24px 24px" }}>
        <div style={{
          maxWidth: 1000, margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
          gap: 32, marginBottom: 40,
        }}>
          {footerColumns.map((col) => (
            <div key={col.title}>
              <p style={{ fontWeight: 700, color: "#032b41", marginBottom: 16, fontSize: 15 }}>{col.title}</p>
              {col.links.map((link) => (
                <p key={link} style={{ marginBottom: 10 }}>
                  <Link href="#" style={{ color: "#394547", fontSize: 13, textDecoration: "none" }}>
                    {link}
                  </Link>
                </p>
              ))}
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", color: "#032b41", fontSize: 13, fontWeight: 500 }}>
          Copyright &copy; 2023 Summarist.
        </p>
      </footer>

    </div>
  );
}