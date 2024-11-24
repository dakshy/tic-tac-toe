import React, { useState } from 'react';
import { Board } from './components/Board';
import { GameStatus } from './components/GameStatus';
import { motion } from 'framer-motion';
import { Gamepad2 } from 'lucide-react';

function calculateWinner(squares: (string | null)[]) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
  ];

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: [a, b, c] };
    }
  }
  return null;
}

export default function App() {
  const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winnerInfo = calculateWinner(squares);
  const winner = winnerInfo?.winner;
  const winningLine = winnerInfo?.line || null;

  const handleClick = (i: number) => {
    if (winner || squares[i]) return;

    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  let status = winner
    ? `Winner: ${winner}`
    : squares.every(square => square)
    ? 'Game Draw!'
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 flex flex-col items-center justify-center p-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(63,0,113,0.1),rgba(0,0,0,0))]" />
      <motion.div 
        className="relative max-w-md w-full space-y-8 flex flex-col items-center"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="text-center mb-6">
          <motion.div 
            className="flex items-center justify-center gap-2 mb-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <Gamepad2 className="w-8 h-8 text-purple-400" />
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400">
              Tic Tac Toe
            </h1>
          </motion.div>
        </div>

        <div className="space-y-6">
          <Board 
            squares={squares}
            onClick={handleClick}
            winningLine={winningLine}
          />
          <GameStatus 
            status={status}
            onReset={resetGame}
          />
        </div>
      </motion.div>
    </div>
  );
}