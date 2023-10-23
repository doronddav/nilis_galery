import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailJs from '@emailjs/browser';
import { EmailJSResponseStatus } from 'emailjs-com';
import { config } from 'dotenv';
config();
@Component({
  selector: 'buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.scss'],
})
export class BuyProductComponent {
  form: FormGroup = this.fb.group({
    from_name: '',
    from_email: '',
    subject: '',
    message: '',
  });

  @Input() selectedProduct: any;
  @Input() productSelected!: boolean; // Use the non-null assertion operator

  @Output() selectedProductChange = new EventEmitter<any>();
  @Output() productSelectedChange = new EventEmitter<boolean>();
  constructor(private fb: FormBuilder) {
    const SERVICE_ID = process.env['SERVICE_ID'];
    const TEMPLATE_ID = process.env['TEMPLATE_ID'];
    const PUBLIC_KEY = process.env['PUBLIC_KEY'];
  }
  closePopUp() {
    this.productSelected = false;
    console.log(this.productSelected);

    this.productSelectedChange.emit(this.productSelected);
  }

  //Send Email

  public sendEmail(e: Event) {
    e.preventDefault();
    const templateParams = {
      from_name: this.form.value.from_name,
      from_email: this.form.value.from_email,
      phone: this.form.value.phone,
      message: this.form.value.message,
      paintingName: this.selectedProduct.name,
    };

    emailJs
      .sendForm(
        'SERVICE_ID',
        'TEMPLATE_ID',
        e.target as HTMLFormElement,
        'PUBLIC_KEY'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(HTMLFormElement);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
}
// async send() {
//   let res = await emailJs.send('service_m7ce97e', 'template_49rdnn4', {
//     from_name: this.form.value.from_name,
//     from_email: this.form.value.from_email,
//     phone: this.form.value.phone,
//     message: this.form.value.message,
//   });
//   this.form.reset();
// }
