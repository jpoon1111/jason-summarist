"use client";

import { useState, useRef, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import { AiOutlineSearch } from "react-icons/ai";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";

const book = {
  id: "5bxl50cz4bt",
  title: "How to Win Friends and Influence People in the Digital Age",
  author: "Dale Carnegie",
  coverColor: "#c0392b",
  audioSrc: "", // replace with real audio URL
  content: [
    {
      heading: null,
      text: "How to Win Friends and Influence People is a timeless classic written by Dale Carnegie, first published in 1936. The book is widely regarded as one of the best self-help books ever written and has sold over 30 million copies worldwide. In 2011, a revised edition was published, titled How to Win Friends and Influence People in the Digital Age. The book was updated to address the challenges of the digital age and provide guidance on how to navigate the complexities of modern communication and social media.",
    },
    {
      heading: null,
      text: "The original book focused on the art of human communication and provided readers with strategies for building strong relationships, overcoming interpersonal conflicts, and becoming more effective communicators. The revised edition builds on these principles and updates them for the digital age. The book recognizes that the proliferation of technology and social media has created new opportunities for communication and connection, but has also made it more difficult to connect with others on a deep and meaningful level.",
    },
    {
      heading: null,
      text: "The first section of the book is devoted to building relationships in the digital age. The author argues that despite the abundance of social media platforms, people are more isolated than ever before. He suggests that the key to building strong relationships is to focus on the needs and desires of others. He encourages readers to listen actively and empathetically, to show genuine interest in others, and to be generous with their time and resources. These strategies apply both online and offline and are essential for building strong relationships in the digital age.",
    },
    {
      heading: null,
      text: "The second section of the book focuses on communicating effectively in the digital age. The author acknowledges that modern communication technology has made it easier than ever to communicate with others, but has also made it more difficult to convey complex emotions and ideas. He suggests that the key to effective communication is to be clear and concise, to use simple language and avoid jargon, and to be mindful of the tone and style of your message. He also stresses the importance of using technology appropriately, and suggests that people should avoid using text messaging and email for important conversations, as they are less personal and can easily be misinterpreted.",
    },
    {
      heading: null,
      text: "The third section of the book focuses on influencing others in the digital age. The author argues that in the digital age, influence is more important than ever before. He suggests that the key to influencing others is to be genuine and authentic, to communicate your message clearly and persuasively, and to be mindful of the needs and desires of your audience. He also stresses the importance of building a personal brand, and suggests that people should focus on developing a strong online presence that reflects their values and expertise.",
    },
    {
      heading: null,
      text: "The final section of the book focuses on leadership in the digital age. The author argues that in the digital age, leaders must be able to inspire and motivate their followers, and must be able to navigate the complex and rapidly changing world of technology and social media. He suggests that the key to effective leadership is to be a good listener, to be open to new ideas and perspectives, and to be willing to take risks and try new approaches. He also stresses the importance of building a strong team, and suggests that leaders should focus on creating a culture of collaboration and innovation.",
    },
    {
      heading: null,
      text: "Overall, How to Win Friends and Influence People in the Digital Age is an excellent guide for anyone looking to improve their communication skills, build strong relationships, and become more effective leaders in the digital age. The book provides readers with practical strategies and advice for navigating the complex world of modern communication and social media, and is an essential resource for anyone looking to succeed in today's rapidly changing world.",
    },
  ],
};

const fontSizes = [
  { label: "Aa", size: 14 },
  { label: "Aa", size: 16 },
  { label: "Aa", size: 18 },
  { label: "Aa", size: 22 },
];

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60).toString().padStart(2, "0");
  const s = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

