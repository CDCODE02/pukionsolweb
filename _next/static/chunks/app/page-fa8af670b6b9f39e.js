(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    599: function (e, t, s) {
      Promise.resolve().then(s.bind(s, 768));
    },
    768: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return U;
          },
        });
      var l = s(7437),
        a = s(2265),
        n = s(6648);
      let x = (0, a.createContext)(null);
      var i = (e) => {
        let { children: t } = e,
          [s, n] = (0, a.useState)(!1),
          i = (0, a.useRef)(null);
        return (0, l.jsxs)(x.Provider, {
          value: {
            playAudio: s,
            handleplayAudio: () => {
              var e, t;
              null !== i.current &&
                ((i.current.volume = 0.3),
                s
                  ? (null === (e = i.current) || void 0 === e || e.pause(),
                    n(!1))
                  : (null === (t = i.current) || void 0 === t || t.play(),
                    n(!0)));
            },
          },
          children: [
            (0, l.jsx)("div", {
              children: (0, l.jsx)("audio", {
                ref: i,
                src: "/play.m4a",
                loop: !0,
              }),
            }),
            t,
          ],
        });
      };
      let r = () => (0, a.useContext)(x);
      function c(e) {
        let { show: t, setShow: s } = e,
          { handleplayAudio: x } = r(),
          [i, c] = (0, a.useState)(!1);
        return (0, l.jsx)("div", {
          className:
            "relative w-full min-h-[100vh]  flex justify-center ".concat(
              i && "flow",
              " items-center  bg-[#21121B]"
            ),
          children: (0, l.jsxs)("div", {
            className: "flex flex-col justify-around gap-10",
            children: [
              (0, l.jsxs)("div", {
                className:
                  "relative w-full h-full front flex justify-center items-center ",
                children: [
                  (0, l.jsx)(n.default, {
                    src: "/cteddy.svg",
                    width: 200,
                    height: 200,
                    alt: "eye ",
                    className:
                      "relative z-10 vlg:w-[500px]  lg:w-[300px] lg:aspect-square",
                  }),
                  (0, l.jsx)(n.default, {
                    src: "/eye.png",
                    width: 200,
                    height: 200,
                    alt: "eye",
                    className:
                      "absolute lg:w-[300px] vlg:w-[500px] lg:aspect-square ",
                  }),
                ],
              }),
              (0, l.jsx)("button", {
                onClick: () => {
                  c(!0),
                    setTimeout(() => {
                      s(!0);
                    }, 1e3),
                    x();
                },
                className:
                  "frontButton lg:px-[50px] py-[20px] lg:text-[47px] lg:py-[6.7px] vlg:text-[87px]",
                children: "LET ME IN",
              }),
            ],
          }),
        });
      }
      let d = (0, a.createContext)(null);
      var o = (e) => {
        let { children: t } = e,
          [s, n] = (0, a.useState)(!1);
        return (0, l.jsx)(d.Provider, {
          value: {
            openMenu: s,
            handleOpenMenu: () => {
              n((e) => !e), console.log(s);
            },
          },
          children: t,
        });
      };
      let p = () => (0, a.useContext)(d),
        m = (0, a.createContext)(null);
      function h(e) {
        let { children: t } = e,
          s = (0, a.useRef)(null),
          n = (0, a.useRef)(null),
          x = (0, a.useRef)(null),
          i = (0, a.useRef)(null);
        return (0, l.jsx)(m.Provider, {
          value: {
            aboutRef: s,
            homeRef: n,
            coinRef: x,
            dexRef: i,
            scrollToSection: (e) => {
              var t;
              null === (t = e.current) ||
                void 0 === t ||
                t.scrollIntoView({ behavior: "smooth", block: "center" });
            },
          },
          children: t,
        });
      }
      function u() {
        return (0, a.useContext)(m);
      }
      var g = s(1827);
      function j() {
        let {
            scrollToSection: e,
            aboutRef: t,
            homeRef: s,
            coinRef: a,
            dexRef: x,
          } = u(),
          { openMenu: i, handleOpenMenu: r } = p(),
          c = { hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } };
        return (0, l.jsxs)("nav", {
          className:
            "relative w-full  flex justify-between z-[50] items-center  lg:px-[109px]   px-5 md:mt-[26px]",
          children: [
            (0, l.jsx)(g.E.div, {
              variants: {
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              },
              initial: "hidden",
              animate: "visible",
              transition: { duration: 0.2, delay: 1 },
              children: (0, l.jsx)(n.default, {
                alt: "puki",
                src: "/cteddy.svg",
                width: 170,
                height: 170,
              }),
            }),
            (0, l.jsxs)("ul", {
              className:
                " text-[33px]  font-normal cursor-pointer text-white  md:flex hidden lg:gap-[40px]  gap-10 justify-center items-center",
              children: [
                (0, l.jsx)(g.E.li, {
                  variants: c,
                  initial: "hidden",
                  animate: "visible",
                  transition: { type: "spring", duration: 0.2, delay: 1.2 },
                  className:
                    "navHover px-4 py-2 rounded-[89px] transition-all li duration-300",
                  onClick: () => e(s),
                  children: "Home",
                }),
                (0, l.jsx)(g.E.li, {
                  variants: c,
                  initial: "hidden",
                  animate: "visible",
                  transition: { duration: 0.2, delay: 1.3, damping: 60 },
                  className:
                    "navHover px-4 py-2 rounded-[89px] transition-all li duration-300",
                  onClick: () => e(t),
                  children: "About",
                }),
                (0, l.jsx)("a", {
                  href: "https://dexscreener.com/solana/GwjR1knoW4KMcBGPKrURwvntqUyRenoaF4YyzwR8VYoy",
                  target: "_blank",
                  children: (0, l.jsx)(g.E.li, {
                    variants: c,
                    initial: "hidden",
                    animate: "visible",
                    transition: { duration: 0.2, delay: 1.4 },
                    className:
                      "navHover px-4 py-2 rounded-[89px] transition-all li duration-300",
                    children: "Buy $PUKI",
                  }),
                }),
                (0, l.jsx)("a", {
                  href: "https://dexscreener.com/solana/GwjR1knoW4KMcBGPKrURwvntqUyRenoaF4YyzwR8VYoy",
                  target: "_blank",
                  children: (0, l.jsx)(g.E.li, {
                    variants: c,
                    initial: "hidden",
                    animate: "visible",
                    transition: { duration: 0.2, delay: 1.5 },
                    className:
                      "navHover px-4 py-2 rounded-[89px] transition-all li duration-300",
                    children: "Dexscreener",
                  }),
                }),
              ],
            }),
            (0, l.jsxs)(g.E.div, {
              variants: c,
              initial: "hidden",
              animate: "visible",
              transition: { duration: 0.2, delay: 1 },
              onClick: r,
              className:
                "gap-[3px] z-[77777] md:hidden cursor-pointer relative flex flex-col",
              children: [
                (0, l.jsx)("span", {
                  className: "".concat(
                    i ? "rotate-45 top-1" : "",
                    " transition-all duration-300 delay-75 w-[42px]   h-[6px] relative bg-white"
                  ),
                }),
                (0, l.jsx)("span", {
                  className: " ".concat(
                    i ? "-rotate-45 bottom-1" : "",
                    " w-[42px]  transition-all duration-300 delay-75 relative  h-[6px] bg-white"
                  ),
                }),
                (0, l.jsx)("span", {
                  className: "".concat(
                    i ? "-bottom-3" : "",
                    " transition-all duration-300  w-[42px] relative   h-[6px] bg-white"
                  ),
                }),
              ],
            }),
          ],
        });
      }
      function f() {
        let { homeRef: e } = u(),
          [t, s] = (0, a.useState)(""),
          x = async () => {
            try {
              await navigator.clipboard.writeText(
                "GwjR1knoW4KMcBGPKrURwvntqUyRenoaF4YyzwR8VYoy"
              ),
                s("Copied!");
            } catch (e) {
              s("Failed to copy!");
            } finally {
              setTimeout(() => {
                s("");
              }, 1e3);
            }
          };
        return (0, l.jsx)("section", {
          className: "bgg1",
          children: (0, l.jsxs)("div", {
            ref: e,
            className:
              "relative max-w-[1440px] mx-auto    w-[100%] min-h-[100vh] md:min-h-fit overflow-hidden z-20 ",
            children: [
              (0, l.jsx)("div", {
                className:
                  " absolute right-[-55%] md:right-[-25px] opacity-100 md:w-[65%] lg:w-[60%]   p-5  w-[171%] bottom-[-15px] ] ",
                children: (0, l.jsx)(n.default, {
                  src: "/teddy.svg",
                  width: 940,
                  height: 940,
                  alt: "puki",
                  className: "relative  heroflow w-full h-full ",
                }),
              }),
              (0, l.jsx)(j, {}),
              (0, l.jsxs)("div", {
                className:
                  " relative mt-[80px] z-50  md:pb-[180px]  lg:mt-[50px] md:px-[107px] px-[25px]  text-[60px] ",
                children: [
                  (0, l.jsxs)("div", {
                    className: " font-bold text-white",
                    children: [
                      (0, l.jsx)("p", {
                        className: "md:text-[50px] text-[30px]  leading-[87%]",
                        children: "Welcome To ",
                      }),
                      (0, l.jsx)("p", {
                        className:
                          "lg:text-[190px] md:text-[140px] text-[110px] leading-[87%] text-[#FFB500]",
                        children: "pukionsol",
                      }),
                    ],
                  }),
                  (0, l.jsx)("p", {
                    className:
                      "text-white text-lg lg:mt-[50px] mt-8 text-[32px] md:text-[50px]  ",
                    children: "The baddest bear on the block (chain)",
                  }),
                  (0, l.jsx)("a", {
                    href: "https://dexscreener.com/solana/GwjR1knoW4KMcBGPKrURwvntqUyRenoaF4YyzwR8VYoy",
                    target: "_blank",
                    children: (0, l.jsx)("button", {
                      className:
                        "herobtn lg:px-[50px] bg-[#4E3133] px-[24px] mt-[80px]  text-[35px] md:text-[64px] md:py-[6.7px]",
                      children: "Grab  $PUKI",
                    }),
                  }),
                  (0, l.jsxs)("div", {
                    className: "absolute  space-y-2 lg:bottom-3 w-fit ",
                    children: [
                      (0, l.jsx)("p", {
                        className: "md:text-[30px] text-[25px] ",
                        children: "Contract Address:",
                      }),
                      (0, l.jsxs)("div", {
                        onClick: x,
                        className:
                          "md:text-[24px] px-3 py-1 rounded-md flex gap-2 bg-white/10 text-[18px]",
                        children: [
                          (0, l.jsxs)("span", {
                            children: [
                              "GwjR1knoW4KMcBGPKrURwvntq",
                              (0, l.jsx)("br", {}),
                              "UyRenoaF4YyzwR8VYoy",
                            ],
                          }),
                          (0, l.jsx)(n.default, {
                            alt: "copy",
                            src: "/copy.svg",
                            width: 40,
                            height: 40,
                            className: " cursor-pointer ",
                          }),
                        ],
                      }),
                      t &&
                        (0, l.jsx)("div", {
                          className:
                            "absolute top-[-20px] right-0 mx-auto z-50 md:text-[24px] px-3 py-1 rounded-md flex gap-2 bg-white/20 text-[18px] ",
                          children: t,
                        }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function w() {
        let { aboutRef: e } = u();
        return (0, l.jsx)("section", {
          className: " bgg relative ",
          children: (0, l.jsx)("div", {
            className: "relative  bg-[#341A1D]/80",
            children: (0, l.jsxs)("div", {
              ref: e,
              className:
                " relative  max-w-[1440px] mx-auto  flex justify-between flex-col lg:flex-row  items-center px-[25px] py-[50px]  md:gap-10 gap-6  lg:px-[107px] lg:py-[91px] md:py-[65px] md:px-[50px] ",
              children: [
                (0, l.jsxs)("div", {
                  className: "",
                  children: [
                    (0, l.jsx)("h1", {
                      className: "lg:text-[72px] md:text-[50px] text-[35px]",
                      children: "About",
                    }),
                    (0, l.jsxs)("p", {
                      className:
                        "lg:text-[45px] text-[20px] md:text-[35px] mt-[35px]  md:mt-[60px]",
                      children: [
                        "Yo! They call me ",
                        (0, l.jsx)("span", {
                          className: "text-[#FFB500]",
                          children: "$PUKI",
                        }),
                        " , the baddest bear on the block (chain). Been high rollers all my life, from gamblin' to that digital coin craze. Now the joke's on them - I am the damn coin! These digital streets ain't ready for a G like me. Every other coin's gonna be lookin' up from the gutter. They'll all know the name: ",
                        (0, l.jsx)("span", {
                          className: "text-[#FFB500]",
                          children: "$PUKI",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, l.jsx)(n.default, {
                  src: "/cteddy.svg",
                  alt: "about",
                  width: 450,
                  height: 520,
                  className:
                    "lg:min-w-[450px] lg:h-[520px] w-[100%] aspect-square ",
                }),
              ],
            }),
          }),
        });
      }
      function v() {
        return (0, l.jsx)("section", {
          className: "bgg",
          children: (0, l.jsxs)("div", {
            className:
              "relative   max-w-[1440px] mx-auto lg:py-[200px] md:py-[70px] py-[50px] ",
            children: [
              (0, l.jsx)("h1", {
                className:
                  "w-full relative  lg:text-[72px] text-[51px] mb-10 text-center",
                children: "PUKI SHIT",
              }),
              (0, l.jsx)("div", {
                className:
                  "lg:px-[100px]  grid gap-8 items lg:grid-cols-4 px-[25px] md:grid-cols-2 grid-cols-1",
                children: Array.from("1234").map((e, t) =>
                  (0, l.jsxs)(
                    "div",
                    {
                      className:
                        " flex overflow-hidden flex-col p-4 items-start gap-3 rounded-[35px]  z-30 bg-[#4A3233]",
                      children: [
                        (0, l.jsx)("div", {
                          className: "w-full overflow-hidden rounded-3xl",
                          children: (0, l.jsx)(n.default, {
                            src: "/item".concat(e, ".svg"),
                            alt: "item",
                            width: 100,
                            height: 100,
                            className: "  w-full aspect-square img",
                          }),
                        }),
                        (0, l.jsx)("p", {
                          className:
                            "lg:text-[30px] text-[25px]  text-center w-full px-8 md:px-2 ",
                          children:
                            0 == t &&
                            (0, l.jsxs)(l.Fragment, {
                              children: [
                                (0, l.jsx)("span", {
                                  className: "text-[#FFB500]",
                                  children: "100% ",
                                }),
                                " LIQUIDITY NUKED! WE BREATHE FIRE NOW!",
                              ],
                            }),
                        }),
                        (0, l.jsx)("p", {
                          className:
                            "lg:text-[30px] text-[25px] text-center w-full px-8 md:px-2  ",
                          children:
                            1 == t &&
                            (0, l.jsxs)(l.Fragment, {
                              children: [
                                (0, l.jsx)("span", {
                                  className: "text-[#FFB500]",
                                  children: "1,000,000,000 $PUKI ",
                                }),
                                (0, l.jsx)("br", {}),
                                "TOKENS MINTED, YO! $PUKI'S THE PLUG!",
                              ],
                            }),
                        }),
                        (0, l.jsx)("p", {
                          className:
                            "lg:text-[30px] text-[25px] text-center w-full px-8 md:px-2",
                          children:
                            2 == t &&
                            (0, l.jsx)(l.Fragment, {
                              children: (0, l.jsx)("span", {
                                className: "text-[#FFB500]",
                                children: "REVOKED + MINT ANDFREEZE DISABLED!",
                              }),
                            }),
                        }),
                        (0, l.jsx)("p", {
                          className:
                            "lg:text-[30px] text-[25px] text-center px-8 md:px-2",
                          children:
                            3 == t &&
                            (0, l.jsxs)(l.Fragment, {
                              children: [
                                (0, l.jsx)("span", {
                                  className: "text-[#FFB500]",
                                  children: "$PUKI",
                                }),
                                "  ain't payin' no taxes! Buy, sell, trade with Zero fe",
                              ],
                            }),
                        }),
                      ],
                    },
                    t
                  )
                ),
              }),
            ],
          }),
        });
      }
      function y() {
        let { coinRef: e } = u();
        return (0, l.jsx)("main", {
          className: " bgg  relative ",
          children: (0, l.jsx)("section", {
            className: " bg-[#341A1D]/80",
            children: (0, l.jsxs)("div", {
              ref: e,
              className:
                "lg:px-[120px] max-w-[1440px] mx-auto lg:py-[100px]  px-[25px] py-[50px] ",
              children: [
                (0, l.jsx)("h1", {
                  className: "w-full text-center lg:text-[82px] text-[47px]",
                  children: "How To GET DA $PUKI",
                }),
                (0, l.jsxs)("div", {
                  className: "md:space-y-[104px] space-y-[60px]",
                  children: [
                    (0, l.jsxs)("div", {
                      className:
                        "flex flex-col md:flex-row justify-center text-start items-center lg:mt-[106px] mt-[50px] lg:gap-[150px] md:gap-[50px] gap-[40px]",
                      children: [
                        (0, l.jsxs)("div", {
                          className: "lg:space-y-8 space-y-8 md:max-w-[50%]",
                          children: [
                            (0, l.jsx)("h3", {
                              className: "lg:text-[48px] text-[30px]",
                              children: "Create DA Solana wallet",
                            }),
                            (0, l.jsxs)("p", {
                              className:
                                "lg:text-[36px] text-[25px]  text-start",
                              children: [
                                "Create a\xa0Phantom\xa0or\xa0Solflare Wallet\xa0using either a desktop computer or an iOS/Android mobile device. That will allow you to buy, sell, send, and receive",
                                (0, l.jsx)("span", {
                                  className: "text-[#F5A435]",
                                  children: " $PUKI",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, l.jsx)(n.default, {
                          src: "/process1.svg",
                          width: 490,
                          height: 312,
                          alt: "eye",
                          className: "rounded-[11px]",
                        }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      className:
                        "flex flex-col md:flex-row-reverse justify-center text-start items-center lg:mt-[106px] mt-[50px] lg:gap-[150px] md:gap-[50px] gap-[40px]",
                      children: [
                        (0, l.jsxs)("div", {
                          className: "lg:space-y-8 space-y-5 md:max-w-[50%]",
                          children: [
                            (0, l.jsx)("h3", {
                              className: "lg:text-[48px] text-[30px]",
                              children: " Send SOL to your wallet",
                            }),
                            (0, l.jsxs)("p", {
                              className:
                                "lg:text-[36px] text-[25px]  text-start",
                              children: [
                                "You can buy\xa0SOL\xa0or transfer it from exchanges like ",
                                (0, l.jsx)("span", {
                                  className: "text-[#F5A435]",
                                  children: " OKX, Coinbase & Binance",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, l.jsx)(n.default, {
                          src: "/process2.svg",
                          width: 490,
                          height: 312,
                          alt: "eye",
                          className: "rounded-[11px]",
                        }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      className:
                        "flex flex-col  md:flex-row justify-center text-start items-center lg:mt-[106px] mt-[50px] lg:gap-[150px] md:gap-[50px] gap-[40px]",
                      children: [
                        (0, l.jsxs)("div", {
                          className: "lg:space-y-8 space-y-5 md:max-w-[50%]",
                          children: [
                            (0, l.jsx)("h3", {
                              className: "lg:text-[48px] text-[30px]",
                              children: " Connect YA & Swap PA",
                            }),
                            (0, l.jsxs)("p", {
                              className:
                                "lg:text-[36px] text-[25px]  text-start",
                              children: [
                                "Go to\xa0Jupiter and connect yA wallet AND click ‘Connect wallet’ selecting DA Phantom. Press ‘Select a token’ and enter da token to da contract address to find da ",
                                (0, l.jsx)("span", {
                                  className: "text-[#F5A435]",
                                  children: "$PUKI ",
                                }),
                                "and start your swap from\xa0SOL to ",
                                (0, l.jsx)("span", {
                                  className: "text-[#F5A435]",
                                  children: "$PUKI ",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, l.jsx)("div", {
                          className: "bg-[#F5A435] rounded-[11px]",
                          children: (0, l.jsx)(n.default, {
                            src: "/process3.svg",
                            width: 490,
                            height: 312,
                            alt: "eye",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
      function N() {
        let { dexRef: e } = u();
        return (0, l.jsx)("main", {
          className: "bgg vlg:pt-[50px]",
          children: (0, l.jsxs)("section", {
            ref: e,
            className:
              "grab max-w-[1440px] mx-auto w-full flex flex-col items-center justify-between  relative lg:space-y-[150px] lg:py-[68px] py-[50px] space-y-[100px]",
            children: [
              (0, l.jsx)("h2", {
                className: "lg:text-[102px] text-[#F5A435]  text-[45px]",
                children: "Get Wild with PUKI",
              }),
              (0, l.jsx)("a", {
                href: "https://dexscreener.com/solana/GwjR1knoW4KMcBGPKrURwvntqUyRenoaF4YyzwR8VYoy",
                target: "_blank",
                children: (0, l.jsx)("button", {
                  className:
                    "herobtn lg:px-[50px] px-[24px] mt-[45px] text-[35px] lg:text-[64px] lg:py-[6.7px]",
                  children: "Grab  $PUKI",
                }),
              }),
            ],
          }),
        });
      }
      function b() {
        return (0, l.jsx)("main", {
          className: "bgg",
          children: (0, l.jsxs)("footer", {
            className:
              " max-w-[1440px]  mx-auto md:px-[100px] px-[25px] flex flex-col-reverse  lg:flex-row justify-between gap-[80px]   py-[50px]  items-center lg:items-end",
            children: [
              (0, l.jsx)("p", {
                className: "lg:text-[35px] md:text-[28px] text-[24px]",
                children: "$PUKI 2024 ALL RIGHTS RESERVED.",
              }),
              (0, l.jsxs)("div", {
                className: "flex flex-col  items-center justify-start",
                children: [
                  (0, l.jsxs)("div", {
                    className: "flex relative justify-center ",
                    children: [
                      (0, l.jsx)(n.default, {
                        src: "/sol.png",
                        width: 38,
                        height: 38,
                        alt: "sol",
                        className: "relative rounded-full",
                      }),
                      (0, l.jsx)(n.default, {
                        src: "/footer.png",
                        width: 40,
                        height: 40,
                        alt: "puki",
                        className: "relative z-10 -left-4",
                      }),
                    ],
                  }),
                  (0, l.jsx)("p", {
                    className: "lg:text-[35px] md:text-[28px] text-[24px]",
                    children: "PUKI ON SOLANA",
                  }),
                ],
              }),
              (0, l.jsxs)("div", {
                className: "flex flex-col justify-center gap-3 lg:max-w-[30%]",
                children: [
                  (0, l.jsx)("p", {
                    className:
                      "lg:text-[35px] md:text-[28px]  lg:text-start text-[24px]",
                    children: "Disclaimer",
                  }),
                  (0, l.jsx)("p", {
                    className: "lg:text-[20px] md:text-[18px] text-[16px] ",
                    children:
                      "Yo, $PUKI ain't no suit and tie kinda coin. This is pure entertainment, a meme for the streets. Don't expect lambos or mansions, but you might get a good laugh. Entertainment purposes only.",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var R = s(6463);
      function k(e) {
        let {} = e,
          {
            scrollToSection: t,
            aboutRef: s,
            homeRef: x,
            coinRef: i,
            dexRef: r,
          } = u(),
          { handleOpenMenu: c, openMenu: d } = p(),
          [o, m] = (0, a.useState)(!1),
          h = (e) => {
            e && t(e),
              m(!0),
              setTimeout(() => {
                c();
              }, 1e3);
          };
        return (
          (0, R.useSelectedLayoutSegment)(),
          (0, l.jsx)(l.Fragment, {
            children:
              d &&
              (0, l.jsxs)("nav", {
                className:
                  "lg:hidden top-0 menu fixed bottom-0 w-[80%] z-[100]  h-full",
                children: [
                  (0, l.jsx)(n.default, {
                    alt: "puki",
                    src: "/cteddy.svg",
                    width: 98,
                    height: 62,
                    className: "absolute top-3  ",
                  }),
                  (0, l.jsxs)("ul", {
                    className:
                      "flex flex-col gap-8 justify-center items-start w-fit mx-auto    ",
                    children: [
                      (0, l.jsx)("li", {
                        onClick: () => h(x),
                        className:
                          "text-white text-3xl font-bold cursor-pointer\n             text-start  bottom-0 overflow-hidden relative mb-2 \n              ".concat(
                            o ? "left-[]" : "left-0",
                            "\n            "
                          ),
                        children: (0, l.jsx)("span", {
                          className: " menuli",
                          children: "Home",
                        }),
                      }),
                      (0, l.jsx)("li", {
                        onClick: () => h(s),
                        className:
                          "text-white text-3xl font-bold overflow-hidden cursor-pointer ".concat(
                            o ? "left-[]" : "left-0"
                          ),
                        children: (0, l.jsx)("span", {
                          className: "menuli",
                          children: "About",
                        }),
                      }),
                      (0, l.jsx)("li", {
                        className:
                          "text-white text-3xl font-bold overflow-hidden cursor-pointer ".concat(
                            o ? "left-[]" : "left-0"
                          ),
                        children: (0, l.jsx)("a", {
                          href: "https://dexscreener.com/solana/GwjR1knoW4KMcBGPKrURwvntqUyRenoaF4YyzwR8VYoy",
                          target: "_blank",
                          children: (0, l.jsx)("span", {
                            className: "menuli",
                            children: "Buy $PUKI",
                          }),
                        }),
                      }),
                      (0, l.jsx)("li", {
                        className:
                          "text-white text-3xl font-bold overflow-hidden cursor-pointer ".concat(
                            o ? "left-[]" : "left-0"
                          ),
                        children: (0, l.jsx)("a", {
                          href: "https://dexscreener.com/solana/GwjR1knoW4KMcBGPKrURwvntqUyRenoaF4YyzwR8VYoy",
                          target: "_blank",
                          children: (0, l.jsx)("span", {
                            className: "menuli",
                            children: "Dexscreener",
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
          })
        );
      }
      function K() {
        return (0, l.jsx)("div", {
          className: " bg-[#170D14]",
          children: (0, l.jsxs)("div", {
            className:
              " flex cursor-pointer max-w-[1440px] mx-auto items-center lg:gap-8 gap-6  justify-center py-[30px] lg:py-[55px] px-[26px]",
            children: [
              (0, l.jsx)("a", {
                href: "https://t.me/pukionsol",
                target: "_blank",
                className:
                  "bg-white/5 lg:w-[100px] w-[80px] flex items-center aspect-square justify-center  hover:scale-110 transition-all duration-300 p-4 lg:rounded-[22px] rounded-md",
                children: (0, l.jsx)(n.default, {
                  src: "/telegram.svg",
                  width: 50,
                  height: 50,
                  alt: "telegram",
                }),
              }),
              (0, l.jsx)("a", {
                href: "https://x.com/Pukionsolanaa",
                target: "_blank",
                children: (0, l.jsx)("div", {
                  className:
                    "bg-white/5 lg:w-[100px] w-[80px] flex items-center aspect-square justify-center hover:scale-110 transition-all duration-300 lg:rounded-[22px] rounded-md",
                  children: (0, l.jsx)(n.default, {
                    src: "/x.svg",
                    width: 50,
                    height: 50,
                    alt: "x",
                  }),
                }),
              }),
              (0, l.jsx)("a", {
                href: "https://dexscreener.com/solana/GwjR1knoW4KMcBGPKrURwvntqUyRenoaF4YyzwR8VYoy",
                target: "_blank",
                children: (0, l.jsx)("div", {
                  className:
                    "bg-white/5 lg:w-[100px] w-[80px] flex items-center aspect-square justify-center hover:scale-110 transition-all duration-300 lg:rounded-[22px] rounded-md",
                  children: (0, l.jsx)(n.default, {
                    src: "/dex.svg",
                    width: 50,
                    height: 50,
                    alt: "sc",
                  }),
                }),
              }),
              (0, l.jsx)("a", {
                href: "https://www.dextools.io/app/en/solana/pair-explorer/GwjR1knoW4KMcBGPKrURwvntqUyRenoaF4YyzwR8VYoy?t=1715966314296&__cf_chl_rt_tk=bqyKu3FHvfxyzTLonEuzQb5feJmTQKBufRb.Ql7xd9Q-1715980132-0.0.1.1-1493",
                target: "_blank",
                children: (0, l.jsx)("div", {
                  className:
                    "bg-white/5 lg:w-[100px] w-[80px] flex items-center aspect-square justify-center hover:scale-110 transition-all duration-300 lg:rounded-[22px] rounded-md",
                  children: (0, l.jsx)(n.default, {
                    src: "/ss.svg",
                    width: 40,
                    height: 40,
                    alt: "sc",
                  }),
                }),
              }),
            ],
          }),
        });
      }
      function U() {
        let [e, t] = (0, a.useState)(!1);
        return (0, l.jsx)(i, {
          children: (0, l.jsx)(h, {
            children: (0, l.jsx)(o, {
              children: (0, l.jsx)("main", {
                className: " ",
                children: e
                  ? (0, l.jsxs)("div", {
                      children: [
                        (0, l.jsx)(k, {}),
                        (0, l.jsx)(f, {}),
                        (0, l.jsx)(K, {}),
                        (0, l.jsx)(w, {}),
                        (0, l.jsx)(v, {}),
                        (0, l.jsx)(y, {}),
                        (0, l.jsx)(N, {}),
                        (0, l.jsx)(b, {}),
                      ],
                    })
                  : (0, l.jsx)(c, { show: e, setShow: t }),
              }),
            }),
          }),
        });
      }
    },
  },
  function (e) {
    e.O(0, [421, 971, 23, 744], function () {
      return e((e.s = 599));
    }),
      (_N_E = e.O());
  },
]);
