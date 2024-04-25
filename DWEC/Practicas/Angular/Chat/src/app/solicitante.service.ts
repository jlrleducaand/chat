import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

const SOLICITANTESURL = "http://localhost:3000/solicitantes";

@Injectable({
    providedIn: 'root'
})


export class SolicitanteService {

    constructor(private http: HttpClient) {
    }

    getSolicitantes() {
        let url = "http://localhost:3000/solicitantes";
        return this.http.get(url);
    }

}
