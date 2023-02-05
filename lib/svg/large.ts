import sanitize from 'sanitize-html'
import type { Result } from '../models/results'

const makeBadge = (it: Result, rasterize: boolean) =>
`<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="454" height="363" version="1.1">
  <defs>
    <!-- Fonts -->
    <style type="text/css">
      @import url("/fonts/style.css");
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
  <text x="25" y="140" font-size="16px" font-weight="300" fill="#d0d0d8"><tspan>${it.error || ''}</tspan></text>

  <!-- Logo -->
  ${!it.error ? '<a xlink:href="' + it.link + '" target="_blank" rel="noopener noreferrer" xlink:title="View Ludum Dare Page">' : ''}
    <path d="M37.507 53.904c-1.215 0-2.43-.978-2.43-2.933V29.88l-14.577.066v22.864c0 10.81 8.142 16.241 16.285 16.241h12.541V53.905zm32.153-.719c0 3.91-4.86 3.91-4.86 0V37.71H50.946v16.033c0 21.62 32.569 21.62 32.569 0V37.711H69.66v15.474zm34.71-23.24v6.78l-3 .095c-9.091.082-16.384 7.477-16.384 16.588C84.986 62.57 92.359 70 101.52 70c9.163 0 16.593-7.43 16.593-16.592V29.945H104.37zm-3 20.623h3v2.84a2.826 2.826 0 01-2.849 2.85c-1.565 0-2.793-1.286-2.793-2.85 0-1.513 1.151-2.761 2.643-2.84zm37.029 2.617c0 3.91-4.86 3.91-4.86 0V37.71h-13.854v16.033c0 21.62 32.568 21.62 32.568 0V37.711H138.4v15.474zm46.833 0c0-3.463 4.357-3.408 4.357-.056v15.922h13.742V52.57c0-11.452-8.267-15.865-16.088-15.81-3.073.057-6.48 1.173-8.66 3.52-2.513-2.514-5.697-3.52-8.826-3.52-7.765 0-15.921 4.079-15.921 15.81v16.48h13.742V53.129c0-3.352 4.302-3.407 4.302.056V69.05h13.352V53.185z" fill="#e53"/>
    <g fill="#f79122">
      <path d="M213.5 69.05h16.547c25.25 0 25.25-39.105 0-39.105H213.5zm14.469-15.139v-8.994h2.357c4.972 0 5.028 8.994 0 8.994z"/>
      <path d="M266.27 36.76c-6.28-.088-12.357 3.89-14.802 9.672-2.556 5.697-1.385 12.815 2.896 17.37 3.208 3.569 8.055 5.485 12.83 5.243h1.813v.005h13.407c-.02-5.728.042-11.457-.033-17.183-.323-6.394-4.868-12.279-10.947-14.26a16.11 16.11 0 00-5.165-.846zm-.065 13.364c1.179.008 2.37.741 2.679 1.964.18 1.187.135 2.395.117 3.6a63.228 63.228 0 01-3.26-.04c-2.12-.309-3.043-3.253-1.455-4.705.506-.567 1.21-.824 1.918-.819zm32.659-12.414c-8.77 0-14.915 5.755-14.915 14.526V69.05h13.742V53.677c0-1.719 1.081-2.838 2.838-2.838h3.307V37.71zm22.405-.95c-6.28-.088-12.356 3.889-14.801 9.672-2.574 5.733-1.367 12.904 2.974 17.457 3.225 3.541 8.069 5.415 12.832 5.16h15.14l-11.963-13.365h11.973v-2.767c0-5.459-2.896-10.871-7.606-13.72a16.122 16.122 0 00-8.549-2.437zm0 13.353c2.046-.084 3.54 2.431 2.423 4.174-.972 1.942-4.047 1.726-4.925-.18-.84-1.72.524-4.05 2.502-3.995z"/>
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
  <text x="61" y="126" font-size="16px" fill="#d0d0d8">
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
    <tspan dx="${rasterize ? '-0.3' : '0.05'}em" dy="-0.6em" font-weight="300" font-size="12px">${sanitize(it.stats[0].ith)}</tspan>
    <tspan x="153" dy="2.08em" font-weight="800">${sanitize(it.stats[1].grade)}</tspan>
    <tspan dx="${rasterize ? '-0.3' : '0.05'}em" dy="-0.6em" font-weight="300" font-size="12px">${sanitize(it.stats[1].ith)}</tspan>
    <tspan x="153" dy="2.08em" font-weight="800">${sanitize(it.stats[2].grade)}</tspan>
    <tspan dx="${rasterize ? '-0.3' : '0.05'}em" dy="-0.6em" font-weight="300" font-size="12px">${sanitize(it.stats[2].ith)}</tspan>
    <tspan x="153" dy="2.08em" font-weight="800">${sanitize(it.stats[3].grade)}</tspan>
    <tspan dx="${rasterize ? '-0.3' : '0.05'}em" dy="-0.6em" font-weight="300" font-size="12px">${sanitize(it.stats[3].ith)}</tspan>
    <tspan x="153" dy="2.08em" font-weight="800">${sanitize(it.stats[4].grade)}</tspan>
    <tspan dx="${rasterize ? '-0.3' : '0.05'}em" dy="-0.6em" font-weight="300" font-size="12px">${sanitize(it.stats[4].ith)}</tspan>
    <tspan x="153" dy="2.08em" font-weight="800">${sanitize(it.stats[5].grade)}</tspan>
    <tspan dx="${rasterize ? '-0.3' : '0.05'}em" dy="-0.6em" font-weight="300" font-size="12px">${sanitize(it.stats[5].ith)}</tspan>
    <tspan x="153" dy="2.08em" font-weight="800">${sanitize(it.stats[6].grade)}</tspan>
    <tspan dx="${rasterize ? '-0.3' : '0.05'}em" dy="-0.6em" font-weight="300" font-size="12px">${sanitize(it.stats[6].ith)}</tspan>
    <tspan x="153" dy="2.08em" font-weight="800">${sanitize(it.stats[7].grade)}</tspan>
    <tspan dx="${rasterize ? '-0.3' : '0.05'}em" dy="-0.6em" font-weight="300" font-size="12px">${sanitize(it.stats[7].ith)}</tspan>
  </text>

  <!-- Ratings -->
  <text x="207" y="126" font-size="16px" fill="#d0d0d8">
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

export default makeBadge