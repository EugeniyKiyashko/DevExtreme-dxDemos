<details><summary>JQuery</summary>
    <details><summary>Option</summary>
    
    ```js
      { 
          locateInMenu: 'auto', 
          widget: 'dxDropDownButton', 
          options: { 
                    text: 'Download Trial', 
                    icon: 'save', 
                    items: ['Download Trial For Visual Studio', 'Download Trial For All Platforms', 'Package Managers'], 
                } 
       }, 
    ```
    
    
#### inToolbar

<strong>Current</strong>
```
<div class="dx-item dx-toolbar-item dx-toolbar-button dx-toolbar-item-auto-hide">
    <div class="dx-item-content dx-toolbar-item-content"> 
        <div class="dx-widget dx-dropdownbutton dx-dropdownbutton-has-arrow" aria-expanded="false"> 
            <div role="group" class="dx-buttongroup dx-widget" tabindex="0" style="width: 100%; height: 100%;" aria-activedescendant="dx-0e890f1e-d136-561a-cb5a-626a9a4ecdc8"><div class="dx-buttongroup-wrapper dx-widget dx-collection"> 

```

<strong>After Fix</strong>
```
<div class="dx-item dx-toolbar-item dx-toolbar-button dx-toolbar-item-auto-hide">
    <div class="dx-item-content dx-toolbar-item-content">
        <div class="dx-widget dx-dropdownbutton dx-dropdownbutton-has-arrow" aria-expanded="false">
            <div role="group" class="dx-buttongroup dx-widget" tabindex="0" style="width: 100%; height: 100%;" aria-activedescendant="dx-c81d322e-7d9f-e416-8e7b-c199b4a29cf9">
                
```
 
#### inMenu
     
<strong>Current</strong>
```
<div class="dx-item dx-list-item dx-toolbar-menu-custom dx-toolbar-menu-action" role="menuitem">
    <div class="dx-item-content dx-list-item-content"> 
        <div class="dx-toolbar-item-auto-hide"> 
            <div class="dx-widget dx-dropdownbutton dx-dropdownbutton-has-arrow" aria-expanded="false"> 
```
            
<strong>After Fix</strong>
```
<div class="dx-item dx-list-item dx-toolbar-menu-custom dx-toolbar-menu-action" role="menuitem">
    <div class="dx-item-content dx-list-item-content">
        <div class="dx-toolbar-item-auto-hide">
            <div class="dx-item-content dx-toolbar-item-content">
                <div class="dx-widget dx-dropdownbutton dx-dropdownbutton-has-arrow" aria-expanded="false">
```
</details>
    <details><summary>Template</summary>
    
    ```js
    
       { 
          locateInMenu: 'auto', 
            template: (itemData, itemIndex, container) => { 
                const ddbutton = $("<div>").addClass('dx-template-wrwapper').dxDropDownButton({ 
                    text: 'Download Trial', 
                    icon: 'save', 
                    items: ['Download Trial For Visual Studio', 'Download Trial For All Platforms', 'Package Managers'], 
                }); 
                ddbutton.appendTo(container) 
            } 
        } 
    ```
    
    
#### inToolbar

<strong>Current</strong>
```
<div class="dx-item dx-toolbar-item dx-toolbar-button dx-toolbar-item-auto-hide"> 
    <div class="dx-item-content dx-toolbar-item-content"> 
        <div class="dx-widget dx-dropdownbutton dx-dropdownbutton-has-arrow" aria-expanded="false"> 
            <div role="group" class="dx-buttongroup dx-widget" tabindex="0" style="width: 100%; height: 100%;" aria-activedescendant="dx-3b23a4f3-e3b2-522d-fb54-29318bc55db6">

```

