export const prerender = true;

export function GET({ site }: { site?: URL }) {
  const origin = site?.origin ?? "https://example.com";
  const body = `User-agent: *
Allow: /

Sitemap: ${origin}/sitemap-index.xml
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}

