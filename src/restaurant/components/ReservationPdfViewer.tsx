import { BlobProvider } from '@react-pdf/renderer';
import { ReservationPdf } from './ReservationPdf';

export const ReservationPdfViewer = () => (
  <BlobProvider document={<ReservationPdf />}>
    {({ url }) => (
      <a href={url} target="_blank">
        Open in new tab
      </a>
    )}
  </BlobProvider>
);