<strong>After Fix</strong>
```
<div class="dx-item dx-toolbar-item dx-toolbar-button dx-toolbar-item-auto-hide">
    <div class="dx-item-content dx-toolbar-item-content">
        <div class="dx-widget dx-dropdownbutton dx-dropdownbutton-has-arrow" aria-expanded="false">
            <div role="group" class="dx-buttongroup dx-widget" tabindex="0" style="width: 100%; height: 100%;" aria-activedescendant="dx-8eee6b6d-0eac-8be8-ac89-1b826b3bdbeb">
                
```
 
#### inMenu
     
<strong>Current</strong>
```
<div class="dx-item dx-list-item dx-toolbar-menu-custom dx-toolbar-menu-action" role="menuitem">
    <div class="dx-item-content dx-list-item-content"> 
        <div class="dx-toolbar-item-auto-hide"> 
            <div class="dx-widget dx-dropdownbutton dx-dropdownbutton-has-arrow" aria-expanded="false"> 
```
            
<strong>After Fix</strong>
```
<div class="dx-item dx-list-item dx-toolbar-menu-custom dx-toolbar-menu-action" role="menuitem">
    <div class="dx-item-content dx-list-item-content">
        <div class="dx-toolbar-item-auto-hide"><div class="dx-item-content dx-toolbar-item-content">
            <div class="dx-widget dx-dropdownbutton dx-dropdownbutton-has-arrow" aria-expanded="false">
```
</details>
</details>

<details><summary>Vue</summary>
    <details><summary>Nested</summary>
    
    ```js
      <DxItem locate-in-menu="auto" location="after"> 
        <DxDropDownButton 
          width="auto" 
          selected-item-key="1" 
          :use-select-mode="true" 
          display-expr="text" 
          key-expr="id" 
        > 
          <DxDropDownButtonItem 
            id="1" 
            icon="like" 
            text="I like" 
          ></DxDropDownButtonItem> 
          <DxDropDownButtonItem id="2" icon="runner" text="running"> 
          </DxDropDownButtonItem> 
          <DxDropDownButtonItem 
            id="3" 
            icon="coffee" 
            text="and coffee" 
          ></DxDropDownButtonItem> 
        </DxDropDownButton> 
      </DxItem> 
    ```
    
    
#### inToolbar

<strong>Current</strong>
```
<div class="dx-item dx-toolbar-item dx-toolbar-button dx-toolbar-item-auto-hide"> 
    <div class="dx-template-wrapper dx-item-content dx-toolbar-item-content dx-widget dx-dropdownbutton dx-dropdownbutton-has-arrow" aria-expanded="false" style="width: auto;">  
```

<strong>After Fix</strong>
```
<div class="dx-item dx-toolbar-item dx-toolbar-button dx-toolbar-item-auto-hide">
    <div class="dx-template-wrapper dx-item-content dx-toolbar-item-content dx-widget dx-dropdownbutton dx-dropdownbutton-has-arrow" aria-expanded="false" style="width: auto;">
                
```
 
#### inMenu
     
<strong>Current</strong>
```
<div class="dx-item dx-list-item dx-toolbar-menu-custom" role="menuitem">
    <div class="dx-item-content dx-list-item-content">
        <div class="dx-toolbar-item-auto-hide">
            <div role="group" class="dx-buttongroup dx-widget" tabindex="0" style="width: 100%; height: 100%;" aria-activedescendant="dx-639f487c-ed2b-61c6-66cc-bdd80afe8e23">
```
            
