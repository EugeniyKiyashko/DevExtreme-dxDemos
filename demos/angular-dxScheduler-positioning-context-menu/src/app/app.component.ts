import {
    NgModule,
    Component,
    enableProdMode,
    ViewChild,
    ViewChildren,
    QueryList
  } from "@angular/core";
  import { BrowserModule } from "@angular/platform-browser";
  import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
  
  import {
    Appointment,
    Resource,
    ResourceMenuItem,
    Service
  } from "./app.service";
  import {
    DxContextMenuModule,
    DxContextMenuComponent
  } from "devextreme-angular";
  import { DxSchedulerModule, DxSchedulerComponent } from "devextreme-angular";
  
  @Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    providers: [Service]
  })
  export class AppComponent {
    @ViewChild(DxSchedulerComponent, { static: false })
    scheduler: DxSchedulerComponent;
    @ViewChild("appointmentMenu", { static: false })
    appointmentMenu: DxContextMenuComponent;
    @ViewChild("cellMenu", { static: false }) cellMenu: DxContextMenuComponent;
  
    appointmentsData: Appointment[];
    currentDate: Date = new Date(2017, 4, 25);
    resourcesData: Resource[];
    resourcesMenuItems: ResourceMenuItem[];
    groups: any;
    crossScrollingEnabled: boolean = false;
  
    contextMenuCellData: any;
    contextMenuAppointmentData: any;
    contextMenuTargetedAppointmentData: any;
  
    appointmentContextMenuItems: any;
    cellContextMenuItems: any;
  
    constructor(service: Service) {
      let that = this;
      this.appointmentsData = service.getAppointments();
      this.resourcesData = service.getResources();
      this.resourcesMenuItems = [];
      this.cellContextMenuItems = [
        { text: "New Appointment", onItemClick: () => this.createAppointment() },
        {
          text: "New Recurring Appointment",
          onItemClick: () => this.createRecurringAppointment()
        },
        {
          text: "Group by Room/Ungroup",
          beginGroup: true,
          onItemClick: () => this.groupCell()
        },
        { text: "Go to Today", onItemClick: () => this.showCurrentDate() }
      ];
  
      this.resourcesData.forEach(function(item) {
        let menuItem: ResourceMenuItem = {
          text: item.text,
          id: item.id,
          color: item.color,
          onItemClick: that.setResource.bind(that)
        };
  
        that.resourcesMenuItems.push(menuItem);
      });
  
      this.appointmentContextMenuItems = [
        { text: "Open", onItemClick: () => this.showAppointment() },
        { text: "Delete", onItemClick: () => this.deleteAppointment() },
        {
          text: "Repeat Weekly",
          beginGroup: true,
          onItemClick: () => this.repeatAppointmentWeekly()
        },
        { text: "Set Room", beginGroup: true, disabled: true }
      ];
      this.appointmentContextMenuItems = [
        ...this.appointmentContextMenuItems,
        ...this.resourcesMenuItems
      ];
    }
  
    setResource(itemData) {
      let data = Object.assign({}, this.contextMenuAppointmentData, {
        roomId: [itemData.id]
      });
  
      this.scheduler.instance.updateAppointment(
        this.contextMenuAppointmentData,
        data
      );
    }
  
    createAppointment() {
      this.scheduler.instance.showAppointmentPopup(
        {
          startDate: this.contextMenuCellData.startDate
        },
        true
      );
    }
  
    createRecurringAppointment() {
      this.scheduler.instance.showAppointmentPopup(
        {
          startDate: this.contextMenuCellData.startDate,
          recurrenceRule: "FREQ=DAILY"
        },
        true
      );
    }
  
    groupCell() {
      if (this.groups && this.groups.length) {
        this.crossScrollingEnabled = false;
        this.groups = [];
      } else {
        this.groups = ["roomId"];
        this.crossScrollingEnabled = true;
      }
    }
  
    showCurrentDate() {
      this.currentDate = new Date();
    }
  
    showAppointment() {
      this.scheduler.instance.showAppointmentPopup(
        this.contextMenuAppointmentData
      );
    }
  
    deleteAppointment() {
      this.scheduler.instance.deleteAppointment(this.contextMenuAppointmentData);
    }
  
    repeatAppointmentWeekly() {
      let updatedData = Object.assign({}, this.contextMenuAppointmentData, {
        startDate: this.contextMenuTargetedAppointmentData.startDate,
        recurrenceRule: "FREQ=WEEKLY"
      });
  
      this.scheduler.instance.updateAppointment(
        this.contextMenuAppointmentData,
        updatedData
      );
    }
  
    onContextMenuItemClick(e) {
      e.itemData.onItemClick(e.itemData);
    }
  
    onAppointmentContextMenu(e) {
      this.contextMenuAppointmentData = e.appointmentData;
      this.contextMenuTargetedAppointmentData = e.targetedAppointmentData;
  
      // Only line added to demo
      this.appointmentContextMenuItems.push({
        text: "test",
        onItemClick: () => {}
      });
    }
  
    onAppointmentContextMenuShowing(e) {}
  
    onCellContextMenu(e) {
      this.contextMenuCellData = e.cellData;
    }
  }
  
  @NgModule({
    imports: [BrowserModule, DxSchedulerModule, DxContextMenuModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
  })
  export class AppModule {}
  
  platformBrowserDynamic().bootstrapModule(AppModule);
  