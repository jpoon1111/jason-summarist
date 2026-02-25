"use client";

import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import { AiOutlineSearch } from "react-icons/ai";

export default function SettingsPage() {
  return (
    <div style={{ display: "flex" }}>

      {/* ── Sidebar ── */}
      <Sidebar />

      {/* ── Right side ── */}
      <div style={{ marginLeft: 200, flex: 1, minHeight: "100vh", backgroundColor: "#fff" }}>

        {/* ── Top Header ── */}
        <div style={{
          height: 60,
          borderBottom: "1px solid #e8e8e8",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          padding: "0 40px",
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #e8e8e8",
            borderRadius: 4,
            padding: "6px 12px",
            gap: 8,
            width: 240,
          }}>
            <input
              type="text"
              placeholder="Search for books"
              style={{
                border: "none",
                outline: "none",
                fontSize: 14,
                color: "#032b41",
                width: "100%",
                backgroundColor: "transparent",
              }}
            />
            <AiOutlineSearch size={18} color="#032b41" />
          </div>
        </div>

        {/* ── Main Content ── */}
        <div style={{ padding: "40px 48px" }}>

          <h1 style={{ fontSize: 26, fontWeight: 700, color: "#032b41", marginBottom: 20 }}>
            Settings
          </h1>

          <hr style={{ border: "none", borderTop: "1px solid #e8e8e8", marginBottom: 32 }} />

          <section style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: 16, fontWeight: 700, color: "#032b41", marginBottom: 8 }}>
              Your Subscription plan
            </h2>
            <p style={{ fontSize: 14, color: "#394547", marginBottom: 16 }}>Basic</p>
            <Link href="/choose-plan">
              <button style={{
                backgroundColor: "#2bd97c", color: "#032b41",
                border: "none", borderRadius: 4,
                padding: "10px 20px", fontSize: 14,
                fontWeight: 600, cursor: "pointer",
              }}>
                Upgrade to Premium
              </button>
            </Link>
          </section>

          <hr style={{ border: "none", borderTop: "1px solid #e8e8e8", marginBottom: 32 }} />

          <section>
            <h2 style={{ fontSize: 16, fontWeight: 700, color: "#032b41", marginBottom: 8 }}>
              Email
            </h2>
            <p style={{ fontSize: 14, color: "#394547" }}>hanna@gmail.com</p>
          </section>

        </div>
      </div>
    </div>
  );
}