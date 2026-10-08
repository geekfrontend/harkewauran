// @ts-check
import { transformerNotationWordHighlight } from "@shikijs/transformers";

/**
 * Monochrome code theme from the design: code blocks stay dark in both site themes,
 * the brand blue is reserved for highlighted words (`// [!code word:...]`).
 * @type {import("shiki").ThemeRegistration}
 */
export const harkeCodeTheme = {
  name: "harke-mono",
  type: "dark",
  colors: {
    "editor.background": "#0E0E0E",
    "editor.foreground": "#D8D8D8",
  },
  tokenColors: [
    { settings: { foreground: "#A8A8A8" } },
    {
      scope: ["comment", "punctuation.definition.comment"],
      settings: { foreground: "#7A7A7A" },
    },
    {
      scope: ["punctuation.definition.tag", "punctuation.definition.tag.begin", "punctuation.definition.tag.end"],
      settings: { foreground: "#7A7A7A" },
    },
    {
      scope: [
        "entity.name.function",
        "support.function",
        "meta.function-call entity.name.function",
        "entity.name.tag",
        "support.class.component",
        "entity.name.type",
        "support.type",
      ],
      settings: { foreground: "#FFFFFF" },
    },
    {
      scope: ["entity.other.attribute-name", "keyword", "storage", "storage.type"],
      settings: { foreground: "#D8D8D8" },
    },
    {
      scope: ["keyword.operator", "storage.type.function.arrow"],
      settings: { foreground: "#A8A8A8" },
    },
  ],
};

/**
 * Wraps each code block in a <figure>, with a <figcaption> for `title="file.tsx"`.
 * @type {import("shiki").ShikiTransformer}
 */
export const codeFrame = {
  name: "harke:code-frame",
  root(root) {
    const title = this.options.meta?.__raw?.match(/title="([^"]+)"/)?.[1];
    return {
      type: "root",
      children: [
        {
          type: "element",
          tagName: "figure",
          properties: { className: ["code-block"] },
          children: [
            ...(title
              ? [
                  {
                    type: "element",
                    tagName: "figcaption",
                    properties: {},
                    children: [{ type: "text", value: title }],
                  },
                ]
              : []),
            .../** @type {any[]} */ (root.children),
          ],
        },
      ],
    };
  },
};

export const shikiTransformers = [transformerNotationWordHighlight(), codeFrame];
