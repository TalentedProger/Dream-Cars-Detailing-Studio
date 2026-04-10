import { useEffect } from "react";

interface PageMeta {
  title: string;
  description?: string;
  keywords?: string;
  canonicalPath?: string;
}

const BASE_TITLE = "Dream Cars Studio";
const SITE_URL = "https://dreamcars.studio";

export function usePageMeta({ title, description, keywords, canonicalPath }: PageMeta) {
  useEffect(() => {
    // Title
    document.title = title;

    // Description
    if (description) {
      setMeta("name", "description", description);
      setMeta("property", "og:description", description);
      setMeta("name", "twitter:description", description);
    }

    // Keywords
    if (keywords) {
      setMeta("name", "keywords", keywords);
    }

    // OG title
    setMeta("property", "og:title", title);
    setMeta("name", "twitter:title", title);

    // Canonical
    if (canonicalPath !== undefined) {
      setCanonical(`${SITE_URL}${canonicalPath}`);
    }

    return () => {
      document.title = `${BASE_TITLE} — Детейлинг студия`;
    };
  }, [title, description, keywords, canonicalPath]);
}

function setMeta(attr: "name" | "property", key: string, value: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

function setCanonical(url: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", url);
}

export { BASE_TITLE, SITE_URL };
