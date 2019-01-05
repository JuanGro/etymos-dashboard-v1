import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ToasterService {

  constructor(private toastr: ToastrService) {}

  public showSuccess(title: string, message: string) {
    this.toastr.success(message, title);
  }

  public showError(title: string, message: string) {
    this.toastr.error(message, title);
  }

  public showInfo(title: string, message: string) {
    this.toastr.info(message, title);
  }

  public showWarning(title: string, message: string) {
    this.toastr.warning(message, title);
  }
}
