import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images, profile } from "../../constants";
import "./Header.scss";

// Typing speed in ms per character, by block kind.
const TYPING_SPEED = { title: 55, body: 14, cta: 45 };
const START_DELAY = 700;
const BLOCK_PAUSE = 350;

// Split into user-visible characters so emoji are never typed half-way.
const splitChars = (text) =>
  typeof Intl !== "undefined" && Intl.Segmenter
    ? Array.from(
        new Intl.Segmenter(undefined, { granularity: "grapheme" }).segment(text),
        (s) => s.segment
      )
    : Array.from(text);

const prefersReducedMotion = () =>
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

const TypedIntro = ({ blocks }) => {
  const chars = useMemo(() => blocks.map((block) => splitChars(block.text)), [blocks]);
  const total = chars.reduce((sum, c) => sum + c.length, 0);
  const [typed, setTyped] = useState(() => (prefersReducedMotion() ? total : 0));

  useEffect(() => {
    if (typed >= total) return undefined;

    // Locate the block the next character belongs to.
    let index = typed;
    let block = 0;
    while (index >= chars[block].length) {
      index -= chars[block].length;
      block += 1;
    }

    let delay = TYPING_SPEED[blocks[block].kind];
    if (typed === 0) delay += START_DELAY;
    else if (index === 0) delay += BLOCK_PAUSE;

    const timer = setTimeout(() => setTyped((n) => n + 1), delay);
    return () => clearTimeout(timer);
  }, [typed, total, chars, blocks]);

  let remaining = typed;
  const shown = chars.map((c) => {
    const n = Math.max(0, Math.min(remaining, c.length));
    remaining -= c.length;
    return n;
  });
  // The caret sits in the block being typed, or at the very end once done.
  const unfinished = shown.findIndex((n, i) => n < chars[i].length);
  const caretBlock = unfinished === -1 ? blocks.length - 1 : unfinished;

  const renderBlock = (block, i) => {
    const content = (
      <>
        {chars[i].slice(0, shown[i]).join("")}
        {i === caretBlock && <span className="app__typed-caret" />}
        <span className="app__typed-rest">{chars[i].slice(shown[i]).join("")}</span>
      </>
    );

    if (block.kind === "title") {
      return (
        <p className="app__intro-title" key={block.text}>
          {content}
        </p>
      );
    }
    if (block.kind === "cta") {
      return (
        <a className="app__intro-cta" href={block.href} tabIndex={-1} key={block.text}>
          {content}
        </a>
      );
    }
    return (
      <p className="p-text app__intro-body" key={block.text}>
        {content}
      </p>
    );
  };

  return (
    <div className="app__header-intro">
      {/* Full text for screen readers and search engines; the typed copy is visual only. */}
      <div className="sr-only">
        {blocks.map((block) =>
          block.kind === "title" ? (
            <h1 key={block.text}>{block.text}</h1>
          ) : (
            <p key={block.text}>{block.text}</p>
          )
        )}
      </div>
      <div aria-hidden="true">{blocks.map(renderBlock)}</div>
    </div>
  );
};

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const circles = [
  { href: profile.linkedin, icon: images.linkedin, label: "LinkedIn" },
  { href: profile.resume, icon: images.resume, label: "Resume" },
  { href: profile.github, icon: images.github, label: "GitHub" },
];

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <TypedIntro blocks={profile.intro} />
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt={profile.name} className="app__header-photo" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
        src={images.circle}
        alt=""
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {circles.map((circle) => (
        <div className="circle-cmp app__flex" key={circle.label}>
          <a
            href={circle.href}
            target="_blank"
            rel="noreferrer"
            aria-label={circle.label}
            className="app__flex"
          >
            <img src={circle.icon} alt={circle.label} className="app__icon-mono" />
          </a>
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, "home");