<strong>After Fix</strong>
```
<div class="dx-item dx-list-item dx-toolbar-menu-custom" role="menuitem">
    <div class="dx-item-content dx-list-item-content">
        <div class="dx-toolbar-item-auto-hide">
            <div class="dx-template-wrapper dx-item-content dx-toolbar-item-content dx-widget dx-dropdownbutton dx-dropdownbutton-has-arrow" aria-expanded="true" style="width: auto;" aria-owns="dx-89a2beb2-5d11-cf42-826f-576edcfab6f9">
                <div role="group" class="dx-buttongroup dx-widget" style="width: 100%; height: 100%;" aria-activedescendant="dx-54a95c72-22f7-1d1e-a3fd-c5bd265263af" tabindex="0">
```
</details>
    <details><summary>template #default</summary>
    
    ```js
       <DxItem locate-in-menu="auto" location="after"> 
          <template #default> 
            <DxDropDownButton 
              width="auto" 
              selected-item-key="1" 
              :use-select-mode="true" 
              display-expr="text" 
              key-expr="id" 
            > 
              <DxDropDownButtonItem 
                id="1" 
                icon="like" 
                text="I like" 
              ></DxDropDownButtonItem> 
              <DxDropDownButtonItem id="2" icon="runner" text="running"> 
              </DxDropDownButtonItem> 
              <DxDropDownButtonItem 
                id="3" 
                icon="coffee" 
                text="and coffee" 
              ></DxDropDownButtonItem> 
            </DxDropDownButton> 
            </template> 
          </DxItem> 
    ```
    
    
#### inToolbar

<strong>Current</strong>
```
<div class="dx-item dx-toolbar-item dx-toolbar-button dx-toolbar-item-auto-hide"> 
	<div class="dx-template-wrapper dx-item-content dx-toolbar-item-content dx-widget dx-dropdownbutton dx-dropdownbutton-has-arrow" aria-expanded="false" style="width: auto;"> 

```

<strong>After Fix</strong>
```
<div class="dx-item dx-toolbar-item dx-toolbar-button dx-toolbar-item-auto-hide">
    <div class="dx-template-wrapper dx-item-content dx-toolbar-item-content dx-widget dx-dropdownbutton dx-dropdownbutton-has-arrow" aria-expanded="false" style="width: auto;">          
```
 
#### inMenu
     
<strong>Current</strong>
```
<div class="dx-item dx-list-item dx-toolbar-menu-custom" role="menuitem">
	<div class="dx-item-content dx-list-item-content">
		<div class="dx-toolbar-item-auto-hide">
			<div role="group" class="dx-buttongroup dx-widget" tabindex="0" style="width: 100%; height: 100%;" aria-activedescendant="dx-8adf8215-2adb-e79d-496f-62c86da45215">
			    <div class="dx-buttongroup-wrapper dx-widget dx-collection">
```
            
<strong>After Fix</strong>
```
<div class="dx-item dx-list-item dx-toolbar-menu-custom" role="menuitem">
    <div class="dx-item-content dx-list-item-content">
        <div class="dx-toolbar-item-auto-hide">
            <div class="dx-template-wrapper dx-item-content dx-toolbar-item-content dx-widget dx-dropdownbutton dx-dropdownbutton-has-arrow" aria-expanded="false" style="width: auto;">

```
</details>

<details><summary>Option</summary>
    
    ```js
       <DxItem locate-in-menu="auto" location="after" widget="dxDropDownButton" :options={ddButtonOptions}></DxItem> 
    ```
    
    
#### inToolbar

<strong>Current</strong>
```
<div class="dx-item dx-toolbar-item dx-toolbar-button dx-toolbar-item-auto-hide"> 
    <div class="dx-item-content dx-toolbar-item-content"> 
        <div class="dx-widget dx-dropdownbutton dx-dropdownbutton-has-arrow" aria-expanded="false"> 
            <div role="group" class="dx-buttongroup dx-widget" tabindex="0" style="width: 100%; height: 100%;" aria-activedescendant="dx-32248646-eb15-a22c-ccae-a70e0c84abd9"> 

```

<strong>After Fix</strong>
```
<div class="dx-item dx-toolbar-item dx-toolbar-button dx-toolbar-item-auto-hide">
    <div class="dx-item-content dx-toolbar-item-content">
        <div class="dx-widget dx-dropdownbutton dx-dropdownbutton-has-arrow" aria-expanded="false">
            <div role="group" class="dx-buttongroup dx-widget" tabindex="0" style="width: 100%; height: 100%;" aria-activedescendant="dx-33b31a6d-0748-a344-35fe-725814b61907">         
```
 
