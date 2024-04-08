import { PDFDownloadLink } from '@react-pdf/renderer';
import { ReservationPdf } from './ReservationPdf';

export const ReservationPdfDownload = () => (
  <div>
    <PDFDownloadLink
      document={<ReservationPdf />}
      fileName="Mi_reservación.pdf"
    >
      {({ loading }) => (loading ? 'Cargando documento...' : 'Download now!')}
    </PDFDownloadLink>
  </div>
);
