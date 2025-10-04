import type { HTMLAttributes } from 'preact'

type Props = HTMLAttributes<SVGSVGElement>

export default (props: Props) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 354 355' {...props}>
    <defs>
      <radialGradient id='logo-small-glow' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(177 177) rotate(90) scale(142)'>
        <stop offset='0.29' stop-color='currentColor' />
        <stop offset='1' stop-color='currentColor' stop-opacity='0' />
      </radialGradient>

      <radialGradient
        id='logo-small-ring'
        cx='0'
        cy='0'
        r='1'
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(179.126 175.026) rotate(46.3171) scale(42.8348 42.8137)'
      >
        <stop stop-color='#fffb00' />
        <stop offset='0.25745' stop-color='#e6a205' />
        <stop offset='0.662275' stop-color='#af2c00' />
      </radialGradient>

      <linearGradient id='logo-small-ray-0' x1='194.153' y1='209.99' x2='193.49' y2='348.489' gradientUnits='userSpaceOnUse'>
        <stop offset='0.163293' stop-color='currentColor' />
        <stop offset='0.965' stop-color='#234eab' />
        <stop offset='1' stop-color='#02194b' />
      </linearGradient>
      <linearGradient id='logo-small-ray-1' x1='158.421' y1='144.218' x2='159.083' y2='5.71936' gradientUnits='userSpaceOnUse'>
        <stop offset='0.163293' stop-color='currentColor' />
        <stop offset='0.965' stop-color='#234eab' />
        <stop offset='1' stop-color='#02194b' />
      </linearGradient>
      <linearGradient id='logo-small-ray-2' x1='210.499' y1='159.756' x2='348.999' y2='159.756' gradientUnits='userSpaceOnUse'>
        <stop offset='0.163293' stop-color='currentColor' />
        <stop offset='0.965' stop-color='#234eab' />
        <stop offset='1' stop-color='#02194b' />
      </linearGradient>
      <linearGradient id='logo-small-ray-3' x1='143.501' y1='194.466' x2='5.00067' y2='194.466' gradientUnits='userSpaceOnUse'>
        <stop offset='0.163293' stop-color='currentColor' />
        <stop offset='0.965' stop-color='#234eab' />
        <stop offset='1' stop-color='#02194b' />
      </linearGradient>

      <linearGradient id='logo-small-chunk-0' x1='283.434' y1='309.419' x2='223.25' y2='243.13' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#234eac' />
        <stop offset='1' stop-color='#3ab0ed' />
      </linearGradient>
      <linearGradient id='logo-small-chunk-1' x1='69.1397' y1='44.7889' x2='129.323' y2='111.078' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#234eac' />
        <stop offset='1' stop-color='#3ab0ed' />
      </linearGradient>
      <linearGradient id='logo-small-chunk-2' x1='309.5' y1='70' x2='243.5' y2='130.5' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#234eac' />
        <stop offset='1' stop-color='#3ab0ed' />
      </linearGradient>
      <linearGradient id='logo-small-chunk-3' x1='44.5' y1='284.222' x2='110.5' y2='223.722' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#234eac' />
        <stop offset='1' stop-color='#3ab0ed' />
      </linearGradient>

      <linearGradient id='logo-small-overlay-0' x1='340.11' y1='272.69' x2='207.384' y2='215.054' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#296abe' />
        <stop offset='0.07' stop-color='#2969bc' />
        <stop offset='1' stop-color='#2452ae' />
      </linearGradient>
      <linearGradient id='logo-small-overlay-1' x1='12.4634' y1='81.5182' x2='145.189' y2='139.154' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#296abe' />
        <stop offset='0.07' stop-color='#2969bc' />
        <stop offset='1' stop-color='#2452ae' />
      </linearGradient>
      <linearGradient id='logo-small-overlay-2' x1='272.5' y1='13.5' x2='215.5' y2='146.5' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#296abe' />
        <stop offset='0.07' stop-color='#2969bc' />
        <stop offset='1' stop-color='#2452ae' />
      </linearGradient>
      <linearGradient id='logo-small-overlay-3' x1='81.5' y1='340.722' x2='138.5' y2='207.722' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#296abe' />
        <stop offset='0.07' stop-color='#2969bc' />
        <stop offset='1' stop-color='#2452ae' />
      </linearGradient>
    </defs>

    <rect x='35' y='35' width='284' height='284' rx='142' fill='url(#logo-small-glow)' />

    <rect x='158.553' y='154.443' width='41.147' height='41.1673' rx='12' transform='rotate(6.04695 158.553 154.443)' fill='url(#logo-small-ring)' />

    <path
      d='M172.909 209.889L188.904 210.965C188.904 210.965 189.404 210.968 188.901 211.465C228.535 288.156 223.344 328.132 173.746 348.394C173.246 348.392 173.746 348.395 173.749 347.894C218.875 321.61 214.542 286.589 172.906 210.389C172.409 209.887 172.909 209.889 172.909 209.889Z'
      fill='url(#logo-small-ray-0)'
    />
    <path
      d='M179.665 144.319L163.67 143.243C163.67 143.243 163.17 143.24 163.672 142.743C124.039 66.0518 129.23 26.0762 178.827 5.81385C179.327 5.81556 178.827 5.81318 178.825 6.31385C133.699 32.5976 138.031 67.6187 179.667 143.819C180.165 144.321 179.665 144.319 179.665 144.319Z'
      fill='url(#logo-small-ray-1)'
    />
    <path
      d='M210.499 181L211.499 165C211.499 165 211.5 164.5 211.999 165C288.5 125 328.5 130 348.999 179.5C349 180 349 179.5 348.499 179.5C322 134.5 287 139 210.999 181C210.5 181.5 210.499 181 210.499 181Z'
      fill='url(#logo-small-ray-2)'
    />
    <path
      d='M143.501 173.222L142.501 189.222C142.501 189.222 142.5 189.722 142.001 189.222C65.5001 229.222 25.5 224.222 5.00072 174.722C5.00003 174.222 5.00005 174.722 5.50072 174.722C32 219.722 67 215.222 143.001 173.222C143.5 172.722 143.501 173.222 143.501 173.222Z'
      fill='url(#logo-small-ray-3)'
    />

    <path
      d='M183.724 352.943C229.296 338.16 241.506 294.218 217.265 240.102L217.267 239.602C301.374 182.736 330.905 179.978 337.211 251.676L337.208 252.176C307.412 314.034 246.231 351.742 183.222 353.44L183.724 352.943Z'
      fill='url(#logo-small-chunk-0)'
    />
    <path
      d='M168.849 1.26535C123.278 16.0475 111.067 59.9896 135.309 114.106L135.307 114.606C51.1997 171.472 21.669 174.23 15.3629 102.532L15.3653 102.032C45.1615 40.1741 106.343 2.46637 169.351 0.76775L168.849 1.26535Z'
      fill='url(#logo-small-chunk-1)'
    />
    <path
      d='M353.5 169.5C338.5 124 294.5 112 240.5 136.5H240C182.732 52.6661 179.833 23.149 251.5 16.5H252C314 46 352 107 354 170L353.5 169.5Z'
      fill='url(#logo-small-chunk-2)'
    />
    <path
      d='M0.499985 184.722C15.5 230.222 59.5 242.222 113.5 217.722H114C171.268 301.556 174.167 331.073 102.5 337.722H102C40 308.222 1.99998 247.222 -1.52588e-05 184.222L0.499985 184.722Z'
      fill='url(#logo-small-chunk-3)'
    />

    <path
      d='M218.748 243.609L205.392 213.545L205.894 213.047C270.034 183.854 335.77 134.667 344.27 239.209C344.167 260.709 343.134 267.704 339.034 288.685C338.526 290.182 338.531 289.183 338.531 289.183C338.419 225.086 318.939 203.856 298.424 206.99C273.405 210.811 250.819 228.762 218.748 243.609Z'
      fill='url(#logo-small-overlay-0)'
    />
    <path
      d='M133.826 110.599L147.182 140.663L146.68 141.161C82.5393 170.354 16.8032 219.541 8.30322 114.998C8.40606 93.499 9.43953 86.5035 13.5399 65.5228C14.0471 64.0256 14.0423 65.0252 14.0423 65.0252C14.1542 129.122 33.6344 150.351 54.1496 147.218C79.1681 143.397 101.754 125.446 133.826 110.599Z'
      fill='url(#logo-small-overlay-1)'
    />
    <path
      d='M244 135L214 148.5L213.5 148C184 84 134.5 18.5 239 9.50003C260.5 9.50003 267.5 10.5 288.5 14.5C290 15 289 15 289 15C224.905 15.4185 203.769 35 207 55.5C210.941 80.5 229 103 244 135Z'
      fill='url(#logo-small-overlay-2)'
    />
    <path
      d='M110 219.222L140 205.722L140.5 206.222C170 270.222 219.5 335.722 115 344.722C93.5 344.722 86.4997 343.722 65.4997 339.722C64 339.222 64.9997 339.222 64.9997 339.222C129.095 338.804 150.231 319.222 147 298.722C143.059 273.722 125 251.222 110 219.222Z'
      fill='url(#logo-small-overlay-3)'
    />
  </svg>
)