#### inMenu
     
<strong>Current</strong>
```
<div class="dx-item dx-list-item dx-toolbar-menu-custom" role="menuitem">
	<div class="dx-item-content dx-list-item-content">
		<div class="dx-toolbar-item-auto-hide">
			<div class="dx-widget dx-dropdownbutton dx-dropdownbutton-has-arrow" aria-expanded="true" aria-owns="dx-2e96e867-89fc-6c15-48da-32676d196ed7"><div role="group" class="dx-buttongroup dx-widget" tabindex="0" style="width: 100%; height: 100%;" aria-activedescendant="dx-87366ab6-c533-5622-552a-4b8966f5bfb2">
```
            
<strong>After Fix</strong>
```
<div class="dx-item dx-list-item dx-toolbar-menu-custom" role="menuitem">
    <div class="dx-item-content dx-list-item-content"> 
        <div class="dx-toolbar-item-auto-hide">
            <div class="dx-widget dx-dropdownbutton dx-dropdownbutton-has-arrow" aria-expanded="false">
                <div role="group" class="dx-buttongroup dx-widget" tabindex="0" style="width: 100%; height: 100%;" aria-activedescendant="dx-33b31a6d-0748-a344-35fe-725814b61907">

```
</details>
</details>

<details><summary>React</summary>
    <details><summary>Option</summary>
    
    ```js
      <Item locateInMenu="auto" widget="dxDropDownButton" options={settingddbutoon}></Item>
    ```
    
    
#### inToolbar

<strong>Current</strong>
```
<div class="dx-item dx-toolbar-item dx-toolbar-button dx-toolbar-item-auto-hide">
    <div class="dx-item-content dx-toolbar-item-content">
        <div class="dx-widget dx-dropdownbutton dx-dropdownbutton-has-arrow" aria-expanded="false">

```

<strong>After Fix</strong>
```
<div class="dx-item dx-toolbar-item dx-toolbar-button dx-toolbar-item-auto-hide">
    <div class="dx-item-content dx-toolbar-item-content">
        <div class="dx-widget dx-dropdownbutton dx-dropdownbutton-has-arrow" aria-expanded="false">
                
```
 
#### inMenu
     
<strong>Current</strong>
```
<div class="dx-item dx-list-item dx-toolbar-menu-custom dx-toolbar-menu-action" role="menuitem">
    <div class="dx-item-content dx-list-item-content">
        <div class="dx-toolbar-item-auto-hide">
            <div class="dx-widget dx-dropdownbutton dx-dropdownbutton-has-arrow" aria-expanded="false">
                <div role="group" class="dx-buttongroup dx-widget" tabindex="0" style="width: 100%; height: 100%;" aria-activedescendant="dx-81710145-2a6e-5ec0-f65b-926c2e69c535">
```
            
<strong>After Fix</strong>
```
<div class="dx-item dx-list-item dx-toolbar-menu-custom dx-toolbar-menu-action" role="menuitem">
    <div class="dx-item dx-list-item dx-toolbar-menu-custom dx-toolbar-menu-action" role="menuitem">
        <div class="dx-item-content dx-list-item-content">
            <div class="dx-toolbar-item-auto-hide">
                <div class="dx-item-content dx-toolbar-item-content">
                    <div class="dx-widget dx-dropdownbutton dx-dropdownbutton-has-arrow" aria-expanded="false"><div role="group" class="dx-buttongroup dx-widget" tabindex="0" style="width: 100%; height: 100%;" aria-activedescendant="dx-8634523b-9228-39a1-b058-20adb8093b8d">

```
</details>
    <details><summary>Template</summary>
    
    ```js
        <Item locateInMenu="auto">
            <DropDownButton
                width="auto"
                selectedItemKey="1"
                displayExpr="text"
                keyExpr="id"
                useSelectMode="true"
                >
                <DropDownButtonItem
                    id="1"
                    icon="like"
                    text="I like"
                ></DropDownButtonItem>
                <DropDownButtonItem id="2" icon="runner" text="running">
                </DropDownButtonItem>
                <DropDownButtonItem
                    id="3"
                    icon="coffee"
                    text="and coffee"
                ></DropDownButtonItem>
            </DropDownButton>
        </Item>
    ```
    
    
