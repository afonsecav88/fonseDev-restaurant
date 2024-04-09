import { PDFDownloadLink } from '@react-pdf/renderer';
import { MenuPdf } from './MenuPdf';

export const MenuPdfDownload = () => (
  <div>
    <PDFDownloadLink document={<MenuPdf />} fileName="Mi_reservación.pdf">
      {({ loading }) => (loading ? 'Cargando documento...' : 'Download now!')}
    </PDFDownloadLink>
  </div>
);
