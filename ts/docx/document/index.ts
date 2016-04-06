import {XmlComponent} from "../xml-components";
import {DocumentAttributes} from "../xml-components/document-attributes"
import {Body} from "./body";
import {Paragraph} from "../paragraph";

export class Document implements XmlComponent {
    private document: Array<XmlComponent>;
    private body: Body;
    
    xmlKeys = {
        document: "w:document",
        body: "w:body"
    };

    constructor() {
        this.document = new Array<XmlComponent>();
        this.document.push(new DocumentAttributes({
            wpc: 'http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas',
            mc: 'http://schemas.openxmlformats.org/markup-compatibility/2006',
            o: 'urn:schemas-microsoft-com:office:office',
            r: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships',
            m: 'http://schemas.openxmlformats.org/officeDocument/2006/math',
            v: 'urn:schemas-microsoft-com:vml',
            wp14: 'http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing',
            wp: 'http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing',
            w10: 'urn:schemas-microsoft-com:office:word',
            w: 'http://schemas.openxmlformats.org/wordprocessingml/2006/main',
            w14: 'http://schemas.microsoft.com/office/word/2010/wordml',
            w15: 'http://schemas.microsoft.com/office/word/2012/wordml',
            wpg: 'http://schemas.microsoft.com/office/word/2010/wordprocessingGroup',
            wpi: 'http://schemas.microsoft.com/office/word/2010/wordprocessingInk',
            wne: 'http://schemas.microsoft.com/office/word/2006/wordml',
            wps: 'http://schemas.microsoft.com/office/word/2010/wordprocessingShape',
            Ignorable: 'w14 w15 wp14'
        }));
        this.body = new Body();
        this.document.push(this.body);
    }

    addParagraph(paragraph: Paragraph) {
        this.body.push(paragraph);
    }
}