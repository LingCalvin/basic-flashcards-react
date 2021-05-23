export function downloadBlob(blob: Blob) {
  const blobLink = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = blobLink;
  a.download = '';
  a.click();
  window.URL.revokeObjectURL(blobLink);
}
