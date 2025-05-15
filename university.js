(function(global, factory) {
    typeof exports === "object" && typeof module !== "undefined" ? factory(require("react"), require("react-dom")) : typeof define === "function" && define.amd ? define(["react", "react-dom"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.React, global.ReactDOM));
  })(this, function(require$$0, require$$0$1) {
    "use strict";
    var jsxRuntime = { exports: {} };
    var reactJsxRuntime_production_min = {};
    /**
     * @license React
     * react-jsx-runtime.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var hasRequiredReactJsxRuntime_production_min;
    function requireReactJsxRuntime_production_min() {
      if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
      hasRequiredReactJsxRuntime_production_min = 1;
      var f = require$$0, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
      function q(c, a, g) {
        var b, d = {}, e = null, h = null;
        void 0 !== g && (e = "" + g);
        void 0 !== a.key && (e = "" + a.key);
        void 0 !== a.ref && (h = a.ref);
        for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
        if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
        return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
      }
      reactJsxRuntime_production_min.Fragment = l;
      reactJsxRuntime_production_min.jsx = q;
      reactJsxRuntime_production_min.jsxs = q;
      return reactJsxRuntime_production_min;
    }
    var hasRequiredJsxRuntime;
    function requireJsxRuntime() {
      if (hasRequiredJsxRuntime) return jsxRuntime.exports;
      hasRequiredJsxRuntime = 1;
      {
        jsxRuntime.exports = requireReactJsxRuntime_production_min();
      }
      return jsxRuntime.exports;
    }
    var jsxRuntimeExports = requireJsxRuntime();
    var client = {};
    var hasRequiredClient;
    function requireClient() {
      if (hasRequiredClient) return client;
      hasRequiredClient = 1;
      var m = require$$0$1;
      {
        client.createRoot = m.createRoot;
        client.hydrateRoot = m.hydrateRoot;
      }
      return client;
    }
    var clientExports = requireClient();
    /**
     * @license lucide-react v0.510.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */
    const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
    const toCamelCase = (string) => string.replace(
      /^([A-Z])|[\s-_]+(\w)/g,
      (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
    );
    const toPascalCase = (string) => {
      const camelCase = toCamelCase(string);
      return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
    };
    const mergeClasses = (...classes) => classes.filter((className, index, array) => {
      return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
    const hasA11yProp = (props) => {
      for (const prop in props) {
        if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
          return true;
        }
      }
    };
    /**
     * @license lucide-react v0.510.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */
    var defaultAttributes = {
      xmlns: "http://www.w3.org/2000/svg",
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    };
    /**
     * @license lucide-react v0.510.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */
    const Icon = require$$0.forwardRef(
      ({
        color = "currentColor",
        size = 24,
        strokeWidth = 2,
        absoluteStrokeWidth,
        className = "",
        children,
        iconNode,
        ...rest
      }, ref) => require$$0.createElement(
        "svg",
        {
          ref,
          ...defaultAttributes,
          width: size,
          height: size,
          stroke: color,
          strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
          className: mergeClasses("lucide", className),
          ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
          ...rest
        },
        [
          ...iconNode.map(([tag, attrs]) => require$$0.createElement(tag, attrs)),
          ...Array.isArray(children) ? children : [children]
        ]
      )
    );
    /**
     * @license lucide-react v0.510.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */
    const createLucideIcon = (iconName, iconNode) => {
      const Component = require$$0.forwardRef(
        ({ className, ...props }, ref) => require$$0.createElement(Icon, {
          ref,
          iconNode,
          className: mergeClasses(
            `lucide-${toKebabCase(toPascalCase(iconName))}`,
            `lucide-${iconName}`,
            className
          ),
          ...props
        })
      );
      Component.displayName = toPascalCase(iconName);
      return Component;
    };
    /**
     * @license lucide-react v0.510.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */
    const __iconNode$3 = [
      [
        "path",
        {
          d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
          key: "sc7q7i"
        }
      ]
    ];
    const Funnel = createLucideIcon("funnel", __iconNode$3);
    /**
     * @license lucide-react v0.510.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */
    const __iconNode$2 = [["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]];
    const Play = createLucideIcon("play", __iconNode$2);
    /**
     * @license lucide-react v0.510.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */
    const __iconNode$1 = [
      ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
      ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
    ];
    const Search = createLucideIcon("search", __iconNode$1);
    /**
     * @license lucide-react v0.510.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */
    const __iconNode = [
      ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
      ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
    ];
    const X = createLucideIcon("x", __iconNode);
    const COLORS = {
      // Collections
      "Copilot Series": "from-emerald-800 to-emerald-950",
      "LINKS Ecosystem": "from-orange-700 to-orange-950",
      "Nutrient Delivery Kit": "from-yellow-600 to-yellow-900",
      "Portal 2.0 Series": "from-blue-700 to-blue-950",
      "Customer Highlights": "from-purple-700 to-purple-950",
      "Only Grows": "from-red-600 to-red-900",
      // Categories
      "Crop Steering": "from-emerald-700 to-emerald-900",
      "Setup & Installation": "from-gray-700 to-gray-900",
      "Climate Control": "from-blue-600 to-blue-900",
      "Lighting Control": "from-amber-600 to-amber-900",
      "Irrigation & Fertigation": "from-cyan-700 to-cyan-900",
      "Product Overviews": "from-violet-700 to-violet-900",
      "Customer Stories": "from-pink-700 to-pink-900",
      "Podcast": "from-red-600 to-red-900"
    };
    const getBackgroundColor = (collection, category) => {
      if (collection && COLORS[collection]) {
        return COLORS[collection];
      }
      if (category && COLORS[category]) {
        return COLORS[category];
      }
      return "from-gray-700 to-gray-900";
    };
    const parseTitle = (title) => {
      const main = title.split(/[:|-]/)[0].trim();
      const sub = title.replace(main, "").replace(/^[:|-]/, "").trim();
      return { main, sub };
    };
    function StaticThumbnail({
      title,
      subtitle,
      collection,
      category,
      duration,
      className = ""
    }) {
      const { main, sub } = parseTitle(title);
      const displaySubtitle = subtitle || sub;
      const bgColor = getBackgroundColor(collection, category);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `relative aspect-video overflow-hidden rounded-lg ${className}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 bg-gradient-to-br ${bgColor}` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxNSAwIEwgMCAwIDAgMTUiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] bg-center opacity-20" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-10 -mt-10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-32 h-32 bg-black opacity-10 rounded-full -ml-10 -mb-10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 right-3 text-white/30 text-xs font-light", children: "growlink.ag" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 100 20", className: "w-full opacity-20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 20 L50 0 L100 20", fill: "none", stroke: "white", strokeWidth: "1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 15 L50 0 L100 15", fill: "none", stroke: "white", strokeWidth: "0.5" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 p-6 flex flex-col justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl md:text-2xl font-bold text-white z-10 mb-1", children: main }),
              displaySubtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 text-sm md:text-base z-10", children: displaySubtitle })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-black", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-6 w-6 fill-current" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-2 right-2 rounded bg-black/70 px-2 py-1 text-xs text-white", children: duration })
          ]
        }
      );
    }
    function VideoCard({ video, onClick }) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-md",
          onClick: () => onClick(video),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-video w-full overflow-hidden rounded-t-2xl", children: (
              // Use our static thumbnail generator component
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                StaticThumbnail,
                {
                  title: video.title,
                  category: video.category,
                  collection: video.collection,
                  duration: video.duration
                }
              )
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-medium text-gray-900 line-clamp-1", children: video.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-gray-500 line-clamp-2", children: video.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800", children: video.category }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-500", children: video.date })
              ] }),
              video.collection && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700", children: video.collection }) })
            ] })
          ]
        }
      );
    }
    function VideoModal({ video, onClose }) {
      const modalRef = require$$0.useRef(null);
      const [isPlayerReady, setIsPlayerReady] = require$$0.useState(false);
      const [playClicked, setPlayClicked] = require$$0.useState(false);
      require$$0.useEffect(() => {
        function handleEscape(e) {
          if (e.key === "Escape") onClose();
        }
        function handleClickOutside(e) {
          if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose();
          }
        }
        document.addEventListener("keydown", handleEscape);
        document.addEventListener("mousedown", handleClickOutside);
        document.body.style.overflow = "hidden";
        if (typeof window !== "undefined" && !window.Vimeo) {
          const script = document.createElement("script");
          script.src = "https://player.vimeo.com/api/player.js";
          script.async = true;
          script.onload = () => setIsPlayerReady(true);
          document.body.appendChild(script);
        } else {
          setIsPlayerReady(true);
        }
        return () => {
          document.removeEventListener("keydown", handleEscape);
          document.removeEventListener("mousedown", handleClickOutside);
          document.body.style.overflow = "";
        };
      }, [onClose]);
      if (!video) return null;
      const handlePlayClick = () => {
        setPlayClicked(true);
      };
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          ref: modalRef,
          className: "relative mx-auto max-w-5xl w-full rounded-2xl bg-white shadow-xl",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: onClose,
                className: "absolute -right-4 -top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-500 shadow-md transition-colors hover:text-black focus:outline-none",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video w-full overflow-hidden rounded-t-2xl", children: !playClicked ? (
              // Use a custom thumbnail with play button
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full h-full cursor-pointer", onClick: handlePlayClick, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  StaticThumbnail,
                  {
                    title: video.title,
                    category: video.category,
                    collection: video.collection,
                    duration: video.duration,
                    className: "w-full h-full"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center cursor-pointer group", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-20 w-20 items-center justify-center rounded-full bg-white bg-opacity-90 text-black shadow-lg transition-transform duration-300 group-hover:scale-110", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-8 w-8 fill-current" }) }) })
              ] })
            ) : (
              // Load the iframe player once play is clicked
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "iframe",
                {
                  src: `https://player.vimeo.com/video/${video.vimeoId}?autoplay=1&title=0&byline=0&portrait=0`,
                  className: "h-full w-full rounded-t-2xl",
                  allow: "autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media",
                  allowFullScreen: true,
                  title: video.title
                }
              )
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-medium text-gray-900", children: video.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-gray-600", children: video.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-wrap gap-3 items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800", children: video.category }),
                  video.collection && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700", children: video.collection })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-500", children: video.date })
              ] })
            ] })
          ]
        }
      ) });
    }
    function VideoGrid({ videos, categories = [], collections = [] }) {
      var _a;
      const [selectedVideo, setSelectedVideo] = require$$0.useState(null);
      const [activeCategory, setActiveCategory] = require$$0.useState(null);
      const [activeCollection, setActiveCollection] = require$$0.useState(null);
      const [searchQuery, setSearchQuery] = require$$0.useState("");
      const [durationFilter, setDurationFilter] = require$$0.useState(null);
      const [showFilters, setShowFilters] = require$$0.useState(true);
      const [activeFilterType, setActiveFilterType] = require$$0.useState("category");
      const durationRanges = require$$0.useMemo(() => {
        const ranges = [
          { label: "Short (< 3 min)", value: "short", check: (duration) => {
            const minutes = parseInt(duration.split(":")[0]);
            return minutes < 3;
          } },
          { label: "Medium (3-10 min)", value: "medium", check: (duration) => {
            const minutes = parseInt(duration.split(":")[0]);
            return minutes >= 3 && minutes <= 10;
          } },
          { label: "Long (> 10 min)", value: "long", check: (duration) => {
            const minutes = parseInt(duration.split(":")[0]);
            return minutes > 10;
          } }
        ];
        return ranges;
      }, []);
      require$$0.useEffect(() => {
        setActiveCategory(null);
        setActiveCollection(null);
        setDurationFilter(null);
        setSearchQuery("");
      }, [categories, collections]);
      const derivedCategories = require$$0.useMemo(() => {
        if (categories.length > 0) return categories;
        return Array.from(new Set(videos.map((video) => video.category)));
      }, [videos, categories]);
      const derivedCollections = require$$0.useMemo(() => {
        if (collections.length > 0) return collections;
        return Array.from(
          new Set(videos.filter((video) => video.collection && typeof video.collection === "string").map((video) => video.collection))
        );
      }, [videos, collections]);
      const filteredVideos = require$$0.useMemo(() => {
        return videos.filter((video) => {
          var _a2;
          const matchesSearch = !searchQuery || video.title.toLowerCase().includes(searchQuery.toLowerCase()) || video.description.toLowerCase().includes(searchQuery.toLowerCase());
          const matchesCategory = !activeCategory || video.category === activeCategory;
          const matchesCollection = !activeCollection || video.collection === activeCollection;
          const matchesDuration = !durationFilter || ((_a2 = durationRanges.find((range) => range.value === durationFilter)) == null ? void 0 : _a2.check(video.duration));
          return matchesSearch && matchesCategory && matchesCollection && matchesDuration;
        });
      }, [videos, searchQuery, activeCategory, activeCollection, durationFilter, durationRanges]);
      const resetFilters = () => {
        setActiveCategory(null);
        setActiveCollection(null);
        setDurationFilter(null);
        setSearchQuery("");
      };
      const hasActiveFilters = activeCategory !== null || activeCollection !== null || durationFilter !== null || searchQuery !== "";
      const categoryCounts = require$$0.useMemo(() => {
        const counts = {};
        derivedCategories.forEach((category) => {
          counts[category] = videos.filter((video) => video.category === category).length;
        });
        return counts;
      }, [videos, derivedCategories]);
      const collectionCounts = require$$0.useMemo(() => {
        const counts = {};
        derivedCollections.forEach((collection) => {
          counts[collection] = videos.filter((video) => video.collection === collection).length;
        });
        return counts;
      }, [videos, derivedCollections]);
      const durationCounts = require$$0.useMemo(() => {
        const counts = {};
        durationRanges.forEach((range) => {
          counts[range.value] = videos.filter((video) => range.check(video.duration)).length;
        });
        return counts;
      }, [videos, durationRanges]);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-0 z-20 bg-white pt-2 pb-4 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-grow", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4 text-neutral-400" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "Search tutorials...",
                  value: searchQuery,
                  onChange: (e) => setSearchQuery(e.target.value),
                  className: "block w-full pl-10 pr-3 py-2.5 border-0 bg-neutral-100 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:bg-white transition-colors"
                }
              ),
              searchQuery && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setSearchQuery(""),
                  className: "absolute inset-y-0 right-0 pr-4 flex items-center",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3.5 w-3.5 text-neutral-400 hover:text-neutral-600" })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => setShowFilters(!showFilters),
                  className: "flex items-center gap-1.5 px-4 py-2.5 text-sm text-neutral-700 hover:text-primary rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "h-3.5 w-3.5" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Filters" }),
                    hasActiveFilters && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 w-5 h-5 flex items-center justify-center text-xs bg-orange-500 text-white rounded-full", children: (activeCategory ? 1 : 0) + (activeCollection ? 1 : 0) + (durationFilter ? 1 : 0) })
                  ]
                }
              ),
              hasActiveFilters && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: resetFilters,
                  className: "ml-2 flex items-center text-sm text-neutral-500 hover:text-neutral-800 transition-colors",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Clear" })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 text-xs text-neutral-500", children: [
            "Showing ",
            filteredVideos.length,
            " of ",
            videos.length,
            " videos"
          ] })
        ] }),
        showFilters && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 space-x-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setActiveFilterType("category"),
              className: `py-2 text-sm font-medium border-b-2 ${activeFilterType === "category" ? "text-orange-500 border-orange-500" : "text-neutral-500 border-transparent hover:text-neutral-800 hover:border-neutral-200"}`,
              children: "Categories"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setActiveFilterType("collection"),
              className: `py-2 text-sm font-medium border-b-2 ${activeFilterType === "collection" ? "text-orange-500 border-orange-500" : "text-neutral-500 border-transparent hover:text-neutral-800 hover:border-neutral-200"}`,
              children: "Collections"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setActiveFilterType("duration"),
              className: `py-2 text-sm font-medium border-b-2 ${activeFilterType === "duration" ? "text-orange-500 border-orange-500" : "text-neutral-500 border-transparent hover:text-neutral-800 hover:border-neutral-200"}`,
              children: "Duration"
            }
          )
        ] }),
        showFilters && activeFilterType === "category" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setActiveCategory(null),
              className: `px-4 py-1.5 rounded-full text-sm font-medium ${activeCategory === null ? "bg-orange-500 text-white shadow-sm" : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"}`,
              children: [
                "All ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `${activeCategory === null ? "text-white/80" : "text-neutral-500"}`, children: [
                  "(",
                  videos.length,
                  ")"
                ] })
              ]
            }
          ),
          derivedCategories.map((category) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setActiveCategory(category),
              className: `px-4 py-1.5 rounded-full text-sm font-medium ${activeCategory === category ? "bg-orange-500 text-white shadow-sm" : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"}`,
              children: [
                category,
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `${activeCategory === category ? "text-white/80" : "text-neutral-500"}`, children: [
                  "(",
                  categoryCounts[category],
                  ")"
                ] })
              ]
            },
            category
          ))
        ] }),
        showFilters && activeFilterType === "collection" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setActiveCollection(null),
              className: `px-4 py-1.5 rounded-full text-sm font-medium ${activeCollection === null ? "bg-orange-500 text-white shadow-sm" : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"}`,
              children: [
                "All ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `${activeCollection === null ? "text-white/80" : "text-neutral-500"}`, children: [
                  "(",
                  videos.length,
                  ")"
                ] })
              ]
            }
          ),
          derivedCollections.map((collection) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setActiveCollection(collection),
              className: `px-4 py-1.5 rounded-full text-sm font-medium ${activeCollection === collection ? "bg-orange-500 text-white shadow-sm" : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"}`,
              children: [
                collection,
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `${activeCollection === collection ? "text-white/80" : "text-neutral-500"}`, children: [
                  "(",
                  collectionCounts[collection],
                  ")"
                ] })
              ]
            },
            collection
          ))
        ] }),
        showFilters && activeFilterType === "duration" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setDurationFilter(null),
              className: `px-4 py-1.5 rounded-full text-sm font-medium ${durationFilter === null ? "bg-orange-500 text-white shadow-sm" : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"}`,
              children: [
                "All ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `${durationFilter === null ? "text-white/80" : "text-neutral-500"}`, children: [
                  "(",
                  videos.length,
                  ")"
                ] })
              ]
            }
          ),
          durationRanges.map((range) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setDurationFilter(range.value),
              className: `px-4 py-1.5 rounded-full text-sm font-medium ${durationFilter === range.value ? "bg-orange-500 text-white shadow-sm" : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"}`,
              children: [
                range.label,
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `${durationFilter === range.value ? "text-white/80" : "text-neutral-500"}`, children: [
                  "(",
                  durationCounts[range.value],
                  ")"
                ] })
              ]
            },
            range.value
          ))
        ] }),
        showFilters && hasActiveFilters && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-6 py-2 border-t border-b border-neutral-100", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-neutral-500", children: "Active filters:" }),
          activeCategory && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 px-2 py-1 bg-neutral-100 text-neutral-700 rounded-md text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Category: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: activeCategory })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setActiveCategory(null),
                className: "ml-1 text-neutral-400 hover:text-neutral-700",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3 w-3" })
              }
            )
          ] }),
          activeCollection && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 px-2 py-1 bg-neutral-100 text-neutral-700 rounded-md text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Collection: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: activeCollection })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setActiveCollection(null),
                className: "ml-1 text-neutral-400 hover:text-neutral-700",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3 w-3" })
              }
            )
          ] }),
          durationFilter && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 px-2 py-1 bg-neutral-100 text-neutral-700 rounded-md text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Duration: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: (_a = durationRanges.find((range) => range.value === durationFilter)) == null ? void 0 : _a.label })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setDurationFilter(null),
                className: "ml-1 text-neutral-400 hover:text-neutral-700",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3 w-3" })
              }
            )
          ] })
        ] }),
        filteredVideos.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-32 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center w-24 h-24 rounded-full bg-neutral-100 mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-10 w-10 text-neutral-400" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-medium text-neutral-900 mb-2", children: "No videos found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-neutral-600 mb-6", children: "Try adjusting your search or filter criteria to find what you're looking for." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: resetFilters,
              className: "px-4 py-2 bg-orange-500 text-white rounded-full text-sm",
              children: "Clear all filters"
            }
          )
        ] }),
        filteredVideos.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: filteredVideos.map((video, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "animate-[fadeIn_0.3s_ease-in-out]",
            style: { animationDelay: `${index * 0.05}s` },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              VideoCard,
              {
                video,
                onClick: setSelectedVideo
              }
            )
          },
          video.id
        )) }),
        selectedVideo && /* @__PURE__ */ jsxRuntimeExports.jsx(
          VideoModal,
          {
            video: selectedVideo,
            onClose: () => setSelectedVideo(null)
          }
        )
      ] });
    }
    function CollectionThumbnail({
      name,
      subtitle,
      tagline,
      videoCount,
      color,
      onClick
    }) {
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "relative aspect-[4/3] w-full rounded-2xl overflow-hidden cursor-pointer shadow-lg group",
          onClick,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 ${color}` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxNSAwIEwgMCAwIDAgMTUiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] bg-center opacity-5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-48 h-48 bg-white opacity-5 rounded-full -mr-16 -mt-16" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-48 h-48 bg-black opacity-10 rounded-full -ml-16 -mb-16" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 right-4 text-white/30 text-xs font-light", children: "growlink.ag" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-6 left-0 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 100 20", className: "w-full opacity-20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 20 L50 0 L100 20", fill: "none", stroke: "white", strokeWidth: "1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 15 L50 0 L100 15", fill: "none", stroke: "white", strokeWidth: "0.5" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 p-8 flex flex-col justify-center items-center text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-white mb-2", children: name.split(" ")[0] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-white/80 font-medium leading-tight", children: subtitle }),
              tagline && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/70 text-sm mt-1", children: tagline })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white", children: [
              videoCount,
              " videos"
            ] })
          ]
        }
      );
    }
    const CACHE_EXPIRATION = 15 * 60 * 1e3;
    const categoryKeywords = {
      "getting started": "Setup & Installation",
      "setup": "Setup & Installation",
      "installation": "Setup & Installation",
      "climate": "Climate Control",
      "irrigation": "Irrigation & Fertigation",
      "fertigation": "Irrigation & Fertigation",
      "steering": "Crop Steering",
      "copilot": "Crop Steering",
      "links": "LINKS Ecosystem",
      "canopy": "LINKS Ecosystem",
      "valve": "Irrigation & Fertigation",
      "hub": "LINKS Ecosystem",
      "terra": "LINKS Ecosystem",
      "clima": "Climate Control",
      "podcast": "Podcast",
      "customer": "Customer Stories",
      "nutrient": "Irrigation & Fertigation",
      "lighting": "Lighting Control"
    };
    let vimeoCache = null;
    function determineCategory(title) {
      const lowercaseTitle = title.toLowerCase();
      for (const [keyword, category] of Object.entries(categoryKeywords)) {
        if (lowercaseTitle.includes(keyword)) {
          return category;
        }
      }
      return "Uncategorized";
    }
    function formatDuration(seconds) {
      const minutes = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
    }
    function formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
      });
    }
    async function fetchVideoMetadata(videoId) {
      const url = `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${videoId}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch video metadata for ${videoId}, status: ${response.status}`);
      }
      return await response.json();
    }
    async function processVideos(videoIds, collectionName) {
      const processedVideos = [];
      for (const videoId of videoIds) {
        try {
          const metadata = await fetchVideoMetadata(videoId);
          const video = {
            id: videoId,
            title: metadata.title,
            description: metadata.description || `Growlink video tutorial`,
            thumbnail: metadata.thumbnail_url || "",
            duration: metadata.duration ? formatDuration(metadata.duration) : "0:00",
            category: determineCategory(metadata.title),
            date: metadata.upload_date ? formatDate(metadata.upload_date) : "Unknown date",
            vimeoId: videoId,
            collection: collectionName
          };
          processedVideos.push(video);
        } catch (error) {
          console.error(`Error processing video ${videoId}: ${error}`);
        }
      }
      return processedVideos;
    }
    async function fetchVideos(forceRefresh = false) {
      const now = Date.now();
      if (!forceRefresh && vimeoCache && vimeoCache.videos.length > 0 && now < vimeoCache.expiresAt) {
        console.log("Using cached video data");
        return vimeoCache.videos;
      }
      const collections = [
        {
          name: "Copilot Series",
          videos: ["907487815", "907487660", "968224954"]
        },
        {
          name: "LINKS Ecosystem",
          videos: ["1059077105"]
        },
        {
          name: "Portal 2.0 Series",
          videos: ["907488208", "914823551"]
        },
        {
          name: "Nutrient Delivery Kit",
          videos: ["1007057861", "1007060714", "1007065024", "1007112254"]
        },
        {
          name: "Only Grows",
          videos: ["1006030715", "1010689831"]
        },
        {
          name: "Customer Highlights",
          videos: ["694035367", "651727303", "651723850", "651716570"]
        }
      ];
      let allVideos = [];
      let idCounter = 1;
      for (const collection of collections) {
        const collectionVideos = await processVideos(collection.videos, collection.name);
        const videosWithIds = collectionVideos.map((video) => ({
          ...video,
          id: (idCounter++).toString()
        }));
        allVideos = [...allVideos, ...videosWithIds];
      }
      vimeoCache = {
        lastFetched: now,
        videos: allVideos,
        expiresAt: now + CACHE_EXPIRATION
      };
      return allVideos;
    }
    async function checkForUpdates() {
      if (!vimeoCache || vimeoCache.videos.length === 0) {
        return true;
      }
      const cachedVideoIds = new Set(vimeoCache.videos.map((v) => v.vimeoId));
      const freshVideos = await fetchVideos(true);
      const freshVideoIds = new Set(freshVideos.map((v) => v.vimeoId));
      for (const id of freshVideoIds) {
        if (!cachedVideoIds.has(id)) {
          return true;
        }
      }
      for (const freshVideo of freshVideos) {
        const cachedVideo = vimeoCache.videos.find((v) => v.vimeoId === freshVideo.vimeoId);
        if (cachedVideo) {
          if (cachedVideo.title !== freshVideo.title || cachedVideo.description !== freshVideo.description || cachedVideo.thumbnail !== freshVideo.thumbnail) {
            return true;
          }
        }
      }
      return false;
    }
    function getCacheTimeRemaining() {
      if (!vimeoCache) return 0;
      const now = Date.now();
      return Math.max(0, vimeoCache.expiresAt - now);
    }
    async function refreshCache() {
      return await fetchVideos(true);
    }
    function useVideos(options = {}) {
      const {
        autoRefresh = true,
        refreshInterval = 5 * 60 * 1e3
        // 5 minutes
      } = options;
      const [videos, setVideos] = require$$0.useState([]);
      const [loading, setLoading] = require$$0.useState(true);
      const [error, setError] = require$$0.useState(null);
      const [lastRefreshed, setLastRefreshed] = require$$0.useState(null);
      const refreshVideos = require$$0.useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
          const freshVideos = await refreshCache();
          setVideos(freshVideos);
          setLastRefreshed(/* @__PURE__ */ new Date());
        } catch (err) {
          setError(err instanceof Error ? err : new Error("Failed to refresh videos"));
          console.error("Error refreshing videos:", err);
        } finally {
          setLoading(false);
        }
      }, []);
      const loadVideos = require$$0.useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
          const data = await fetchVideos();
          setVideos(data);
          setLastRefreshed(/* @__PURE__ */ new Date());
        } catch (err) {
          setError(err instanceof Error ? err : new Error("Failed to load videos"));
          console.error("Error loading videos:", err);
        } finally {
          setLoading(false);
        }
      }, []);
      const checkUpdates = require$$0.useCallback(async () => {
        try {
          const hasUpdates = await checkForUpdates();
          if (hasUpdates) {
            await refreshVideos();
          }
        } catch (err) {
          console.error("Error checking for video updates:", err);
        }
      }, [refreshVideos]);
      require$$0.useEffect(() => {
        loadVideos();
      }, [loadVideos]);
      require$$0.useEffect(() => {
        if (!autoRefresh) return;
        const intervalId = setInterval(checkUpdates, refreshInterval);
        return () => clearInterval(intervalId);
      }, [autoRefresh, refreshInterval, checkUpdates]);
      const timeToNextRefresh = require$$0.useCallback(() => {
        const cacheTimeRemaining = getCacheTimeRemaining();
        if (cacheTimeRemaining > 0 && lastRefreshed) {
          const timeSinceLastRefresh = Date.now() - lastRefreshed.getTime();
          const timeUntilNextCheck = Math.max(0, refreshInterval - timeSinceLastRefresh);
          return Math.min(cacheTimeRemaining, timeUntilNextCheck);
        }
        return refreshInterval;
      }, [lastRefreshed, refreshInterval]);
      return {
        videos,
        loading,
        error,
        refreshVideos,
        lastRefreshed,
        timeToNextRefresh
      };
    }
    function UniversityPage({
      autoRefresh = true,
      refreshInterval = 5 * 60 * 1e3
      // 5 minutes
    }) {
      const {
        videos,
        loading,
        error,
        refreshVideos,
        lastRefreshed,
        timeToNextRefresh
      } = useVideos({
        autoRefresh,
        refreshInterval
      });
      const categories = require$$0.useMemo(
        () => Array.from(new Set(videos.map((video) => video.category))),
        [videos]
      );
      const collections = require$$0.useMemo(
        () => Array.from(
          new Set(videos.filter((video) => video.collection && typeof video.collection === "string").map((video) => video.collection))
        ),
        [videos]
      );
      const featuredCollections = require$$0.useMemo(() => {
        return [
          {
            name: "Copilot Series",
            subtitle: "How to setup a program",
            color: "bg-gradient-to-br from-emerald-800 to-emerald-950",
            count: videos.filter((v) => v.collection === "Copilot Series").length
          },
          {
            name: "LINKS Ecosystem",
            subtitle: "Full Ecosystem Setup",
            tagline: "(Ethernet Connection)",
            color: "bg-gradient-to-br from-orange-700 to-orange-950",
            count: videos.filter((v) => v.collection === "LINKS Ecosystem").length
          },
          {
            name: "Nutrient Delivery Kit",
            subtitle: "Introduction and Parts List",
            color: "bg-gradient-to-br from-yellow-600 to-yellow-900",
            count: videos.filter((v) => v.collection === "Nutrient Delivery Kit").length
          }
        ];
      }, [videos]);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white pb-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden bg-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-neutral-50 to-white" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-24 -right-24 w-96 h-96 rounded-full bg-orange-500/5 mix-blend-multiply blur-3xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 -left-24 w-80 h-80 rounded-full bg-blue-500/5 mix-blend-multiply blur-3xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxNSAwIEwgMCAwIDAgMTUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS1vcGFjaXR5PSIwLjA1Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] bg-center opacity-[0.07]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-12 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-6 lg:pr-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-8 top-8 w-16 h-16 bg-orange-500/10 rounded-full blur-xl" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center rounded-full bg-gradient-to-r from-orange-500/10 to-orange-600/20 backdrop-blur-sm px-3 py-1 mb-6 border border-orange-500/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-orange-600 text-sm font-medium", children: "Learn & Master" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-5xl font-bold tracking-tight text-gray-900", children: [
                "Growlink ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-orange-500", children: "University" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-neutral-600", children: "Master your Growlink system with our expert video tutorials, guides, and resources. From setup to advanced techniques, we've got everything you need to optimize your cannabis cultivation." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-8 mt-8 mb-10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-3xl font-bold text-gray-900", children: [
                    videos.length,
                    "+"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-neutral-500 mt-1", children: "Expert Tutorials" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl font-bold text-gray-900", children: categories.length }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-neutral-500 mt-1", children: "Categories" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl font-bold text-gray-900", children: collections.length }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-neutral-500 mt-1", children: "Tutorial Series" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 mt-8 z-20 relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#video-library", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "bg-orange-500 text-white rounded-xl px-6 py-3 text-base shadow-lg shadow-orange-500/10 hover:shadow-orange-500/20 transition-all duration-300", children: "Browse Tutorials" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: refreshVideos, className: "rounded-xl border border-neutral-200 px-6 py-3 text-base hover:bg-neutral-50 transition-all duration-300", children: "Refresh Library" })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-6 relative hidden lg:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-[4/3] w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex items-center justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex items-center justify-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-[90%] h-[90%] rounded-2xl border border-neutral-200/50 bg-white/30 backdrop-blur-sm shadow-xl transform rotate-2" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute w-[85%] h-[75%] rounded-2xl border border-neutral-200/50 bg-white/30 backdrop-blur-sm shadow-xl transform -rotate-3 translate-y-4" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-[80%] h-[70%] rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-2xl z-10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-0 inset-x-0 h-12 bg-neutral-900 flex items-center px-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-full bg-red-500" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-full bg-yellow-500" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-full bg-green-500" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto text-white text-sm font-medium", children: "Growlink University Video Player" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-12 inset-x-0 bottom-0 bg-neutral-900", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center overflow-hidden", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "w-full h-full", viewBox: "0 0 100 100", preserveAspectRatio: "none", children: [
                    Array.from({ length: 10 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "line",
                      {
                        x1: "0",
                        y1: i * 10,
                        x2: "100",
                        y2: i * 10,
                        stroke: "rgba(255,255,255,0.05)",
                        strokeWidth: "0.5"
                      },
                      `h-${i}`
                    )),
                    Array.from({ length: 10 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "line",
                      {
                        x1: i * 10,
                        y1: "0",
                        x2: i * 10,
                        y2: "100",
                        stroke: "rgba(255,255,255,0.05)",
                        strokeWidth: "0.5"
                      },
                      `v-${i}`
                    ))
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/20 relative z-10 group cursor-pointer hover:scale-110 transition-all duration-300", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-white absolute animate-ping opacity-20" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 5V19L19 12L8 5Z", fill: "white" }) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-6 inset-x-6 px-4 py-3 bg-black/50 backdrop-blur-sm rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white text-sm font-medium", children: "Copilot: Setting Up Crop Steering" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-neutral-300 text-xs mt-1", children: "4:49 • Crop Steering" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 9L12 18L21 9", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M5 12H19M19 12L12 5M19 12L12 19", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
                    ] })
                  ] }) })
                ] }) })
              ] })
            ] }) }) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-600 text-sm font-medium mb-4", children: "Featured Collections" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4", children: "Popular Tutorial Series" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-600 max-w-3xl mx-auto", children: "Browse our curated collections of tutorials to get the most out of your Growlink system" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 mt-12", children: featuredCollections.map((collection) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            CollectionThumbnail,
            {
              name: collection.name,
              subtitle: collection.subtitle,
              tagline: collection.tagline,
              videoCount: collection.count,
              color: collection.color,
              onClick: () => {
                var _a;
                (_a = document.getElementById("video-library")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
              }
            },
            collection.name
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "video-library", className: "scroll-mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-center md:justify-between mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-gray-900", children: "Complete Video Library" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600 mt-2 md:mt-0", children: [
              videos.length,
              " tutorials available"
            ] })
          ] }),
          loading && videos.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-32 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center w-24 h-24 rounded-full bg-neutral-100 mb-6 animate-pulse", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-neutral-200" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-medium text-neutral-900 mb-2", children: "Loading videos..." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-neutral-600", children: "Please wait while we fetch the latest tutorials." })
          ] }) : error ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-32 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center w-24 h-24 rounded-full bg-red-100 mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-10 h-10 text-red-500", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-medium text-neutral-900 mb-2", children: "Error loading videos" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-neutral-600 mb-6", children: "There was a problem fetching the latest videos." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: refreshVideos,
                className: "px-4 py-2 bg-orange-500 text-white rounded-full text-sm",
                children: "Try Again"
              }
            )
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            VideoGrid,
            {
              videos,
              categories,
              collections
            }
          ),
          !loading && !error && videos.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 text-center text-sm text-gray-500", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "Last updated: ",
            lastRefreshed == null ? void 0 : lastRefreshed.toLocaleTimeString(),
            " •",
            autoRefresh ? ` Next refresh in ${Math.ceil(timeToNextRefresh() / 6e4)} minutes` : ""
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gray-50 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl overflow-hidden relative bg-gradient-to-r from-gray-900 to-black p-12 lg:p-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxNSAwIEwgMCAwIDAgMTUiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] bg-center opacity-10" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -right-20 w-80 h-80 bg-orange-600/10 rounded-full blur-[100px]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 text-center max-w-3xl mx-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl lg:text-4xl font-bold text-white mb-4", children: "Can't find what you're looking for?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-gray-300 mb-8", children: "Our support team is here to help you with any questions about your Growlink system." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.growlink.ag/contact", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "bg-orange-500 text-white px-6 py-3 text-lg rounded-xl", children: "Contact Support" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.growlink.ag/products", target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "bg-white text-gray-900 px-6 py-3 text-lg rounded-xl", children: "Explore Products" }) })
            ] })
          ] })
        ] }) }) })
      ] });
    }
    if (typeof window !== "undefined") {
      window.GrowlinkUniversity = UniversityPage;
    }
    if (typeof document !== "undefined") {
      const rootElement = document.getElementById("growlink-university-root");
      if (rootElement) {
        const root = clientExports.createRoot(rootElement);
        root.render(/* @__PURE__ */ jsxRuntimeExports.jsx(UniversityPage, {}));
      }
    }
  });
  //# sourceMappingURL=university.js.map
  