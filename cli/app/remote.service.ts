/**
 * Created by jpc on 6/1/17.
 */
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

export interface Person {
    id: number;
    name: string;
}

export interface Domain {
    id: number;
    name: string;
}

export interface Product {
    id: number;
    name: string;
}

export interface Role {
    id: string;
    name: string;
    splitDomain: string;
}

export interface Territory {
    id: string;
    name: string;
}

@Injectable()
export class RemoteService {
    base: string;

    constructor(private http: Http) {
        let w: Window = <Window> window;
        let cs: string[] = (parseInt(w.location.port) >= 63342 ? ['http://', w.location.hostname, ':8080'] : [w.location.protocol, '://', w.location.host]);
        this.base = cs.concat(['/api']).join('');
        console.info('base:', this.base);
    }

    getPersons(): Observable<Person[]> {
        return this.http.get(this.base + "/persons").map(r => <Person[]> r.json());
    }

    getDomains(): Observable<Domain[]> {
        return this.http.get(this.base + "/domains").map(r => <Domain[]> r.json());
    }

    getProducts(): Observable<Product[]> {
        return this.http.get(this.base + "/products").map(r => <Product[]> r.json());
    }

    getRoles(): Observable<Role[]> {
        return this.http.get(this.base + "/roles").map(r => <Role[]> r.json());
    }

    getTerritories(): Observable<Territory[]> {
        return this.http.get(this.base + "/territories").map(t => <Territory[]> t.json());
    }
}