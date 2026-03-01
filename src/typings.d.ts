/*
 * Extra typings definitions
 */

// Allow .json files imports
declare module '*.json';

// Runtime env config loaded via index.html script tag
interface Window {
  env: Record<string, any>;
}

// SystemJS module definition
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare module 'chart.js';

declare module '@ckeditor/ckeditor5-build-classic' {
  const ClassicEditorBuild: any;

  export = ClassicEditorBuild;
}