#### inToolbar

<strong>Current</strong>
```
<div class="dx-item dx-toolbar-item dx-toolbar-button dx-toolbar-item-auto-hide">
    <div class="dx-item-content dx-toolbar-item-content">
        <div class="dx-widget dx-dropdownbutton dx-dropdownbutton-has-arrow" aria-expanded="false" style="width: auto;">
```

<strong>After Fix</strong>
```
<div class="dx-item dx-toolbar-item dx-toolbar-button dx-toolbar-item-auto-hide">
    <div class="dx-item-content dx-toolbar-item-content">
        <div class="dx-widget dx-dropdownbutton dx-dropdownbutton-has-arrow" aria-expanded="false" style="width: auto;">              
```
 
#### inMenu
     
<strong>Current</strong>
```
<div class="dx-item dx-toolbar-item dx-toolbar-button dx-toolbar-item-auto-hide">
	<div class="dx-item-content dx-toolbar-item-content">
        <div class="dx-widget dx-dropdownbutton dx-dropdownbutton-has-arrow" aria-expanded="false">
            <div role="group" class="dx-buttongroup dx-widget" tabindex="0" style="width: 100%; height: 100%;" aria-activedescendant="dx-81710145-2a6e-5ec0-f65b-926c2e69c535">
                <div class="dx-buttongroup-wrapper dx-widget dx-collection">
```
            
<strong>After Fix</strong>
```
<div class="dx-item dx-list-item dx-toolbar-menu-custom dx-toolbar-menu-action" role="menuitem">
    <div class="dx-item-content dx-list-item-content">
        <div class="dx-toolbar-item-auto-hide">
            <div class="dx-item-content dx-toolbar-item-content">
                <div class="dx-widget dx-dropdownbutton dx-dropdownbutton-has-arrow" aria-expanded="false" style="width: auto;">
                    <div role="group" class="dx-buttongroup dx-widget" tabindex="0" style="width: 100%; height: 100%;" aria-activedescendant="dx-4c97a7cb-b752-49e3-7aca-8a943a8849ef">
```
</details>
</details>

<details><summary>React</summary>
    <details><summary>Option</summary>
    
    ```js
        <dxi-item
            widget="dxDropDownButton"
            locateInMenu="auto"
            [options]="ddButtonOptions"
        >
  </dxi-item>
    ```
    
    
#### inToolbar

<strong>Current</strong>
```
<div class="dx-item dx-toolbar-item dx-toolbar-button dx-toolbar-item-auto-hide">
    <div class="dx-item-content dx-toolbar-item-content">
        <div class="dx-widget dx-dropdownbutton dx-dropdownbutton-has-arrow" aria-expanded="false">

```

<strong>After Fix</strong>
```
<div class="dx-item dx-toolbar-item dx-toolbar-button dx-toolbar-item-auto-hide">
    <div class="dx-item-content dx-toolbar-item-content">
        <div class="dx-widget dx-dropdownbutton dx-dropdownbutton-has-arrow" aria-expanded="false">                
```
 
#### inMenu
     
<strong>Current</strong>
```
<div class="dx-item dx-list-item dx-toolbar-menu-custom dx-toolbar-menu-action" role="menuitem">
    <div class="dx-item-content dx-list-item-content">
        <div class="dx-toolbar-item-auto-hide">
            <div class="dx-widget dx-dropdownbutton dx-dropdownbutton-has-arrow" aria-expanded="false">
                <div role="group" class="dx-buttongroup dx-widget" tabindex="0" style="width: 100%; height: 100%;" aria-activedescendant="dx-7817667b-3e4d-6391-9834-903a7031e897"><div class="dx-buttongroup-wrapper dx-widget dx-collection">
```
            
