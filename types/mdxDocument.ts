export interface MdxData {
  id?: string;
  slug?: string;
  title?: string;
  nav_title?: string;
  description?: string;
  version?: string;
  source?: string;
  content: string;
  metadata: {
    [key: string]: any;
  };
}

export enum FileType {
  TSX = "tsx",
  JSX = "jsx",
  TS = "ts",
  JS = "js",
  JSON = "json",
  BASH = "bash",
  TXT = "txt",
}
