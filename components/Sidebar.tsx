import Link from "next/link";
import Image from "next/image";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { HiOutlinePencil } from "react-icons/hi";
import { IoSettingsOutline, IoHelpCircleOutline } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";

export default function Sidebar() {
  return (
    <div style={{
      width: "200px",
      minHeight: "100vh",
      borderRight: "1px solid #e8e8e8",
      display: "flex",
      flexDirection: "column",
      padding: "20px 0",
      position: "fixed",
      backgroundColor: "white",
    }}>
      {/* Logo */}
      <div style={{ padding: "0 20px", marginBottom: "40px" }}>
        <Image src="/assets/logo.png" alt="logo" width={150} height={40} />
      </div>

      {/* Top Nav */}
      <nav style={{ flex: 1 }}>
        <Link href="/for-you" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 20px", color: "#032b41", borderLeft: "4px solid #2bd97c" }}>
          <AiOutlineHome size={24} /> For you
        </Link>
        <Link href="/library" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 20px", color: "#032b41" }}>
          <BsBookmark size={24} /> My Library
        </Link>
        <Link href="#" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 20px", color: "#032b41" }}>
          <HiOutlinePencil size={24} /> Highlights
        </Link>
        <Link href="/search" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 20px", color: "#032b41" }}>
          <AiOutlineSearch size={24} /> Search
        </Link>
      </nav>

      {/* Bottom Nav */}
      <div>
        <Link href="/settings" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 20px", color: "#032b41" }}>
          <IoSettingsOutline size={24} /> Settings
        </Link>
        <Link href="#" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 20px", color: "#032b41" }}>
          <IoHelpCircleOutline size={24} /> Help & Support
        </Link>
        <button style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 20px", color: "#032b41", width: "100%" }}>
          <BiLogOut size={24} /> Login
        </button>
      </div>
    </div>
  );
}