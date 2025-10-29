import React from 'react';
import JSXParser from 'react-jsx-parser';
import CheckBox from './CheckBox';
import CheckBoxSourceCodeRaw from './CheckBox.tsx?raw';
import CheckBoxStyleCodeRaw from './CheckBox.css?raw';

const usageCodeRaw = `
<div style={{ display: 'flex', gap: '20px', transform: 'scale(3)', alignItems: 'center' }}>
  <CheckBox 
    checked={true} 
    disabled={false}
    boxStyle={{
      background: 'transparent',
      border: '2px solid #000000ff',
      width: '30px',
      height: '30px',
      borderRadius: '5px',
    }}
    checkmarkStyle={{
      color: '#000000ff',
      fontSize: '20px',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
    }}
    checkmarkSymbol="✔"
  />
  
  <CheckBox 
    checked={false} 
    disabled={false}
    boxStyle={{
      background: '#000',
      width: '30px',
      height: '30px',
      borderRadius: '5px',
    }}
    checkmarkStyle={{
      color: '#fff',
      fontSize: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
    }}
    checkmarkSymbol="✔"
  />

  <CheckBox 
    checked={true} 
    disabled={false}
    boxStyle={{
      background: '#fff',
      border: '1px solid #000',
      width: '30px',
      height: '30px',
    }}
    checkmarkStyle={{
      color: '#000',
      fontSize: '15px',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
    }}
    checkmarkSymbol="✔"
  />

  <CheckBox 
    checked={true}
    disabled={false}
    boxStyle={{
      background: 'transparent',
      border: '2px solid #000',
      width: '30px',
      height: '30px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    }}
    checkmarkStyle={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',  
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '100%', 
      height: '100%', 
    }}
    checkmarkSymbol="Icon_X"
  />


  <CheckBox 
    checked={false} 
    disabled={false}
    boxStyle={{
      background: 'transparent',
      border: '2px solid #000',
      width: '40px',
      height: '40px',
    }}
    checkmarkStyle={{
      color: '#f00',
      fontSize: '16px',
      fontWeight: 'normal',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
    }}
    checkmarkSymbol="✘"
  />

  <CheckBox 
    checked={false} 
    disabled={true}
    boxStyle={{
      background: 'transparent',
      border: '2px solid #888',
      width: '30px',
      height: '30px',
    }}
    checkmarkStyle={{
      color: '#888',
      fontSize: '18px',
      fontWeight: 'normal',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
    }}
    checkmarkSymbol="X"
  />

  <CheckBox 
    checked={false} 
    disabled={false}
    boxStyle={{
      background: 'transparent',
      border: '3px solid #fff',
      borderRadius: '0',
      width: '30px',
      height: '30px',
      padding: '3px',
    }}
    checkmarkStyle={{
      height: '100%',
      width: '100%',
    }}
    checkmarkSymbol={<div style={{ backgroundColor: '#fff', width: '100%', height: '100%' }} />} 
  />
</div>
`.trim();

const CheckBox_Config = {
  key: 'CheckBox',
  Name: 'CheckBox',
  ComponentUsageCodeRaw: usageCodeRaw,
  ComponentDefinitionCodeRaw: CheckBoxSourceCodeRaw,
  ComponentStyleCodeRaw: CheckBoxStyleCodeRaw,
  ComponentInstance: (
    <JSXParser components={{ CheckBox }} jsx={usageCodeRaw} />
  ),
  dependencies: { React, CheckBox },
};

export default CheckBox_Config;
