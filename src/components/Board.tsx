import React from 'react';
import { Square } from './Square';
import { motion } from 'framer-motion';

interface BoardProps {
  squares: (string | null)[];
  onClick: (i: number) => void;
  winningLine: number[] | null;
}

export function Board({ squares, onClick, winningLine }: BoardProps) {
  const renderSquare = (i: number) => (
    <Square
      key={i}
      value={squares[i]}
      onClick={() => onClick(i)}
      isWinning={winningLine?.includes(i)}
    />
  );

  return (
    <motion.div 
      className="w-[384px] h-[384px] grid grid-cols-3 gap-3 p-3 rounded-xl 
        bg-gradient-to-br from-purple-500/30 via-pink-500/30 to-rose-500/30
        shadow-lg shadow-purple-500/10 backdrop-blur-sm
        border border-white/10"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {[...Array(9)].map((_, i) => renderSquare(i))}
    </motion.div>
  );
}