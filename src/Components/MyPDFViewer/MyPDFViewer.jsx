import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const MyPDFViewer = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <Worker
      workerUrl={`https://unpkg.com/pdfjs-dist@2.10.377/build/pdf.worker.min.js`}
    >
      <Viewer
        fileUrl="/public/assignment_category_0008.pdf"
        plugins={[defaultLayoutPluginInstance]}
      />
    </Worker>
  );
};
export default MyPDFViewer;
