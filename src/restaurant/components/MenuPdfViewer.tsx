import { BlobProvider } from '@react-pdf/renderer';
import { MenuPdf } from './MenuPdf';

export const MenuPdfViewer = () => (
  <BlobProvider document={<MenuPdf />}>
    {({ url }) => (
      <a href={url} target="_blank">
        Open in new tab
      </a>
    )}
  </BlobProvider>
);
