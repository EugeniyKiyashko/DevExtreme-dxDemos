function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

function getTheme(){
    return getUrlParameter('theme') || 'dx.light.css';
}

function getThemesData() {
    return [
        {
            key: "generic",
            items: [
                'dx.carmine.css',
                'dx.contrast.css',
                'dx.dark.css',
                'dx.darkmoon.css',
                'dx.darkviolet.css',
                'dx.greenmist.css',
                'dx.light.css'
            ]
        },
        {
            key: "generic.compact",
            items: [
                'dx.carmine.compact.css',
                'dx.contrast.compact.css',
                'dx.dark.compact.css',
                'dx.darkmoon.compact.css',
                'dx.darkviolet.compact.css',
                'dx.greenmist.compact.css',
                'dx.light.compact.css'
            ]
        },
        {
            key: "material",
            items: [
                'dx.material.blue.dark.css',
                'dx.material.blue.light.css',
                'dx.material.lime.dark.css',
                'dx.material.lime.light.css',
                'dx.material.orange.dark.css',
                'dx.material.orange.light.css',
                'dx.material.purple.dark.css',
                'dx.material.purple.light.css',
                'dx.material.teal.dark.css',
                'dx.material.teal.light.css',
                'dx.softblue.css'
            ]
        },
        {
            key: "material",
            items: [
                'dx.material.blue.dark.compact.css',
                'dx.material.blue.light.compact.css',
                'dx.material.lime.dark.compact.css',
                'dx.material.lime.light.compact.css',
                'dx.material.orange.dark.compact.css',
                'dx.material.orange.light.compact.css',
                'dx.material.purple.dark.compact.css',
                'dx.material.purple.light.compact.css',
                'dx.material.teal.dark.compact.css',
                'dx.material.teal.light.compact.css',
                'dx.softblue.compact.css'
            ]
        }
    ];
}

// document.write('<link rel="stylesheet" type="text/css" href="https://cdn3.devexpress.com/jslib/22.2.3/css/dx.common.css?a=1"/>');  
// document.write('<link rel="stylesheet" type="text/css" href="https://cdn3.devexpress.com/jslib/22.2.4/css/' + getTheme() + '?a=1"/>');
document.write('<link rel="stylesheet" type="text/css" href="https://eugeniykiyashko.github.io/DevExtreme-dxDemos/artifacts/css/' + getTheme() + '?a=1"/>');

function addThemeSelectboxToBody() {
    var $themeSelectBox = $("<div id='#themeSelector'></div>").css({ 'display': 'inline-block', 'margin-bottom': '10px' });

    $(".dx-viewport").eq(0).prepend($("<div>").text("Current theme: ").append($themeSelectBox).append("<hr>"));

    $themeSelectBox.dxSelectBox({
        placeholder: "Choose theme",
        width: 200,
        grouped: true,
        value: getTheme(),
        onValueChanged: function (data) {
            var url = window.location.href;    
            const themeIndex = url.indexOf('?theme');
            if (themeIndex !== -1){
                url = url.substring(0, themeIndex);
            }
            window.location.href = url + '?theme=' + data.value;
        },                
        items: getThemesData()
    });
}
