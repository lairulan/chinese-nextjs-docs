import CopyButton from "@/components/CopyButton";
import LanguageSelector from "./LanguageSelector";
import { FileType } from "@/types/mdxDocument";
import { PiTerminalBold } from "react-icons/pi";
import { SiTypescript, SiJavascript } from "react-icons/si";
import { FaRegFile } from "react-icons/fa6";
import { BsFiletypeJson } from "react-icons/bs";

const getIcon = (language) => {
  switch (language) {
    case "tsx":
    case "ts":
      return <SiTypescript />;
    case "jsx":
    case "js":
      return <SiJavascript />;
    case "json":
      return <BsFiletypeJson />;
    case "bash":
    case "txt":
      return <PiTerminalBold />;
    default:
      return <FaRegFile />;
  }
};

const extractTextFromNode = (node) => {
  if (typeof node === "string") return node;
  if (Array.isArray(node)) return node.map(extractTextFromNode).join("");
  if (node && typeof node === "object" && node.props && node.props.children) {
    return extractTextFromNode(node.props.children);
  }
  return "";
};

const CodeBlockWithHeader = (props) => {
  const language = props["data-language"];

  let codeArray = props.children.props?.children;
  if (!Array.isArray(codeArray)) {
    codeArray = [codeArray];
  }

  const codeText = codeArray
    .map((node) => {
      return extractTextFromNode(node);
    })
    .join("")
    .trim();

  return (
    <div className="code-block-wrapper not-prose">
      <div className="code-block-header">
        <div className="code-block-filename">
          <div className="code-block-fileIcon">{getIcon(language)}</div>
          <span className="code-block-filenamePath">{props.filename}</span>
        </div>
        <div className="code-block-action">
          {(language === FileType.JSX ||
            language === FileType.TSX ||
            language === FileType.TS ||
            language === FileType.JS) &&
            props.meta.includes("switcher") && <LanguageSelector />}
          <CopyButton className="code-block-copyButton" text={codeText} />
        </div>
      </div>
      <pre className="code-block-pre" {...props} />
    </div>
  );
};

export default CodeBlockWithHeader;
