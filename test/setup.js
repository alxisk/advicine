import { JSDOM } from 'jsdom';
import fetch from 'node-fetch';

const dom = new JSDOM('');
global.window = dom.window;
global.document = dom.window.document;
global.fetch = fetch;
