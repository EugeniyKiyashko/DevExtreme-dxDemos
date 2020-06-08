Excel Export Enhancements

# The Problem

The [current PivotGrid export implementation](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/export/) is very limited and does not allow you to customize Excel files in the following ways:

- customize cells appearence
- add a custom header and footer 
- use custom cells format
- export the Fields Panel
- add new worksheets
- work with comments and notes
- customize the workbook or worksheet
- export several widgets into one file
- protect files

# The Proposed Solution

After some research, we plan to use the third-party [ExcelJS](https://github.com/exceljs/exceljs) library in the way, similar to our DataGrid [export  implementation](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ExcelJSOverview/React/Light/). We got very good export feedback with it.

**Note**: At the moment, we are testing the proposed solution and want to collect feedback and find out whether this solution covers most scenarios. 

# Scenarios

## Customize Cell Appearence
You can customize fonts, colors, alignment and indentation and so on in any cells:
![cell appearence](https://user-images.githubusercontent.com/57402891/83850819-2467eb80-a71a-11ea-88d2-db4f204a57f4.png)

```js
    DevExpress.excelExporter.exportPivotGrid({
        ...
        customizeCell: function({excelCell, pivotCell}) {
        if( pivotCell.area === 'row') {
            if(pivotCell.type === 'GT'){
                excelCell.font = { color: { argb: "cc0000"}, bold: true };
            } else if (pivotCell.type === 'T') {
                excelCell.fill = { type: 'pattern', pattern:'solid', fgColor: { argb:'94FF82'} }
            } else {
                excelCell.font = { italic: true, size: 10 };
            }
        }
        if( pivotCell.area === 'column') {
            excelCell.font = { color: { argb: "0000cc"}, bold: true };
            excelCell.fill = { type: 'pattern', pattern:'solid', fgColor: { argb:'FFFF5E'} }
            excelCell.alignment = { vertical: 'middle', horizontal: 'center' };                      
        }
        if (pivotCell.rowType === 'T') {
            excelCell.fill = { type: 'pattern', pattern:'solid', fgColor: { argb:'94FF82'} }
        }
        if(pivotCell.rowType === 'GT') {
            excelCell.fill = { type: 'pattern', pattern:'solid', fgColor: { argb:'5EFF5E'} }
        }
        if(pivotCell.columnType === 'GT') {
            if(pivotCell.rowPath && pivotCell.rowPath[0] === 'Africa') {
                excelCell.fill = { type: 'pattern', pattern:'solid', fgColor: { argb:'B6FF19'} }
            } else {
                excelCell.fill = { type: 'pattern', pattern:'solid', fgColor: { argb:'5EFF5E'} }
            }
        }
    }
```


## Add custom headers, footers and comments
You can add your own text in any cell. Also you can write notes:

![custom headers, footers and comments](https://user-images.githubusercontent.com/57402891/83887298-ee922980-a750-11ea-815b-f7e7135d25f1.png)
```js
    DevExpress.excelExporter.exportPivotGrid({
        ...
        }).then(function(dataGridRange) {
            // header
            var headerRow = worksheet.getRow(1);
            headerRow.height = 70; 
            worksheet.mergeCells('D1:H1');
            headerRow.getCell(4).value = 'Average Sales \n Amount by Region';
            headerRow.getCell(4).font = { name: 'Segoe UI Light', size: 22, bold: true };
            headerRow.getCell(4).alignment = { horizontal: 'center',  wrapText: true };
            
            // notes
            worksheet.getCell('D1').note = 'Based on open data';

            // footer
            var footerRowIndex = dataGridRange.to.row + 2;
            var footerRow = worksheet.getRow(footerRowIndex);
            worksheet.mergeCells(footerRowIndex, 1, footerRowIndex, 8);

            footerRow.getCell(1).value = 'www.wikipedia.org';
            footerRow.getCell(1).font = { color: { argb: 'BFBFBF' }, italic: true };
            footerRow.getCell(1).alignment = { horizontal: 'right' };

            return Promise.resolve();
        })
```

## Export field panel data
You can export the Field Panel items to any cells and in any way convenient for you

![export field panel](https://user-images.githubusercontent.com/57402891/83886597-f56c6c80-a74f-11ea-9aba-59844f8d6166.png)
```js
    DevExpress.excelExporter.exportPivotGrid({
        component: e.component,
        worksheet: worksheet
    })
    .then(function(dataGridRange) {
        var fields = grid.getDataSource().fields();      
        var rowFields = fields.filter(r => r.area === 'row').map(r => r.dataField);
        var columnFields = [...new Set(fields.filter(r => r.area === 'column').map(r => r.dataField))];
        var dataFields = fields.filter(r => r.area === 'data').map(r => `[${r.summaryType}(${r.dataField}])`);        
        var filterFields = fields.filter(r => r.area === 'filter').map(r => r.dataField);
        var appliedFilters = fields.filter(r => r.filterValues !== undefined).map(r => `[${r.dataField}:${r.filterValues}]`);
        var firstRow = worksheet.getRow(1),
            fieldPanelCell = firstRow.getCell(4);
    
        firstRow.height = 70;
        worksheet.mergeCells('D1:G1');
        fieldPanelCell.value = 'Feld Panel content:'
            + ` \n - Filter fields: [${filterFields.join(', ')}]`              
            + ` \n - Row fields: [${rowFields.join(', ')}]`
            + ` \n - Column fields: [${columnFields.join(', ')}]`
            + ` \n - Data fields: [${dataFields.join(', ')}]`
            + ` \n - Applied filters: [${appliedFilters.join(', ')}]`;
    
        fieldPanelCell.alignment = { horizontal: 'left', vertical: 'top',  wrapText: true };
        fieldPanelCell.fill = { type: 'pattern', pattern:'solid', fgColor: { argb:'FFD905'}};

        return Promise.resolve();
    }) 
```

## Custom cell format
You can use any format for any cell. You can also specify concreate custom format for concreate cells:

![Custom cell format](https://user-images.githubusercontent.com/57402891/84011112-54afc400-a97e-11ea-917d-e29ba7feca2d.png)
```js
    DevExpress.excelExporter.exportPivotGrid({
        component: e.component,
        worksheet: worksheet,
        customizeCell: function({excelCell, pivotCell}) {
            if( pivotCell.area === 'data') {
                excelCell.numFmt = '$ #,##';
            }
        }        
    })
```

And so on...

## Implementation Details

### ExcelJS library

ExcelJS is a library for reading, manipulating, and writing spreadsheet data and styles to Excel and JSON. See [ExcelJS: Browser](https://github.com/exceljs/exceljs#browser) for more information.

# Try It

## Live Sandboxes

1. [Customize Cell Appearence](https://codepen.io/SNovikov/pen/BajBgrj)
1. [Custom Headers and Footers](https://codepen.io/SNovikov/pen/BajBgrj)
1. [Export Fields Panel](https://codepen.io/SNovikov/pen/zYrxmMr)
1. [Custom Cell Format](https://codepen.io/SNovikov/pen/pogvVmZ)

## Installation

Link [exportDxDataGrid](https://combinatronics.com/IgnatovDan/DevExtreme_DataGridToExcel/8c823335814c26e39f62b4a31669908fc2d54250/exportDxDataGrid.js), [ExcelJS](https://github.com/exceljs/exceljs), and [FileSaver](https://github.com/eligrey/FileSaver.js/) libraries.  

# We Need Your Feedback

## Take a Quick Poll
Wee need your feedback! [Do you need these capabilities when exporting PivotGrid in your projects?](https://docs.google.com/forms/d/17nP7HiGe5ILj1mK7Tjn6vojNJMIGUDdufdeDh6K547g/viewform?usp=sf_link)

# Get Notified of Updates

Subscribe to this thread or to our [Facebook](https://www.facebook.com/DevExpress.DevExtreme/) and [Twitter](https://twitter.com/devextreme) accounts for updates on this topic.
