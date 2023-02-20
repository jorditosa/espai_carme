import React from 'react'
import CookieConsent from 'react-cookie-consent';
import { BiCookie } from 'react-icons/bi'

function Cookies() {
  return (
    <CookieConsent 
        style={{ background: "#00000088", padding: "10px 0" }}
        buttonStyle={{ background: "#A68A6D", color: "#fff", borderRadius: "50px", padding: "6px 24px"}}
        buttonText="Accepto"
        hideOnAccept="true"
        expires={365}
        >
          <div>
            <BiCookie size={50} />
            <p>
            En aquest web fem servir cookies (pròpies i de tercers) amb les finalitats de treure mètriques per a que funcioni correctament, per mesurar l’audiència i oferir-te continguts personalitzats.
            </p>
          </div>
        </CookieConsent>  
  )
}

export default Cookies