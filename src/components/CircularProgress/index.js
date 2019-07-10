import React from 'react'

export default props => (
  <div style={{ width: '100%', textAlign: 'center' }}>
    <svg
      height={120}
      viewBox='0 0 100 100'
      preserveAspectRatio='xMidYMid'
      style={{ background: 'none' }}
      {...props}
    >
      <circle
        cx='50'
        cy='50'
        fill='none'
        r='20'
        stroke='hsla(211,  61%, 43%, 1)'
        strokeWidth='5'
      />
      <circle
        cx='50'
        cy='50'
        fill='none'
        r='20'
        stroke='#ffffff'
        strokeWidth='4'
        strokeLinecap='square'
        transform='rotate(146.131 50 50)'
      >
        <animateTransform
          attributeName='transform'
          type='rotate'
          calcMode='linear'
          values='0 50 50;180 50 50;720 50 50'
          keyTimes='0;0.5;1'
          dur='2.9s'
          begin='0s'
          repeatCount='indefinite'
        />
        <animate
          attributeName='stroke-dasharray'
          calcMode='linear'
          values='12.566370614359172 113.09733552923255;62.83185307179586 62.83185307179586;12.566370614359172 113.09733552923255'
          keyTimes='0;0.5;1'
          dur='2.9'
          begin='0s'
          repeatCount='indefinite'
        />
      </circle>
    </svg>
  </div>
)
