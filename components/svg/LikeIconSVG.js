import InlineSVG from 'svg-inline-react';

const svgSource = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.7633 12.5095C21.157 11.9892 21.375 11.3517 21.375 10.6884C21.375 9.63605 20.7867 8.63996 19.8398 8.08449C19.5961 7.94151 19.3185 7.86626 19.0359 7.86652H13.4156L13.5563 4.98605C13.5891 4.28996 13.343 3.62902 12.8648 3.12512C12.6302 2.87674 12.3471 2.67913 12.0331 2.54449C11.7191 2.40984 11.3807 2.34103 11.0391 2.3423C9.82031 2.3423 8.74219 3.16262 8.41875 4.33683L6.40547 11.6259H3.375C2.96016 11.6259 2.625 11.9611 2.625 12.3759V20.9071C2.625 21.322 2.96016 21.6571 3.375 21.6571H17.468C17.6836 21.6571 17.8945 21.615 18.0891 21.5306C19.2047 21.0548 19.9242 19.965 19.9242 18.7556C19.9242 18.4603 19.882 18.1696 19.7977 17.8884C20.1914 17.3681 20.4094 16.7306 20.4094 16.0673C20.4094 15.772 20.3672 15.4814 20.2828 15.2001C20.6766 14.6798 20.8945 14.0423 20.8945 13.379C20.8898 13.0837 20.8477 12.7907 20.7633 12.5095ZM4.3125 19.9696V13.3134H6.21094V19.9696H4.3125ZM19.2281 11.6962L18.7148 12.1415L19.0406 12.7368C19.148 12.9329 19.2036 13.1531 19.2023 13.3767C19.2023 13.7634 19.0336 14.1314 18.743 14.3845L18.2297 14.8298L18.5555 15.4251C18.6628 15.6212 18.7185 15.8414 18.7172 16.065C18.7172 16.4517 18.5484 16.8196 18.2578 17.0728L17.7445 17.5181L18.0703 18.1134C18.1776 18.3095 18.2333 18.5297 18.232 18.7532C18.232 19.2782 17.9227 19.7517 17.4445 19.9673H7.71094V13.2384L10.043 4.78918C10.1031 4.57262 10.2322 4.38156 10.4107 4.24495C10.5891 4.10834 10.8073 4.03364 11.032 4.03215C11.2102 4.03215 11.3859 4.08371 11.5266 4.18918C11.7586 4.36262 11.8828 4.62512 11.8687 4.90402L11.6437 9.55402H19.0125C19.4297 9.80949 19.6875 10.2407 19.6875 10.6884C19.6875 11.0751 19.5188 11.4407 19.2281 11.6962Z" fill="black"/>
</svg>`

const LikeIconSVG = () => <InlineSVG src={svgSource} />

export default LikeIconSVG;