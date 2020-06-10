# Pivot Grid - Excel Export Enhancements

## The Problem

In the [current PivotGrid export implementation](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/export/) it is difficult to implement the following scenarios:

- customize cells
- customize workbooks and worksheets
- export the Fields Panel
- export additional sheets with custom data
- use custom formats
- export progress indicator
- protect cells and sheets

## The Proposed Solution

We plan to use the third-party [ExcelJS](https://github.com/exceljs/exceljs) library in the way, similar to our DataGrid [export  implementation](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ExcelJSOverview/React/Light/). We have a lot of positive feedback with it. 

**Note**: At the moment, we are testing the proposed solution and want to collect feedback and find out whether this solution covers most scenarios. 

## Use cases

### Customize Cell Appearence
By passing a function to the customizeCell option of exportPivotGrid, you can apply [flexible customizations](https://github.com/exceljs/exceljs#styles) to individual [cells](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Pivot_Grid_Cell/):

<p align="center">
  <img src="https://user-images.githubusercontent.com/57402891/84130962-9a3ac280-aa4c-11ea-91f5-da7a1125afbe.png">
</p>

```js
    DevExpress.excelExporter.exportPivotGrid({
        ...
        customizeCell: function({excelCell, pivotCell}) {
            if(pivotCell.area === 'column') {
                excelCell.font = { color: { argb: "0000cc"}, bold: true };
                excelCell.fill = { type: 'pattern', pattern:'solid', fgColor: { argb:'FFFF5E'} }
                excelCell.alignment = { vertical: 'middle', horizontal: 'center' };                      
            }
        }
    }
```

### Add custom headers and footers
ExcelJS library allows you to customize worksheets outside of the exported cell area. So, you can add your own [text](https://github.com/exceljs/exceljs#rich-text-value), [image](https://github.com/exceljs/exceljs#images) in any cell:

<p align="center">
  <img src="https://user-images.githubusercontent.com/57402891/84130445-f6e9ad80-aa4b-11ea-9980-6314db42439a.png">
</p>

```js
    DevExpress.excelExporter.exportPivotGrid({
        ...
    }).then(function(cellsRange) {
        //  add custom header
        var headerRow = worksheet.getRow(1),
            headerCell = headerRow.getCell(4);

        worksheet.mergeCells('D1:H1');            
        headerRow.height = 70; 
        headerCell.value = 'Average Sales \n Amount by Region';
        headerCell.font = { name: 'Segoe UI Light', size: 22, bold: true };
        headerCell.alignment = { horizontal: 'center',  wrapText: true };

        // add custom footer
        var footerRowIndex = cellsRange.to.row + 2;
        var footerRow = worksheet.getRow(footerRowIndex),
            footerCell = footerRow.getCell(1);

        worksheet.mergeCells(footerRowIndex, 1, footerRowIndex, 8);
        footerCell.value = 'www.wikipedia.org';
        footerCell.font = { color: { argb: 'BFBFBF' }, italic: true };
        footerCell.alignment = { horizontal: 'right' };

        return Promise.resolve();
    })
```

### Custom cells format
You can use any format for any cell. You can also specify specific format for particular cells:

<p align="center">
  <img src="https://user-images.githubusercontent.com/57402891/84131224-f00f6a80-aa4c-11ea-99f5-da75d00f88d0.png">
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

### Export progress indicator
You can also customize the Load Panel to show the export progress:

<p align="center">
  <img src="https://user-images.githubusercontent.com/57402891/84234821-8733fb00-aafd-11ea-9574-7f03f4344f40.png">
</p>

```js
    DevExpress.excelExporter.exportPivotGrid({
        component: e.component,
        worksheet: worksheet,
        loadPanel: {
            enabled: true,
            text: 'Export large data...'
        }
    })
```



## Implementation Details

### ExcelJS library

ExcelJS is a library for reading, manipulating, and writing spreadsheet data and styles to Excel and JSON. See [ExcelJS](https://github.com/exceljs/exceljs) for more information.

## Try It

### Live Sandboxes

1. [Column sizing](https://codepen.io/EugeniyKiyashko/pen/LYGYzwQ)
1. [Customize cells appearence](https://codepen.io/SNovikov/pen/BajBgrj)
1. [Customize texts](https://codepen.io/EugeniyKiyashko/pen/mdVdqBY)
1. [Custom headers and footers](https://codepen.io/SNovikov/pen/BajBgrj)
1. [Export Fields panel](https://codepen.io/SNovikov/pen/zYrxmMr)
1. [Custom cell format](https://codepen.io/SNovikov/pen/pogvVmZ)
1. [Export chart](https://codepen.io/SNovikov/pen/XWXmXVZ)
1. [Hide and show certain fields](https://codepen.io/EugeniyKiyashko/pen/vYLEEdL)
1. [Export borders according to PivotGrid border settings](https://codepen.io/EugeniyKiyashko/pen/pogJEqa)
1. [Export progress indicator](https://codepen.io/EugeniyKiyashko/pen/yLeNVNx)
1. [Export using CSV format](https://codepen.io/EugeniyKiyashko/pen/xxZGREK)
1. [Export without rows merging](https://codepen.io/EugeniyKiyashko/pen/dyGogby)
1. [Export without columns merging](https://codepen.io/EugeniyKiyashko/pen/OJMyMYX)

## We Need Your Feedback

### Take a Quick Poll
Wee need your feedback! [Do you need these capabilities when exporting PivotGrid in your projects?](https://docs.google.com/forms/d/17nP7HiGe5ILj1mK7Tjn6vojNJMIGUDdufdeDh6K547g/viewform?usp=sf_link)

### Get Notified of Updates

Subscribe to this thread or to our [Facebook](https://www.facebook.com/DevExpress.DevExtreme/) and [Twitter](https://twitter.com/devextreme) accounts for updates on this topic.
