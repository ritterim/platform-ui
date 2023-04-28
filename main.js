// Platform UI Styles
import 'normalize.css';
import './src/sass/main.scss';
// Vite needs to process this file directly to
// base64 encode the src for font-family
import './public/platform-icons.css';

// Polyfill
import './src/js/polyfill/main';

// Platform UI JavaScript Components
import './src/js/accordion';
import './src/js/aside-toggle';
import './src/js/background-image';
import './src/js/drawer';
import './src/js/forms';
import './src/js/gradient';
import './src/js/info-box';
import './src/js/menu';
import './src/js/mobile-menu';
import './src/js/modal';
import './src/js/tabs';
import './src/js/z-index';