import React from 'react';
import './style.css';

export default function App() {
  const [N, setN] = React.useState(3);
  return (
    <div>
      <button
        onClick={() => {
          if (N > 9) return;
          setN(N + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          if (N < 3) return;
          setN(N - 1);
        }}
      >
        -
      </button>
      <div class="grid">
        {new Array(N).fill(0).map((_, i) => {
          return (
            <div>
              {new Array(N).fill(0).map((_, j) => (
                <div
                  style={{
                    fontSize: 40,
                    textAlign: 'center',
                    width: 80,
                    height: 80,
                  }}
                >
                  {i * N + j}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
