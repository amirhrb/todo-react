import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { useState } from "react";

// Create rtl cache

function RTL({ children }) {
  const [isRtl, setRtl] = useState(true);
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, isRtl ? rtlPlugin : null],
  });
  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
}
export default RTL;
