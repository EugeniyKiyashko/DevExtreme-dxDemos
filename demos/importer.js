const importer = () => {
    const scriptUrls = [
        "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.2/jszip.min.js",
        "https://cdn3.devexpress.com/jslib/19.1.5/js/dx.all.js"
    ];

    insertStyle("https://cdn3.devexpress.com/jslib/19.1.5/css/dx.common.css");
    insertStyle("https://cdn3.devexpress.com/jslib/19.1.5/css/dx.light.css");

    const predefinedThemes = [ 
        "light", "dark", "carmine", "softblue", "darkmoon", "darkviolet", "greenmist", "contrast", "material.blue.light", "material.blue.dark", "material.lime.light", "material.lime.dark", "material.orange.light", "material.orange.dark", "material.purple.light", "material.purple.dark", "material.teal.light", "material.teal.dark"
    ];

    const styleUrls = predefinedThemes.map((themeName) => `https://cdn3.devexpress.com/jslib/19.1.5/css/dx.${themeName}.css`);
    const styleUrlsCompact = predefinedThemes.map((themeName) => `https://cdn3.devexpress.com/jslib/19.1.5/css/dx.${themeName}.compact.css`);

    insertThemeSwitcher(predefinedThemes);
    styleUrls.forEach(insertDxTheme);
    styleUrlsCompact.forEach(insertDxTheme);

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

const insertDxTheme = (url) => {
    let link;

    const regex = /dx.*.css/;
    const theme = regex.exec(url)[0];
    const themeName = theme.substr(3, theme.length - 7);

    link = document.createElement('link');
    link.rel = 'dx-theme';
    link.setAttribute("data-theme", themeName.indexOf("material.") !== -1 ? themeName : `generic.${themeName}`);
    link.href = url;
    link.setAttribute("data-active", false);
    addThemeToSwitcher(link.dataset.theme);
    document.head.appendChild(link);
}

const insertThemeSwitcher = (predefinedThemes) => {
    const selectBox = document.createElement('select');
    selectBox.onchange = function(event) {
        switchTheme(this.value);
    }
    selectBox.id = 'themeSwitcher';

    document.body.prepend(document.createElement('hr'));
    document.body.prepend(selectBox);
}

const addThemeToSwitcher = (themeName) => {
    const selectBox = document.getElementById('themeSwitcher');

    let option = document.createElement('option');
    option.text = themeName;

    selectBox.append(option)
}

const switchTheme = (themeName) => {
    DevExpress.ui.themes.current(themeName);
}