type CircleInput = {
  x: number;
  y: number;
  size: number;
  color: string;
};

export function paintCircle(ctx: CanvasRenderingContext2D, input: CircleInput) {
  ctx.beginPath();
  ctx.arc(input.x, input.y, input.size / 2, 0, 2 * Math.PI);
  ctx.fillStyle = input.color;
  ctx.fill();
  ctx.closePath();
}

export function paintStar(ctx: CanvasRenderingContext2D, input: CircleInput) {
  paintCircle(ctx, input);

  const { x, y } = input;
  const gradient = ctx.createRadialGradient(x, y, 0, x, y, input.size * 3);
  gradient.addColorStop(0, input.color);
  gradient.addColorStop(1, "transparent");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.globalCompositeOperation = "multiply";
}

type LineInput = {
  from: {
    x: number;
    y: number;
  };
  to: {
    x: number;
    y: number;
  };
  color: string;
  width?: number;
};

export function paintLine(ctx: CanvasRenderingContext2D, input: LineInput) {
  ctx.beginPath();
  ctx.moveTo(input.from.x, input.from.y);
  ctx.lineTo(input.to.x, input.to.y);
  ctx.lineWidth = input.width ?? 1;
  ctx.strokeStyle = input.color;
  ctx.stroke();
  ctx.closePath();
}
