'use client'

import style from './Notes.module.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import { Document, Page, pdfjs } from 'react-pdf';
import { useState } from 'react';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

export default function Notes() {
    const url = 'https://hcmdevblob.blob.core.windows.net/notes/ptcb_1_1.pdf';

    const [numPages, setNumPages] = useState(null);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };
    
    return (
        <div className={style.c}>
            <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>      
                {Array.from(new Array(numPages), (_, index) => (
                    <Page
                        className={style.c2}
                        key={`page_${index + 1}`} 
                        pageNumber={index + 1} 
                        width={window.innerWidth}
                        scale={0.75}
                        renderTextLayer={false}
                    />
                ))} 
            </Document>
        </div>
    )
};
