/* const xhr = new XMLHttpRequest();

xhr.addEventListener("load", function () {
  console.log(xhr.response);
});

xhr.open("GET", "https://supersimplebackend.dev/");
xhr.send(); */

/* const xhr = new XMLHttpRequest();
xhr.open("GET", "https://supersimplebackend.dev/");

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.response); // Use responseText, not response
  }
});

xhr.send();





 */
/* async function init() {
  try {
    const response = await fetch("https://supersimplebackend.dev/");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
 */

/* async function init2() {
  try {
    const res = await fetch("https://supersimplebackend.dev/products");
    //get the content type
    const contentType = res.headers.get("content-type");
    //declare data
    let data;
    if (contentType && contentType.includes("application/json")) {
      data = await res.json(); //parses as Json
    } else if (contentType && contentType.includes("text/plain")) {
      data = await res.text(); //pases as a text
    } else if (contentType && contentType.includes("image/jpeg")) {
      data = await res.text(); //pases as a text
    } else {
      throw new Error("Unsupported content type: " + contentType);
    }

    console.log(data);
    return data;
  } catch (error) {
    console.log("error:", error);
  }
}

init2(); */

/* async function init() {
  try {
    const res = await fetch("https://supersimplebackend.dev/");

    // Get the Content-Type from the response headers
    const contentType = res.headers.get("Content-Type");

    let data;
    if (contentType && contentType.includes("application/json")) {
      data = await res.json(); // Parse as JSON
    } else if (contentType && contentType.includes("text/plain")) {
      data = await res.text(); // Parse as plain text
    } else {
      throw new Error("Unsupported content type: " + contentType);
    }

    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

init();
 */

/* async function init2() {
  try {
    const res = await fetch("https://supersimplebackend.dev/cart");

    // Get the content type
    const contentType = res.headers.get("content-type");

    // Declare data
    let data;

    if (contentType && contentType.includes("application/json")) {
      // Parse as JSON
      data = await res.json();
    } else if (contentType && contentType.includes("text/plain")) {
      // Parse as plain text
      data = await res.text();
    } else if (
      (contentType && contentType.includes("application/xml")) ||
      contentType.includes("text/xml")
    ) {
      // Parse as XML
      const xmlText = await res.text();
      const parser = new DOMParser();
      data = parser.parseFromString(xmlText, "application/xml");
    } else if (contentType && contentType.includes("text/html")) {
      // Parse as HTML
      data = await res.text();
    } else if (contentType && contentType.includes("application/pdf")) {
      // Handle PDF (binary data)
      data = await res.blob(); // Returns a Blob object representing the PDF
    } else if (contentType && contentType.includes("application/zip")) {
      // Handle ZIP files (binary data)
      data = await res.blob(); // Returns a Blob object representing the ZIP file
    } else if (
      contentType &&
      contentType.includes("application/octet-stream")
    ) {
      // Handle generic binary data (like images, etc.)
      data = await res.blob(); // Returns a Blob object for binary data
    } else if (contentType && contentType.includes("image/jpeg")) {
      // Handle JPEG image
      data = await res.blob(); // Blob for image data
    } else if (contentType && contentType.includes("image/png")) {
      // Handle PNG image
      data = await res.blob(); // Blob for image data
    } else if (contentType && contentType.includes("audio/mpeg")) {
      // Handle audio (MP3)
      data = await res.blob(); // Blob for audio data
    } else if (contentType && contentType.includes("video/mp4")) {
      // Handle video (MP4)
      data = await res.blob(); // Blob for video data
    } else if (contentType && contentType.includes("application/javascript")) {
      // Handle JavaScript (not common for GET requests, but just in case)
      data = await res.text();
    } else if (
      contentType &&
      contentType.includes("application/x-www-form-urlencoded")
    ) {
      // Handle URL-encoded form data (usually for POST requests)
      data = await res.text();
    } else if (contentType && contentType.includes("multipart/form-data")) {
      // Handle multipart form data (used for file uploads, for example)
      data = await res.blob(); // Blob for file data
    } else if (contentType && contentType.includes("application/ld+json")) {
      // Handle JSON-LD (Linked Data JSON)
      data = await res.json();
    } else {
      throw new Error("Unsupported content type: " + contentType);
    }

    console.log(data);
    return data;
  } catch (error) {
    console.log("error:", error);
  }
}

init2(); */

/* async function init3() {
  try {
    const res = await fetch("https://supersimplebackend.dev/images/orders");
    const type = res.headers.get("content-type");
    console.log(type);
  } catch (error) {
    console.log("error ", error);
  }
}
init3();
 */

// async function init3() {
//   try {
//     const res = await fetch("https://supersimplebackend.dev/images/orders", {
//       method: "POST", // Specify POST method
//       headers: {
//         "Content-Type": "application/json", // Adjust as needed (can also try 'application/x-www-form-urlencoded', etc.)
//       },
//       body: JSON.stringify({
//         /* your data here */
//       }), // Add your request body data here
//     });

//     // Get the Content-Type of the response
//     const type = res.headers.get("content-type");
//     console.log("Response Content-Type:", type);

//     // You can also handle different response types based on the Content-Type
//     if (type && type.includes("application/json")) {
//       const data = await res.json(); // Parse as JSON
//       console.log(data);
//     } else if (type && type.includes("text/plain")) {
//       const data = await res.text(); // Parse as plain text
//       console.log(data);
//     } else if (
//       (type && type.includes("application/xml")) ||
//       type.includes("text/xml")
//     ) {
//       const xmlText = await res.text(); // Parse as XML
//       const parser = new DOMParser();
//       const xmlData = parser.parseFromString(xmlText, "application/xml");
//       console.log(xmlData);
//     } else if (type && type.includes("image/jpeg")) {
//       const imageBlob = await res.blob(); // Get image as a Blob
//       console.log(imageBlob);
//     } else if (type && type.includes("application/pdf")) {
//       const pdfBlob = await res.blob(); // Get PDF as a Blob
//       console.log(pdfBlob);
//     } else {
//       console.log("Unknown Content-Type:", type);
//     }
//   } catch (error) {
//     console.log("Error:", error);
//   }
// }

// init3();
