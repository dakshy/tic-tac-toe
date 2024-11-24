import React from 'react';
import { motion } from 'framer-motion';
import { X, Circle } from 'lucide-react';

interface SquareProps {
  value: string | null;
  onClick: () => void;
  isWinning?: boolean;
}

export function Square({ value, onClick, isWinning }: SquareProps) {
  return (
    <motion.button
      className={`aspect-square w-full rounded-lg flex items-center justify-center text-4xl font-bold
        backdrop-blur-sm transition-colors duration-200
        ${isWinning 
          ? 'bg-gradient-to-br from-green-500/40 to-emerald-500/40 border-2 border-green-400/50' 
          : 'bg-gray-800/50 hover:bg-gray-700/50 border border-white/5'}`}
      onClick={onClick}
      whileHover={{ scale: 0.97 }}
      whileTap={{ scale: 0.95 }}
    >
      {value && (
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {value === 'X' ? (
            <X className="w-16 h-16 text-rose-400" strokeWidth={2.5} />
          ) : (
            <Circle className="w-16 h-16 text-blue-400" strokeWidth={2.5} />
          )}
        </motion.div>
      )}
    </motion.button>
  );
}