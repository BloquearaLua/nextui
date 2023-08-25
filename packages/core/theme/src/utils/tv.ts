import {tv as tvBase, TV} from "tailwind-variants";

import {mappedSpacingScaleKeys} from "../types";
const COMMON_UNITS = ["small", "medium", "large"];

export const tv: TV = (options, config) =>
  tvBase(options, {
    ...config,
    /**
     * Nullish 合并运算符
     *   a ?? b
     *   如果 a 为 null / undefined，那么就返回 b 的值，反之，a 的值
     * 与[或运算]不同，空字符串和0等空值，不会触发它给出空值
     */
    twMerge: config?.twMerge ?? true,
    twMergeConfig: {
      ...config?.twMergeConfig,
      theme: {
        ...config?.twMergeConfig?.theme,
        opacity: ["disabled"],
        spacing: ["divider", "unit", ...mappedSpacingScaleKeys],
        borderWidth: COMMON_UNITS,
        borderRadius: COMMON_UNITS,
      },
      classGroups: {
        ...config?.twMergeConfig?.classGroups,
        shadow: [{shadow: COMMON_UNITS}],
        "font-size": [{text: ["tiny", ...COMMON_UNITS]}],
        "bg-image": ["bg-stripe-gradient"],
        "min-w": [
          {
            "min-w": ["unit", ...mappedSpacingScaleKeys],
          },
        ],
        "min-h": [
          {
            "min-h": ["unit", ...mappedSpacingScaleKeys],
          },
        ],
      },
    },
  });
