import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Sparkles, Gift, Cake, Send } from "lucide-react";

export default function BirthdayCelebration() {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [replyMessage, setReplyMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleSendReply = async () => {
    setIsSending(true);
    setResponseMessage("");
    try {
      const res = await fetch("https://rbdaybackend.onrender.com/send-mail2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: replyMessage }),
      });
      const text = await res.text();
      setResponseMessage(text);
    } catch (err) {
      setResponseMessage("Failed to send message.");
    } finally {
      setIsSending(false);
      setReplyMessage("");
    }
  };

  return (
    <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.3,
        }}
        className="relative mb-4"
      >
        <h1 className="text-2xl sm:text-4xl font-bold text-center text-green-600 mb-3">
          Happy Birthday!!
        </h1>
        <div className="flex justify-center gap-3">
          <Cake className="w-5 h-5 sm:w-7 sm:h-7 text-green-500" />
          <Sparkles className="w-5 h-5 sm:w-7 sm:h-7 text-yellow-500" />
          <Heart className="w-5 h-5 sm:w-7 sm:h-7 text-green-500" />
        </div>
        <h3 className="text-lg sm:text-2xl font-bold text-center text-green-600 mt-3">
          Chinni...
        </h3>
      </motion.div>

      <motion.div
        className="w-full max-w-xs sm:max-w-sm mx-auto my-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div
          className={`relative cursor-pointer transition-all duration-700 ease-in-out transform ${
            isCardOpen ? "rotate-0" : "rotate-2"
          }`}
          onClick={() => setIsCardOpen(!isCardOpen)}
        >
          <div
            className={`bg-gradient-to-r from-green-400 to-purple-500 rounded-xl sm:rounded-2xl p-8 sm:p-12 shadow-lg transition-all duration-700 transform ${
              isCardOpen ? "scale-95" : "scale-100"
            }`}
          >
            <div className="absolute top-2 right-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-200" />
              </motion.div>
            </div>

            <div className="text-center text-white">
              <p className="text-sm sm:text-base font-medium mb-3">
                Tap to {isCardOpen ? "close" : "open"}
              </p>
              <div className="flex justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                >
                  <Gift className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Card content */}
          <AnimatePresence>
            {isCardOpen && (
              <motion.div
                className="absolute inset-0 bg-white rounded-xl sm:rounded-2xl p-3 shadow-xl shadow-rose-100 flex flex-col items-center justify-center"
                initial={{ rotate: 2, rotateX: -90, opacity: 0 }}
                animate={{
                  rotate: 0,
                  rotateX: 0,
                  opacity: 1,
                  zIndex: 10,
                }}
                exit={{ rotateX: -90, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <video
                    src="WhatsApp Video 2025-05-10 at 12.27.03_d5da05a6.mp4"
                    controls
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      <motion.div
        className="w-full max-w-xs sm:max-w-sm mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="text-center">
          <p className="text-xs sm:text-sm text-purple-700 mb-3">
            Just wanted to remind you—you're my favorite person. You make me
            happy by you being happy.. May every wish you make today come true.
            You deserve the world, and I'll always be here to remind you of
            that. Hoping that you will live your entire life in a happy
            bubble...
          </p>
          <div className="flex justify-center items-center gap-2">
            <p className="text-green-600 font-medium">
              Thank you for visiting this small wish!!
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="w-full max-w-xs sm:max-w-sm mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
      >
        <div className="text-center">
          {!showReplyBox ? (
            <button
              onClick={() => setShowReplyBox(true)}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg"
            >
              Reply / Thank You
            </button>
          ) : (
            <div className="flex flex-col gap-3 items-center text-black">
              <textarea
                value={replyMessage}
                onChange={(e) => setReplyMessage(e.target.value)}
                rows={3}
                className="w-full p-2 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
                placeholder="Write your message here..."
              ></textarea>
              <button
                onClick={handleSendReply}
                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow"
              >
                {isSending ? "Sending..." : "Send"}
                <Send className="w-4 h-4" />
              </button>
              {responseMessage && (
                <p className="text-sm text-green-700">{responseMessage}</p>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
