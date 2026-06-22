import { useEffect, useState } from 'react'
import QRCode from 'qrcode'
import { Link } from 'react-router-dom'
import { getProgramUrl } from '../utils/siteUrl'

export function QRPrintPage() {
  const programUrl = getProgramUrl()
  const [qrDataUrl, setQrDataUrl] = useState<string | null>(null)

  useEffect(() => {
    void QRCode.toDataURL(programUrl, {
      width: 512,
      margin: 2,
      color: {
        dark: '#1a0a0a',
        light: '#ffffff',
      },
    }).then(setQrDataUrl)
  }, [programUrl])

  const downloadQr = () => {
    if (!qrDataUrl) return

    const link = document.createElement('a')
    link.href = qrDataUrl
    link.download = 'sahasra-arangetram-qr.png'
    link.click()
  }

  return (
    <div className="qr-print">
      <header className="qr-print__header">
        <h1>Event QR Code</h1>
        <p>
          Print this QR code on programs, posters, or table cards. When guests
          scan it with their phone camera (iPhone, Android, or any device), it
          opens the dance program in their browser — no app install needed.
        </p>
      </header>

      <div className="qr-print__card">
        {qrDataUrl ? (
          <img
            src={qrDataUrl}
            alt="QR code linking to the dance program"
            className="qr-print__image"
          />
        ) : (
          <div className="qr-print__loading">Generating QR code…</div>
        )}

        <p className="qr-print__url">{programUrl}</p>

        <button
          type="button"
          className="qr-print__download"
          onClick={downloadQr}
          disabled={!qrDataUrl}
        >
          Download QR Code
        </button>
      </div>

      <section className="qr-print__steps">
        <h2>Before the event</h2>
        <ol>
          <li>Deploy this site online (Vercel, Netlify, etc.) with HTTPS.</li>
          <li>
            Set <code>VITE_SITE_URL</code> to your live URL if it differs from
            where you open this page.
          </li>
          <li>Download and print the QR code.</li>
          <li>Test by scanning with your phone camera.</li>
        </ol>
      </section>

      <Link to="/program" className="back-link">
        ← Preview the program
      </Link>
    </div>
  )
}
