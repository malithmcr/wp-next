import React, { useRef, useEffect } from "react";
import { CardWrapper } from "./index.style";
import { useTitleContext } from '../../context/titleContext';

/**
 * Shared component for preview of an article
 * @component- Card
 */
const Card = (props) => {
  const { logoName, img } = props;
  const canvasRef = useRef(null);
  const {title} = useTitleContext();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const background = new Image();
    background.src = img;
    background.onload = function () {
      ctx.drawImage(background, 0, 0);
      ctx.font = "20px Arial";
      ctx.fillStyle = "tomato";
      ctx.textAlign = "center";
      ctx.fillText(title?? logoName, canvas.width / 2, canvas.height / 2);
    };
  }, [title]);

  return (
    <CardWrapper>
      <canvas ref={canvasRef} {...props} />
    </CardWrapper>
  );
};

export default Card;
