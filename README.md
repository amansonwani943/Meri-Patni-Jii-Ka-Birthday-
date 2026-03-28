import { useEffect, useState } from "react";

export default function BirthdayWishWebsite() { const name = "Meri Dharm Patni Jii 😚💗"; const customLink = "swastika-love-surprise.vercel.app"; const birthdayDate = "12 April 2026"; const songName = "Perfect - Our Special Song 🎶";

const photos = [ "https://drive.google.com/uc?export=view&id=1dCllkGufaA-9Uu1SOxgGLtKC2qZEXVjl", "https://drive.google.com/uc?export=view&id=1QU7AeSbRlaugruhEqV0ll5KP3jQcKTGV", ];

const memories = [ "Jab hum pehli baar mile 💕", "Hamari sabse pyari selfie 📸", "Hamari special date night 🌙", "Aaj meri pyari patni jii ka birthday 🎂", ];

const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 }); const [showGift, setShowGift] = useState(false);

useEffect(() => { const target = new Date("2026-04-12T00:00:00").getTime(); const timer = setInterval(() => { const now = new Date().getTime(); const diff = target - now;

if (diff > 0) {
    setTimeLeft({
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    });
  } else {
    setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    setShowGift(true);
  }
}, 1000);

return () => clearInterval(timer);

}, []);

return ( <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 p-6 flex items-center justify-center"> <div className="max-w-5xl w-full bg-white/80 backdrop-blur rounded-3xl shadow-2xl p-8 text-center border border-pink-200"> <div className="text-6xl mb-4 animate-bounce">🎂</div> <h1 className="text-5xl font-bold text-pink-600 mb-4">Happy Birthday {name}</h1>

<audio autoPlay loop>
      <source src="https://drive.google.com/uc?export=download&id=1FC61Ep6p0MK3YagAFu0vpF-07mwCg7jo" type="audio/mpeg" />
    </audio>

    <p className="text-lg text-gray-700 mb-8 leading-8">
      Happy Birthday meri pyari Dharm Patni Jii ❤️ Aap meri zindagi ki sabse
      pyari khushi ho. Aapki smile meri duniya roshan kar deti hai meri
      pyari ardhangini jii ✨ Shri ji aapko hamesha khush rakhe aur hamara
      saath hamesha aise hi bana rahe 💖
    </p>

    <div className="grid grid-cols-4 gap-4 mb-8">
      <div className="bg-pink-100 rounded-2xl p-4 shadow"><div className="text-2xl font-bold">{timeLeft.days}</div><div>Days</div></div>
      <div className="bg-rose-100 rounded-2xl p-4 shadow"><div className="text-2xl font-bold">{timeLeft.hours}</div><div>Hours</div></div>
      <div className="bg-purple-100 rounded-2xl p-4 shadow"><div className="text-2xl font-bold">{timeLeft.minutes}</div><div>Minutes</div></div>
      <div className="bg-pink-200 rounded-2xl p-4 shadow"><div className="text-2xl font-bold">{timeLeft.seconds}</div><div>Seconds</div></div>
    </div>

    <h2 className="text-2xl font-semibold text-pink-500 mb-4">Our Cute Photos & Memories 📸</h2>
    <div className="grid md:grid-cols-2 gap-4 mb-8">
      {photos.map((src, i) => (
        <img key={i} src={src} alt="memory" className="w-full h-64 object-cover rounded-3xl shadow-lg" />
      ))}
    </div>

    <div className="grid md:grid-cols-2 gap-4 mb-8 text-left">
      {memories.map((item, i) => (
        <div key={i} className="bg-pink-50 rounded-2xl p-4 shadow border border-pink-100">
          {item}
        </div>
      ))}
    </div>

    {showGift && (
      <div className="mb-6 p-6 rounded-3xl bg-yellow-50 border-2 border-dashed border-yellow-300 animate-bounce">
        🎉 Happy Birthday Meri Pyari Dharm Patni Jii 😚❤️🎂
        <button
          onClick={() => alert("🎁 Surprise Gift: I Love You Forever Meri Pyari Patni Jii ❤️")}
          className="block mx-auto mt-4 px-6 py-3 rounded-2xl bg-pink-500 text-white font-bold"
        >
          Open Your Gift 🎁
        </button>
      </div>
    )}

    <div className="mt-6 text-lg">🎂 {birthdayDate}</div>
    <div className="mt-2 text-lg">🎶 {songName}</div>
    <div className="mt-2 text-sm text-gray-500">🔗 {customLink}</div>
  </div>
</div>

); }