export default function PlayerPage() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedFontSize, setSelectedFontSize] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(204); // 03:24
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const skip = (secs: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = Math.max(0, Math.min(duration, audioRef.current.currentTime + secs));
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => setCurrentTime(audio.currentTime);
    const onDuration = () => setDuration(audio.duration || 204);
    const onEnded = () => setIsPlaying(false);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onDuration);
    audio.addEventListener("ended", onEnded);
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("loadedmetadata", onDuration);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressRef.current || !audioRef.current) return;
    const rect = progressRef.current.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    audioRef.current.currentTime = pct * duration;
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#fff", fontFamily: "Roboto, sans-serif" }}>
      <audio ref={audioRef} src={book.audioSrc} />

      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <main style={{ marginLeft: "200px", flex: 1, display: "flex", flexDirection: "column", paddingBottom: "80px" }}>

        {/* Search bar */}
        <div style={{
          height: 60, borderBottom: "1px solid #e8e8e8",
          display: "flex", alignItems: "center", justifyContent: "flex-end",
          padding: "0 32px", position: "sticky", top: 0, backgroundColor: "#fff", zIndex: 5,
        }}>
          <div style={{ position: "relative", width: 280 }}>
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search for books"
              style={{
                width: "100%", height: 36, border: "1px solid #e8e8e8",
                borderRadius: 4, padding: "0 36px 0 12px", fontSize: 14, color: "#032b41", outline: "none",
              }}
            />
            <div style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", color: "#6b757b" }}>
              <AiOutlineSearch size={18} />
            </div>
          </div>
        </div>

        <div style={{ display: "flex" }}>
          {/* Font size picker — left column */}
          <div style={{
            width: 60, paddingTop: 32, display: "flex", flexDirection: "column",
            alignItems: "center", gap: 8, borderRight: "1px solid #e8e8e8", flexShrink: 0,
          }}>
            {fontSizes.map((f, i) => (
              <button
                key={i}
                onClick={() => setSelectedFontSize(i)}
                style={{
                  fontSize: f.size - 4,
                  fontWeight: 600,
                  color: selectedFontSize === i ? "#032b41" : "#aaa",
                  background: "none", border: "none", cursor: "pointer",
                  borderBottom: selectedFontSize === i ? "2px solid #2bd97c" : "2px solid transparent",
                  padding: "2px 4px",
                  lineHeight: 1,
                }}
              >
                Aa
              </button>
            ))}
          </div>

          {/* Content area */}
          <div style={{ flex: 1, maxWidth: 720, padding: "40px 48px" }}>
            <h1 style={{
              fontSize: 22, fontWeight: 700, color: "#032b41",
              marginBottom: 32, lineHeight: 1.3,
            }}>
              {book.title}
            </h1>

            {book.content.map((section, i) => (
              <p key={i} style={{
                fontSize: fontSizes[selectedFontSize].size,
                color: "#032b41", lineHeight: 1.8,
                marginBottom: 24,
              }}>
                {section.text}
              </p>
            ))}
          </div>
        </div>
      </main>

      {/* Bottom Audio Player */}
      <div style={{
        position: "fixed", bottom: 0, left: 0, right: 0,
        height: 80, backgroundColor: "#032b41",
        display: "flex", alignItems: "center",
        padding: "0 24px", gap: 20, zIndex: 100,
      }}>
        {/* Book cover + info */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 200 }}>
          <div style={{
            width: 48, height: 48, borderRadius: 4, flexShrink: 0,
            background: "linear-gradient(135deg, #c0392b, #922b21)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ fontSize: 8, color: "#fff", fontWeight: 700, textAlign: "center", padding: "0 4px" }}>
              HTFW
            </span>
          </div>
          <div>
            <p style={{ color: "#fff", fontSize: 13, fontWeight: 600, lineHeight: 1.3, maxWidth: 160, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {book.title}
            </p>
            <p style={{ color: "#aaa", fontSize: 12 }}>{book.author}</p>
          </div>
        </div>

        {/* Controls */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            {/* Rewind 10 */}
            <button onClick={() => skip(-10)} style={{
              color: "#fff", background: "none", border: "none", cursor: "pointer",
              display: "flex", alignItems: "center", gap: 2, fontSize: 13,
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>
                <text x="8.5" y="15" fontSize="5" fill="white" fontWeight="bold">10</text>
              </svg>
            </button>

            {/* Play / Pause */}
            <button onClick={togglePlay} style={{
              width: 44, height: 44, borderRadius: "50%",
              backgroundColor: "#fff", border: "none", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              {isPlaying
                ? <BsPauseFill size={24} color="#032b41" />
                : <BsPlayFill size={24} color="#032b41" />
              }
            </button>

            {/* Forward 10 */}
            <button onClick={() => skip(10)} style={{
              color: "#fff", background: "none", border: "none", cursor: "pointer",
              display: "flex", alignItems: "center", gap: 2, fontSize: 13,
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                <path d="M12 5V1l5 5-5 5V7c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6h2c0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8z"/>
                <text x="8.5" y="15" fontSize="5" fill="white" fontWeight="bold">10</text>
              </svg>
            </button>
          </div>

          {/* Progress bar */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, width: "100%", maxWidth: 500 }}>
            <span style={{ color: "#aaa", fontSize: 12, minWidth: 36, textAlign: "right" }}>
              {formatTime(currentTime)}
            </span>
            <div
              ref={progressRef}
              onClick={handleProgressClick}
              style={{
                flex: 1, height: 4, backgroundColor: "#ffffff40",
                borderRadius: 2, cursor: "pointer", position: "relative",
              }}
            >
              <div style={{
                width: `${progress}%`, height: "100%",
                backgroundColor: "#2bd97c", borderRadius: 2,
                transition: "width 0.3s linear",
              }} />
            </div>
            <span style={{ color: "#aaa", fontSize: 12, minWidth: 36 }}>
              {formatTime(duration)}
            </span>
          </div>
        </div>

        {/* Spacer to balance layout */}
        <div style={{ minWidth: 200 }} />
      </div>
    </div>
  );
}