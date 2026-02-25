import Sidebar from "@/components/Sidebar";

export default function ForYouPage() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ marginLeft: "200px", padding: "40px", flex: 1 }}>
        
        {/* Search Bar */}
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "40px" }}>
          <input
            type="text"
            placeholder="Search for books"
            style={{
              padding: "10px 16px",
              border: "1px solid #e8e8e8",
              borderRadius: "8px",
              width: "300px",
              fontSize: "14px",
            }}
          />
        </div>

        {/* Selected Just For You */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "20px", fontWeight: "bold", color: "#032b41", marginBottom: "16px" }}>
            Selected just for you
          </h2>
          <div style={{
            backgroundColor: "#fbefd6",
            borderRadius: "8px",
            padding: "24px",
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}>
            <p style={{ flex: 1, color: "#032b41", fontSize: "16px" }}>
              How Constant Innovation Creates Radically Successful Businesses
            </p>
            <div style={{ width: "1px", backgroundColor: "#ccc", height: "80px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <img src="https://via.placeholder.com/80x110" alt="book" style={{ borderRadius: "4px" }} />
              <div>
                <p style={{ fontWeight: "bold", color: "#032b41" }}>The Lean Startup</p>
                <p style={{ color: "#6b757b", fontSize: "14px" }}>Eric Ries</p>
                <button style={{
                  marginTop: "8px",
                  backgroundColor: "#032b41",
                  color: "white",
                  border: "none",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  cursor: "pointer",
                }}>▶</button>
              </div>
            </div>
          </div>
        </section>

        {/* Recommended For You */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "20px", fontWeight: "bold", color: "#032b41", marginBottom: "4px" }}>
            Recommended For You
          </h2>
          <p style={{ color: "#6b757b", marginBottom: "16px" }}>We think you'll like these</p>
          <div style={{ display: "flex", gap: "24px", overflowX: "auto" }}>
            {/* Book cards will go here - we'll fetch from API */}
            <BookCard title="How to Win Friends" author="Dale Carnegie" />
            <BookCard title="Can't Hurt Me" author="David Goggins" isPremium />
          </div>
        </section>

        {/* Suggested Books */}
        <section>
          <h2 style={{ fontSize: "20px", fontWeight: "bold", color: "#032b41", marginBottom: "4px" }}>
            Suggested Books
          </h2>
          <p style={{ color: "#6b757b", marginBottom: "16px" }}>Browse those books</p>
          <div style={{ display: "flex", gap: "24px", overflowX: "auto" }}>
            <BookCard title="Zero to One" author="Peter Thiel" isPremium />
            <BookCard title="Rich Dad Poor Dad" author="Robert Kiyosaki" isPremium />
          </div>
        </section>

      </main>
    </div>
  );
}

function BookCard({ title, author, isPremium }: { title: string; author: string; isPremium?: boolean }) {
  return (
    <div style={{ minWidth: "150px", cursor: "pointer" }}>
      <div style={{ position: "relative" }}>
        {isPremium && (
          <span style={{
            position: "absolute", top: "8px", right: "8px",
            backgroundColor: "#032b41", color: "white",
            fontSize: "10px", padding: "2px 8px", borderRadius: "20px"
          }}>Premium</span>
        )}
        <img src="https://via.placeholder.com/150x200" alt={title} style={{ width: "150px", height: "200px", objectFit: "cover", borderRadius: "4px" }} />
      </div>
      <p style={{ fontWeight: "bold", color: "#032b41", marginTop: "8px", fontSize: "14px" }}>{title}</p>
      <p style={{ color: "#6b757b", fontSize: "12px" }}>{author}</p>
    </div>
  );
}