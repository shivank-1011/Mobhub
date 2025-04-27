let accessToken = null;

export function setAccessToken(token) {
  accessToken = token;
  // You can add additional logic here to configure Google Drive API client with the token
}

export function getAccessToken() {
  return accessToken;
}
