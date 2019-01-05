import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ToasterService {

  constructor(private toastr: ToastrService) {}

  public showSuccess(title: string, message: string) {
    this.toastr.success(title, message);
  }

  public showError(title: string, message: string) {
    this.toastr.error(title, message);
  }

  public showInfo(title: string, message: string) {
    this.toastr.info(title, message);
  }

  public showWarning(title: string, message: string) {
    this.toastr.warning(title, message);
  }
}
