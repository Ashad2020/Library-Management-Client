import { PDFViewer } from "@react-pdf/renderer";
import MyDocument from "../MyDocument/MyDocument";

export default function ReadBook() {
  return (
    <div className="border-4 flex justify-center h-screen">
      <PDFViewer>
        <MyDocument />
      </PDFViewer>
    </div>
  );
}
