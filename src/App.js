import React from 'react';
import './style.css';

export default function App() {
  const N = 9;
  return (
    <div>
      {new Array(N).fill(0).map((_, i) => {
        return (
          <div class="grid">
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
  );
}
