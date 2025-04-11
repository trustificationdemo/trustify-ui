import { http, type RequestHandler, passthrough } from "msw";
import { setupWorker } from "msw/browser";

import config from "./config";
import stubNewWork from "./stub-new-work";

/**
 * Handler to catch unhandled traffic to `/api/*`, log it, and pass it through to the
 * server to handle.  This is useful to see traffic, in the console logs, that is not
 * being mocked elsewhere.
 */
const passthroughHandler: RequestHandler = http.all("/api/*", (req) => {
  console.log(
    "%cmsw passthrough%c \u{1fa83} %s",
    "font-weight: bold",
    "font-weight: normal",
    req.request.url,
  );
  return passthrough();
});

const handlers = [
  // TODO: Add handlers for a FULL api mock data set
  ...stubNewWork,
  ...(config.passthrough ? [passthroughHandler] : []),
];

/**
 * A setup MSW browser service worker using the handlers configured in the MOCK env var.
 */
export const worker = setupWorker(...handlers);

export { config } from "./config";
