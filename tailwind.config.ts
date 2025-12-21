import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./app/**/*.{ts,tsx,js,jsx}",
    "./src/**/*.{ts,tsx,js,jsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        xl: "1232px",
      },
      colors: {
        border: "var(--ds-gray-200)",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        gray: {
          100: "var(--ds-gray-100)",
          200: "var(--ds-gray-200)",
          900: "var(--ds-gray-900)",
          1000: "var(--ds-gray-1000)",
        },
        blue: {
          400: "var(--ds-blue-400)",
          600: "var(--ds-blue-600)",
          700: "var(--ds-blue-700)",
        },
        purple: {
          300: "var(--ds-purple-300)",
          400: "var(--ds-purple-400)",
          700: "var(--ds-purple-700)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "var(--tw-prose-body)",
            table: {
              textAlign: "start",
            },
            a: {
              color: "inherit",
            },
            // 将code代码的前后伪元素去掉，否则会导致代码块被``包裹
            "code::before": {
              content: "''",
            },
            "code::after": {
              content: "''",
            },
            "blockquote p:first-of-type::before": {
              content: "''",
            },
            "blockquote p:first-of-type::after": {
              content: "''",
            },
          },
        },
        // 自定义变体
        vercel: {
          css: {
            "--tw-prose-body": " var(--ds-gray-1000)",
            "--tw-prose-headings": "var(--ds-gray-1000)",
            "--tw-prose-lead": "var(--ds-gray-1000)",
            "--tw-prose-links": "var(--ds-blue-700)",
            "--tw-prose-bold": "var(--ds-gray-1000)",
            "--tw-prose-counters": "var(--ds-gray-900)",
            "--tw-prose-bullets": "var(--ds-gray-900)",
            "--tw-prose-hr": "var(--ds-gray-200)",
            "--tw-prose-quotes": "var(--ds-gray-1000)",
            "--tw-prose-quote-borders": "var(--ds-gray-300)",
            "--tw-prose-captions": "var(--ds-gray-900)",
            "--tw-prose-code": "var(--ds-gray-1000)",
            "--tw-prose-pre-code": "var(--ds-gray-100)",
            "--tw-prose-pre-bg": "#fff",
            "--tw-prose-th-borders": "var(--ds-gray-200)",
            "--tw-prose-td-borders": "var(--ds-gray-200)",
            h1: {
              fontWeight: "600",
              color: "var(--ds-gray-1000)",
              scrollMarginTop: "51px",
            },
            h2: {
              fontWeight: "600",
            },
            "h2:not(:is(h1+h2))": {
              borderTopStyle: "solid",
              borderTopWidth: "1px",
              borderColor: "var(--ds-gray-200)",
              paddingTop: "2.5rem",
              scrollMarginTop: "11px",
            },
            h3: {
              fontWeight: "600",
              scrollMarginTop: "51px",
            },
            p: {
              marginTop: "1.25em",
              marginBottom: "1.25em",
            },
            blockquote: {
              borderWidth: "1px",
              borderLeftColor: "var(--ds-gray-200)",
              borderRadius: "0.375rem",
              fontStyle: "normal",
              fontWeight: "400",
              p: {
                marginTop: "0",
                marginBottom: "0.5rem",
              },
              "p:last-child": {
                marginBottom: "0",
              },
            },
            code: {
              fontWeight: "inherit",
              backgroundColor: "var(--ds-gray-100)",
              borderRadius: "0.375rem",
              borderWidth: "1px",
              borderColor: "var(--ds-gray-200)",
              padding: "0.125rem 0.25rem",
            },
            a: {
              textDecoration: "none",
              fontWeight: "inherit",
            },
            "[data-docs-heading]": {
              a: {
                color: "inherit",
                span: {
                  display: "inline-flex",
                  marginLeft: ".375rem",
                  visibility: "hidden",
                  opacity: 0,
                },
              },
              "a:hover span": {
                visibility: "visible",
                opacity: 1,
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    nextui(),
    require("@tailwindcss/typography"),
  ],
} satisfies Config;

export default config;
