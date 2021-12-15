import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-package-tracking-list',
  templateUrl: './package-tracking-list.page.html',
  styleUrls: ['./package-tracking-list.page.scss'],
})
export class PackageTrackingListPage implements OnInit {

  constructor(
    public toastController: ToastController
  ) { 
  }

  // Variables start
  statusChange = true;
  isListLoading = false;
  skeleton = [
    {},{},{},{},{},{},{},{},{},{},
  ]
  gaugeType = "arch";
  gaugeValue = 50;
  gaugeLabel = "Questions";
  gaugeAppendText = "%";
  gaugethick = 10;
  gaugeanimate = true;
  gaugeduration = 1000;
  gaugeforegroundColor = "#f83245";
  // Variables end

  ngOnInit() {
  }

  async presentToast(_msg, _type) {
    const toast = await this.toastController.create({
      message: _msg,
      duration: 2000,
      cssClass:"my-tost-custom-class" +_type,
    });
    toast.present();
  }

  clickActionBtn(_value, _identifier) {
    let status;
    let type;
    this.isListLoading = true;
    if(_identifier == 'status') {
      
      if(_value == true) {
        this.statusChange = false;
        status = 'Your status is disable';
        type = 'info'
      }else {
        this.statusChange = true;
        status = 'Your status is enable';
        type = 'success'
      }

      console.log('statusChange', this.statusChange);
      this.presentToast(status, type);
    }else if(_identifier == 'delete') {
      status = 'Deleted successfully';
      type = 'success'
      this.presentToast(status, type);
    }else if(_identifier == 'edit') {
      status = 'Your data is editable';
      type = 'success'
      this.presentToast(status, type);
    }else if(_identifier == 'pdf') {
      status = 'Downloading PDF file';
      type = 'success'
      this.presentToast(status, type);
    }else if(_identifier == 'excel') {
      status = 'Downloading Excel file';
      type = 'success'
      this.presentToast(status, type);
    }else if(_identifier == 'refresh') {
      status = 'Data refreshing...';
      type = 'success'
      this.presentToast(status, type);
    }
    this.isListLoading = false;
  }

}
