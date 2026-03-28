import { useEffect, useState } from "react";

export default function BirthdayWishWebsite() { const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 }); const customLink ="meli ardhangini jii-love-surprise.vercel.app"; const birthdayDate = "12 April 2026"; const songName = "Perfect - Jeene Laga Hoon 🎶"; const [showGift, setShowGift] = useState(false);

useEffect(() => { const target = new Date("2026-04-12T00:00:00").getTime(); const timer = setInterval(() => { const now = new Date().getTime(); const diff = target - now; if (diff > 0) { setTimeLeft({ days: Math.floor(diff / (1000 * 60 * 60 * 24)), hours: Math.floor((diff / (1000 * 60 * 60)) % 24), minutes: Math.floor((diff / (1000 * 60)) % 60), seconds: Math.floor((diff / 1000) % 60), }); } } else { setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 }); setShowGift(true); } }, 1000); return () => clearInterval(timer); }, []); const name ="Meli Biwi Jii ❤️";

const photos = [ const photos = [const photos = [
"https://drive.google.com/uc?export=view&id=1dCllkGufaA-9Uu1SOxgGLtKC2qZEXVjl",
  "https://drive.google.com/uc?export=view&id=1QU7AeSbRlaugruhEqV0ll5KP3jQcKTGV",
];
const memories = [ "Jab hum pehli baar mile 💕", "Hamari pehli photo together 📸", "Sabse special date night 🌙", "Aaj ka beautiful birthday surprise 🎂", ];

return ( <div className="min-h-screen overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 relative flex items-center justify-center p-6"> {/* floating hearts */} <div className="absolute inset-0 pointer-events-none"> {[...Array(20)].map((_, i) => ( <div key={i} className="absolute text-pink-400 animate-bounce opacity-70" style={{ left: ${(i * 5) % 100}%, top: ${(i * 7) % 100}%, fontSize: ${18 + (i % 4) * 8}px, }} > ❤️ </div> ))} </div>

<div className="max-w-4xl w-full bg-white/80 backdrop-blur rounded-3xl shadow-2xl p-8 text-center border border-pink-200 relative z-10">
    <div className="text-6xl mb-4 animate-bounce">🎂</div>
    <h1 className="text-5xl font-bold text-pink-600 mb-4">
      Happy Birthday {Meri Dharm Patni Jii😚💗}
    </h1>

    <p className="text-lg text-gray-700 leading-8 mb-8">
      Happy Birthday Mela Chota Sa Bacchaa ❤️ Tum meri life ki sabse pyari khushi ho.
      Aapkii smile meri duniya roshan kar deti hai mela bacchaa. Bhagwan aapko
      hamesha khush rakhe aur hamara saath hamesha bana rahe meli pyali ardhangini jii ✨
    </p>

    {/* countdown style section */}
    <div className="grid grid-cols-4 gap-4 mb-8">
      <div className="bg-pink-100 rounded-2xl p-4 shadow">
        <div className="text-2xl font-bold">{timeLeft.days}</div>
        <div className="text-sm">Days</div>
      </div>
      <div className="bg-rose-100 rounded-2xl p-4 shadow">
        <div className="text-2xl font-bold">{timeLeft.hours}</div>
        <div className="text-sm">Hours</div>
      </div>
      <div className="bg-purple-100 rounded-2xl p-4 shadow">
        <div className="text-2xl font-bold">{timeLeft.minutes}</div>
        <div className="text-sm">Minutes</div>
      </div>
      <div className="bg-pink-200 rounded-2xl p-4 shadow"> 
        <div className="text-2xl font-bold">{timeLeft.seconds}</div>
        <div className="text-sm">Seconds</div>
      </div>
      
    </div>

    {/* photo gallery placeholders */}
    <h2 className="text-2xl font-semibold text-pink-500 mb-4">Our Cute Photos & Memories Mela Bacchaa📸</h2>
    <div className="grid md:grid-cols-2 gap-4 mb-6">
      {photos.map((src, i) => (
        <img key={i} src={src} alt="couple memory" className="w-full h-56 object-cover rounded-3xl shadow-lg" />
      ))}
    </div>
    <div className="grid md:grid-cols-2 gap-4 mb-8 text-left">
      {memories.map((item, i) => (
        <div key={i} className="bg-white rounded-2xl p-4 shadow border border-pink-100">
          {item}
        </div>
      ))}
    </div>

    {/* music button */}
    <audio autoPlay loop>
      <source src="<source src="https://drive.google.com/uc?export=download&id=1FC61Ep6p0MK3YagAFu0vpF-07mwCg7jo" type="audio/mpeg" />
    </audio>

    <button
      onClick={() => alert("🎵 Aapke liye romantic song dedicate kiya gaya hai mela bacchaa❤️")}
      className="px-6 py-3 rounded-2xl bg-purple-500 text-white text-lg font-semibold shadow-lg hover:scale-105 transition mr-3"
    >
      Play Love Song 🎶
    </button>

    {/* surprise button */}
    <button
      onClick={() => alert("Surprise 🎊 I Love You So Much Meri Biwi Jii ❤️")}
      className="px-6 py-3 rounded-2xl bg-pink-500 text-white text-lg font-semibold shadow-lg hover:scale-105 transition"
    >
      Tap for Final Surprise ✨
    </button>

    <div className="mt-8 grid md:grid-cols-2 gap-4 mb-6">
      <div className="p-4 rounded-2xl bg-white shadow border border-rose-100">
        ⏳ Midnight Countdown: <span className="font-bold">12:00 AM Surprise</span>
      </div>
      <div className="p-4 rounded-2xl bg-white shadow border border-rose-100">
        🔗 Custom Surprise Link: <span className="font-bold">{customLink}</span>
      </div>
    </div>

    {showGift && (
      <div className="mb-6 p-6 rounded-3xl bg-yellow-50 border-2 border-dashed border-yellow-300 shadow-xl animate-bounce">
        🎉 Happy Birthday Mela Pyala Bacchaaa😚❤️🎂<br/>
        <button
          onClick={() => alert("🎁 Surprise Gift: I Love You Forever Meri Biwi Jii ❤️")}
          className="mt-4 px-6 py-3 rounded-2xl bg-pink-500 text-white font-bold"
        >
          Open Your Gift 🎁
        </button>
      </div>
    )}

    <div className="text-5xl mb-6 animate-pulse">🎊 🎉 🌹</div>

    <div className="mt-8 p-4 rounded-2xl border-2 border-dashed border-pink-300 bg-pink-50">
      🎂 Birthday Date: <span className="font-bold">{birthdayDate}</span><br/>🎶 Song: <span className="font-bold">{songName}</span><br/><br/>🔐 Secret Love Note: "Tum meri zindagi ka sabse khoobsurat gift ho ❤️"
    </div>
  </div>
</div>

); }
