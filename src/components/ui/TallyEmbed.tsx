import { useEffect, useRef } from 'react'

interface TallyEmbedProps {
  formId: string
  height?: number
  className?: string
}

const TallyEmbed = ({ formId, height = 500, className = '' }: TallyEmbedProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    // Load Tally script if not already loaded
    if (!document.querySelector('script[src*="tally.so"]')) {
      const script = document.createElement('script')
      script.src = 'https://tally.so/widgets/embed.js'
      script.async = true
      document.head.appendChild(script)
    }
  }, [])

  return (
    <div className={`w-full ${className}`}>
      <iframe
        ref={iframeRef}
        src={`https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&hideBranding=1`}
        width="100%"
        height={height}
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="Contact Form"
        className="rounded-lg"
        style={{
          border: 'none',
          outline: 'none'
        }}
      />
      
      {/* CSS to hide any remaining Tally branding */}
      <style>{`
        iframe {
          border: none !important;
        }
        /* Hide any Tally branding that might appear */
        iframe::after {
          display: none !important;
        }
      `}</style>
    </div>
  )
}

export default TallyEmbed

