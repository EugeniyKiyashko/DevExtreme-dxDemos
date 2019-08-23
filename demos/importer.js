const importer = () => {
    const scriptUrls = [
        "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.2/jszip.min.js",
        "https://cdn3.devexpress.com/jslib/19.1.5/js/dx.all.js"
    ];

    const styleUrls = [
      "https://cdn3.devexpress.com/jslib/19.1.5/css/dx.common.css",
      "https://cdn3.devexpress.com/jslib/19.1.5/css/dx.light.css"
    ];

    styleUrls.forEach(insertStyle);

    return Promise.all(scriptUrls.map(insertScript));
}

const insertScript = (url) => {
    return new Promise((resolve, reject) => {
        let script;

        script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        script.async = false;
        script.addEventListener("load", () => resolve(), false);
        script.addEventListener("erroe", () => reject(), false);

        document.head.appendChild(script);
    });
}

const insertStyle = (url) => {
    let link;

    link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = url;
    
    document.head.appendChild(link);
}