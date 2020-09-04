import sanitize from 'sanitize-html'

export default it =>
`<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="454" height="363" version="1.1">
  <defs>
    <!-- Fonts -->
    <style type="text/css">
      @import url("https://fonts.googleapis.com/css?family=Raleway:600,600italic,800,800italic|Roboto:300,300italic,700,700italic");
      svg > text {
        font-family: Raleway, "Helvetica Neue", Roboto, "Arial Nova", "Segoe UI", "Ubuntu Light", sans-serif;
      }
      tspan {
        font-family: Roboto, "Helvetica Neue", "Arial Nova", "Segoe UI", "Ubuntu Light", sans-serif;
      }
    </style>
  </defs>

  <!-- Icons Path -->
  <symbol id="overall"><path d="M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z"></path></symbol>
  <symbol id="fun" ><path d="M592 192H473.26c12.69 29.59 7.12 65.2-17 89.32L320 417.58V464c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48V240c0-26.51-21.49-48-48-48zM480 376c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm-46.37-186.7L258.7 14.37c-19.16-19.16-50.23-19.16-69.39 0L14.37 189.3c-19.16 19.16-19.16 50.23 0 69.39L189.3 433.63c19.16 19.16 50.23 19.16 69.39 0L433.63 258.7c19.16-19.17 19.16-50.24 0-69.4zM96 248c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm128 128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm0-128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm0-128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm128 128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"></path></symbol>
  <symbol id="innovation"><path d="M437.2 403.5L320 215V64h8c13.3 0 24-10.7 24-24V24c0-13.3-10.7-24-24-24H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h8v151L10.8 403.5C-18.5 450.6 15.3 512 70.9 512h306.2c55.7 0 89.4-61.5 60.1-108.5zM137.9 320l48.2-77.6c3.7-5.2 5.8-11.6 5.8-18.4V64h64v160c0 6.9 2.2 13.2 5.8 18.4l48.2 77.6h-172z"></path></symbol>
  <symbol id="theme"><path d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"></path></symbol>
  <symbol id="graphics"><path d="M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z"></path></symbol>
  <symbol id="audio"><path d="M511.99 32.01c0-21.71-21.1-37.01-41.6-30.51L150.4 96c-13.3 4.2-22.4 16.5-22.4 30.5v261.42c-10.05-2.38-20.72-3.92-32-3.92-53.02 0-96 28.65-96 64s42.98 64 96 64 96-28.65 96-64V214.31l256-75.02v184.63c-10.05-2.38-20.72-3.92-32-3.92-53.02 0-96 28.65-96 64s42.98 64 96 64 96-28.65 96-64l-.01-351.99z"></path></symbol>
  <symbol id="humor"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm141.4 389.4c-37.8 37.8-88 58.6-141.4 58.6s-103.6-20.8-141.4-58.6S48 309.4 48 256s20.8-103.6 58.6-141.4S194.6 56 248 56s103.6 20.8 141.4 58.6S448 202.6 448 256s-20.8 103.6-58.6 141.4zM328 224c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm-160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm194.4 64H133.6c-8.2 0-14.5 7-13.5 15 7.5 59.2 58.9 105 121.1 105h13.6c62.2 0 113.6-45.8 121.1-105 1-8-5.3-15-13.5-15z"></path></symbol>
  <symbol id="mood" ><path d="M320.2 243.8l-49.7 99.4c-6 12.1-23.4 11.7-28.9-.6l-56.9-126.3-30 71.7H60.6l182.5 186.5c7.1 7.3 18.6 7.3 25.7 0L451.4 288H342.3l-22.1-44.2zM473.7 73.9l-2.4-2.5c-51.5-52.6-135.8-52.6-187.4 0L256 100l-27.9-28.5c-51.5-52.7-135.9-52.7-187.4 0l-2.4 2.4C-10.4 123.7-12.5 203 31 256h102.4l35.9-86.2c5.4-12.9 23.6-13.2 29.4-.4l58.2 129.3 49-97.9c5.9-11.8 22.7-11.8 28.6 0l27.6 55.2H481c43.5-53 41.4-132.3-7.3-182.1z"></path></symbol>

  <!-- Widget -->
  <rect x="0" y="0" rx="12" ry="12" width="454" height="363" fill="#1f2429" />

  <!-- Title -->
  <text x="25" y="112" font-size="24" fill="#d0d0d8" font-weight="800">${sanitize(it.game)}</text>

  <!-- Error Message -->
  <text transform="translate(1, 0)" x="25" y="140" font-size="16px" font-weight="300" fill="#d0d0d8"><tspan>${it.error || ''}</tspan></text>

  <!-- Logo -->
  ${!it.error ? '<a xlink:href="' + it.link + '" target="_blank" rel="noopener noreferrer" xlink:title="View Ludum Dare Page">' : ''}
    <g transform="scale(0.5, 0.5) translate(17, 28)">
      <g transform="translate(24,30)" fill="#e53">
        <path d="M34.014 49.809c-2.43 0-4.86-1.956-4.86-5.866V1.758L0 1.89v45.728C0 69.238 16.284 80.1 32.569 80.1h25.083V49.809zM98.32 48.37c0 7.82-9.72 7.82-9.72 0V17.42H60.892v32.066c0 43.239 65.137 43.239 65.137 0V17.421H98.321V48.37zm69.42-46.48v13.56l-6 .19c-18.182.163-32.769 14.954-32.769 33.176 0 18.324 14.747 33.184 33.07 33.184 18.324 0 33.184-14.86 33.184-33.184V1.891h-27.484zm-6 41.245h6v5.681c0 3.129-2.458 5.7-5.698 5.7-3.129 0-5.586-2.571-5.586-5.7 0-3.026 2.302-5.522 5.285-5.681zm74.058 5.235c0 7.82-9.72 7.82-9.72 0V17.42h-27.709v32.066c0 43.239 65.138 43.239 65.138 0V17.421h-27.709V48.37zm93.665 0c0-6.927 8.715-6.816 8.715-.112v31.843h27.485V47.14c0-22.904-16.536-31.73-32.178-31.62-6.145.113-12.96 2.347-17.318 7.04-5.028-5.028-11.396-7.04-17.653-7.04-15.53 0-31.842 8.157-31.842 31.62V80.1h27.485V48.258c0-6.704 8.603-6.815 8.603.112V80.1h26.703V48.37z"></path>
      </g>
      <g fill="#f79122" transform="translate(410,30)" >
        <path d="M0 80.1h33.094c50.5 0 50.5-78.209 0-78.209H0zm28.938-30.278V31.834h4.714c9.944 0 10.056 17.988 0 17.988z"></path>
        <path d="M105.539 15.521c-12.56-.178-24.714 7.778-29.604 19.342-5.112 11.395-2.77 25.632 5.793 34.74 6.416 7.138 16.109 10.971 25.66 10.487h3.626v.01h26.814c-.04-11.456.083-22.914-.066-34.367-.646-12.787-9.736-24.557-21.893-28.518a32.221 32.221 0 0 0-10.33-1.693zm-.13 26.727c2.358.016 4.74 1.482 5.358 3.928.36 2.373.271 4.79.235 7.201-2.176.014-4.352.016-6.52-.082-4.24-.616-6.087-6.505-2.91-9.408 1.013-1.136 2.42-1.649 3.836-1.639zm65.319-24.827c-17.54 0-29.83 11.508-29.83 29.05V80.1h27.484V49.353c0-3.437 2.162-5.676 5.676-5.676h6.614V17.421zm44.811-1.9c-12.56-.178-24.713 7.777-29.603 19.342-5.148 11.468-2.734 25.81 5.949 34.916 6.449 7.081 16.137 10.83 25.663 10.32h30.28l-23.926-26.73h23.947v-5.535c0-10.917-5.792-21.742-15.212-27.439-5.092-3.194-11.09-4.884-17.098-4.874zm0 26.704c4.091-.167 7.078 4.863 4.846 8.35-1.945 3.884-8.094 3.452-9.85-.361-1.68-3.44 1.047-8.1 5.004-7.99z"></path>
      </g>
    </g>
  ${!it.error ? '</a>' : ''}

  ${it.error ? '<!--' : ''}
  <g transform="translate(30, 138) scale(0.032, 0.032)" fill="#d0d0d8" >
    <use width="600" height="600" href="#overall" />
    <use width="600" height="600" href="#fun" y="775"/>
    <use width="600" height="600" href="#innovation" y="1600"/>
    <use width="600" height="600" href="#theme" y="2450"/>
    <use width="600" height="600" href="#graphics" y="3300"/>
    <use width="600" height="600" href="#audio" y="4125"/>
    <use width="600" height="600" href="#humor" y="4925"/>
    <use width="600" height="600" href="#mood" y="5750"/>
  </g>
  ${it.error ? '-->' : ''}

  <!-- Categories -->
  <text transform="translate(10, 0)" x="61" y="126" font-size="16px" fill="#d0d0d8">
    <tspan font-weight="300" x="61" dy="1.63em">${sanitize(it.stats[0].category)}</tspan>
    <tspan font-weight="300" x="61" dy="1.63em">${sanitize(it.stats[1].category)}</tspan>
    <tspan font-weight="300" x="61" dy="1.63em">${sanitize(it.stats[2].category)}</tspan>
    <tspan font-weight="300" x="61" dy="1.63em">${sanitize(it.stats[3].category)}</tspan>
    <tspan font-weight="300" x="61" dy="1.63em">${sanitize(it.stats[4].category)}</tspan>
    <tspan font-weight="300" x="61" dy="1.63em">${sanitize(it.stats[5].category)}</tspan>
    <tspan font-weight="300" x="61" dy="1.63em">${sanitize(it.stats[6].category)}</tspan>
    <tspan font-weight="300" x="61" dy="1.63em">${sanitize(it.stats[7].category)}</tspan>
  </text>

  <!-- Placement -->
  <text x="153" y="126" font-size="16px" fill="#d0d0d8">
    <tspan x="153" dy="1.63em" font-weight="800">${sanitize(it.stats[0].grade)}</tspan>
    <tspan dx="-0.3em" dy="-0.6em" font-weight="300" font-size="12px">${sanitize(it.stats[0].ith)}</tspan>
    <tspan x="153" dy="2.08em" font-weight="800">${sanitize(it.stats[1].grade)}</tspan>
    <tspan dx="-0.3em" dy="-0.6em" font-weight="300" font-size="12px">${sanitize(it.stats[1].ith)}</tspan>
    <tspan x="153" dy="2.08em" font-weight="800">${sanitize(it.stats[2].grade)}</tspan>
    <tspan dx="-0.3em" dy="-0.6em" font-weight="300" font-size="12px">${sanitize(it.stats[2].ith)}</tspan>
    <tspan x="153" dy="2.08em" font-weight="800">${sanitize(it.stats[3].grade)}</tspan>
    <tspan dx="-0.3em" dy="-0.6em" font-weight="300" font-size="12px">${sanitize(it.stats[3].ith)}</tspan>
    <tspan x="153" dy="2.08em" font-weight="800">${sanitize(it.stats[4].grade)}</tspan>
    <tspan dx="-0.3em" dy="-0.6em" font-weight="300" font-size="12px">${sanitize(it.stats[4].ith)}</tspan>
    <tspan x="153" dy="2.08em" font-weight="800">${sanitize(it.stats[5].grade)}</tspan>
    <tspan dx="-0.3em" dy="-0.6em" font-weight="300" font-size="12px">${sanitize(it.stats[5].ith)}</tspan>
    <tspan x="153" dy="2.08em" font-weight="800">${sanitize(it.stats[6].grade)}</tspan>
    <tspan dx="-0.3em" dy="-0.6em" font-weight="300" font-size="12px">${sanitize(it.stats[6].ith)}</tspan>
    <tspan x="153" dy="2.08em" font-weight="800">${sanitize(it.stats[7].grade)}</tspan>
    <tspan dx="-0.3em" dy="-0.6em" font-weight="300" font-size="12px">${sanitize(it.stats[7].ith)}</tspan>
  </text>

  <!-- Ratings -->
  <text transform="translate(50, 0)" x="207" y="126" font-size="16px" fill="#d0d0d8">
    <tspan font-weight="300" x="207" dy="1.63em">${sanitize(it.stats[0].average)}</tspan>
    <tspan font-weight="300" x="207" dy="1.63em">${sanitize(it.stats[1].average)}</tspan>
    <tspan font-weight="300" x="207" dy="1.63em">${sanitize(it.stats[2].average)}</tspan>
    <tspan font-weight="300" x="207" dy="1.63em">${sanitize(it.stats[3].average)}</tspan>
    <tspan font-weight="300" x="207" dy="1.63em">${sanitize(it.stats[4].average)}</tspan>
    <tspan font-weight="300" x="207" dy="1.63em">${sanitize(it.stats[5].average)}</tspan>
    <tspan font-weight="300" x="207" dy="1.63em">${sanitize(it.stats[6].average)}</tspan>
    <tspan font-weight="300" x="207" dy="1.63em">${sanitize(it.stats[7].average)}</tspan>
  </text>
</svg>
`
