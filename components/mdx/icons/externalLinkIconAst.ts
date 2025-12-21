export const externalLinkIconAst = {
  type: "element",
  tagName: "svg",
  properties: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 14,
    height: 14,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    style: "display: inline-flex",
    "strokeLinejoin": 'round'
  },
  children: [
    {
      type: "element",
      tagName: "polyline",
      properties: {
        points: "15 3 21 3 21 9",
      },
    },
    {
      type: "element",
      tagName: "line",
      properties: {
        x1: 10,
        y1: 14,
        x2: 21,
        y2: 3,
      },
    },
    // {
    //   type: "element",
    //   tagName: "path",
    //   properties: {
    //     fillRule: 'evenodd',
    //     clipRule: "evenodd",
    //     fill: "currentColor",
    //     d: "M6.75011 4H6.00011V5.5H6.75011H9.43945L5.46978 9.46967L4.93945 10L6.00011 11.0607L6.53044 10.5303L10.499 6.56182V9.25V10H11.999V9.25V5C11.999 4.44772 11.5512 4 10.999 4H6.75011Z",
    //   },
    // },
  ],
};
