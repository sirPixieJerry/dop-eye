import { JSDOM } from 'jsdom';

const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
const { window } = dom;

(global as any).HTMLElement = window.HTMLElement;
(global as any).SVGElement = window.SVGElement;

(global as any).document = dom.window.document;
(global as any).window = dom.window;
(global as any).navigator = dom.window.navigator;
