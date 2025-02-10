import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        prosan: ["var(--font-pro)"],
      },
      fontSize: {
        h1: "clamp(2.5rem, 1.5rem + 4vw, 8rem)", // Larger headings scale smoothly
        h2: "clamp(2rem, 1.3rem + 2.5vw, 5rem)",
        h3: "clamp(1.75rem, 1.25rem + 1.5vw, 3rem)",
        h4: "clamp(1.5rem, 1.2rem + 0.8vw, 2.5rem)",
        h5: "clamp(1.25rem, 1rem + 0.5vw, 1.75rem)",
        h6: "clamp(1rem, 0.9rem + 0.3vw, 1.5rem)", // Smaller headings optimized for balance
        body: "clamp(1rem, 0.95rem + 0.4vw, 1.375rem)", // Body text that's readable on all screens
        link: "clamp(0.875rem, 0.8rem + 0.3vw, 1.125rem)", // Links should stand out slightly
        mini: "clamp(0.8rem, 0.75rem + 0.2vw, 1rem)", // Smaller text, consistent scaling
        "h2-display": "clamp(2.25rem, 1.5rem + 3vw, 6rem)", // Display style headings
        "12px": "0.75rem",
        "14px": "0.875rem",
        "15px": "0.9375rem",
        "16px": "1rem",
        "18px": "1.125rem",
        "20px": "1.25rem",
        "24px": "1.5rem",
        "42px": "2.625rem",
        "64px": "4rem",
      },
      spacing: {
        xxl: "clamp(10rem, 8rem + 5vw, 20rem)", // Generous, better-defined for large screens
        xl: "clamp(6rem, 4rem + 4vw, 12rem)", // Smooth transition and scaling
        l: "clamp(4rem, 3rem + 3vw, 8rem)", // Proportional for layouts
        m: "clamp(3rem, 2rem + 2vw, 6rem)", // Medium-sized gaps for balance
        s: "clamp(2rem, 1.5rem + 1.5vw, 4rem)", // Smaller sections that stay dynamic
        xs: "clamp(1.5rem, 1rem + 1vw, 3rem)", // Compact spacing for smaller elements
        xxs: "clamp(1rem, 0.75rem + 0.8vw, 2rem)", // Minor gaps for very small elements
      },

      animation: {
        slideRight: 'slideRight 1s infinite ease-in-out',
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        shimmer: "shimmer 2s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        slideRight: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(5px)" }, // Adjust distance as needed
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        scroll: {
          to: {
            transform: "translateX(calc(-50% - 0.5rem))",
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      colors: {
        primary: {
          DEFAULT: "#fcbc45",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [addVariablesForColors, require("tailwindcss-animate")],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars: Record<string, string> = {};

  for (const [key, value] of Object.entries(allColors)) {
    newVars[`--${key}`] = value;
  }

  addBase({
    ":root": newVars,
  });
}

function flattenColorPalette(colors: any): Record<string, string> {
  const flattenedColors: Record<string, string> = {};

  function flatten(obj: any, prefix: string = "") {
    for (const key in obj) {
      if (typeof obj[key] === "string") {
        flattenedColors[`${prefix}${key}`] = obj[key];
      } else {
        flatten(obj[key], `${prefix}${key}-`);
      }
    }
  }

  flatten(colors);
  return flattenedColors;
}
