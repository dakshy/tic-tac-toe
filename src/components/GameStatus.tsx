import React from 'react';
import { motion } from 'framer-motion';
import { RotateCcw } from 'lucide-react';

interface GameStatusProps {
  status: string;
  onReset: () => void;
}

export function GameStatus({ status, onReset }: GameStatusProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <motion.h2 
        className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        {status}
      </motion.h2>
      <motion.button
        className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 
          hover:from-purple-500/30 hover:to-pink-500/30 flex items-center gap-2"
        onClick={onReset}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <RotateCcw className="w-4 h-4" />
        Reset Game
      </motion.button>
    </div>
  );
}