import React from 'react'

const Icon = ({ type, onClick }) => {
  switch (type) {
    case 'EQ': {
      return (
        <svg
          fill="none"
          height="14"
          viewBox="0 0 25 14"
          width="25"
          xmlns="http://www.w3.org/2000/svg"
          className="Episode__EQ"
        >
          <path d="m0 1h5v13h-5z" />
          <path d="m5 7h5v7h-5z" />
          <path d="m20 7h5v7h-5z" />
          <path d="m10 4h5v10h-5z" />
          <path d="m15 0h5v14h-5z" />
        </svg>
      )
    }
    case 'play': {
      return (
        <svg
          width="19"
          height="21"
          viewBox="0 0 19 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.7679 3C12.5378 1.66667 14.4623 1.66667 15.2321 3L23.4593 17.25C24.2291 18.5833 23.2668 20.25 21.7272 20.25H5.27276C3.73316 20.25 2.77091 18.5833 3.54071 17.25L11.7679 3Z"
            transform="translate(21 -3) rotate(90)"
            fill="#F1F1F1"
          />
        </svg>
      )
    }
    case 'pause': {
      return (
        <svg
          fill="none"
          height="27"
          viewBox="0 0 27 27"
          width="27"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="#f1f1f1">
            <path d="m0 0h10.8v27h-10.8z" />
            <path d="m16.2 0h10.8v27h-10.8z" />
          </g>
        </svg>
      )
    }
    case 'pause-outline': {
      return (
        <svg
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="Episode__Pause"
          onClick={onClick}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.5 26C20.4036 26 26 20.4036 26 13.5C26 6.59644 20.4036 1 13.5 1C6.59644 1 1 6.59644 1 13.5C1 20.4036 6.59644 26 13.5 26ZM13.5 27C20.9558 27 27 20.9558 27 13.5C27 6.04416 20.9558 0 13.5 0C6.04413 0 0 6.04416 0 13.5C0 20.9558 6.04413 27 13.5 27ZM8 8H12V19H8V8ZM18 8H14V19H18V8Z"
            fill="#C5C6B7"
          />
        </svg>
      )
    }
    case 'play-outline': {
      return (
        <svg
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="Episode__Play"
          onClick={onClick}
        >
          <path
            d="M9 0L16.7942 13.5H1.20577L9 0Z"
            transform="translate(22 4) rotate(90)"
            fill="#C5C6B7"
          />
          <circle cx="13.5" cy="13.5" r="13" stroke="#C5C6B7" />
        </svg>
      )
    }
    case 'twitter': {
      return (
        <svg
          enableBackground="new 0 0 611.981 611.981"
          height="611.981"
          viewBox="0 0 611.981 611.981"
          width="611.981"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m605.95 114.16c-4.909-3.356-11.387-3.245-16.144.319-3.287 2.455-8.183 4.632-13.896 6.532 18.82-23.342 19.098-38.944 18.82-42.786-.375-4.993-3.412-9.417-7.947-11.539-4.549-2.136-9.875-1.664-13.952 1.276-25.658 18.363-51.329 22.357-66.308 22.884-24.382-22.648-55.906-35.061-89.414-35.061-72.494 0-131.479 58.957-131.479 131.451 0 5.243.305 10.485.929 15.672-120.978-3.009-219.102-117.041-220.087-118.205-2.898-3.44-7.268-5.256-11.789-4.854-4.48.402-8.488 2.94-10.763 6.824-30.789 52.633-18.224 102.506 2.885 137.387-3.925-2.108-8.668-2.247-12.746-.208-4.632 2.302-7.614 7.004-7.697 12.191-.901 55.296 24.354 88.443 49.832 107.748-1.872.764-3.578 1.943-4.979 3.482-3.314 3.633-4.466 8.75-3.01 13.453 17.711 57.127 59.318 78.539 88.513 86.557-33.48 23.605-74.893 29.139-106.362 29.139-20.096 0-33.938-2.385-34.077-2.414-6.269-1.109-12.565 2.262-15.131 8.143-2.552 5.879-.749 12.744 4.383 16.6 63.146 47.475 139.397 57.447 192.253 57.447 41.773 0 70.801-6.104 72.271-6.422 271.306-63.354 281.611-306.618 281.181-350.943 50.857-46.725 58.957-64.963 60.233-69.512 1.596-5.716-.623-11.804-5.519-15.161zm-78.054 68.444c-3.148 2.857-4.812 6.99-4.521 11.234.181 2.635 15.006 264.801-259.365 328.877-.264.055-27.6 5.756-66.239 5.756-36.004 0-83.658-4.924-129.135-24.881 41.635-2.664 92.687-15.438 129.412-56.059 3.675-4.078 4.577-9.918 2.344-14.938-2.233-5.008-7.239-8.238-12.718-8.238-2.58 0-57.168-.652-84.49-51.398 12.648.402 24.118-1.471 32.62-5.34 5.45-2.482 8.668-8.17 8.03-14.119s-5.048-10.818-10.901-12.08c-2.954-.637-65.795-14.951-77.126-81.231 9.847 3.759 21.83 6.366 33.425 4.66 5.381-.804 9.805-4.674 11.303-9.902 1.498-5.229-.208-10.859-4.341-14.382-2.773-2.358-62.702-54.436-36.669-122.588 34.908 35.435 129.897 118.844 244.442 112.395 4.133-.236 7.961-2.316 10.401-5.658 2.441-3.343 3.273-7.614 2.247-11.636-2.15-8.391-3.231-17.087-3.231-25.824 0-57.182 46.53-103.713 103.74-103.713 28.029 0 54.283 10.998 73.95 30.983 2.552 2.58 6.019 4.078 9.652 4.133l2.136.014c10.194 0 26.171-1.234 44.492-7.143-5.866 6.199-13.494 13.189-23.383 20.831-4.854 3.759-6.657 10.25-4.452 15.963 2.205 5.728 7.975 9.334 14.021 8.834 2.247-.18 12.121-1.04 24.34-3.231-7.697 7.878-17.502 17.35-29.984 28.681z" />
        </svg>
      )
    }
    case 'instagram': {
      return (
        <svg
          enableBackground="new 0 0 512 512"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m363.273 0h-214.545c-82.009 0-148.728 66.719-148.728 148.728v214.544c0 82.009 66.719 148.728 148.728 148.728h214.544c82.009 0 148.728-66.719 148.728-148.727v-214.545c0-82.009-66.719-148.728-148.727-148.728zm108.727 363.272c0 59.953-48.775 108.728-108.727 108.728h-214.545c-59.953 0-108.728-48.775-108.728-108.727v-214.545c0-59.953 48.775-108.728 108.728-108.728h214.544c59.953 0 108.728 48.775 108.728 108.728z" />
          <path d="m256 118c-76.094 0-138 61.906-138 138s61.906 138 138 138 138-61.906 138-138-61.906-138-138-138zm0 236c-54.037 0-98-43.963-98-98s43.963-98 98-98 98 43.963 98 98-43.963 98-98 98z" />
          <circle cx="396" cy="116" r="20" />
        </svg>
      )
    }
    case 'facebook': {
      return (
        <svg
          enableBackground="new 0 0 512 512"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m452 0h-392c-33.084 0-60 26.916-60 60v392c0 33.084 26.916 60 60 60h392c33.084 0 60-26.916 60-60v-392c0-33.084-26.916-60-60-60zm20 452c0 11.028-8.972 20-20 20h-114v-163h61.79l10.21-62h-72v-43c0-16.975 13.025-30 30-30h41v-62h-41c-50.923 0-91.978 41.25-91.978 92.174v42.826h-60.022v62h60.022v163h-216.022c-11.028 0-20-8.972-20-20v-392c0-11.028 8.972-20 20-20h392c11.028 0 20 8.972 20 20z" />
        </svg>
      )
    }
    case 'logo': {
      return (
        <svg
          height="278pt"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 314 278"
          width="314pt"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Love in Tinder</title>
          <g fill="#f1f1f1" transform="matrix(.1 0 0 -.1 0 278)">
            <path d="m1338 2521c-125-27-180-47-290-103-389-198-622-581-621-1018 1-377 173-706 489-933 77-56 248-134 359-164 93-26 113-28 290-27 173 0 199 2 288 27 186 50 350 142 489 275 237 226 358 506 358 826 0 128-10 200-46 323-107 373-418 677-799 779-137 36-385 44-517 15zm337-51c301-32 563-181 747-424 292-387 283-927-22-1311-344-432-965-530-1428-225-95 63-204 167-277 265-127 170-205 410-205 630 0 163 49 359 125 504 105 199 309 388 514 477 179 77 354 104 546 84z" />
            <path d="m2054 1931c-16-10-45-37-64-60-19-24-125-135-235-247l-200-205-188 193c-103 106-211 219-241 251-29 31-60 57-69 57-27 0-77-50-77-76s92-134 114-134c6 0 94-83 196-185l185-185-228-228c-177-178-227-234-227-253 0-30 28-59 56-59 12 0 108 89 249 230l230 230 245-245c161-160 253-245 266-245 12 0 28 8 37 18 38 42 28 56-225 310l-243 242 202 198c111 108 229 221 262 251 68 61 78 92 39 128-34 30-52 33-84 14zm-532-664c-331-330-442-436-455-431-9 3-17 11-17 18 0 6 201 211 446 456 423 423 446 444 455 420 9-23-18-52-429-463zm-7 113c-14-13-33 3-177 147-141 141-159 163-147 176 12 14 33-4 176-146 145-144 161-163 148-177zm337-307c131-131 238-244 238-250 0-38-58 10-273 225-187 187-235 240-225 250 7 7 14 12 17 12s113-107 243-237z" />
            <path d="m1530 1700v-140h25 25v140 140h-25-25z" />
            <path d="m1040 1320v-140h95c109 0 130 18 28 22l-68 3-3 128-3 127h-24-25z" />
            <path d="m1820 1450c0-5 23-10 50-10h50v-130-130h30 30v130 130h50c28 0 50 5 50 10 0 6-50 10-130 10s-130-4-130-10z" />
          </g>
        </svg>
      )
    }
    case 'logo-full': {
      return (
        <svg
          height="100"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 1554 802"
          width="200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Love in Tinder logo</title>
          <g fill="#f1f1f1" transform="matrix(.1 0 0 -.1 0 802)">
            <path d="m1738 7661-27-17 195-312c108-172 198-312 202-312s18 9 31 19l25 19-72 119c-180 295-308 497-317 499-5 1-22-5-37-15z" />
            <path d="m2958 7648c-18-13-228-423-228-444 0-10-117-244-150-299-10-16-84-154-165-305-232-433-333-618-392-718-72-121-174-309-273-505-80-156-124-287-101-295 6-2 11-17 11-33 0-76 92-177 188-204 68-20 113-14 168 25 28 20 100 46 233 84 105 30 250 75 320 100 71 25 164 52 207 61 108 21 184 52 217 86 44 47 33 83-36 123-88 50-147 53-489 26-92-8-170-11-173-8s1 18 10 34c34 65 74 154 69 154-3 0 4 13 15 29 12 16 21 32 21 35s47 85 104 183 120 212 141 253 57 109 80 150 80 149 127 240 99 188 115 215c27 46 227 437 347 680 33 68 51 116 54 151 4 50 2 54-38 98-23 25-48 46-55 46s-34 10-60 21c-61 27-240 39-267 17zm-151-2294c-3-3-12-4-19-1-8 3-5 6 6 6 11 1 17-2 13-5zm148-74c3-6-4-10-16-10s-19 3-16 7c4 3 1 13-6 21-10 13-9 14 10 4 12-7 25-17 28-22z" />
            <path d="m1294 7335c-9-13-14-29-12-34 4-11 648-525 651-520 1 2 10 14 20 25 18 22 16 23-307 288-178 146-327 266-330 266s-13-11-22-25z" />
            <path d="m1732 7240-24-20 160-179 160-179 22 23c20 21 21 27 9 42-41 52-292 333-297 333-4-1-18-9-30-20z" />
            <path d="m862 7156c-11-24-8-25 111-76 67-28 322-136 567-239 393-167 446-187 457-173 7 9 13 21 13 27 0 9-1111 485-1131 485-3 0-11-11-17-24z" />
            <path d="m1038 6725c-2-19-4-35-3-36 0 0 189-22 420-48 298-34 422-45 427-37 11 16 10 56-2 56-5 0-192 23-415 50-223 28-410 50-414 50-5 0-11-16-13-35z" />
            <path d="m5423 6693c-57-12-102-102-129-258-8-45-73-181-160-331-190-331-485-704-558-704-10 0 25 120 57 195 61 143 118 247 217 400 124 193 163 260 178 311 30 102 8 137-118 184-160 59-290 84-313 61-6-6-27-50-47-98-21-48-80-180-132-293-85-184-168-406-198-530-20-83-22-192-6-263 43-184 143-267 321-267 67 0 78 3 126 35 30 20 65 48 79 64 14 15 90 99 169 187 178 196 339 392 416 504 81 117 81 117 35 7-22-54-47-126-55-160-29-124-14-256 43-361 40-75 146-177 224-215 185-91 429-28 638 166 110 101 290 337 290 379 0 25-18 44-41 44-10 0-46-24-81-53-107-91-248-197-307-233-60-37-206-88-283-99-39-6-49-4-67 14s-21 33-21 106c0 74 5 96 36 175l36 90 47-34c86-62 109-70 199-69 72 1 93 5 147 32 78 39 135 93 200 191 63 94 69 106 100 191 35 97 33 161-6 254-17 41-48 94-69 118-51 58-150 105-262 125-79 14-92 14-154-1-134-33-271-136-402-302-83-106-94-112-30-18 82 122 174 364 152 401-21 34-200 71-271 55zm765-581c-6-60-51-153-98-202-60-63-200-100-226-59-18 29 183 255 257 289 67 30 72 28 67-28z" />
            <path d="m3930 6634c-14-3-65-12-114-20-81-13-277-81-301-105-5-5-46-36-90-68-186-135-334-344-432-606-8-22-16-62-18-90-2-27-6-84-9-125-7-88 18-226 55-305 32-70 122-156 184-179 28-9 57-21 66-26 9-4 51-14 93-21 68-12 88-11 163 4 93 20 196 66 268 120 48 37 149 153 190 217 27 43 102 190 136 265 12 28 34 77 49 111 67 145 92 236 121 442 26 182-20 296-145 359-51 26-153 39-216 27zm-15-435c-26-131-99-304-199-474-84-144-216-302-281-339l-44-24-11 32c-52 144 6 372 150 588 110 166 226 281 347 342l48 25 3-36c2-19-4-71-13-114z" />
            <path d="m1595 6518c-99-5-182-11-184-13s0-20 3-40c6-30 10-34 29-31 12 3 120 10 240 17l217 12v33 34l-62-2c-35 0-144-5-243-10z" />
            <path d="m1467 6290c-191-43-351-80-354-84-11-11 13-71 28-69 48 7 695 156 700 161 8 9-9 72-19 71-4-1-164-36-355-79z" />
            <path d="m4137 4892c-38-42-13-183 56-316 72-138 139-166 399-166 74 0 137-3 141-6 6-6-61-152-160-349-100-201-607-1138-684-1265-31-52-76-133-99-180s-50-96-60-110c-26-37-155-287-181-350-30-76-51-164-39-168 6-2 10-16 10-30 1-78 99-189 191-216 29-9 66-16 83-16 48 0 114 38 152 89 35 45 153 275 262 511 30 63 58 123 63 133 54 101 91 167 142 252 74 124 222 398 357 660 57 110 114 217 126 237 13 20 114 216 224 435l200 399 173 33c94 19 218 47 273 62 56 16 104 29 108 29s-16-33-42-72c-87-129-174-295-179-341-5-42-4-44 28-58 19-8 59-14 89-14 86 0 222 68 376 188 139 108 204 185 218 260 6 33 3 41-21 65-34 34-175 90-249 98-31 4-54 12-54 18 0 21-61 96-89 110-32 16-323 31-556 28-157-2-481-21-760-43-77-7-170-9-207-5-58 6-73 13-110 45-24 20-54 45-68 54-33 23-92 22-113-1z" />
            <path d="m9608 4853c-28-29-68-97-163-278-111-211-197-370-222-410-14-22-74-117-133-212-60-94-119-191-133-215-79-142-130-229-136-233-4-2-27 12-51 32-53 41-111 72-200 104-55 19-85 23-190 24-145 0-193-14-307-87-126-82-285-263-394-450-48-81-141-284-160-349-20-67-213-247-353-330l-37-22 6 29c37 163 101 291 297 589 69 105 131 201 138 215s28 42 46 63c46 51 48 106 4 147-84 79-331 116-429 65-66-34-197-150-436-385-133-131-251-243-263-249-17-9-5 18 49 106 40 65 86 138 104 163 74 104 215 339 215 360 0 34-35 76-77 92-57 23-197 41-263 35-87-8-149-48-252-164-135-152-281-294-269-260 14 36 14 67 1 67-5 0-45-37-87-82-43-44-131-128-196-185-110-97-120-103-160-103-24 0-66 7-93 15s-51 15-53 15c-10 0 12-89 29-117l19-32-121-97c-129-103-274-201-285-191-3 4 19 44 49 89 31 46 107 164 170 263 193 302 334 505 461 659 63 77 61 85-31 154-127 94-264 146-322 122-37-15-131-123-163-187-15-28-55-95-90-150-280-431-497-917-497-1113 0-105 90-250 178-287 64-27 163 11 298 112 68 51 256 247 315 327 15 21 62 75 106 121l78 84 60-7c72-9 181 10 268 45 34 13 62 23 64 21s-9-29-23-62c-50-114-142-350-164-421-13-42-19-81-15-94 13-39 79-102 140-131 150-71 236-15 441 285 139 203 265 374 318 432l45 50-15-50c-96-322-81-505 54-643 106-108 234-120 402-36 79 40 140 95 196 179 21 32 51 76 66 98l27 39 7-28c27-121 46-165 101-225 55-61 112-85 213-92 72-4 96-1 154 19 152 52 292 154 427 310 47 54 98 117 112 139l27 40v-40c0-38-23-133-85-360-48-172-36-326 30-392 77-77 160-21 254 172 30 61 68 153 86 205 33 95 132 329 263 622 39 86 78 177 86 203 32 93 378 766 486 945 62 102 127 210 145 240 115 196 173 281 226 332 50 49 59 63 59 93 0 20-5 45-10 55-11 21-106 85-215 145-38 21-82 47-97 57-40 28-99 24-130-9zm-943-1543c4-6-6-26-22-44-15-19-128-158-251-310-226-279-384-448-479-511-83-56-101-47-77 36 62 209 303 535 519 704 99 77 131 94 220 116 88 21 83 21 90 9z" />
            <path d="m2621 4619c-69-81-97-121-145-207-82-146-82-164 0-177 102-17 404 204 404 295 0 15-8 34-17 43-29 26-111 57-168 63-49 6-56 4-74-17z" />
            <path d="m2195 4028c-23-24-52-62-64-85-12-24-45-80-74-125-73-113-131-220-199-363-82-174-102-236-102-327-1-69 2-80 29-119 41-58 92-92 125-84 91 22 187 97 314 246 50 57 107 122 128 145l39 41 52-9c41-7 67-5 122 10 39 10 78 22 87 26 12 6 7-13-22-81-43-101-100-258-100-278 0-24 53-77 95-96 58-27 95-24 143 11 43 31 68 62 202 255 87 126 160 218 166 212 2-2-5-39-16-82s-20-111-20-150c0-60 5-82 31-134 42-84 83-114 164-119 53-4 73 0 122 22 95 44 141 99 276 333 74 127 88 165 67 178s-51-8-96-66c-47-62-166-169-224-203l-33-19 7 39c12 64 71 180 183 354 59 91 115 174 125 186 27 31 23 78-8 103-55 43-195 65-259 41-41-16-158-116-285-245-63-64-133-131-155-148l-40-32 24 40c14 22 63 101 111 175 124 193 126 198 114 217-21 34-60 53-131 63-120 19-157 2-269-121-44-48-108-113-143-145-56-52-62-55-48-27 17 32 22 63 11 63-3 0-63-54-132-121-124-117-128-120-164-115-20 3-44 9-54 13-18 7-18 7 2-63 5-18-11-35-95-101-56-44-120-90-143-103l-43-24 20 29c10 17 64 99 118 184 128 200 166 256 251 370 39 51 77 101 84 111 7 9 10 24 7 32-15 38-181 128-236 128-11 0-40-19-64-42z" />
            <path d="m11256 3803c-14-79-64-174-191-368-310-472-442-748-491-1031-22-120-20-193 6-251 16-37 28-48 76-70 47-21 66-25 118-21 69 6 108 23 162 70 31 28 114 138 114 152 0 17 142 241 208 329 93 123 128 157 252 250 52 39 97 74 100 77s17 11 33 17l27 13v-48c0-31 10-67 29-107 63-134 197-188 329-132 126 53 226 162 313 342 84 173 75 243-19 153-52-50-89-75-145-101-45-20-47-23 48 104 169 225 211 304 201 374-10 60-42 103-106 139-48 27-64 31-130 30-59 0-85-5-120-23-72-38-96-59-218-196-161-180-233-254-336-349l-90-81 34 60c52 92 138 225 178 274 20 24 41 66 48 92 21 80 9 99-115 179-58 38-126 84-151 103-47 36-98 57-135 57-18 0-24-7-29-37z" />
            <path d="m10065 3660c-196-39-380-201-582-512-57-86-137-268-165-372-25-96-24-243 2-327 42-135 161-270 297-335 74-36 82-37 183-38 118 0 183 15 289 69 165 83 348 263 493 484 51 78 56 96 35 126-21 27-52 14-132-53-150-127-293-232-370-271-92-47-238-91-299-91-58 0-71 26-70 134 1 88 10 125 56 227l30 67 64-49c80-60 126-73 226-65 91 7 152 31 220 86 135 107 278 367 278 504 0 46-24 126-59 195-57 112-171 186-326 215-97 17-110 18-170 6zm222-492c-7-61-66-183-110-228-62-64-203-102-240-65-16 15-15 19 15 63 42 63 167 197 215 232 37 27 85 48 112 49 11 1 12-10 8-51z" />
            <path d="m13230 3194c-217-12-423-23-457-23l-63-1v-30c0-17 6-33 13-35 6-2 215 3 462 13l450 17 3 34c2 18 0 37-5 40-4 4-186-3-403-15z" />
            <path d="m12640 2993v-30l278-54c185-37 279-51 284-44 4 5 8 24 8 41v30l-237 37c-367 57-333 55-333 20z" />
            <path d="m12546 2864c-4-15-3-30 1-34s149-58 322-119c324-115 336-118 329-67-2 14-69 41-322 132-176 63-321 114-322 114s-5-12-8-26z" />
            <path d="m12534 2699c-16-17-16-22-4-30 62-39 479-279 486-279 10 0 49 59 42 64-7 6-496 266-501 266-2 0-12-9-23-21z" />
            <path d="m10480 1303c-248-13-314-22-364-49l-51-27-2670-142c-1468-79-2697-145-2731-148-73-5-125-28-170-75-119-123-61-333 107-383 30-9 584 17 2765 134 2441 130 2731 144 2756 131 16-8 49-18 74-23 51-10 538 14 594 29 98 26 154 126 152 270-1 122-39 212-111 261-32 22-45 24-160 25-69 0-155-1-191-3zm-637-238c20-14 37-29 37-33s-17-21-37-39l-38-31 43-19 43-18-28-27-28-27-2545-135c-1400-75-2573-136-2608-136-57 0-67 3-93 29-56 56-31 158 43 176 13 3 1180 68 2593 144 1414 76 2572 139 2575 140 3 0 22-10 43-24z" />
          </g>
        </svg>
      )
    }
    default: {
      return (
        <svg
          height="278pt"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 314 278"
          width="314pt"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Love in Tinder</title>
          <g fill="#f1f1f1" transform="matrix(.1 0 0 -.1 0 278)">
            <path d="m1338 2521c-125-27-180-47-290-103-389-198-622-581-621-1018 1-377 173-706 489-933 77-56 248-134 359-164 93-26 113-28 290-27 173 0 199 2 288 27 186 50 350 142 489 275 237 226 358 506 358 826 0 128-10 200-46 323-107 373-418 677-799 779-137 36-385 44-517 15zm337-51c301-32 563-181 747-424 292-387 283-927-22-1311-344-432-965-530-1428-225-95 63-204 167-277 265-127 170-205 410-205 630 0 163 49 359 125 504 105 199 309 388 514 477 179 77 354 104 546 84z" />
            <path d="m2054 1931c-16-10-45-37-64-60-19-24-125-135-235-247l-200-205-188 193c-103 106-211 219-241 251-29 31-60 57-69 57-27 0-77-50-77-76s92-134 114-134c6 0 94-83 196-185l185-185-228-228c-177-178-227-234-227-253 0-30 28-59 56-59 12 0 108 89 249 230l230 230 245-245c161-160 253-245 266-245 12 0 28 8 37 18 38 42 28 56-225 310l-243 242 202 198c111 108 229 221 262 251 68 61 78 92 39 128-34 30-52 33-84 14zm-532-664c-331-330-442-436-455-431-9 3-17 11-17 18 0 6 201 211 446 456 423 423 446 444 455 420 9-23-18-52-429-463zm-7 113c-14-13-33 3-177 147-141 141-159 163-147 176 12 14 33-4 176-146 145-144 161-163 148-177zm337-307c131-131 238-244 238-250 0-38-58 10-273 225-187 187-235 240-225 250 7 7 14 12 17 12s113-107 243-237z" />
            <path d="m1530 1700v-140h25 25v140 140h-25-25z" />
            <path d="m1040 1320v-140h95c109 0 130 18 28 22l-68 3-3 128-3 127h-24-25z" />
            <path d="m1820 1450c0-5 23-10 50-10h50v-130-130h30 30v130 130h50c28 0 50 5 50 10 0 6-50 10-130 10s-130-4-130-10z" />
          </g>
        </svg>
      )
    }
  }
}

export default Icon
