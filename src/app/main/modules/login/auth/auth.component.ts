import { Component, ViewEncapsulation } from "@angular/core";
import { MatDialog } from "@angular/material";
import { VerifySelfieComponent } from "src/app/core/components/verify-selfie/verify-selfie.component";
import { LoginService } from "../login.service";
import { Constant } from "src/app/core/services/constant";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AuthComponent {

    constructor(
        private readonly matDialog: MatDialog,
        private rest: LoginService,
        private constant: Constant,
    ) {
    }

    public dialog(): void {
        const dialogRef = this.matDialog.open(VerifySelfieComponent, {
            data: {
                service: this.rest
            }
        });

        dialogRef.afterClosed().subscribe((response) => {
            console.log(response);
        });
    }
    
}