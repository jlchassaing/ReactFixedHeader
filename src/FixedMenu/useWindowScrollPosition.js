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

const getPosition = () => ({
  x: window.pageXOffset,
  y: window.pageYOffset
});

const defaultOptions = {
  throttle: 100
};

export function useWindowScrollPosition(options) {
  const opts = Object.assign({}, defaultOptions, options);

  const [position, setPosition] = useState(getPosition());

  useEffect(() => {
    const handleScroll = _throttle(() => {
      setPosition(getPosition());
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

  return position;
}
