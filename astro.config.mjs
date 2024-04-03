import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import icon from "astro-icon";

import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  devToolbar: { enabled: false },
  integrations: [icon(), tailwind({
    applyBaseStyles: false
  }), compress(), starlight({
    title: 'aimtop | Materiały',
    sidebar: [
      {
      label: "Aim trainery",
      items: [
        { label: "Benchmarki do Kovaak", link: "/aimtrainery/kovaak-benchmarki" },
        { label: "Benchmarki Voltaic", link: "/aimtrainery/voltaic-benchmarki" },
        { label: "Materiały do Valorant", link: "/aimtrainery/materialy-valorant" },
        { label: "VDIM", link: "/aimtrainery/vdim" },
        { label: "Korekcja flicków", link: "/aimtrainery/korekcja-flickow" },


      ]},
      {
      
      label: "CS2",
      items: [
        { label: "Pełny trening aima", link: "/cs2/pelny-trening" }
      ]}]}),
    ],
  });