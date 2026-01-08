export { renderers } from '../../renderers.mjs';

const prerender = false;
const GET = async ({ url }) => {
  const KIDSLINE_SITTER_ID = "451147";
  const start = url.searchParams.get("start");
  const end = url.searchParams.get("end");
  if (!start || !end) {
    return new Response(JSON.stringify({
      error: "Missing start or end date"
    }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  const targetUrl = `https://kidsline.me/sitters/ajax_available_calendar/${KIDSLINE_SITTER_ID}.json?start=${start}&end=${end}`;
  try {
    const response = await fetch(targetUrl);
    if (!response.ok) {
      throw new Error(`Kidsline API responded with ${response.status}`);
    }
    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        // キャッシュ制御: 1分間キャッシュ
        "Cache-Control": "s-maxage=60, stale-while-revalidate"
      }
    });
  } catch (error) {
    console.error("Failed to fetch from Kidsline:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch schedule" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
