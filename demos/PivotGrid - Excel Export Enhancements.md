Excel Export Enhancements

# The Problem

The [current PivotGrid export implementation](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/export/) is very limited and does not allow you to customize Excel files in the following ways:

- customize cell appearence
- add a header and footer 
- use custom format
- add new worksheets
- customize the workbook or worksheet
- export several widgets into one file

# The Proposed Solution

After some research, we plan to use the third-party [ExcelJS](https://github.com/exceljs/exceljs) library in the way, similar to our DataGrid [export](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/ExcelJSOverview/React/Light/) implementation. We got very good export feedback with it.

**Note**: At the moment, we are testing the proposed solution and want to collect feedback and find out whether this solution covers most scenarios. 

# Scenarios

## Customize cell appearence

```js
hello world
```

![two_grids_one_sheet_excel_screen](https://user-images.githubusercontent.com/2094015/54295634-7d52dd80-45c4-11e9-841e-17ad139a76df.png)


## Implementation Details

### ExcelJS library

ExcelJS is a library for reading, manipulating, and writing spreadsheet data and styles to Excel and JSON. See [ExcelJS: Browser](https://github.com/exceljs/exceljs#browser) for more information.

# Try It

## Live Sandboxes

1. [Sample 1](https://codepen.io/DanIgnatov/pen/zbELOv)
1. [Sample 2](https://codepen.io/DanIgnatov/pen/RdjbRa)
1. [Sample 3](https://codepen.io/DanIgnatov/pen/JzOdpj)

## Installation

Link [exportDxDataGrid](https://combinatronics.com/IgnatovDan/DevExtreme_DataGridToExcel/8c823335814c26e39f62b4a31669908fc2d54250/exportDxDataGrid.js), [ExcelJS](https://github.com/exceljs/exceljs), and [FileSaver](https://github.com/eligrey/FileSaver.js/) libraries.  

# We Need Your Feedback

## Take a Quick Poll

[Do you need these capabilities when exporting PivotGrid in your projects?](https://docs.google.com/forms/d/e/1FAIpQLScMByKhqvP0IT5gBCMOG04Cx7viK0Jz5M1cN1X_tVbS5SUHWQ/viewform?usp=sf_link)

# Get Notified of Updates

Subscribe to this thread or to our [Facebook](https://www.facebook.com/DevExpress.DevExtreme/) and [Twitter](https://twitter.com/devextreme) accounts for updates on this topic.
