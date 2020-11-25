import { TypeSnackMessage } from '../service/alert.service';

export class UtilError {

    static extrairMessageError(err): string {
        return err.error?.mensagemUser;
    }

    static dispatchMessageError(err: any, snackbarMessageService, loadingService = null): void {
        if (loadingService) {
            loadingService.removerLoading();
        }
        snackbarMessageService.showSnackBarMessage({
            message: UtilError.extrairMessageError(err),
            type: TypeSnackMessage.DANGER
        });

    }

    static dispatchMessageErrorBlob(error, snackBarService, loadingService = null): void {
        const b = new Blob([error.error], { type: 'application/json' });
        const fr = new FileReader();
        fr.onload = (evt) => {
            const enc = new TextDecoder('utf-8');
            const result: any = evt.target.result;
            const erro = JSON.parse(enc.decode(result));
            this.dispatchMessageError({ error: erro }, snackBarService, loadingService);
        };
        fr.readAsArrayBuffer(b);
    }

}
