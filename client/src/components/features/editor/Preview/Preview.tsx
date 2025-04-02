import { useRef, useState, useEffect } from "react";
import s from "./Preview.module.css";
import TestPage from "../../../../data/testPage/TestPage";

export const Preview = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const testPageRef = useRef<HTMLDivElement>(null);

  const [scale, setScale] = useState(1);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [contentSize, setContentSize] = useState({ width: 0, height: 0 });

  const position = useRef({
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0,
    isDragging: false,
  });

  useEffect(() => {
    // Update the container and content size on window resize
    const updateSizes = () => {
      if (containerRef.current && testPageRef.current) {
        const container = containerRef.current.getBoundingClientRect();
        const content = testPageRef.current.getBoundingClientRect();

        setContainerSize({ width: container.width, height: container.height });
        setContentSize({ width: content.width, height: content.height });
      }
    };

    updateSizes(); // Initial size update
    window.addEventListener("resize", updateSizes); // Listen to resize events

    return () => window.removeEventListener("resize", updateSizes);
  }, []);

  // Automatically adjust scale to fit content in the center of the container
  useEffect(() => {
    const scaleX = containerSize.width / contentSize.width;
    const scaleY = containerSize.height / contentSize.height;
    const newScale = Math.min(scaleX, scaleY);
    setScale(newScale);
  }, [containerSize, contentSize]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!position.current.isDragging) return;
      const deltaX = e.clientX - position.current.lastX;
      const deltaY = e.clientY - position.current.lastY;
      position.current.x += deltaX;
      position.current.y += deltaY;
      position.current.lastX = e.clientX;
      position.current.lastY = e.clientY;
      updateTransform();
    };

    const handleMouseUp = () => {
      position.current.isDragging = false;
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    position.current.isDragging = true;
    position.current.lastX = e.clientX;
    position.current.lastY = e.clientY;
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const zoomFactor = 1.1;
    setScale(
      (prev) =>
        e.deltaY > 0
          ? Math.max(0.1, prev / zoomFactor) // Lower limit of zoom
          : Math.min(20, prev * zoomFactor) // Upper limit of zoom
    );
  };

  const updateTransform = () => {
    if (viewportRef.current) {
      viewportRef.current.style.transform = `translate(${position.current.x}px, ${position.current.y}px) scale(${scale})`;
    }
  };

  useEffect(updateTransform, [scale]); // Update transform when scale changes

  return (
    <div
      ref={containerRef}
      className={s.previewContainer}
      onMouseDown={handleMouseDown}
      onWheel={handleWheel}
      style={{ cursor: position.current.isDragging ? "grabbing" : "grab" }}
    >
      <div
        ref={viewportRef}
        className={s.viewport}
        style={{
          transform: `translate(${position.current.x}px, ${position.current.y}px) scale(${scale})`,
        }}
      >
        {/* <div className={s.grid}></div> TODO fix when zooming - add dynamical grid */}
        <div ref={testPageRef} className={s.renderedItemPreviewContainer}>
          <TestPage />
        </div>
      </div>
    </div>
  );
};
