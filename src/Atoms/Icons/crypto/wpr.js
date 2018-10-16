import React from 'react'
import withStyle from '../withStyle'

const InnerSvg = (
  <>
    <g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#ffe600" r="16"/><path d="M3.993 5.425a16.096 16.096 0 0 1 2.65-2.405l4.452 15.918 1.973-8.438h3.74l1.972 8.438 2.337-8.438h3.749l.035.15 4.074 14.714a16.092 16.092 0 0 1-2.55 2.775l-3.437-12.41-1.96 7.078-.035.15h-4.186l-1.869-6.932-1.87 6.932H8.882l-.035-.15z" fill="#fff"/></g>
  </>
)

export const CryptoWpr = withStyle(InnerSvg, 32, 32, 'CryptoWpr', true)