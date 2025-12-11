import React from 'react'
import JSXParser from 'react-jsx-parser'

import HamburgerButton from './HamburgerButton'
import HamburgerButtonSourceCodeRaw from './HamburgerButton.tsx?raw'

const usageCodeRaw = `
<div style={{ display: 'flex', gap: '40px', transform: 'scale(2)' }}>
  <HamburgerButton isOpen={false} />
</div>
`.trim()

const ComponentInstance = (
  <JSXParser components={{ HamburgerButton }} jsx={usageCodeRaw} />
)

const HamburgerButton_Config = {
  key: 'HamburgerButton',
  Name: 'HamburgerButton',
  ComponentUsageCodeRaw: usageCodeRaw,
  ComponentDefinitionCodeRaw: HamburgerButtonSourceCodeRaw,
  ComponentInstance,
  dependencies: { React, HamburgerButton }
}

export default HamburgerButton_Config
