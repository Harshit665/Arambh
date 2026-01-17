import { useEffect, useMemo, useRef, useState } from "react";

export default function LazySection({
  importer,
  componentProps,
  fallback = null,
  rootMargin = "250px 0px",
  minHeight = 120,
}) {
  const hostRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [Loaded, setLoaded] = useState(null);

  const stableProps = useMemo(() => componentProps ?? {}, [componentProps]);

  useEffect(() => {
    const el = hostRef.current;
    if (!el || isVisible) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        setIsVisible(true);
      },
      { root: null, rootMargin, threshold: 0.01 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [isVisible, rootMargin]);

  useEffect(() => {
    if (!isVisible || Loaded) return;
    let cancelled = false;

    importer()
      .then((mod) => {
        if (cancelled) return;
        setLoaded(() => mod.default);
      })
      .catch(() => {
        if (cancelled) return;
        setLoaded(() => null);
      });

    return () => {
      cancelled = true;
    };
  }, [importer, isVisible, Loaded]);

  return (
    <div ref={hostRef} style={{ minHeight }}>
      {Loaded ? <Loaded {...stableProps} /> : fallback}
    </div>
  );
}
