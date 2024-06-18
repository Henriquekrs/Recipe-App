export function transformYoutubeURL(url: string) {
  return url && url.includes('watch?v=')
    ? url.replace('watch?v=', 'embed/')
    : '';
}
