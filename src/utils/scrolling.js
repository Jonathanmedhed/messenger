import { useEffect, useMemo, useState } from "react";

export const useOnScreen = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIntersecting(entry.isIntersecting)
      ),
    []
  );

  useEffect(() => {
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return isIntersecting;
};

export const scrollToRef = (ref) =>
  ref?.current.scrollIntoView({
    behavior: "smooth",
  });
export const scrollDown = (ref) => {
  ref.current.scrollDown();
};
