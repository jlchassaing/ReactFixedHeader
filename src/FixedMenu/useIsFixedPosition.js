import { useState, useEffect } from "react";
import _throttle from "lodash.throttle";

const supportsPassive = false;
try {
  var opts = Object.defineProperty({}, "passive", {
    get: function() {
      supportsPassive = true;
    }
  });
  window.addEventListener("testPassive", null, opts);
  window.removeEventListener("testPassive", null, opts);
} catch (e) {}

const getIsFixed = limit => window.pageYOffset > limit;

const defaultOptions = {
  throttle: 100,
  limit: 10
};

export function useIsFixedPosition(options) {
  const opts = Object.assign({}, defaultOptions, options);

  const [isFixed, setIsFixed] = useState(getIsFixed(opts.limit));

  useEffect(() => {
    const handleScroll = _throttle(() => {
      setIsFixed(getIsFixed(opts.limit));
    }, opts.throttle);

    window.addEventListener(
      "scroll",
      handleScroll,
      supportsPassive ? { passive: true } : false
    );

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isFixed;
}
