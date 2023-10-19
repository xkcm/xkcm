import LINES from "../consts/lines.json";
import STARS from "../consts/stars.json";

import { paintLine, paintStar } from "./canvas";

export function paintStars(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");

  LINES.forEach((line) => {
    let previousStarIndex = null;

    line.forEach((starIndex) => {
      if (previousStarIndex !== null) {
        const from = STARS[previousStarIndex];
        const to = STARS[starIndex];
        paintLine(ctx, { from, to, color: "#B0DFFD55" });
      }
      previousStarIndex = starIndex;
    });
  });

  STARS.forEach((star) => paintStar(ctx, star));
}
