import { motion } from "framer-motion";

export default function FloatingHearts() {

       const hearts = Array.from({ length: 50 });

       return (
              <div className="fixed inset-0 pointer-events-none">

                     {hearts.map((_, i) => (
                            <motion.div
                                   key={i}
                                   initial={{ y: 800, opacity: 0 }}
                                   animate={{ y: -200, opacity: 1 }}
                                   transition={{
                                          duration: 6,
                                          repeat: Infinity,
                                          delay: i * 0.4
                                   }}
                                   className="absolute text-pink-400 text-2xl"
                                   style={{ left: Math.random() * 100 + "%" }}
                            >
                                   💋
                            </motion.div>
                     ))}

              </div>
       )

}