<strong>After Fix</strong>
```
<div class="dx-item dx-list-item dx-toolbar-menu-custom dx-toolbar-menu-action" role="menuitem">
    <div class="dx-item-content dx-list-item-content">
        <div class="dx-toolbar-item-auto-hide">
            <div class="dx-item-content dx-toolbar-item-content">
                <div class="dx-widget dx-dropdownbutton dx-dropdownbutton-has-arrow" aria-expanded="false">
                    <div role="group" class="dx-buttongroup dx-widget" tabindex="0" style="width: 100%; height: 100%;" aria-activedescendant="dx-ec698e11-4d46-9257-a4dc-ac23deaa6d8d">

```
</details>
<details><summary>*Template</summary>
    
    ```js
        <dxi-item
            locateInMenu="auto"
        >
        <div *dxTemplate>
            <dx-drop-down-button
                text="Download Trial"
                [dropDownOptions]="{ width: 230 }"
                icon="save"
                [items]="downloads"
            ></dx-drop-down-button>
        </div>
    ```
    
    
#### inToolbar

<strong>Current</strong>
```
<div class="dx-item dx-toolbar-item dx-toolbar-button dx-toolbar-item-auto-hide">
    <div class="dx-template-wrapper dx-item-content dx-toolbar-item-content">
        <dx-drop-down-button text="Download Trial" icon="save" ng-reflect-text="Download Trial" ng-reflect-icon="save" ng-reflect-drop-down-options="[object Object]" ng-reflect-items="Download Trial For Visual Stud" class="dx-widget dx-dropdownbutton dx-dropdownbutton-has-arrow" aria-expanded="false">
```

<strong>After Fix</strong>
```
<div class="dx-item dx-toolbar-item dx-toolbar-button dx-toolbar-item-auto-hide">
    <div class="dx-template-wrapper dx-item-content dx-toolbar-item-content">
    <dx-drop-down-button text="Download Trial" icon="save" ng-reflect-text="Download Trial" ng-reflect-icon="save" ng-reflect-drop-down-options="[object Object]" ng-reflect-items="Download Trial For Visual Stud" class="dx-widget dx-dropdownbutton dx-dropdownbutton-has-arrow" aria-expanded="false"><div role="group" class="dx-buttongroup dx-widget" tabindex="0" style="width: 100%; height: 100%;">              
```
 
#### inMenu
     
<strong>Current</strong>
```
<div class="dx-item dx-list-item dx-toolbar-menu-custom dx-toolbar-menu-action" role="menuitem">
	<div class="dx-item-content dx-list-item-content">
		<div class="dx-toolbar-item-auto-hide”>
			<dx-drop-down-button text="Download Trial" icon="save" ng-reflect-text="Download Trial" ng-reflect-icon="save" ng-reflect-drop-down-options="[object Object]" ng-reflect-items="Download Trial For Visual Stud" class="dx-widget dx-dropdownbutton dx-dropdownbutton-has-arrow" aria-expanded="false">
                <div role="group" class="dx-buttongroup dx-widget" tabindex="0" style="width: 100%; height: 100%;" aria-activedescendant="dx-74341769-482b-c229-4bd0-988ce2eb4083">
```
            
