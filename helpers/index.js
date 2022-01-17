import jwtDecode from "jwt-decode";
let cookieparser = require("cookieparser");

export function getUserFromCookie(req) {
  if (!req.headers.cookie) return;

  if (req.headers.cookie) {
    const parser = cookieparser.parse(req.headers.cookie);
    const accessTokenCookie = parser.access_token;
    if (!accessTokenCookie) return;
    const decodeToken = jwtDecode(accessTokenCookie);
    if (!decodeToken) return;
    return decodeToken;
  }
}
