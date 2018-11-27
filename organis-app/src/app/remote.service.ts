/**
 * Created by jpc on 6/1/17.
 */
import {Injectable} from "@angular/core";
import {Domain, Person, Product, Role, Territory} from "./domain";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


export interface RoleViewModel {
    territories: Territory[];
    role: Role;
}

export interface TerritoryViewModel {
    roles: Role[];
    territory: Territory;
}

@Injectable()
export class RemoteService {
    base: string;

    constructor(private http: HttpClient) {
        let w: Window = <Window> window;
        let cs: string[] = (parseInt(w.location.port) < 8080 ? ['http://', w.location.hostname, ':8080'] : []);
        this.base = cs.concat(['/api']).join('');
        console.info('base:', this.base);
    }

    getPersons(): Observable<Person[]> {
        return this.http.get<Person[]>(this.base + '/persons');
    }

    getDomains(): Observable<Domain[]> {
        return this.http.get<Domain[]>(this.base + '/domains');
    }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.base + '/products');
    }

    getRoles(): Observable<Role[]> {
        return this.http.get<Role[]>(this.base + '/roles');
    }

    getTerritories(): Observable<Territory[]> {
        return this.http.get<Territory[]>(this.base + '/territories');
    }

    getRoleViewModel(id: string): Observable<RoleViewModel> {
        return this.http.get<RoleViewModel>(this.base + '/roles/' + id);
    }

    getTerritoryViewModel(id: string): Observable<TerritoryViewModel> {
        return this.http.get<TerritoryViewModel>(this.base + '/territories/' + id);
    }
}