<strong>After Fix</strong>
```
<div class="dx-item dx-list-item dx-toolbar-menu-custom dx-toolbar-menu-action" role="menuitem">
    <div class="dx-item-content dx-list-item-content">
        <div class="dx-toolbar-item-auto-hide">
            <div class="dx-template-wrapper dx-item-content dx-toolbar-item-content">
                <dx-drop-down-button text="Download Trial" icon="save" ng-reflect-text="Download Trial" ng-reflect-icon="save" ng-reflect-drop-down-options="[object Object]" ng-reflect-items="Download Trial For Visual Stud" class="dx-widget dx-dropdownbutton dx-dropdownbutton-has-arrow" aria-expanded="false">
                    <div role="group" class="dx-buttongroup dx-widget" tabindex="0" style="width: 100%; height: 100%;">
```
</details>
    <details><summary>Template</summary>
    
    ```js
        <dxi-item
            locateInMenu="auto"
        >
            <dx-drop-down-button
                text="Download Trial"
                [dropDownOptions]="{ width: 230 }"
                icon="save"
                [items]="downloads"
                ></dx-drop-down-button>
        </dxi-item>
    ```
    
    
#### inToolbar

<strong>Current</strong>
```
<div class="dx-item dx-toolbar-item dx-toolbar-button dx-toolbar-item-auto-hide">
    <dxi-item locateinmenu="auto" _nghost-xoa-c59="" ng-reflect-locate-in-menu="auto" class="dx-template-wrapper dx-item-content dx-toolbar-item-content">
        <dx-drop-down-button text="Download Trial" icon="save" ng-reflect-text="Download Trial" ng-reflect-icon="save" ng-reflect-drop-down-options="[object Object]" ng-reflect-items="Download Trial For Visual Stud" class="dx-widget dx-dropdownbutton dx-dropdownbutton-has-arrow" aria-expanded="false">
```

<strong>After Fix</strong>
```
<div class="dx-item dx-toolbar-item dx-toolbar-button dx-toolbar-item-auto-hide">
    <dxi-item locateinmenu="auto" _nghost-yad-c59="" ng-reflect-locate-in-menu="auto" class="dx-template-wrapper dx-item-content dx-toolbar-item-content">
        <dx-drop-down-button text="Download Trial" icon="save" ng-reflect-text="Download Trial" ng-reflect-icon="save" ng-reflect-drop-down-options="[object Object]" ng-reflect-items="Download Trial For Visual Stud" class="dx-widget dx-dropdownbutton dx-dropdownbutton-has-arrow" aria-expanded="false">
            <div role="group" class="dx-buttongroup dx-widget" tabindex="0" style="width: 100%; height: 100%;">            
```
 
#### inMenu
     
<strong>Current</strong>
```
<div class="dx-item dx-list-item dx-toolbar-menu-custom dx-toolbar-menu-action" role="menuitem">
    <div class="dx-item-content dx-list-item-content">
        <div class="dx-toolbar-item-auto-hide">
            <dx-drop-down-button text="Download Trial" icon="save" ng-reflect-text="Download Trial" ng-reflect-icon="save" ng-reflect-drop-down-options="[object Object]" ng-reflect-items="Download Trial For Visual Stud" class="dx-widget dx-dropdownbutton dx-dropdownbutton-has-arrow" aria-expanded="false">
```
            
<strong>After Fix</strong>
```
<div class="dx-item dx-list-item dx-toolbar-menu-custom dx-toolbar-menu-action" role="menuitem">
    <div class="dx-item-content dx-list-item-content">
        <div class="dx-toolbar-item-auto-hide">
            <dxi-item locateinmenu="auto" _nghost-yad-c59="" ng-reflect-locate-in-menu="auto" class="dx-template-wrapper dx-item-content dx-toolbar-item-content">
                <dx-drop-down-button text="Download Trial" icon="save" ng-reflect-text="Download Trial" ng-reflect-icon="save" ng-reflect-drop-down-options="[object Object]" ng-reflect-items="Download Trial For Visual Stud" class="dx-widget dx-dropdownbutton dx-dropdownbutton-has-arrow" aria-expanded="false">
                    <div role="group" class="dx-buttongroup dx-widget" tabindex="0" style="width: 100%; height: 100%;">
```
</details>
</details>