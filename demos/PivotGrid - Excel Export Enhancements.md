# Pivot Grid - Excel Export Enhancements

## # The Problem

The [previos PivotGrid export implementation](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/export/) is limited and does not allow you to customize Excel files in the following ways:

- customize cells
- customize the workbooks and worksheets
- export additional sheets with custom data
- export the Fields Panel
- use custom formats
- display load indicator
- protect cells and sheets

## # The Proposed Solution

We plan to use the third-party [ExcelJS](https://github.com/exceljs/exceljs) library in the way, similar to our DataGrid [export  implementation](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ExcelJSOverview/React/Light/). We have a lot of positive feedback with it. 

**Note**: At the moment, we are testing the proposed solution and want to collect feedback and find out whether this solution covers most scenarios. 

## # Use cases

## Customize Cell Appearence
By passing a function to the customizeCell option of exportPivotGrid, you can apply flexible customizations to individual cells:

<p align="center">
  <img src="https://user-images.githubusercontent.com/57402891/83850819-2467eb80-a71a-11ea-88d2-db4f204a57f4.png">
</p>

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
        }
        ...
        if(pivotCell.columnType === 'GT') {
            if(pivotCell.rowPath && pivotCell.rowPath[0] === 'Africa') {
                excelCell.fill = { type: 'pattern', pattern:'solid', fgColor: { argb:'B6FF19'} }
            } else {
                excelCell.fill = { type: 'pattern', pattern:'solid', fgColor: { argb:'5EFF5E'} }
            }
        }
    }
```

## Display a Load Indicator
You can add and customize a progress indicator, similar to a DataGrid's [load panel](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/loadPanel/):

<p align="center">
  <img src="https://user-images.githubusercontent.com/57402891/84038980-41661e00-a9a9-11ea-838b-f93a8ebad4f2.png">
</p>

```js
    DevExpress.excelExporter.exportPivotGrid({
        component: e.component,
        worksheet: worksheet,
        topLeftCell: { row: 2, column: 2 },
        loadPanel: {
            enabled: true,
            text: 'Export large data...'
        }
    })
```


## Add custom headers, footers and notes
ExcelJS library allows you to customize worksheets outside of the exported cell area. So, you can add your any text, image in any cell. Also you can write notes:

<p align="center">
  <img src="https://user-images.githubusercontent.com/57402891/83887298-ee922980-a750-11ea-815b-f7e7135d25f1.png">
</p>

```js
    DevExpress.excelExporter.exportPivotGrid({
        ...
    }).then(function(dataGridRange) {
        //  add custom header
        var headerRow = worksheet.getRow(1);
        headerRow.height = 70; 
        worksheet.mergeCells('D1:H1');
        headerRow.getCell(4).value = 'Average Sales \n Amount by Region';
        headerRow.getCell(4).font = { name: 'Segoe UI Light', size: 22, bold: true };
        headerRow.getCell(4).alignment = { horizontal: 'center',  wrapText: true };
        
        // add a note
        worksheet.getCell('D1').note = 'Based on open data';

        // add custom footer
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
You can export the Field Panel items to any cells and in any way convenient for you:

<p align="center">
  <img src="https://user-images.githubusercontent.com/57402891/84037703-a15bc500-a9a7-11ea-92b7-fb11dbb73c5a.png">
</p>


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
You can use any format for any cell. You can also specify specific format for particular cells:

<p align="center">
  <img src="https://user-images.githubusercontent.com/57402891/84116927-6ace8a80-aa39-11ea-9b76-332f390a6d9c.png">
</p>

```js
    DevExpress.excelExporter.exportPivotGrid({
        component: e.component,
        worksheet: worksheet,
        customizeCell: function({excelCell, pivotCell}) {
            if(pivotCell.area === 'data') {
                if(pivotCell.dataType === 'number'){
                    excelCell.numFmt = '$ #,##';
                } else {
                    excelCell.numFmt = 'dd-MM-yyyy';
                }
            }
        }        
    })
```



## # Implementation Details

### ExcelJS library

ExcelJS is a library for reading, manipulating, and writing spreadsheet data and styles to Excel and JSON. See [ExcelJS](https://github.com/exceljs/exceljs) for more information.

## # Try It

## Live Sandboxes

1. [Column sizing](https://codepen.io/EugeniyKiyashko/pen/LYGYzwQ)
1. [Customize cells appearence](https://codepen.io/SNovikov/pen/BajBgrj)
1. [Customize texts](https://codepen.io/EugeniyKiyashko/pen/mdVdqBY)
1. [Custom headers and footers](https://codepen.io/SNovikov/pen/BajBgrj)
1. [Export Fields panel](https://codepen.io/SNovikov/pen/zYrxmMr)
1. [Custom cell format](https://codepen.io/SNovikov/pen/pogvVmZ)
1. [Export chart](https://codepen.io/SNovikov/pen/XWXmXVZ)
1. [Hide and show certain fields](https://codepen.io/EugeniyKiyashko/pen/vYLEEdL)
1. [Export borders according to PivotGrid border settings](https://codepen.io/EugeniyKiyashko/pen/pogJEqa)
1. [Display load panel](https://codepen.io/EugeniyKiyashko/pen/yLeNVNx)
1. [Export using CSV format](https://codepen.io/EugeniyKiyashko/pen/xxZGREK)
1. [Export without rows merging](https://codepen.io/EugeniyKiyashko/pen/dyGogby)
1. [Export without columns merging](https://codepen.io/EugeniyKiyashko/pen/OJMyMYX)

## # We Need Your Feedback

## Take a Quick Poll
Wee need your feedback! [Do you need these capabilities when exporting PivotGrid in your projects?](https://docs.google.com/forms/d/17nP7HiGe5ILj1mK7Tjn6vojNJMIGUDdufdeDh6K547g/viewform?usp=sf_link)

## # Get Notified of Updates

Subscribe to this thread or to our [Facebook](https://www.facebook.com/DevExpress.DevExtreme/) and [Twitter](https://twitter.com/devextreme) accounts for updates on this topic.
