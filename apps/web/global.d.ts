declare namespace NodeJS {
  export interface ProcessOptions {
    browser: boolean;
  }

  export interface Global {
    PORT: any;
  }

  export interface ProcessEnv {
    APIBASEURL: string;
    IMAGEDOMAIN: string;
  }
}
