"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { BiTime, BiMicrophone } from "react-icons/bi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdOutlineMenuBook } from "react-icons/md";
import { BsHeadphones } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

const book = {
  title: "How to Win Friends and Influence People in the Digital Age",
  author: "Dale Carnegie",
  subtitle: "Time-tested advice for the digital age",
  rating: 4.4,
  ratingCount: 608,
  duration: "03:24",
  hasAudio: true,
  hasText: true,
  keyIdeas: 8,
  isPremium: false,
  categories: ["Communication Skills", "Technology & the Future"],
  description: `"How to Win Friends and Influence People" is a self-help book written by Dale Carnegie and first published in 1936. The book provides practical advice and techniques for improving one's communication and social skills, with the goal of building better relationships and becoming more influential in both personal and professional settings. The book covers topics such as the importance of smiling, listening actively, giving honest and sincere appreciation, avoiding criticism, and becoming genuinely interested in others. It also emphasizes the power of empathy and understanding other people's perspectives. "How to Win Friends and Influence People" has been widely read and praised for its timeless and practical advice, and is considered a classic in the field of self-improvement.`,
  authorBio: `Dale Carnegie (1888-1955) was an American author, lecturer, and developer of self-improvement courses. He is best known for his book "How to Win Friends and Influence People," which has sold over 30 million copies worldwide and is considered a classic in the self-help genre. Carnegie's teachings focused on improving interpersonal skills, communication, and leadership, and his courses and books were aimed at helping individuals become more confident, successful, and influential in both their personal and professional lives. He also founded the Dale Carnegie Training program, which is still in operation today and has helped millions of people around the world improve their communication and leadership skills.`,
};

export default function BookPage() {
  const [inLibrary, setInLibrary] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#fff", fontFamily: "Roboto, sans-serif" }}>
      {/* Your existing Sidebar */}
      <Sidebar />

      {/* Main content — offset by sidebar width */}
      <main style={{ marginLeft: "200px", flex: 1, display: "flex", flexDirection: "column" }}>

        {/* Search bar */}
        <div style={{
          height: 60,
          borderBottom: "1px solid #e8e8e8",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          padding: "0 32px",
        }}>
          <div style={{ position: "relative", width: 280 }}>
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search for books"
              style={{
                width: "100%",
                height: 36,
                border: "1px solid #e8e8e8",
                borderRadius: 4,
                padding: "0 36px 0 12px",
                fontSize: 14,
                color: "#032b41",
                outline: "none",
              }}
            />
            <div style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", color: "#6b757b" }}>
              <AiOutlineSearch size={18} />
            </div>
          </div>
        </div>

        {/* Book detail */}
        <div style={{ maxWidth: 900, padding: "40px 32px", width: "100%" }}>

          {/* Title row + Cover */}
          <div style={{ display: "flex", gap: 32, marginBottom: 32 }}>
            <div style={{ flex: 1 }}>
              <h1 style={{ fontSize: 24, fontWeight: 700, color: "#032b41", marginBottom: 8, lineHeight: 1.3 }}>
                {book.title}
              </h1>
              <p style={{ fontWeight: 600, color: "#032b41", marginBottom: 4, fontSize: 14 }}>
                {book.author}
              </p>
              <p style={{ color: "#6b757b", fontSize: 14, marginBottom: 20 }}>
                {book.subtitle}
              </p>

              {/* Meta */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 20, marginBottom: 16 }}>
                <span style={{ display: "flex", alignItems: "center", gap: 6, color: "#6b757b", fontSize: 14 }}>
                  <AiOutlineStar size={16} /> {book.rating} ({book.ratingCount} ratings)
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: 6, color: "#6b757b", fontSize: 14 }}>
                  <BiTime size={16} /> {book.duration}
                </span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 20, marginBottom: 28 }}>
                <span style={{ display: "flex", alignItems: "center", gap: 6, color: "#6b757b", fontSize: 14 }}>
                  <BiMicrophone size={16} /> Audio &amp; Text
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: 6, color: "#6b757b", fontSize: 14 }}>
                  <HiOutlineLightBulb size={16} /> {book.keyIdeas} Key ideas
                </span>
              </div>

              {/* CTA Buttons */}
              <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
                <button style={{
                  display: "flex", alignItems: "center", gap: 8,
                  backgroundColor: "#032b41", color: "#fff",
                  border: "none", borderRadius: 4,
                  padding: "10px 24px", fontSize: 15, fontWeight: 600,
                  cursor: "pointer",
                }}>
                  <MdOutlineMenuBook size={20} /> Read
                </button>
                <button style={{
                  display: "flex", alignItems: "center", gap: 8,
                  backgroundColor: "#032b41", color: "#fff",
                  border: "none", borderRadius: 4,
                  padding: "10px 24px", fontSize: 15, fontWeight: 600,
                  cursor: "pointer",
                }}>
                  <BsHeadphones size={20} /> Listen
                </button>
              </div>

              {/* Add to Library */}
              <button
                onClick={() => setInLibrary((v) => !v)}
                style={{
                  display: "flex", alignItems: "center", gap: 6,
                  color: "#0365f2", fontSize: 14, fontWeight: 500,
                  background: "none", border: "none", cursor: "pointer", padding: 0,
                }}
              >
                {inLibrary ? <BsBookmarkFill size={18} /> : <BsBookmark size={18} />}
                {inLibrary ? "Remove from My Library" : "Add title to My Library"}
              </button>
            </div>

            {/* Book Cover */}
            <div style={{
              width: 180, height: 240, flexShrink: 0,
              borderRadius: 4, overflow: "hidden",
              background: "linear-gradient(135deg, #c0392b 0%, #922b21 100%)",
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              padding: 16, textAlign: "center", color: "#fff",
            }}>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 6 }}>
                How to Win Friends
              </p>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 2 }}>
                &amp; Influence
              </p>
              <p style={{ fontSize: 14, fontWeight: 900, textTransform: "uppercase", marginBottom: 8 }}>People</p>
              <p style={{ fontSize: 9, opacity: 0.8, marginBottom: 12 }}>
                The Only Book You Need to Lead You to Success
              </p>
              <div style={{
                width: 32, height: 32, borderRadius: "50%",
                backgroundColor: "#0365f2",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 9, fontWeight: 700,
              }}>NEW</div>
              <p style={{ marginTop: 10, fontSize: 11, fontWeight: 600 }}>Dale Carnegie</p>
            </div>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #e8e8e8", marginBottom: 28 }} />

          {/* What's it about */}
          <section style={{ marginBottom: 28 }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: "#032b41", marginBottom: 12 }}>
              What&apos;s it about?
            </h2>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
              {book.categories.map((cat) => (
                <span key={cat} style={{
                  border: "1px solid #d0d0d0", borderRadius: 4,
                  padding: "4px 12px", fontSize: 13, color: "#394547",
                }}>
                  {cat}
                </span>
              ))}
            </div>
            <p style={{ fontSize: 15, color: "#394547", lineHeight: 1.7 }}>{book.description}</p>
          </section>

          <hr style={{ border: "none", borderTop: "1px solid #e8e8e8", marginBottom: 28 }} />

          {/* About the author */}
          <section style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: "#032b41", marginBottom: 12 }}>
              About the author
            </h2>
            <p style={{ fontSize: 15, color: "#394547", lineHeight: 1.7 }}>{book.authorBio}</p>
          </section>

        </div>
      </main>
    </div>
  );
}