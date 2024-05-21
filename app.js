import {PdfDocument} from "@ironsoftware/ironpdf";
import {IronPdfGlobalConfig} from "@ironsoftware/ironpdf";

// HTML to PDF
(async () => {
    // Input the license key
    const IronPdfConfig = {
        licenseKey: "IRONPDF.DEVTEAM.IX1465-92A278403D-F5U2BHGMSE-XEUGFHNGOQL5-6D44POEHBLGW-N4ACGZJOJI3C-INR3PPCPRZD5-ZFTNAP-LSEN2ZUUJGSVUA-UNIT.TEST-MW2IAU.RENEW.SUPPORT.14.JUL.2029",
    };
    // Set the config with the license key
    IronPdfGlobalConfig.setConfig(IronPdfConfig);

    const options = {
        firstPageNumber: 1, // Use 2 if a cover page will be appended
 
        // Add a header to every page
        textHeader: {
            dividerLine: true,
            centerText: "{date} {time}",
            fontSize: 12,
        },
 
        // Add a footer
        textFooter: {
            dividerLine: true,
            leftText: "{date} {time}",
            centerText: "{date} {time}",
            rightText: "{page} of {total-pages}",
            fontSize: 10,
        },
        // Mergeable fields are: {page} {total-pages} {url} {date} {time} {html-title} & {pdf-title}
 
        margin: {
            top: 25, // Create 25mm space for the header
            bottom: 25, // Create 25mm space for the footer
        },
    };

    var config = IronPdfGlobalConfig.getConfig();
    config.debugMode = true;
    // Render the HTML string
	const pdf = await PdfDocument.fromHtml("<h1>Testing</h1>", {renderOptions: options });

    // Export the PDF document
	await pdf.saveAs("pdf-from-htmltextheaderfooter.pdf");
})();

// // URL to PDF
// (async () => {
//     // Render the web URL
//     const pdf = await PdfDocument.fromUrl("https://www.google.com");

//     // Export the PDF document
//     await pdf.saveAs("pdf-from-url1.pdf");
// })();

// Stamp PDF
// (async () => {
//     // Load existing PDF document
// 	const pdf = await PdfDocument.fromFile("pdf-from-html.pdf");

//     // Stamp image on the PDF
// 	await pdf.stampHtml("<img src='https://ironpdf.com/img/products/ironpdf-logo-text.svg'/>");

//     // Export the PDF document
// 	await pdf.saveAs("stampedPdf.pdf");
// })();