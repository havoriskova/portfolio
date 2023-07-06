import aboutHeader from '../img/headers/about_6_rem.png';
import aboutImage from '../img/about.jpg';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const About = () => {
    // const isDesctop = window.matchMedia(`(min-width:800px)`).matches;

    const [longVersionClicked, setLongVersion] = useState(false);

    const techStack = <>

        {/* https://devicon.dev/ */}
        
      
        <div>
            <svg viewBox="0 0 128 128">  { /* html */}
                <path d="M9.032 2l10.005 112.093 44.896 12.401 45.02-12.387L118.968 2H9.032zm89.126 26.539l-.627 7.172L97.255 39H44.59l1.257 14h50.156l-.336 3.471-3.233 36.119-.238 2.27L64 102.609v.002l-.034.018-28.177-7.423L33.876 74h13.815l.979 10.919L63.957 89H64v-.546l15.355-3.875L80.959 67H33.261l-3.383-38.117L29.549 25h68.939l-.33 3.539z"></path>
            </svg>
            <div>HTML</div>
        </div>
           
        <div>
            <svg viewBox="0 0 128 128"> {/*css */}
                <path d="M8.76 1l10.055 112.883 45.118 12.58 45.244-12.626L119.24 1H8.76zm89.591 25.862l-3.347 37.605.01.203-.014.467v-.004l-2.378 26.294-.262 2.336L64 101.607v.001l-.022.019-28.311-7.888L33.75 72h13.883l.985 11.054 15.386 4.17-.004.008v-.002l15.443-4.229L81.075 65H48.792l-.277-3.043-.631-7.129L47.553 51h34.749l1.264-14H30.64l-.277-3.041-.63-7.131L29.401 23h69.281l-.331 3.862z"></path>
            </svg>
            <div>CSS</div>
        </div>

        <div>
            <svg viewBox="0 0 128 128"> {/*js */}
                <path d="M2 1v125h125V1H2zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065C58.433 78.073 58.48 68 58.48 58h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"></path>
            </svg>
            <div>JavaScript</div>
        </div>
        
        <div>
            <svg viewBox="0 0 128 128"> {/*vs code */}
                <path d="M3.656 45.043s-3.027-2.191.61-5.113l8.468-7.594s2.426-2.559 4.989-.328l78.175 59.328v28.45s-.039 4.468-5.757 3.976zm0 0"></path><path d="M23.809 63.379L3.656 81.742s-2.07 1.543 0 4.305l9.356 8.527s2.222 2.395 5.508-.328l21.359-16.238zm0 0M59.184 63.531l36.953-28.285-.239-28.297S94.32.773 89.055 3.99L39.879 48.851zm0 0"></path><path d="M90.14 123.797c2.145 2.203 4.747 1.48 4.747 1.48l28.797-14.222c3.687-2.52 3.171-5.645 3.171-5.645V20.465c0-3.735-3.812-5.024-3.812-5.024L98.082 3.38c-5.453-3.379-9.027.61-9.027.61s4.593-3.317 6.843 2.96v112.317c0 .773-.164 1.53-.492 2.214-.656 1.332-2.086 2.57-5.504 2.051zm0 0"></path>
            </svg>
            <div>VS Code</div>
        </div>
          
        <div>
            <svg viewBox="0 0 128 128"> {/*npm */}
                <path d="M2 38.5h124v43.71H64v7.29H36.44v-7.29H2zm6.89 36.43h13.78V53.07h6.89v21.86h6.89V45.79H8.89zm34.44-29.14v36.42h13.78v-7.28h13.78V45.79zm13.78 7.29H64v14.56h-6.89zm20.67-7.29v29.14h13.78V53.07h6.89v21.86h6.89V53.07h6.89v21.86h6.89V45.79z"></path>
            </svg>
            <div>npm</div>
        </div>
        
        <div>
            <svg viewBox="0 0 128 128"> {/*nodejs */}
                <path d="M112.678 30.334L68.535 4.729c-2.781-1.584-6.424-1.584-9.227 0L14.82 30.334C11.951 31.985 10 35.088 10 38.407v51.142c0 3.319 1.992 6.423 4.862 8.083l11.729 6.688c5.627 2.772 7.186 2.772 9.746 2.772 8.334 0 12.662-5.039 12.662-13.828v-50.49C49 42.061 49.445 41 48.744 41h-5.622C42.41 41 41 42.061 41 42.773v50.49c0 3.896-3.616 7.773-10.202 4.48L18.676 90.73c-.422-.23-.676-.693-.676-1.181V38.407c0-.482.463-.966.891-1.213l44.378-25.561a1.508 1.508 0 011.415 0l43.963 25.555c.421.253.354.722.354 1.219v51.142c0 .488.092.963-.323 1.198l-44.133 25.576c-.378.227-.87.227-1.285 0l-11.317-6.749c-.341-.198-.752-.269-1.08-.086-3.145 1.783-3.729 2.02-6.679 3.043-.727.253-1.799.692.408 1.929l14.798 8.754a9.29 9.29 0 004.647 1.246 9.303 9.303 0 004.666-1.246l43.976-25.582c2.871-1.672 4.322-4.764 4.322-8.083V38.407c-.001-3.319-1.452-6.414-4.323-8.073zM77.727 81.445c-11.727 0-14.309-3.235-15.17-9.066-.102-.628-.634-1.379-1.274-1.379h-5.73c-.709 0-1.28.86-1.28 1.566 0 7.466 4.06 16.512 23.454 16.512 14.038 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.104 0 12.46 1.954 13.841 8.091.119.577.646.991 1.241.991h5.754c.354 0 .691-.143.939-.396.241-.272.367-.613.336-.979-.893-10.569-7.913-15.494-22.112-15.494-12.632 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.956-3.978 7.067-13.308 7.067z"></path>
            </svg>
            <div>Node.js</div>
        </div>
          
        <div>
            <svg viewBox="0 0 128 128"> {/*react */}
                <g><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g>
            </svg>
            <div>React</div>
        </div>

        <div>
            <svg  viewBox="0 0 15 15"> {/*nextjs */}
            <path clipRule="evenodd" d="M0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 10.087 13.6902 12.3681 11.6975 13.7163L4.90687 4.20942C4.78053 4.03255 4.5544 3.95756 4.34741 4.02389C4.14042 4.09022 4 4.28268 4 4.50004V12H5V6.06027L10.8299 14.2221C9.82661 14.7201 8.696 15 7.5 15C3.35786 15 0 11.6421 0 7.5ZM10 10V4H11V10H10Z" fill="black" fillRule="evenodd"/>
            </svg>
            <div>Next.js</div>
        </div>

        <div>
            <svg viewBox="0 0 128 128"> {/* git */}
                <path d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z"></path>
            </svg>
            <div>Git</div>
        </div>

        <div>
            <svg viewBox="0 0 128 128"> {/* github */}
                <g><path  d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></g>
            </svg>
            <div>Github</div>
        </div>
          
        <div>
            <svg viewBox="0 0 128 128"> {/* bootstrap */}
                <path d="M27.235 13.885c-7.177 0-12.486 6.284-12.249 13.099.228 6.546-.068 15.026-2.203 21.94-2.14 6.936-5.76 11.319-11.673 11.883v6.387c5.913.563 9.533 4.947 11.673 11.883 2.135 6.914 2.43 15.394 2.203 21.94-.238 6.815 5.072 13.098 12.249 13.098h73.54c7.177 0 12.486-6.284 12.249-13.098-.228-6.546.068-15.026 2.202-21.94 2.14-6.935 5.751-11.319 11.664-11.883v-6.387c-5.913-.563-9.523-4.947-11.664-11.883-2.134-6.914-2.43-15.394-2.202-21.94.237-6.815-5.072-13.099-12.25-13.099zm58.114 61.686c0 9.384-7.002 15.073-18.621 15.073H45.306a.491.491 0 01-.491-.491V37.827a.491.491 0 01.491-.492h21.309c9.689 0 16.047 5.246 16.047 13.3 0 5.653-4.277 10.713-9.727 11.6v.296c7.418.813 12.414 5.948 12.414 13.04zM64.571 44.096H53.293v15.922h9.5c7.342 0 11.391-2.955 11.391-8.238 0-4.95-3.481-7.684-9.613-7.684zm-11.278 22.24v17.548h11.695c7.645 0 11.695-3.066 11.695-8.83 0-5.763-4.163-8.718-12.187-8.718z"></path>
            </svg>
            <div>Bootstrap</div>
        </div>

        <div>
            <svg viewBox="0 0 128 128"> {/*figma */}
                <path d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"></path>
            </svg>
            <div>Figma</div>
        </div>
          
        <div>
            <svg viewBox="0 0 128 128"> {/*inkscape */}
                <path d="M102.4 101.5c-5.1 4.6.6 9.3 5.6 6.3 1.1-1.2 0-5.2-5.6-6.3zm-73.8 7.4c4 3.4 10.2-.9 12-5.7-3.9-5.1-18.3.2-12 5.7zm75.9-12.1c0 2.3 16.8 3.8 16.8-.5-2.4-7-14.8-6.6-16.8.5zm15.6-41.1L73.4 7.9c-5.7-5.5-15.2-5.5-20.6 0L7.7 54C-7.5 72.9 18.1 70.7 29 76.1c3.9 4-15.1 7-11.1 11 3.9 4 23.8 7.7 27.7 11.8l-4.1 12.3c3.9 4 13 .2 14.7 9.5 1.2 6.6 16.4 2.8 23.8-2.6 3.9-4-7.5-3.6-3.6-7.7 9.8-10 18.9-3.6 22.2-13.7 1.7-5-14.4-7.6-10.5-11.7 11.4-6.5 50.5-10.8 32-29.3zm-56 31.1c-4.8 1.3-28-8.2-22.2-8.2 1.2.7 19.4 4.4 23.9 5.2 1.6.3.5 1.9-1.7 3zm25.1-51.5l-8.8-7.1-1.7 10.5-7.4-3.9-11.8 7.5-3.9-15.5L49.1 38h-9.7c-4 0-4.4-5.3-.8-8.9 6.3-6.8 13.5-13.8 17.4-17.8 3.9-4 10.8-4 14.7-.1l17.8 18.1c1.7 1.7 1.7 5 .7 6z"></path>
            </svg>
            <div>Inkscape</div>
        </div>
          
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 475.4 475.4"> {/* responsivness */}
                <path d="M442.4 1H115.1c-18.2 0-33 14.8-33 33v35.8H98.3h135.4 209.4v291.5c0 0.3-0.3 0.6-0.6 0.6h-55.5v32.4h55.5c18.2 0 33-14.8 33-33V34C475.4 15.8 460.6 1 442.4 1zM319.4 53.3c-10 0-18.1-8.1-18.1-18.1 0-4.4 1.7-8.2 4.3-11.3 3.3-4 8.1-6.8 13.8-6.8 5.6 0 10.4 2.7 13.8 6.8 2.6 3.1 4.3 7 4.3 11.3C337.5 45.3 329.4 53.3 319.4 53.3zM368 53.3c-10 0-18.1-8.1-18.1-18.1 0-4.4 1.8-8.2 4.3-11.3 3.3-4 8.1-6.8 13.8-6.8 5.6 0 10.4 2.7 13.8 6.8 2.6 3.1 4.3 7 4.3 11.3C386.1 45.3 378 53.3 368 53.3zM416.6 53.3c-10 0-18.1-8.1-18.1-18.1 0-4.4 1.7-8.2 4.3-11.3 3.3-4 8.1-6.8 13.8-6.8 5.6 0 10.5 2.7 13.8 6.8 2.6 3.1 4.3 7 4.3 11.3C434.7 45.3 426.6 53.3 416.6 53.3z"/><path d="M193.8 451.3v-38.5H32.4V147.4c0-7 5.7-12.8 12.8-12.8h188.5c7 0 12.8 5.7 12.8 12.8v59.2h32.4v-59.2c0-24.9-20.3-45.2-45.2-45.2H45.2C20.2 102.3 0 122.5 0 147.4v281.6c0 24.9 20.2 45.2 45.2 45.2h155.3C197.1 468.8 193.8 461.6 193.8 451.3zM139.4 462.3c-5.5 0-10.3-2.6-13.6-6.5 -2.7-3.1-4.5-7.1-4.5-11.6 0-10 8.1-18.1 18.1-18.1 10 0 18.1 8.1 18.1 18.1 0 4.5-1.8 8.4-4.5 11.6C149.7 459.7 144.9 462.3 139.4 462.3z"/><path d="M343.5 226.9H237.2c-12.8 0-23.2 10.4-23.2 23.2v201.3c0 12.8 10.4 23.1 23.2 23.1h106.3c12.8 0 23.2-10.4 23.2-23.1V250.1C366.6 237.3 356.2 226.9 343.5 226.9zM238.4 251.2h103.9v178.2h-103.9V251.2zM278.7 450.7c0-6.4 5.2-11.6 11.6-11.6 6.4 0 11.6 5.2 11.6 11.6 0 6.4-5.2 11.6-11.6 11.6C283.9 462.3 278.7 457.1 278.7 450.7z"/>
            </svg>
            <div>Responsive</div>
        </div>
        
        <div>
            <svg viewBox="0 0 512 512">
                <g><g><path d="M366.748,485.999c-1.433-3.167-2.637-6.446-3.58-9.876l-0.074-0.227 
            c-1.586-5.881-2.396-12.139-2.281-18.585c0.303-18.356,8.048-34.905,20.299-46.741c12.214-11.799,28.989-18.961,47.344-18.66 
                c8.163,0.151,15.947,1.734,23.11,4.524c4.372,1.696,8.5,3.882,12.363,6.445v-57.599c-2.151-0.678-4.299-1.319-6.485-1.885   
                c-3.147-0.829-6.408-1.545-9.725-2.111c-1.94-0.338-3.523-1.922-3.787-3.957l-5.675-42.785l-16.267-0.264l-7.142,42.559  
                    c-0.319,1.96-1.885,3.543-3.941,3.807c-4.183,0.604-8.311,1.396-12.381,2.413c-4.11,1.018-8.181,2.261-12.14,3.731  
                    c-1.846,0.641-3.994,0.075-5.24-1.545l-26.311-34.229l-14.209,7.917l14.964,40.107c0.923,1.923,0.414,4.26-1.319,5.616   
                        c-3.395,2.639-6.577,5.429-9.557,8.293c-2.997,2.903-5.899,5.994-8.63,9.273c-1.263,1.508-3.394,2.074-5.296,1.319l-39.941-16.511 
                        l-8.367,13.947l33.039,27.216c1.716,1.208,2.453,3.507,1.621,5.542c-1.582,3.883-2.977,7.916-4.127,11.986 
                            c-1.147,4.034-2.092,8.144-2.808,12.327c-0.341,1.923-1.923,3.506-3.977,3.77l-42.767,5.692l-0.302,16.284l42.598,7.124   
                            c1.941,0.34,3.542,1.885,3.806,3.959c0.34,2.487,0.754,4.938,1.245,7.312c0.263,1.244,0.526,2.488,0.846,3.809H366.748z   
                                M463.929,414.34c-4.656-3.883-9.952-7.012-15.719-9.273c-6.201-2.412-12.911-3.808-19.905-3.921    
                                c-15.811-0.263-30.27,5.919-40.806,16.097c-10.535,10.178-17.207,24.39-17.47,40.221c-0.078,5.466,0.604,10.856,1.996,15.983  
                                l0.057,0.188c1.189,4.373,2.885,8.48,4.994,12.364h86.853V414.34z M374.627,149.115h82.743l-82.743-82.742V149.115z
                                        M463.929,158.388H369.99c-2.563,0-4.636-2.073-4.636-4.637V59.814h-2.411L96.586,59.776c0,142.074,0,284.147,0,426.223h205.589 
                                        l-0.414-1.998l-0.828-4.523l-43.198-7.238c-2.376-0.377-4.036-2.524-3.846-4.9l0.414-23.974c0.039-2.3,1.772-4.186,4.014-4.486 
                                            l43.389-5.767c0.677-3.355,1.487-6.673,2.411-9.914c0.943-3.317,2.018-6.597,3.225-9.764l-33.796-27.856   
                                            c-1.79-1.471-2.166-4.033-1.036-5.956l12.477-20.733c1.189-1.997,3.675-2.789,5.77-1.884l40.447,16.698   
                                                c2.26-2.525,4.637-5.013,7.125-7.426c2.467-2.374,5.012-4.637,7.611-6.785l-15.34-41.05c-0.793-2.187,0.112-4.562,2.074-5.654  
                                                l21.145-11.761c2.035-1.094,4.523-0.566,5.899,1.244l26.708,34.717c3.242-1.093,6.559-2.073,9.896-2.902  
                                                    c3.26-0.829,6.576-1.508,9.971-2.073l7.236-43.161c0.396-2.375,2.544-4.033,4.899-3.846l23.956,0.377    
                                                    c2.319,0.038,4.204,1.772,4.506,4.034l5.748,43.388c2.394,0.489,4.787,1.018,7.143,1.658c1.396,0.34,2.79,0.754,4.147,1.168    
                                                    V158.388z M87.314,459.536V55.178v-0.113v-0.113l0,0l0.018-0.113l0,0l0.018-0.113l0,0l0.056-0.489h0.021 
                                                    c0.414-2.11,2.281-3.694,4.524-3.694l265.374,0.037l-0.073-8.783h-9.143H71.255c0,139.248,0,278.494,0,417.741H87.314z 
                                                        M61.982,443.742V37.159v-0.112v-0.113l0,0L62,36.82l0,0l0.018-0.113l0,0l0.06-0.453h0.018c0.414-2.11,2.281-3.731,4.524-3.731    h275.987l-0.056-6.483L48.071,26.002v417.74H61.982z M237.773,277.58c-4.787-4.938-11.476-8.066-18.885-8.18    c-7.426-0.15-14.231,2.752-19.169,7.539c-4.938,4.787-8.064,11.46-8.198,18.885c-0.133,7.427,2.769,14.25,7.56,19.188    c4.787,4.938,11.458,8.066,18.885,8.18c7.426,0.151,14.21-2.752,19.169-7.539c4.956-4.787,8.086-11.459,8.198-18.885    C245.463,289.342,242.561,282.557,237.773,277.58z M219.022,260.166c9.988,0.15,18.979,4.371,25.405,11.006    c6.409,6.672,10.29,15.757,10.139,25.746c-0.168,9.951-4.373,18.961-11.023,25.369c-6.654,6.408-15.74,10.291-25.728,10.141    c-9.971-0.151-18.962-4.373-25.37-11.008c-6.426-6.634-10.308-15.756-10.139-25.746c0.151-9.951,4.373-18.961,11.006-25.369    C199.948,263.897,209.069,260.015,219.022,260.166z M137.184,294.92l-0.039,2.188l19.751,3.316    c2.074,0.34,3.583,1.998,3.829,3.996c0.281,2.035,0.677,4.033,1.147,5.993c0.509,1.998,1.13,3.996,1.85,5.956    c0.733,2.035-0.039,4.26-1.755,5.428l-15.663,12.025l2.13,3.807l18.79-7.011c1.923-0.716,4.036-0.075,5.24,1.47    c1.263,1.621,2.639,3.205,4.092,4.713c1.45,1.507,2.958,2.902,4.503,4.221c1.586,1.32,2.074,3.469,1.319,5.277l-7.651,18.547    l3.77,2.262l12.739-15.455c1.302-1.584,3.471-2.074,5.278-1.357c1.906,0.754,3.885,1.471,5.843,2.035    c1.997,0.566,4.033,1.018,6.068,1.357c2.113,0.377,3.657,2.111,3.829,4.184l2.618,19.641l4.373,0.074l3.299-19.752    c0.337-2.035,1.979-3.543,3.92-3.807c2.092-0.303,4.127-0.717,6.089-1.207c2.036-0.49,4.033-1.131,5.956-1.809    c1.979-0.717,4.145,0,5.313,1.658l12.14,15.756l3.807-2.148l-7.012-18.771c-0.716-1.923-0.056-4.033,1.488-5.24    c1.678-1.318,3.242-2.676,4.675-4.07c1.487-1.434,2.902-2.979,4.239-4.562c1.376-1.659,3.695-2.073,5.541-1.169l18.285,7.539    l2.242-3.77l-15.438-12.741c-1.601-1.319-2.092-3.468-1.358-5.277c0.776-1.96,1.453-3.92,2.039-5.88    c0.565-1.998,1.019-3.996,1.355-6.031c0.379-2.111,2.112-3.656,4.165-3.846l19.64-2.601l0.077-4.372l-19.734-3.318    c-2.074-0.339-3.601-2.035-3.846-3.995c-0.264-2.036-0.678-4.033-1.148-5.993c-0.509-1.998-1.133-3.996-1.828-5.956    c-0.755-1.998,0.018-4.222,1.733-5.391l15.663-12.063l-2.13-3.808l-18.772,7.012c-1.923,0.717-4.036,0.075-5.239-1.508    c-1.264-1.584-2.64-3.166-4.054-4.637c-1.453-1.47-2.979-2.902-4.58-4.26c-1.66-1.395-2.091-3.693-1.186-5.541l7.539-18.282    l-3.752-2.262l-12.739,15.456c-1.32,1.582-3.467,2.072-5.296,1.355c-1.923-0.791-3.902-1.469-5.864-2.035    c-1.997-0.564-3.994-1.018-6.029-1.357c-2.148-0.377-3.657-2.109-3.847-4.184l-2.601-19.639l-4.373-0.076l-3.316,19.752    c-0.341,2.074-2.036,3.619-4.033,3.846c-2.018,0.264-4.036,0.679-5.994,1.168c-1.962,0.49-3.941,1.094-5.92,1.81    c-2.015,0.755-4.24-0.038-5.408-1.733l-12.044-15.682l-3.826,2.148l7.03,18.773c0.716,1.922,0.06,4.033-1.506,5.238    c-1.604,1.244-3.166,2.64-4.636,4.072c-1.492,1.432-2.923,2.939-4.261,4.561c-1.396,1.658-3.695,2.073-5.559,1.168l-18.263-7.539    l-2.264,3.77l15.456,12.742c1.583,1.318,2.074,3.467,1.337,5.276c-0.772,1.923-1.45,3.921-2.015,5.881    c-0.565,1.997-1.018,3.996-1.375,6.031c-0.358,2.111-2.113,3.657-4.166,3.845l-19.639,2.602L137.184,294.92z M283.179,181.797    v-69.511h9.234v69.511H283.179z M226.069,145.307h17.982c5.956,0,10.157-1.131,12.666-3.316c2.484-2.225,3.73-5.353,3.73-9.387    c0-2.864-0.716-5.391-2.187-7.463c-1.488-2.035-3.432-3.431-5.805-4.109c-1.565-0.377-4.429-0.604-8.595-0.604h-17.793V145.307z     M216.854,181.797v-69.511h26.254c4.597,0,8.142,0.226,10.574,0.641c3.411,0.565,6.275,1.659,8.594,3.242    c2.316,1.62,4.184,3.845,5.598,6.71c1.394,2.864,2.092,6.031,2.092,9.461c0,5.881-1.867,10.895-5.636,14.965    c-3.77,4.109-10.574,6.145-20.412,6.145h-17.849v28.348H216.854z M164.474,153.262h23.675l-7.24-19.263    c-2.187-5.881-3.843-10.706-4.973-14.551c-0.961,4.562-2.243,9.009-3.846,13.419L164.474,153.262z M144.459,181.797l26.668-69.511   
                                                            h10.122l28.311,69.511h-10.479l-8.03-21.072h-29.29l-7.539,21.072H144.459z"/></g></g><g/>
            </svg>
            <div>API</div>
        </div>

    
        <div>
            <svg viewBox="0 0 256 289"> {/*contentful */}
                <path d="m87.333315 200.77659c-15.3058387-14.405495-24.3092732-34.213051-24.3092732-56.721637 0-22.508587 9.0034345-42.316143 23.4089298-56.721638 12.6048083-12.6048083 12.6048083-32.4123643 0-45.0171727-12.6048084-12.6048083-32.4123644-12.6048083-45.0171727 0-25.2096167 26.1099602-41.4157989 62.1236987-41.4157989 101.7388107s16.2061822 75.62885 42.3161423 101.73881c12.6048084 12.604808 32.4123644 12.604808 45.0171727 0 11.7044649-12.604808 11.7044649-32.412364 0-45.017173z"/>
                <path d="m87.333315 87.333315c14.405495-15.3058387 34.213051-24.3092732 56.721638-24.3092732 22.508586 0 42.316142 9.0034345 56.721637 23.4089298 12.604809 12.6048083 32.412365 12.6048083 45.017173 0 12.604808-12.6048084 12.604808-32.4123644 0-45.0171727-26.10996-25.2096167-62.123698-41.4157989-101.73881-41.4157989s-75.6288505 16.2061822-101.7388107 42.3161423c-12.6048083 12.6048084-12.6048083 32.4123644 0 45.0171727 12.6048084 11.7044649 32.4123644 11.7044649 45.0171727 0z" />
                <path  d="m200.77659 200.77659c-14.405495 15.305839-34.213051 24.309273-56.721637 24.309273-22.508587 0-42.316143-9.003434-56.721638-23.408929-12.6048083-12.604809-32.4123643-12.604809-45.0171727 0-12.6048083 12.604808-12.6048083 32.412364 0 45.017172 26.1099602 25.209617 62.1236987 41.415799 101.7388107 41.415799s75.62885-16.206182 101.73881-42.316142c12.604808-12.604808 12.604808-32.412364 0-45.017173-12.604808-11.704465-32.412364-11.704465-45.017173 0z"/>
                <ellipse cx="64.824729" cy="64.824729" rx="31.512021" ry="31.512021"/>
                <ellipse cx="64.824729" cy="223.285177" rx="31.512021" ry="31.512021"/>
            </svg>
            <div>Contentful</div>
        </div>


          
          
          
    </>;

    const shortVersion = <>
        <p>Hello there! I'm Hana, a web developer from the Czech Republic and currently residing 
        in the Netherlands. Despite of the fact, that Yoda said I was too old to begin the training, 
        I've learned to wield the force of web development over the past three years.</p>
    
        <p>My techstack:</p>
        <p className='about__icons--stack'>{techStack}</p>
        <p>If you have any questions or would 
        like to embark on a web development adventure together, don't hesitate to reach out. Together,
        we can bring balance to the web development universe!</p>
        <p>May the code be with you!</p>
    </>;

    const longVersion = <>
        <p>Hello there! I'm Hana, a web developer from the Czech Republic and currently residing 
        in the Netherlands. Despite of the fact, that Yoda said I was too old to begin the training, 
        I've learned to wield the force of web development over the past three years.</p>
        <p>My techstack:</p>
        <p className='about__icons--stack'>{techStack}</p>
        <p>
        I started to learn to code in my free time when I moved to the Netherlands. I've been coding during my evenings and weekends 
        when I am not at work. Currently I am making chocolate bars, you can find out more about me on my <a href="https://www.linkedin.com/in/hanavoriskova/?locale=en_US" rel="noreferrer" target='_blank'>linkedin profile</a>. Otherwise I like baking, photography (you can see my photos also on this page), reading and drawing.
        </p>
      
        {/* <p>When I'm not laughing at Lennon's wall font jokes or exploring galaxies far, far away, 
            I'm diving into the realms of vanilla JavaScript, CSS, React, and Next.js. 
            I believe in the Force of clean, well-structured code, ensuring that my creations not only function 
            flawlessly but also maintain a balance between readability and maintainability.</p> */}
        {/* { isDesctop ? (<p>Remember, collaboration is strong with this one! I value effective communication and teamwork, believing they are crucial elements for achieving successful project outcomes. Whether I'm working alongside clients, designers, or fellow developers, I strive to create exceptional web experiences that leave a lasting impact, much like the epic battles fought in a galaxy far, far away.</p>) : null} */}
        <p>If you have any questions or would 
        like to embark on a web development adventure together, don't hesitate to reach out. Together,
        we can bring balance to the web development universe!</p>
        <p>May the code be with you!</p>
    </>;

    return(
        <>
            <h2 className='About constellation_header_6'>
                        <img alt='header for about' src={aboutHeader} loading="lazy"/>
            </h2>

            <div className='flex-parent-two-coll'>
                <div className='text-container about_text'>
                    {/* short version vs. long version*/}
                    <div className='buttons_container'>
                        <button onClick={() => setLongVersion(false)} className={longVersionClicked ? ('secondary-action-button rounded-corners about__button--version') : ('secondary-action-button rounded-corners about__button--version active')}>Short version</button>
                        <button onClick={() => setLongVersion(true)} className={longVersionClicked ? ('secondary-action-button rounded-corners about__button--version active') : ('secondary-action-button rounded-corners about__button--version')}>Long version</button>
                    </div>

                    <div>
                        {longVersionClicked ? (longVersion) : (shortVersion)}
                    </div>

    

                    <div className='buttons_container'>
                        <NavLink to='/projects' className='primary-action-button'> Check my projects</NavLink>
                        <NavLink to='/contact' className='secondary-action-button'>Contact me</NavLink>
                    </div>

                </div>
                <div className='aboutImageContainer flex-container-col-2'>
                    <img className='aboutImg' alt='the web developer you are looking for' src={aboutImage} loading="lazy"/>
                </div>
            </div>
        </>
    )
};

export default About;