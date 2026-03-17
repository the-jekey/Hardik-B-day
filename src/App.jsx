import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import FloatingHearts from "./FloatingHearts";

export default function App() {

       const [page, setPage] = useState(1)
       const [open, setOpen] = useState(false)
       const [cake, setCake] = useState(false)

       const [hearts, setHearts] = useState([])
       const [noPos, setNoPos] = useState({ top: "60%", left: "55%" })

       const [size, setSize] = useState({
              width: window.innerWidth,
              height: window.innerHeight
       })

       /* Responsive Confetti Fix */
       useEffect(() => {
              const handleResize = () => {
                     setSize({
                            width: window.innerWidth,
                            height: window.innerHeight
                     })
              }
              window.addEventListener("resize", handleResize)
              return () => window.removeEventListener("resize", handleResize)
       }, [])

       /* Cursor Hearts (optimized) */
       function handleMouseMove(e) {
              const heart = {
                     x: e.clientX,
                     y: e.clientY,
                     id: Date.now()
              }
              setHearts(prev => [...prev.slice(-8), heart])
       }

       /* Move No Button (mobile fix) */
       function moveNo() {
              setNoPos({
                     top: `${Math.random() * 60}%`,
                     left: `${Math.random() * 60}%`
              })
       }

       /* Photos */
       const photos = [
              "/Image-1.jpeg",
              "/Image-2.jpeg",
              "/Image-3.jpeg",
              "/Image-4.jpeg",
       ]

       return (

              <div
                     onMouseMove={handleMouseMove}
                     className="min-h-screen flex items-center justify-center text-center p-4 sm:p-6 relative overflow-hidden bg-gradient-to-b from-black via-purple-900 to-black text-white"
              >
                     <div className="">
                            <FloatingHearts />
                     </div>
                     {/* Music (safe autoplay) */}
                     <audio src="/Bday.mp3" loop autoPlay muted />

                     {/* Hearts */}
                     {hearts.map(h => (
                            <motion.div
                                   key={h.id}
                                   initial={{ opacity: 1, scale: 1 }}
                                   animate={{ opacity: 0, scale: 2 }}
                                   transition={{ duration: 0.5 }}
                                   style={{ position: "absolute", top: h.y, left: h.x, pointerEvents: "none" }}
                            >
                                   💖
                            </motion.div>
                     ))}

                     {/* Stars */}
                     <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>

                     {/* PAGE 1 */}
                     {page === 1 && (
                            <div className="z-10 max-w-md">

                                   <h1 className="text-3xl sm:text-5xl font-bold text-pink-400 mb-6">
                                          Happy Birthday Nisha 🎂
                                   </h1>

                                   <p className="text-sm sm:text-lg">
                                          You are the most beautiful part of my life ❤️
                                   </p>

                                   <button
                                          className="mt-6 bg-pink-500 px-6 py-3 rounded-xl"
                                          onClick={() => setPage(2)}
                                   >
                                          Start Surprise
                                   </button>

                            </div>
                     )}

                     {/* PAGE 2 */}
                     {page === 2 && (
                            <div className="z-10 max-w-md">

                                   <h2 className="text-2xl sm:text-4xl mb-6">
                                          Our Memories 📸
                                   </h2>

                                   <div className="grid grid-cols-2 gap-3 sm:gap-4">

                                          {photos.map((p, i) => (
                                                 <img key={i} src={p} className="rounded-xl shadow" />
                                          ))}

                                   </div>

                                   <button
                                          className="mt-6 bg-purple-500 px-6 py-3 rounded-xl"
                                          onClick={() => setPage(3)}
                                   >
                                          Next
                                   </button>

                            </div>
                     )}

                     {/* PAGE 3 GIFT */}
                     {page === 3 && (
                            <div className="z-10 max-w-md">

                                   <h2 className="text-2xl sm:text-4xl mb-6">
                                          Open Your Gift 🎁
                                   </h2>

                                   {!open ? (
                                          <div
                                                 onClick={() => setOpen(true)}
                                                 className="text-6xl sm:text-7xl cursor-pointer"
                                          >
                                                 🎁
                                          </div>
                                   ) : (
                                          <div>

                                                 <p className="text-sm sm:text-lg">
                                                        Nisha, you are my happiness and best friend ❤️
                                                 </p>

                                                 <button
                                                        className="mt-6 bg-pink-500 px-6 py-3 rounded-xl"
                                                        onClick={() => setPage(4)}
                                                 >
                                                        Next
                                                 </button>

                                          </div>
                                   )}

                            </div>
                     )}

                     {/* PAGE 4 QUESTION */}
                     {page === 4 && (
                            <div className="relative z-10 h-40 max-w-md">

                                   <h2 className="text-2xl sm:text-4xl mb-6">
                                          Best Friend Forever? ❤️
                                   </h2>

                                   <button
                                          className="bg-green-500 px-6 py-3 rounded-xl"
                                          onClick={() => setPage(5)}
                                   >
                                          Yes 💖
                                   </button>

                                   <button
                                          onMouseEnter={moveNo}
                                          onClick={moveNo}
                                          style={{ position: "absolute", top: noPos.top, left: noPos.left }}
                                          className="bg-red-500 px-6 py-3 rounded-xl"
                                   >
                                          No 😅
                                   </button>

                            </div>
                     )}

                     {/* PAGE 5 CAKE */}
                     {page === 5 && (
                            <div className="z-10 max-w-md">

                                   {cake && <Confetti width={size.width} height={size.height} />}

                                   <h2 className="text-2xl sm:text-4xl mb-6">
                                          Cut the Cake 🎂
                                   </h2>

                                   <div
                                          onClick={() => setCake(true)}
                                          className="text-6xl sm:text-8xl cursor-pointer"
                                   >
                                          🎂
                                   </div>

                                   {cake && (
                                          <button
                                                 className="mt-6 bg-purple-500 px-6 py-3 rounded-xl"
                                                 onClick={() => setPage(6)}
                                          >
                                                 Next
                                          </button>
                                   )}

                            </div>
                     )}

                     {/* 😝 PAGE 6 FUN IRRITATION */}
                     {page === 6 && (
                            <div className="z-10 max-w-md">

                                   <h2 className="text-2xl sm:text-4xl mb-6 text-pink-400">
                                          Waittt 😝
                                   </h2>

                                   <p className="text-sm sm:text-lg mb-4">
                                          इतनी जल्दी क्या है? 😆
                                          थोड़ा patience रखो 😂
                                          तुम हमेशा hurry में रहती हो 😝
                                   </p>

                                   <p className="text-purple-300 font-bold">
                                          Okay okay… अब दिखाता हूँ 💖
                                   </p>

                                   <button
                                          className="mt-6 bg-pink-500 px-6 py-3 rounded-xl"
                                          onClick={() => setPage(7)}
                                   >
                                          Continue 😏
                                   </button>

                            </div>
                     )}

                     {/* 🎥 PAGE 7 VIDEO */}
                     {page === 7 && (
                            <div className="z-10 max-w-md">

                                   <h2 className="text-2xl sm:text-4xl mb-6">
                                          A Special Video 🎥
                                   </h2>

                                   <video
                                          src="/Video-1.mp4"
                                          controls
                                          className="rounded-xl w-full shadow"
                                   />

                                   <button
                                          className="mt-6 bg-purple-500 px-6 py-3 rounded-xl"
                                          onClick={() => setPage(8)}
                                   >
                                          Final
                                   </button>

                            </div>
                     )}

                     {/* PAGE 8 FINAL */}
                     {page === 8 && (
                            <div className="z-10 max-w-md">

                                   <Confetti width={size.width} height={size.height} />

                                   <h1 className="text-3xl sm:text-5xl text-pink-400 mb-6">
                                          Best Friends Forever 💖
                                   </h1>

                                   <p className="text-sm sm:text-lg">
                                          This surprise is just for you ❤️
                                   </p>

                                   <p className="mt-4">
                                          — Hardik
                                   </p>

                            </div>
                     )}

              </div>
       )
}